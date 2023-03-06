# y2mate-api
 Unofficial Y2mate API for Nodejs

## Installation
```bash
npm install y2mate-api
```

## Usage

#### Search video, get first result, get mp4 format (1080p = 137)

```js
import Y2MateClient from 'y2mate-api'

const client = new Y2MateClient();

// Search video, get first result, get mp4 format (1080p = 137)
client.info("Kirara Magic - Summer Dream (feat. Chevy)", "vi")
.then(result => {
    // Search result
    console.log(result);
})
.then(result => {
    // Detail result
    console.log(result);
    // get mp4 format (1080p = 137)
    return result.linksVideo.get('137').fetch();
})
.then(result => {
    // Download data
    console.log(result);
});
```


> **Log**


```js
Y2MateSearchResult {
  page: 'search',
  status: 'ok',
  keyword: 'Kirara Magic - Summer Dream (feat. Chevy)',
  results: [
    PartialY2MateDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'ZxV8HuJX0KM'
    },
    ...
  ]
}
Y2MateDetail {
  status: 'ok',
  message: '',
  page: 'detail',
  videoId: 'ZxV8HuJX0KM',
  extractor: 'youtube',
  title: 'Kirara Magic - Summer Dream (feat. Chevy)',
  timestamp: 217000,
  author: 'Kirara Magic',
  linksVideo: Map(8) {
    '18' => Y2MateDownloadLink {
      size: 'MB',
      format: 'mp4',
      quality: '360p',
      name: '360p (.mp4)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwxwV/tQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    },
    ...
  },
  linksAudio: Map(2) {
    '140' => Y2MateDownloadLink {
      size: '3.4 MB',
      format: 'm4a',
      quality: '.m4a',
      name: '.m4a (128kbps)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNhuxgxyU/NQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    },
    ...
  },
  related: [
    PartialY2MateDetail {
      title: 'Kirara Magic - Floating Star (feat. Shion)',
      videoId: 't9CKSSG96DU'
    },
    ...
  ]
}
Y2MateDownload {
  status: 'ok',
  message: '',
  conversionStatus: 'CONVERTED',
  videoId: 'ZxV8HuJX0KM',
  title: 'Kirara Magic - Summer Dream (feat. Chevy)',
  fileType: 'mp4',
  fileQuality: '1080',
  downloadLink: 'https://dl241.dlmate13.online/?file=...'
}
```

#### URL Video, get mp4 format (1080p = 137)

```js
import Y2MateClient from 'y2mate-api'

const client = new Y2MateClient();

// URL Video, get mp4 format (1080p = 137)
client.info("https://www.youtube.com/watch?v=ZxV8HuJX0KM", "vi")
.then(result => {
    // Detail result
    console.log(result);
    // get mp4 format (1080p = 137)
    return result.linksVideo.get('137').fetch();
})
.then(result => {
    // Download data
    console.log(result);
});
```


> **Log**


```js
Y2MateDetail {
  status: 'ok',
  message: '',
  page: 'detail',
  videoId: 'ZxV8HuJX0KM',
  extractor: 'youtube',
  title: 'Kirara Magic - Summer Dream (feat. Chevy)',
  timestamp: 217000,
  author: 'Kirara Magic',
  linksVideo: Map(8) {
    '18' => Y2MateDownloadLink {
      size: 'MB',
      format: 'mp4',
      quality: '360p',
      name: '360p (.mp4)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwxwV/tQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    },
    ...
  },
  linksAudio: Map(2) {
    '140' => Y2MateDownloadLink {
      size: '3.4 MB',
      format: 'm4a',
      quality: '.m4a',
      name: '.m4a (128kbps)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNhuxgxyU/NQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    },
    ...
  },
  related: [
    PartialY2MateDetail {
      title: 'Kirara Magic - Floating Star (feat. Shion)',
      videoId: 't9CKSSG96DU'
    },
    ...
  ]
}
Y2MateDownload {
  status: 'ok',
  message: '',
  conversionStatus: 'CONVERTED',
  videoId: 'ZxV8HuJX0KM',
  title: 'Kirara Magic - Summer Dream (feat. Chevy)',
  fileType: 'mp4',
  fileQuality: '1080',
  downloadLink: 'https://dl241.dlmate13.online/?file=...'
}
```

## Typing

```ts
interface Y2MateVideoPartialRaw {
    t: string;
    v: string;
}
declare class PartialY2MateDetail {
    client: Y2MateClient;
    title: string;
    videoId: string;
    constructor(client: Y2MateClient, data: Y2MateVideoPartialRaw);
    /**
     * Fetch the detail of the video
     * @returns {Promise<Y2MateDetail>}
     */
    fetch(): Promise<Y2MateDetail>;
    /**
     * Thumbnail URL of the video
     * @type {string}
     */
    get thumbnail(): string;
}
interface Y2MateVideoDetailRaw {
    status: string;
    mess: string;
    page: string;
    vid: string;
    extractor: string;
    title: string;
    t: number;
    a: string;
    links: {
        mp3: {
            [key: string]: Y2MateVideoDownloadLinkRaw;
        };
        mp4: {
            [key: string]: Y2MateVideoDownloadLinkRaw;
        };
        other: {
            [key: string]: Y2MateVideoDownloadLinkRaw;
        };
    };
    related: [{
        title: string;
        contents: Y2MateVideoPartialRaw[];
    }];
}
declare class Y2MateDetail {
    client: Y2MateClient;
    status: string;
    message: string;
    page: string;
    videoId: string;
    extractor: string;
    title: string;
    timestamp: number;
    author: string;
    linksVideo: Map<string, Y2MateDownloadLink>;
    linksAudio: Map<string, Y2MateDownloadLink>;
    related: Array<PartialY2MateDetail>;
    constructor(client: Y2MateClient, data: Y2MateVideoDetailRaw);
    _setupLinks(links: Y2MateVideoDetailRaw['links']): void;
    /**
     * Formatted duration string (hh:mm:ss, mm:ss).
     * @type {string}
     */
    get formattedDuration(): string;
    /**
     * Thumbnail URL of the video
     * @type {string}
     */
    get thumbnail(): string;
}
interface Y2MateVideoDownloadLinkRaw {
    size: string;
    f: string;
    q: string;
    q_text: string;
    k: string;
}
declare class Y2MateDownloadLink {
    client: Y2MateClient;
    size: string;
    format: string;
    quality: string;
    name: string;
    videoId: string;
    private key;
    constructor(client: Y2MateClient, id: string, data: Y2MateVideoDownloadLinkRaw);
    /**
     * Fetch the download link of the video
     * @returns {Promise<Y2MateDownload>}
     */
    fetch(): Promise<Y2MateDownload>;
    /**
     * Thumbnail URL of the video
     * @type {string}
     */
    get thumbnail(): string;
}
interface Y2MateVideoSearchResultRaw {
    page: string;
    status: string;
    keyword: string;
    vitems: Array<Y2MateVideoPartialRaw>;
    mess?: string;
}
declare class Y2MateSearchResult {
    client: Y2MateClient;
    page: string;
    status: string;
    keyword: string;
    results: Array<PartialY2MateDetail>;
    constructor(client: Y2MateClient, data: Y2MateVideoSearchResultRaw);
}
interface Y2MateVideoDownloadRaw {
    status: string;
    mess: string;
    c_status: string;
    vid: string;
    title: string;
    ftype: string;
    fquality: string;
    dlink: string;
}
declare class Y2MateDownload {
    status: string;
    message: string;
    conversionStatus: string;
    videoId: string;
    title: string;
    fileType: string;
    fileQuality: string;
    downloadLink: string;
    constructor(data: Y2MateVideoDownloadRaw);
    /**
     * Thumbnail URL of the video
     * @type {string}
     */
    get thumbnail(): string;
}

declare class Y2MateClient {
    private userAgent;
    constructor(userAgent?: any);
    /**
     * Fetch information of a video
     * @param {string} keyword
     * @param {string} languageCode
     * @returns {Promise<Y2MateSearchResult|Y2MateDetail>}
     */
    info<T extends Y2MateSearchResult | Y2MateDetail>(keyword: string, languageCode?: string): Promise<T>;
    /**
     * Fetch download link of a video
     * @param {string} videoId
     * @param {string} key
     * @returns {Promise<Y2MateDownload>}
     */
    fetchDownloadLink(videoId: string, key: string): Promise<Y2MateDownload>;
}

export { Y2MateClient as default };
```