import constants from "./constants.js";
import fetch from "node-fetch";
import {
  Y2MateDetail,
  Y2MateSearchResult,
  Y2MateDownload,
  Y2MateVideoDetailRaw,
  Y2MateVideoSearchResultRaw,
  Y2MateVideoDownloadRaw,
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
  /**
   * Fetch information of a video
   * @param {string} keyword
   * @param {string} languageCode
   * @returns {Promise<Y2MateSearchResult|Y2MateDetail>}
   */
  info<T extends Y2MateSearchResult | Y2MateDetail>(keyword: string, languageCode: string = "en") {
    if (typeof keyword !== "string") throw new Error("Keyword is required");
    if (typeof languageCode !== "string") throw new Error("Language code is required");
    if (!constants.languageCode[languageCode as keyof typeof constants.languageCode])
      throw new Error(
        `Language code ${languageCode} is not supported. Please use one of these: ${Object.keys(
          constants.languageCode,
        ).join(", ")}`,
      );
    return new Promise<T>((resolve, reject) => {
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
          const data = d as Y2MateVideoDetailRaw | Y2MateVideoSearchResultRaw;
          if (data.status !== "ok") return data?.mess! && reject(new Error(data.mess ?? "Unknown error"));
          switch (data.page) {
            case "detail": {
              return new Y2MateDetail(this, data as Y2MateVideoDetailRaw);
            }
            case "search": {
              return new Y2MateSearchResult(this, data as Y2MateVideoSearchResultRaw);
            }
            default: {
              throw new Error("Unknown error");
            }
          }
        })
        // @ts-ignore
        .then(resolve)
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
