import formatDuration from 'format-duration';
import Y2MateClient from './index';

export interface Y2MateVideoPartialRaw {
	t: string;
	v: string;
}

export class PartialY2MateDetail {
	client!: Y2MateClient;
	title: string;
	videoId: string;
	public constructor(client: Y2MateClient, data: Y2MateVideoPartialRaw) {
		Object.defineProperty(this, 'client', { value: client });
		/**
		 * Title of the video
		 * @type {string}
		 */
		this.title = data.t;
		/**
		 * Video ID
		 * @type {string}
		 */
		this.videoId = data.v;
	}
	/**
	 * Fetch the detail of the video
	 * @returns {Promise<Y2MateDetail>}
	 */
	fetch(): Promise<Y2MateDetail> {
		return this.client.info<Y2MateDetail>(
			`https://www.youtube.com/watch?v=${this.videoId}`,
		);
	}
	/**
	 * Thumbnail URL of the video
	 * @type {string}
	 */
	get thumbnail() {
		return `https://i.ytimg.com/vi/${this.videoId}/0.jpg`;
	}
}

export interface Y2MateVideoDetailRaw {
	status: string;
	mess: string;
	page: string;
	vid: string;
	extractor: string;
	title: string;
	t: number;
	a: string;
	links: {
		mp3: { [key: string]: Y2MateVideoDownloadLinkRaw };
		mp4: { [key: string]: Y2MateVideoDownloadLinkRaw };
		other: { [key: string]: Y2MateVideoDownloadLinkRaw };
	};
	related: [{ title: string; contents: Y2MateVideoPartialRaw[] }];
}

export class Y2MateDetail {
	client!: Y2MateClient;
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
	public constructor(client: Y2MateClient, data: Y2MateVideoDetailRaw) {
		Object.defineProperty(this, 'client', { value: client });
		/**
		 * Status of the request
		 * @type {string}
		 */
		this.status = data.status;
		/**
		 * Message of the request
		 * @type {string}
		 */
		this.message = data.mess;
		/**
		 * Page of the request (detail, search)
		 * @type {string}
		 */
		this.page = data.page;
		/**
		 * Video ID
		 * @type {string}
		 */
		this.videoId = data.vid;
		/**
		 * Extractor (youtube)
		 * @type {string}
		 */
		this.extractor = data.extractor;
		/**
		 * Title of the video
		 * @type {string}
		 */
		this.title = data.title;
		/**
		 * Duration of the video in milliseconds
		 * @type {number}
		 */
		this.timestamp = data.t * 1000;
		/**
		 * Author of the video
		 * @type {string}
		 */
		this.author = data.a;
		/**
		 * Download links (video)
		 * @type {Map<string, Y2MateDownloadLink>}
		 */
		this.linksVideo = new Map();
		/**
		 * Download links (audio)
		 * @type {Map<string, Y2MateDownloadLink>}
		 */
		this.linksAudio = new Map();
		/**
		 * Related videos
		 * @type {Array<PartialY2MateDetail>}
		 */
		this.related = data.related[0].contents.map(
			(o) => new PartialY2MateDetail(this.client, o),
		);
		this._setupLinks(data.links);
	}
	_setupLinks(links: Y2MateVideoDetailRaw['links']) {
		if (!links) return;
		const video = links.mp4;
		const audio = links.mp3;
		for (const [key, value] of Object.entries(video)) {
			this.linksVideo.set(
				key,
				new Y2MateDownloadLink(this.client, this.videoId, value),
			);
		}
		for (const [key, value] of Object.entries(audio)) {
			this.linksAudio.set(
				key,
				new Y2MateDownloadLink(this.client, this.videoId, value),
			);
		}
	}
	/**
	 * Formatted duration string (hh:mm:ss, mm:ss).
	 * @type {string}
	 */
	get formattedDuration() {
		return formatDuration(this.timestamp);
	}
	/**
	 * Thumbnail URL of the video
	 * @type {string}
	 */
	get thumbnail() {
		return `https://i.ytimg.com/vi/${this.videoId}/0.jpg`;
	}
}

export interface Y2MateVideoDownloadLinkRaw {
	size: string;
	f: string;
	q: string;
	q_text: string;
	k: string;
}

export class Y2MateDownloadLink {
	client!: Y2MateClient;
	size: string;
	format: string;
	quality: string;
	name: string;
	videoId: string;
	private key: string;
	public constructor(
		client: Y2MateClient,
		id: string,
		data: Y2MateVideoDownloadLinkRaw,
	) {
		Object.defineProperty(this, 'client', { value: client });
		/**
		 * Size of the video
		 * @type {string}
		 */
		this.size = data.size;
		/**
		 * Format of the video
		 * @type {string}
		 */
		this.format = data.f;
		/**
		 * Quality of the video
		 * @type {string}
		 */
		this.quality = data.q;
		/**
		 * Name of the quality
		 * @type {string}
		 */
		this.name = data.q_text;
		/**
		 * Video ID
		 * @type {string}
		 */
		this.videoId = id;
		/**
		 * Key of the video (used to fetch download link)
		 * @type {string}
		 * @private
		 */
		this.key = data.k;
	}
	/**
	 * Fetch the download link of the video
	 * @returns {Promise<Y2MateDownload>}
	 */
	fetch(): Promise<Y2MateDownload> {
		return this.client.fetchDownloadLink(this.videoId, this.key);
	}
	/**
	 * Thumbnail URL of the video
	 * @type {string}
	 */
	get thumbnail() {
		return `https://i.ytimg.com/vi/${this.videoId}/0.jpg`;
	}
}

export interface Y2MateVideoSearchResultRaw {
	page: string;
	status: string;
	keyword: string;
	vitems: Array<Y2MateVideoPartialRaw>;
	mess?: string;
}

export class Y2MateSearchResult {
	client!: Y2MateClient;
	page: string;
	status: string;
	keyword: string;
	results: Array<PartialY2MateDetail>;
	constructor(client: Y2MateClient, data: Y2MateVideoSearchResultRaw) {
		Object.defineProperty(this, 'client', { value: client });
		/**
		 * Page of the request (detail, search)
		 * @type {string}
		 */
		this.page = data.page;
		/**
		 * Status of the request
		 * @type {string}
		 */
		this.status = data.status;
		/**
		 * Keyword of the search
		 * @type {string}
		 */
		this.keyword = data.keyword;
		/**
		 * Results of the search
		 * @type {Array<PartialY2MateDetail>}
		 */
		this.results = data.vitems.map((o) => new PartialY2MateDetail(client, o));
	}
}

export interface Y2MateVideoDownloadRaw {
	status: string;
	mess: string;
	c_status: string;
	vid: string;
	title: string;
	ftype: string;
	fquality: string;
	dlink: string;
}

export class Y2MateDownload {
	status: string;
	message: string;
	conversionStatus: string;
	videoId: string;
	title: string;
	fileType: string;
	fileQuality: string;
	downloadLink: string;
	constructor(data: Y2MateVideoDownloadRaw) {
		/**
		 * Status of the request
		 * @type {string}
		 */
		this.status = data.status;
		/**
		 * Message of the request
		 * @type {string}
		 */
		this.message = data.mess;
		/**
		 * Conversion status of the request
		 * @type {string}
		 */
		this.conversionStatus = data.c_status;
		/**
		 * Video ID
		 * @type {string}
		 */
		this.videoId = data.vid;
		/**
		 * Title of the video
		 * @type {string}
		 */
		this.title = data.title;
		/**
		 * File type (mp4, mp3, etc.)
		 * @type {string}
		 */
		this.fileType = data.ftype;
		/**
		 * File quality (1080, 720, etc.)
		 * @type {string}
		 */
		this.fileQuality = data.fquality;
		/**
		 * Download link
		 * @type {string}
		 */
		this.downloadLink = data.dlink;
	}
	/**
	 * Thumbnail URL of the video
	 * @type {string}
	 */
	get thumbnail() {
		return `https://i.ytimg.com/vi/${this.videoId}/0.jpg`;
	}
}