import Y2MateClient from "../dist/index.js";

const client = new Y2MateClient();

client.searchVideo("Kirara Magic - Summer Dream (feat. Chevy)", "vi")
.then(result => {
    // Search result
    console.log(result);
    // get first result
    return result.results[0].fetch();
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

/* Output:
Y2MateSearchResult {
  page: 'search',
  status: 'ok',
  keyword: 'Kirara Magic - Summer Dream (feat. Chevy)',
  results: [
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'ZxV8HuJX0KM'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'exiFmFf8Hz4'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy) (Lyrics)',
      videoId: 'm6bE6dPxjBI'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic (feat . Chevy) - Summer Dream',
      videoId: '6yZYkGsKE3A'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'np2vNCBYsw8'
    },
    PartialY2MateVideoDetail {
      title: 'Nightcore - Summer Dream (Kirara Magic feat. Chevy / Lyrics)',
      videoId: 'ooOPgNYwiuo'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy) ♪',
      videoId: 'zh-RdlIcVs4'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Good Dream (feat. Shion) MV',
      videoId: 'xJTFa8fEiv4'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: '-mm3Bca-xIo'
    },
    PartialY2MateVideoDetail {
      title: 'Active Arcade Superhits- Summer Dream (Kirara Magic and Chevy)',
      videoId: '91LpnFBbmA0'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'BNM9HpnkyJI'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'mwWj_UDKsLE'
    }
  ]
}
Y2MateVideoDetail {
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
    '133' => Y2MateDownloadLink {
      size: '6.8 MB',
      format: 'mp4',
      quality: '240p',
      name: '240p (.mp4)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwxxVftcut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    },
    '135' => Y2MateDownloadLink {
      size: '17.3 MB',
      format: 'mp4',
      quality: '480p',
      name: '480p (.mp4)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwx3WftQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    },
    '136' => Y2MateDownloadLink {
      size: '27.1 MB',
      format: 'mp4',
      quality: '720p',
      name: '720p (.mp4) <span class="label label-primary"><small>m-HD</small></span>',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwx0U/tcut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    },
    '137' => Y2MateDownloadLink {
      size: '44.7 MB',
      format: 'mp4',
      quality: '1080p',
      name: '1080p (.mp4) <span class="label label-primary"><small>full-HD</small></span>',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwxyUfMcut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    },
    '160' => Y2MateDownloadLink {
      size: '4.9 MB',
      format: 'mp4',
      quality: '144p',
      name: '144p (.mp4)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwxyVf9cut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    },
    '3gp@144p' => Y2MateDownloadLink {
      size: 'MB',
      format: '3gp',
      quality: '144p',
      name: '144p (.3gp)',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhIY91wxyVf9cut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    },
    'auto' => Y2MateDownloadLink {
      size: '',
      format: 'mp4',
      quality: 'auto',
      name: 'MP4 auto quality',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqkwwiFL9Dut97h7b6e5kfdPFeydP4QooH9mSNIIeKagyK7p58QCTU9Ixl7mbM'
    }
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
    'mp3128' => Y2MateDownloadLink {
      size: '3.4 MB',
      format: 'mp3',
      quality: '128kbps',
      name: 'MP3 - 128kbps',
      videoId: 'ZxV8HuJX0KM',
      key: 'joZBWNbgx5WnZcav6qaFoMTwAl7j4qVzhNgqlAxyU/NQ9Nl/hb74c5kVePYLlNDxRY1Xr2uJJtHRMwzRsMIkFSaCrY5q4Dw='
    }
  },
  related: [
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Floating Star (feat. Shion)',
      videoId: 't9CKSSG96DU'
    },
    PartialY2MateVideoDetail {
      title: '𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 | cute songs by Chevy & Nalba | soft sunday morning indie vibes | chill, study'        ,
      videoId: '03sQLOucmvk'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - A Cafe By The Sea [full album]',
      videoId: 'CtNK1qV9WoE'
    },
    PartialY2MateVideoDetail {
      title: 'cinnamons × evening cinema - summertime (Official Music Video)',
      videoId: 'KMTo2LmixqQ'
    },
    PartialY2MateVideoDetail {
      title: 'Mix - Kawaii Future Bass Lightly , Kawaii EDM Lightly , Sleep Music (Part 1)',
      videoId: 'DRQ6FbvjThY'
    },
    PartialY2MateVideoDetail {
      title: 'Summer Dream',
      videoId: '2__8PrNIHIs'
    },
    PartialY2MateVideoDetail {
      title: '【Studying Piano Music】3 Hour Beautiful Piano Music For Studying and Concentrating',
      videoId: '8sJk9AE82kc'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy)',
      videoId: 'exiFmFf8Hz4'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Summer Dream (feat. Chevy) (Lyrics)',
      videoId: 'm6bE6dPxjBI'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Kagetsu',
      videoId: 'UzDT-lWNShU'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic & Ulchero - Online Fantasy (feat. Moon Jelly)',
      videoId: 'PXfiPh3su7k'
    },
    PartialY2MateVideoDetail {
      title: 'Summer Dream - beats to sleep/study x Fall In Luv',
      videoId: '-hnbYK5JOx8'
    },
    PartialY2MateVideoDetail {
      title: "Album 'Magic Shop'",
      videoId: 'HdkzfQ_miAo'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Good Dream (feat. Shion) MV',
      videoId: 'xJTFa8fEiv4'
    },
    PartialY2MateVideoDetail {
      title: 'Daydream Cafe (feat. Shion Lee)',
      videoId: 'tNf3SgtiAi0'
    },
    PartialY2MateVideoDetail {
      title: '【作業用BGM】Setsuna (Kirara Magic Remix) 百鬼あやめ2021ED【Extended】',
      videoId: '50M2mMwfr-Q'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Aurora (feat. Shion)',
      videoId: 'WE9ZsbA2TXw'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic - Aurora VIP (feat. Shion)',
      videoId: 'niVyVKo721g'
    },
    PartialY2MateVideoDetail {
      title: 'Kirara Magic & Couple N - Treasure (feat. taobien)',
      videoId: 'QwSceQOdVlg'
    }
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
  downloadLink: 'https://dl241.dlmate13.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1BrY2M3MVJGb0xLcExyNDVrbk5lMUxzUktQT3dyMzQrakhKVlM4RC9NT3ZPRE5SbVFpY2wyR2lPUnVkc3Q3WG5KK29JbFp0bHdRaDZsM3JTRmp6NWpuUkwzZTUyZk03VkdPVElwaFVVbWdRQ3AxTWVNa1FEU2l5MkdpbkxTUEh4YW9uVUdMYUdXOXBwSGlGL2xLZkw4dzVrWHFES1c3NThVaTZiSzdGR2lrdVpvNzVwblcwSkxjSmhZMnBHb2pyYmZyRjBjM2MxUGlSL3cvYnJ6UUkwalFhR2NLR1U9'
}
*/