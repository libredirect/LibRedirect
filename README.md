<img src="./img/libredirect_full.svg" height="50"/>

A web extension that redirects YouTube, Twitter, Instagram... requests to alternative privacy friendly frontends and backends.

[![Matrix Badge](https://img.shields.io/matrix/libredirect:matrix.org?label=matrix%20chat)](https://matrix.to/#/#libredirect:tokhmi.xyz)
[![Firefox users Badge](https://img.shields.io/amo/users/libredirect?label=Firefox%20users)](https://addons.mozilla.org/firefox/addon/libredirect/)
[![Matrix Badge](https://img.shields.io/liberapay/gives/libredirect?label=Liberapay)](https://liberapay.com/LibRedirect)

[![Firefox Add-on](./img/badge-amo.png)](https://addons.mozilla.org/firefox/addon/libredirect/)&nbsp;
<a href="https://microsoftedge.microsoft.com/addons/detail/libredirect/aodffkeankebfonljgbcfbbaljopcpdb">
  <img src="./img/badge-ms.png" height=60>
</a>&nbsp;
<a href="./chromium.md">
  <img src ="./img/badge-chromium.png" height=60 >
</a>

<img src ="./img/1.png" width=350>&nbsp;
<img src ="./img/2.png" width=350>&nbsp;
<img src ="./img/3.png" width=350>&nbsp;
<img src ="./img/4.png" width=350>&nbsp;

Youtube => [Invidious](https://github.com/iv-org/invidious), [Piped](https://github.com/TeamPiped/Piped), [Piped-Material](https://github.com/mmjee/Piped-Material), [FreeTube](https://github.com/FreeTubeApp/FreeTube), [Yattee](https://github.com/yattee/yattee)\
Youtube Music => [Beatbump](https://github.com/snuffyDev/Beatbump)\
Twitter => [Nitter](https://github.com/zedeus/nitter)\
Instagram => [Bibliogram](https://sr.ht/~cadence/bibliogram/)\
TikTok => [ProxiTok](https://github.com/pablouser1/ProxiTok)\
Reddit => [Libreddit](https://github.com/spikecodes/libreddit#instances), [Teddit](https://codeberg.org/teddit/teddit#instances)\
Imgur => [Rimgo](https://codeberg.org/video-prize-ranch/rimgo)\
Wikipedia => [Wikiless](https://codeberg.org/orenom/wikiless)\
Medium => [Scribe](https://sr.ht/~edwardloveall/scribe/)\
Quora => [Quetre](https://github.com/zyachel/quetre)\
IMDb => [Libremdb](https://github.com/zyachel/libremdb)\
PeerTube => [SimpleerTube](https://git.sr.ht/~metalune/simpleweb_peertube)\
LBRY/Odysee => [Librarian](https://codeberg.org/librarian/librarian)\
Search => [SearXNG](https://github.com/searxng/searxng), [SearX](https://searx.github.io/searx/), [Whoogle](https://benbusby.com/projects/whoogle-search/)\
Translate => [SimplyTranslate](https://git.sr.ht/~metalune/simplytranslate_web), [LingvaTranslate](https://github.com/TheDavidDelta/lingva-translate)\
Maps => [OpenStreetMap](https://www.openstreetmap.org/), [FacilMap](https://github.com/FacilMap/facilmap)\
Send Files => [Send](https://github.com/timvisee/send)

**Note**: The Extension will be using random instances by default. You can modify this and add custom instances too.

[FAQ](https://libredirect.github.io/faq.html)

## Donate
[![Liberapay](./img/liberapay.svg)](https://liberapay.com/LibRedirect)&nbsp;
[![Patreon](./img/patreon.svg)](https://patreon.com/LibRedirect)&nbsp;
[![Buy me a coffee](./img/bmc.svg)](https://www.buymeacoffee.com/libredirect)

BTC: bc1qrhue0frps6p2vkg978u9ayethnwprtmfug827q\
BCH: qqz5vfnrngk0tjy73q2688qzw4wnllnuzqfndflhl8\
ETH: 0x896E5796Da76E49A400A9186E1c459CD2C64b4E8\
XMR: 4AM5CVfaGsnEXQQjZSzJvaWufe7pT86ubcZPr83fCjb2Hn3iwcForTWFy2Z3ugXcufUwHaGcucfPMFgPXBFSYGFvNrmV5XR

## Mirror Repos
[![GitHub](https://raw.githubusercontent.com/ManeraKai/manerakai/main/icons/github.svg)](https://github.com/libredirect/libredirect/)&nbsp;&nbsp;
[![Codeberg](https://raw.githubusercontent.com/ManeraKai/manerakai/main/icons/codeberg.svg)](https://codeberg.org/LibRedirect/libredirect)&nbsp;&nbsp;

## Translate
[![Weblate](./img/weblate.svg)](https://hosted.weblate.org/projects/libredirect/extension)

## Development
### Install Dependencies
[Node.js](https://nodejs.org/) latest LTS is recommended
```
npm update
npm install
```

### Build
```
npm run build
```

### Test
```
npm run test
```

### Test in Firefox
```
npm run start
```

### Install temporarily
open `about:addons`\
click on the settings button below the addon search bar and select `debug add-on`\
press `load temporarily addon`

### Install in Firefox ESR, Developer Edition, Nightly
open `about:config`\
set `xpinstall.signatures.required` to `false`\
open `about:addons`\
click on the gear shaped `settings` button and select `Install Add-on From File...`\
select `libredirect-VERSION.zip` from `web-ext-artifacts` folder

### Install in Chromium browsers
open `chrome://extensions`\
enable `dev mode`\
select `load unpacked extension`\
select `src` folder

[Privacy Policy](Privacy-Policy.md)\
Credits: [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect)
