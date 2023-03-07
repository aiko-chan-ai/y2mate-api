import Y2MateClient from "../dist/index.js";

const client = new Y2MateClient();

client
  .getVideo("https://www.youtube.com/watch?v=bJ9I1ZuqMGw", "vi")
  .then((result) => {
    // Detail result
    console.log(result);
    return result.linksVideo.get("auto").fetch();
  })
  .then((result) => {
    // Download data
    console.log(result);
  });

/* Output:
Y2MateVideoDetail {
  status: 'ok',
  message: '',
  page: 'detail',
  videoId: 'bJ9I1ZuqMGw',
  extractor: 'youtube',
  title: 'KLYDIX - Dream Express ♪',
  timestamp: 216000,
  author: 'StarlingEDM',
  linksVideo: Map(8) {
    '18' => Y2MateDownloadLink {
      size: 'MB',
      format: 'mp4',
      quality: '360p',
      name: '360p (.mp4)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwxwV/tQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '22' => Y2MateDownloadLink {
      size: '24.8 MB',
      format: 'mp4',
      quality: '720p',
      name: '720p (.mp4) <span class="label label-primary"><small>m-HD</small></span>',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwx0U/tQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '133' => Y2MateDownloadLink {
      size: '6.7 MB',
      format: 'mp4',
      quality: '240p',
      name: '240p (.mp4)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwxxVftcut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    '135' => Y2MateDownloadLink {
      size: '15.2 MB',
      format: 'mp4',
      quality: '480p',
      name: '480p (.mp4)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwx3WftQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '160' => Y2MateDownloadLink {
      size: '4.8 MB',
      format: 'mp4',
      quality: '144p',
      name: '144p (.mp4)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwxyVf9cut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    '299' => Y2MateDownloadLink {
      size: '49.5 MB',
      format: 'mp4',
      quality: '1080p',
      name: '1080p (.mp4) <span class="label label-primary"><small>full-HD</small></span>',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwxyUfMcts0H8da8cZ0ffP1Xndr4R49QrGSBINGNal2NsMh8FCCCooxr7WrLqY15D50='
    },
    '3gp@144p' => Y2MateDownloadLink {
      size: 'MB',
      format: '3gp',
      quality: '144p',
      name: '144p (.3gp)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hIY91wxyVf9cut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    'auto' => Y2MateDownloadLink {
      size: '',
      format: 'mp4',
      quality: 'auto',
      name: 'MP4 auto quality',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqkwwiFL9Dut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    }
  },
  linksAudio: Map(2) {
    '140' => Y2MateDownloadLink {
      size: '3.3 MB',
      format: 'm4a',
      quality: '.m4a',
      name: '.m4a (128kbps)',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNhuxgxyU/NQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    'mp3128' => Y2MateDownloadLink {
      size: '3.3 MB',
      format: 'mp3',
      quality: '128kbps',
      name: 'MP3 - 128kbps',
      videoId: 'bJ9I1ZuqMGw',
      key: 'joRGCNezl5XwZZ71vqaC8sOoAl7j4vF8hNgqlAxyU/NQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    }
  },
  related: [
    PartialY2MateVideoDetail {
      title: '徐梦圆 - Holiday ♪',
      videoId: 'W4SL7T0OdMg'
    },
    PartialY2MateVideoDetail {
      title: '小悦悦 & 森林屿诗 - 商 ♪',
      videoId: '6fNX0WXGpgc'
    },
    PartialY2MateVideoDetail {
      title: 'KLYDIX - 誰も知らないそこへ (ft. Ooz) [VIP Mix] ♪',
      videoId: 'TnZEYlfkpLk'
    },
    PartialY2MateVideoDetail {
      title: 'TheFatRat - End Of The Decade (Mixtape)',
      videoId: 'wKRL7vkWMoc'
    },
    PartialY2MateVideoDetail {
      title: 'KLYDIX - Retro Drive',
      videoId: 'Oj4BIXyYHZM'
    },
    PartialY2MateVideoDetail {
      title: '清丶风 (DiESi Remix) ♪',
      videoId: 'nN-tJvEplB4'
    },
    PartialY2MateVideoDetail {
      title: 'Best Nightcore Gaming Mix 2021 👾',
      videoId: 'kWrLU5Mucqs'
    },
    PartialY2MateVideoDetail {
      title: 'Trap Queen - Adriana Gomez | Eightfold X MKJ Remix (Lyrics + Vietsub) ♫',
      videoId: 'a1xRIqFApvY'
    },
    PartialY2MateVideoDetail {
      title: '🔥Best Gaming Music 2022 Mix ♫ Top 50 EDM Remixes x NCS Gaming Music ♫ Best EDM, Trap, DnB, Dubstep',
      videoId: 'B7QzbCViK0E'
    },
    PartialY2MateVideoDetail {
      title: 'Tamurashi & Sanea - You Got Me Bridge ♪',
      videoId: 'uNKgW7GHl1o'
    },
    PartialY2MateVideoDetail {
      title: 'KLYDIX - 月華 ♪',
      videoId: 'fZ3NrDfe30c'
    },
    PartialY2MateVideoDetail {
      title: 'Andex - Gaming Time ♪',
      videoId: 'Aj0zNU8K4t0'
    },
    PartialY2MateVideoDetail {
      title: 'HyuN & KLYDIX - Time To Night Sky (ft. Lee Yu Jin) ♪',
      videoId: 'jMXIIVyQUxc'
    },
    PartialY2MateVideoDetail {
      title: 'YOASOBI - 怪物・Kaibutsu (Lone Alpha Remix) ♪',
      videoId: 'YOYU_CzHBvY'
    },
    PartialY2MateVideoDetail {
      title: 'STELLAON (스텔라온) - Spring (KLYDIX Remix) ♪',
      videoId: 'W8CM_fk7SIc'
    },
    PartialY2MateVideoDetail {
      title: 'KLYDIX & RuYA - 초월ㆍTranscend ♪',
      videoId: 'ZxgsvA8AjY8'
    },
    PartialY2MateVideoDetail {
      title: '徐夢圓 - 3D Sakura (Must Use Headphones To Enjoy) ♪',
      videoId: 'bTMBVz97PdU'
    },
    PartialY2MateVideoDetail {
      title: 'Xomu - Lanterns (Androlyx Remix) ♪',
      videoId: 'oYupvKD-33Y'
    },
    PartialY2MateVideoDetail {
      title: 'Arealy仁辰 - China-Z ♪',
      videoId: 'EC29bNx-SCQ'
    }
  ]
}
Y2MateDownload {
  status: 'ok',
  message: '',
  conversionStatus: 'CONVERTED',
  videoId: 'bJ9I1ZuqMGw',
  title: 'KLYDIX - Dream Express ♪',
  fileType: 'mp4',
  fileQuality: 720,
  downloadLink: 'https://rr3---sn-p5qs7n6d.googlevideo.com/videoplayback?expire=1678187919&ei=L8kGZMD6B6KG_9EP3ZGy4AU&ip=3.93.212.102&id=o-AMxtT8gWr6Lq1iE4RvR7uZ-G8DJQVd1r8fhWAFl9tRER&itag=22&source=youtube&requiressl=yes&mh=Oq&mm=31%2C26&mn=sn-p5qs7n6d%2Csn-vgqsknlr&ms=au%2Conr&mv=m&mvi=3&pl=13&initcwndbps=1190000&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=216.108&lmt=1639801916099989&mt=1678165733&fvip=4&fexp=24007246&c=ANDROID&txp=6311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIP-zy7LjCxKC9VV3DMlMxo0AernIoRclpZKttGcd_FyAiEA5K7-2bbDFlQncstYJzmW4lIQQ-o0wLhzcXuPg5qPEZU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAONrsCfbu6pSn2xeWKXdiLBQy_7MeV3naB9k0tHy5ltMAiBWDKp1v-_06ac-n1OxDW-1GzaAwHd918tr83vKsvUsVw%3D%3D&title=KLYDIX+-+Dream+Express+%E2%99%AA'
}
*/
