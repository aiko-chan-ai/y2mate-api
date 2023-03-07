import constants from "./constants.js";
import fetch from "node-fetch";
import {
  Y2MateVideoDetail,
  Y2MateSearchResult,
  Y2MateDownload,
  Y2MateVideoDetailRaw,
  Y2MateVideoSearchResultRaw,
  Y2MateVideoDownloadRaw,
  Y2MatePlaylist,
  Y2MatePlaylistRaw,
} from "./struct.js";

class Y2MateClient {
  private userAgent: string;
  public constructor(userAgent: any = constants.userAgent) {
    /**
     * User agent
     * @type {string}
     */
    this.userAgent = typeof userAgent === "string" ? userAgent : constants.userAgent;
  }
  getFromURL(url: string, languageCode: string = "en"): Promise<Y2MateVideoDetail|Y2MatePlaylist> {
    if (typeof url !== "string") throw new Error("URL is required");
    if (!constants.regex.test(url)) throw new Error("Invalid URL " + url);
    return this._info(url, languageCode);
  }
  searchVideo(keyword: string, languageCode: string = "en"): Promise<Y2MateSearchResult> {
    if (typeof keyword !== "string") throw new Error("Keyword is required");
    if (constants.regex.test(keyword)) throw new Error("Invalid keyword (URL is not allowed)");
    return this._info(keyword, languageCode);
  }
  /**
   * Fetch information of a video
   * @param {string} keyword
   * @param {string} languageCode
   * @returns {Promise<Y2MateSearchResult|Y2MateVideoDetail|Y2MatePlaylist>}
   */
  private _info(keyword: string, languageCode: string = "en"): Promise<any> {
    if (typeof keyword !== "string") throw new Error("Keyword is required");
    if (typeof languageCode !== "string") throw new Error("Language code is required");
    if (!constants.languageCode[languageCode as keyof typeof constants.languageCode])
      throw new Error(
        `Language code ${languageCode} is not supported. Please use one of these: ${Object.keys(
          constants.languageCode,
        ).join(", ")}`,
      );
    return new Promise((resolve, reject) => {
      fetch("https://www.y2mate.com/mates/analyzeV2/ajax", {
        method: "POST",
        headers: {
          "User-Agent": this.userAgent,
          "x-requested-with": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
          k_query: keyword,
          k_page: "home",
          hl: languageCode,
          q_auto: "1",
        }),
      })
        .then((res) => {
          if (!res.ok) return reject(new Error(`HTTP Error ${res.status}`));
          return res.json();
        })
        .then((d) => {
          const data = d as Y2MateVideoDetailRaw | Y2MateVideoSearchResultRaw | Y2MatePlaylistRaw;
          if (data.status !== "ok") return reject(new Error(`${JSON.stringify(data, null, 2)}`));
          switch (data.page) {
            case "detail": {
              return resolve(new Y2MateVideoDetail(this, data as Y2MateVideoDetailRaw));
            }
            case "search": {
              return resolve(new Y2MateSearchResult(this, data as Y2MateVideoSearchResultRaw));
            }
            case "playlist": {
              return resolve(new Y2MatePlaylist(this, data as Y2MatePlaylistRaw));
            }
            default: {
              throw new Error(`${JSON.stringify(data, null, 2)}`);
            }
          }
        })
        .catch((err) => reject(err));
    });
  }
  /**
   * Fetch download link of a video
   * @param {string} videoId
   * @param {string} key
   * @returns {Promise<Y2MateDownload>}
   */
  fetchDownloadLink(videoId: string, key: string): Promise<Y2MateDownload> {
    if (typeof videoId !== "string") throw new Error("Video ID is required");
    if (typeof key !== "string") throw new Error("Key is required");
    return new Promise((resolve, reject) => {
      fetch("https://www.y2mate.com/mates/convertV2/index", {
        method: "POST",
        headers: {
          "User-Agent": this.userAgent,
          "x-requested-with": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams({
          vid: videoId,
          k: key,
        }),
      })
        .then((res) => {
          if (!res.ok) return reject(new Error(`HTTP Error ${res.status}`));
          return res.json();
        })
        .then((d) => {
          const data = d as Y2MateVideoDownloadRaw;
          return resolve(new Y2MateDownload(data));
        })
        .catch((err) => reject(err));
    });
  }
}
export default Y2MateClient;

export {
  Y2MateVideoDetail,
  Y2MateSearchResult,
  Y2MateDownload,
  Y2MateVideoDetailRaw,
  Y2MateVideoSearchResultRaw,
  Y2MateVideoDownloadRaw,
  Y2MatePlaylist,
  Y2MatePlaylistRaw,
  Y2MateClient,
};
