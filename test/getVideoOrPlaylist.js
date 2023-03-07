import Y2MateClient from "../dist/index.js";

const client = new Y2MateClient();

client
  //.getFromURL("https://www.youtube.com/watch?v=bJ9I1ZuqMGw", "vi")
  .getFromURL("https://www.youtube.com/playlist?list=PLdsQhUYQd9MBKUv575zCKPO7fdHrAjRAu", "vi")
  .then((result) => {
    // Detail result
    console.log(result);
    if (result.page == "detail") {
      return result.linksVideo.get("auto").fetch();
    } else if (result.page == "playlist") {
      return result.videos[0].fetch().then(video => video.linksVideo.get("auto").fetch());
    }
  })
  .then((result) => {
    // Download data
    console.log(result);
  });

/* Output (Video):
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


/* Output (Playlist)
Y2MatePlaylist {
  status: 'ok',
  message: '',
  videos: [
    PartialY2MateVideoDetail {
      title: '[Original MV] u m p o p o f f',
      videoId: 'E_AcOm01KAM'
    },
    PartialY2MateVideoDetail {
      title: '3R2 - Magical Wonderland (More colorful mix) 【from Muse Dash】',
      videoId: 'gb7YoPbCBsI'
    },
    PartialY2MateVideoDetail {
      title: 'NOMA - Brain Power (Short version) - LYRICS!',
      videoId: '0bOV4ExHPZY'
    },
    PartialY2MateVideoDetail {
      title: 'Morimori Atsushi vs. uma - Sweet* Witch* Girl*',
      videoId: 'd-Xw5ycytxE'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] trippers feeling! - KAH【音源】 【高音質】',
      videoId: 'pc-Ug4OS1ks'
    },
    PartialY2MateVideoDetail {
      title: 'USAO - Cthugha [Muse Dash]',
      videoId: '_tX1lqcVnno'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] Rush B - iKz【音源】【高音質】',
      videoId: 'aSIuYcFKeoo'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] チルノのパーフェクトさんすう教室 - ARM+夕野ヨシミ (IOSYS) feat.miko【音源】【高音質】',
      videoId: 'keGZqhHwYtY'
    },
    PartialY2MateVideoDetail {
      title: 'P*Light - TWINKLE★MAGIC [Muse Dash]',
      videoId: 'bZORilP0X-k'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] twinkle night - nyankobrq & yaca feat. somunia【音源】【高音質】',
      videoId: 'UglGF5bEZPA'
    },
    PartialY2MateVideoDetail {
      title: 'Cytus II NEKO / 3R2 as DJ Mashiro -  Happiness Breeze',
      videoId: '1VxpBA1yrY8'
    },
    PartialY2MateVideoDetail {
      title: '3R2 - The Happycore Idol 【from Muse Dash】',
      videoId: '29XQWk4QfjU'
    },
    PartialY2MateVideoDetail {
      title: "【#G2R2018】Howlin' Pumpkin / brz1128",
      videoId: 'WfhftR_MCnQ'
    },
    PartialY2MateVideoDetail {
      title: 'EmoCosine - ネコジャラシ【from Muse Dash】',
      videoId: 'zH6sGTO99oI'
    },
    PartialY2MateVideoDetail {
      title: 'ななひら (Nanahira) - You Make My Life 1UP',
      videoId: 'G4qsOhWLMVo'
    },
    PartialY2MateVideoDetail {
      title: '[神曲] もう一度聴きたい!! Elektronomiaオススメ15曲まとめ!! [作業用BGM]',
      videoId: '_Q0yECAc0zg'
    },
    PartialY2MateVideoDetail {
      title: '「新世界より」/ 綾奈nana　＊Muse Dash Soundtrack／ミューズダッシュ収録曲',
      videoId: '9a-dCsq8ofg'
    }
  ],
  keyword: 'PLdsQhUYQd9MBKUv575zCKPO7fdHrAjRAu',
  title: 'MuseDash',
  thumbnail: 'https://i.ytimg.com/vi/E_AcOm01KAM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA37F76kaszYbS-87CQoixZvtUAxg&days_since_epoch=19423',
  page: 'playlist',
  playlistId: 'PLdsQhUYQd9MBKUv575zCKPO7fdHrAjRAu'
}
Y2MateVideoDetail {
  status: 'ok',
  message: '',
  page: 'detail',
  videoId: 'E_AcOm01KAM',
  extractor: 'youtube',
  title: '[Original MV] u m p o p o f f',
  timestamp: 138000,
  author: 'まめこ',
  linksVideo: Map(8) {
    '18' => Y2MateDownloadLink {
      size: 'MB',
      format: 'mp4',
      quality: '360p',
      name: '360p (.mp4)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwxwV/tQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '22' => Y2MateDownloadLink {
      size: '26.4 MB',
      format: 'mp4',
      quality: '720p',
      name: '720p (.mp4) <span class="label label-primary"><small>m-HD</small></span>',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwx0U/tQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '133' => Y2MateDownloadLink {
      size: '5.5 MB',
      format: 'mp4',
      quality: '240p',
      name: '240p (.mp4)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwxxVftcut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    '135' => Y2MateDownloadLink {
      size: '14.8 MB',
      format: 'mp4',
      quality: '480p',
      name: '480p (.mp4)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwx3WftQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    '137' => Y2MateDownloadLink {
      size: '44.3 MB',
      format: 'mp4',
      quality: '1080p',
      name: '1080p (.mp4) <span class="label label-primary"><small>full-HD</small></span>',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwxyUfMcut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    '160' => Y2MateDownloadLink {
      size: '3.7 MB',
      format: 'mp4',
      quality: '144p',
      name: '144p (.mp4)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwxyVf9cut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    '3gp@144p' => Y2MateDownloadLink {
      size: 'MB',
      format: '3gp',
      quality: '144p',
      name: '144p (.3gp)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhIY91wxyVf9cut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    },
    'auto' => Y2MateDownloadLink {
      size: '',
      format: 'mp4',
      quality: 'auto',
      name: 'MP4 auto quality',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqkwwiFL9Dut97h7b6e5kfdPFeydP4SI9V82SKddbbalnatc18FCfU84w+4Gmb'
    }
  },
  linksAudio: Map(2) {
    '140' => Y2MateDownloadLink {
      size: '2.1 MB',
      format: 'm4a',
      quality: '.m4a',
      name: '.m4a (128kbps)',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNhuxgxyU/NQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    },
    'mp3128' => Y2MateDownloadLink {
      size: '2.1 MB',
      format: 'mp3',
      quality: '128kbps',
      name: 'MP3 - 128kbps',
      videoId: 'E_AcOm01KAM',
      key: 'joQTWdXhxMH3a8X07afQpserAl7j4vImhNgqlAxyU/NQ9Nl/hb74c5kVePYLlND7QN9Sr2zcd4DRZlyK48JwFiaFrdVk72s='
    }
  },
  related: [
    PartialY2MateVideoDetail {
      title: 'u m p o p o f f',
      videoId: 'VIs38tXxcIE'
    },
    PartialY2MateVideoDetail {
      title: '[MV] Please! Concon Inari-sama - ARM x Fox Dreams feat. Nanahira',
      videoId: 'd0oPe63T6ek'
    },
    PartialY2MateVideoDetail { title: 'もぺもぺ', videoId: 'nC-bVtpIMd4' },
    PartialY2MateVideoDetail {
      title: '★9 Rush B All Perfect with Part-Time Warrior Rin【Muse Dash】',
      videoId: '6_lisXnw1Bw'
    },
    PartialY2MateVideoDetail {
      title: '【手描き】おくすり飲んで寝よう',
      videoId: 'NMbNwf-qazo'
    },
    PartialY2MateVideoDetail {
      title: 'Kero Kero Bonito - Flamingo',
      videoId: 'rY-FJvRqK0E'
    },
    PartialY2MateVideoDetail {
      title: 'Morimori Atsushi - Funkotsu Saishin Casino',
      videoId: '2UoNrIDbb8U'
    },
    PartialY2MateVideoDetail {
      title: '[Original MV] Rainy Step',
      videoId: '2BboH6IaAjU'
    },
    PartialY2MateVideoDetail {
      title: '【TJAplayer3】u m p o p o f f / れいな feat.まめこ【創作譜面】',
      videoId: '4Dl3x1EsCQQ'
    },
    PartialY2MateVideoDetail {
      title: '10/28 M3『ろりぽっぷ☆ちゅーん』おためし！',
      videoId: 'V32SVlXbIjM'
    },
    PartialY2MateVideoDetail {
      title: 'Luma Pools (10 Hour Version) | Ori and the Will of the Wisps OST',
      videoId: 'qC2k_Qv4GoI'
    },
    PartialY2MateVideoDetail {
      title: '【歌枠】オリジナル曲だらけのハロウィンパーティー【#まめなま】',
      videoId: 'T_K-8sdhrTI'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] umpopoff - まめこ (Full Version) 【Music】',
      videoId: 'zhDoMVt3NjY'
    },
    PartialY2MateVideoDetail {
      title: '2020秋M3新譜「Chum!」X-fade',
      videoId: 'qFN9IosFk-w'
    },
    PartialY2MateVideoDetail {
      title: "Camellia feat. Nanahira - But I'm Not Interested In Christmas At All",
      videoId: 'jFt4GIgtpBE'
    },
    PartialY2MateVideoDetail {
      title: 'adrenaline!!! / covered by ななひら・nayuta・まめこ',
      videoId: 'vsfry9ILdLI'
    },
    PartialY2MateVideoDetail {
      title: 'さようなら、花泥棒さん / covered by まめこ',
      videoId: 'J_GnDpNvrUc'
    },
    PartialY2MateVideoDetail {
      title: 'チューリングラブ / covered by まめこ・卯月リリア',
      videoId: 'Tif1-6kXFtg'
    },
    PartialY2MateVideoDetail {
      title: 'Muse Dash OST - Lights of Muse (High Quality Audio)',
      videoId: 'odRsyMrHBGg'
    },
    PartialY2MateVideoDetail {
      title: 'おくすり飲んで寝よう / 初音ミク - もちうつね',
      videoId: 'GWAtnzcbfFQ'
    }
  ]
}
file:///C:/Users/Aiko/Desktop/y2mate-api/test/getVideoOrPlaylist.js:16
        return video.get("auto").fetch();
                     ^

TypeError: video.get is not a function
    at file:///C:/Users/Aiko/Desktop/y2mate-api/test/getVideoOrPlaylist.js:16:22
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Node.js v18.13.0
╭─    ~\Desktop\y2mate-api    main ≡  ?1 ~4 -1                                              18.13.0   1.343s   ERROR  13:06:10  ─╮ 
╰─ node test/getVideoOrPlaylist.js                                                                                                               ─╯ 
Y2MatePlaylist {
  status: 'ok',
  message: '',
  videos: [
    PartialY2MateVideoDetail {
      title: '[Original MV] u m p o p o f f',
      videoId: 'E_AcOm01KAM'
    },
    PartialY2MateVideoDetail {
      title: '3R2 - Magical Wonderland (More colorful mix) 【from Muse Dash】',
      videoId: 'gb7YoPbCBsI'
    },
    PartialY2MateVideoDetail {
      title: 'NOMA - Brain Power (Short version) - LYRICS!',
      videoId: '0bOV4ExHPZY'
    },
    PartialY2MateVideoDetail {
      title: 'Morimori Atsushi vs. uma - Sweet* Witch* Girl*',
      videoId: 'd-Xw5ycytxE'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] trippers feeling! - KAH【音源】 【高音質】',
      videoId: 'pc-Ug4OS1ks'
    },
    PartialY2MateVideoDetail {
      title: 'USAO - Cthugha [Muse Dash]',
      videoId: '_tX1lqcVnno'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] Rush B - iKz【音源】【高音質】',
      videoId: 'aSIuYcFKeoo'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] チルノのパーフェクトさんすう教室 - ARM+夕野ヨシミ (IOSYS) feat.miko【音源】【高音質】',
      videoId: 'keGZqhHwYtY'
    },
    PartialY2MateVideoDetail {
      title: 'P*Light - TWINKLE★MAGIC [Muse Dash]',
      videoId: 'bZORilP0X-k'
    },
    PartialY2MateVideoDetail {
      title: '[Muse Dash] twinkle night - nyankobrq & yaca feat. somunia【音源】【高音質】',
      videoId: 'UglGF5bEZPA'
    },
    PartialY2MateVideoDetail {
      title: 'Cytus II NEKO / 3R2 as DJ Mashiro -  Happiness Breeze',
      videoId: '1VxpBA1yrY8'
    },
    PartialY2MateVideoDetail {
      title: '3R2 - The Happycore Idol 【from Muse Dash】',
      videoId: '29XQWk4QfjU'
    },
    PartialY2MateVideoDetail {
      title: "【#G2R2018】Howlin' Pumpkin / brz1128",
      videoId: 'WfhftR_MCnQ'
    },
    PartialY2MateVideoDetail {
      title: 'EmoCosine - ネコジャラシ【from Muse Dash】',
      videoId: 'zH6sGTO99oI'
    },
    PartialY2MateVideoDetail {
      title: 'ななひら (Nanahira) - You Make My Life 1UP',
      videoId: 'G4qsOhWLMVo'
    },
    PartialY2MateVideoDetail {
      title: '[神曲] もう一度聴きたい!! Elektronomiaオススメ15曲まとめ!! [作業用BGM]',
      videoId: '_Q0yECAc0zg'
    },
    PartialY2MateVideoDetail {
      title: '「新世界より」/ 綾奈nana　＊Muse Dash Soundtrack／ミューズダッシュ収録曲',
      videoId: '9a-dCsq8ofg'
    }
  ],
  keyword: 'PLdsQhUYQd9MBKUv575zCKPO7fdHrAjRAu',
  title: 'MuseDash',
  thumbnail: 'https://i.ytimg.com/vi/E_AcOm01KAM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA37F76kaszYbS-87CQoixZvtUAxg&days_since_epoch=19423',
  page: 'playlist',
  playlistId: 'PLdsQhUYQd9MBKUv575zCKPO7fdHrAjRAu'
}
Y2MateDownload {
  status: 'ok',
  message: '',
  conversionStatus: 'CONVERTED',
  videoId: 'E_AcOm01KAM',
  title: '[Original MV] u m p o p o f f',
  fileType: 'mp4',
  fileQuality: 720,
  downloadLink: 'https://dl140.dlmate05.online/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0xpdHc5emg0aURlQmhrTVk2bk9uck00SkFaYmRFd3NHa1d0aHJvbXlJWVo2R0lGdlBzSkVxUjB5UjlzSTE1SHFkMVpjdlROMWtWQk85eWNDdWhtVXoyeUdrTzRyck1JZDNibGgyOHhGSThndXNtNk9FcVZ2MW95bnJvRWlNTVJJazlENFRMZnpDOUl0QjJHeVdQcUd6aThGUy8zN090TnhiMy9haXR3bnp3TGxqNlpwbVYxNXhMc0lJamN1bWhxaWI0MVFQM1owZWp3PT0%3D'
}
*/