window.browser = window.browser || window.chrome;

import commonHelper from './common.js'

const targets = [
  /^https?:\/{2}(www\.|search\.|)google(\.[a-z]{2,3}){1,2}(\/search(\?.*|$)|\/$)/,
  /^https?:\/{2}libredirect\.invalid/
  // /^https?:\/{2}yandex\.com(\...|)(\/search\/..*|\/$)/,
];
let redirects = {
  "searx": {
    "normal": [],
    "tor": [],
    "i2p": []
  },
  "searxng": {
    "normal": [],
    "tor": [],
    "i2p": []
  },
  "whoogle": {
    "normal": [],
    "tor": []
  },
  "startpage": {
    "normal": "https://www.startpage.com",
    "tor": null
  }
};
const getRedirects = () => redirects;
const getCustomRedirects = () => {
  return {
    "searx": {
      "normal": [...searxNormalRedirectsChecks, ...searxNormalCustomRedirects],
      "tor": [...searxTorRedirectsChecks, ...searxTorCustomRedirects],
    },
    "searxng": {
      "normal": [...searxngNormalRedirectsChecks, ...searxngNormalCustomRedirects],
      "tor": [...searxngTorRedirectsChecks, ...searxngTorCustomRedirects],
    },
    "whoogle": {
      "normal": [...whoogleNormalRedirectsChecks, ...whoogleNormalCustomRedirects],
      "normal": [...whoogleTorRedirectsChecks, ...whoogleTorCustomRedirects]
    }
  };
};

function setSearxRedirects(val) {
  redirects.searx = val;
  browser.storage.local.set({ searchRedirects: redirects })
  console.log("searxRedirects:", val)
  for (const item of searxNormalRedirectsChecks) if (!redirects.searx.normal.includes(item)) {
    var index = searxNormalRedirectsChecks.indexOf(item);
    if (index !== -1) searxNormalRedirectsChecks.splice(index, 1);
  }
  setSearxNormalRedirectsChecks(searxNormalRedirectsChecks);

  for (const item of searxTorRedirectsChecks) if (!redirects.searx.tor.includes(item)) {
    var index = searxTorRedirectsChecks.indexOf(item);
    if (index !== -1) searxTorRedirectsChecks.splice(index, 1);
  }
  setSearxTorRedirectsChecks(searxTorRedirectsChecks);
}

function setSearxngRedirects(val) {
  redirects.searxng = val;
  browser.storage.local.set({ searchRedirects: redirects })
  console.log("searxngRedirects:", val)
  for (const item of searxngNormalRedirectsChecks) if (!redirects.searxng.normal.includes(item)) {
    var index = searxngNormalRedirectsChecks.indexOf(item);
    if (index !== -1) searxngNormalRedirectsChecks.splice(index, 1);
  }
  setSearxngNormalRedirectsChecks(searxngNormalRedirectsChecks);

  for (const item of searxngTorRedirectsChecks) if (!redirects.searxng.tor.includes(item)) {
    var index = searxngTorRedirectsChecks.indexOf(item);
    if (index !== -1) searxngTorRedirectsChecks.splice(index, 1);
  }
  setSearxngTorRedirectsChecks(searxngTorRedirectsChecks);
}

function setWhoogleRedirects(val) {
  redirects.whoogle = val;
  browser.storage.local.set({ searchRedirects: redirects })
  console.log("whoogleRedirects:", val)
  for (const item of whoogleNormalRedirectsChecks) if (!redirects.whoogle.normal.includes(item)) {
    var index = whoogleNormalRedirectsChecks.indexOf(item);
    if (index !== -1) whoogleNormalRedirectsChecks.splice(index, 1);
  }
  setWhoogleNormalRedirectsChecks(whoogleNormalRedirectsChecks);

  for (const item of whoogleTorRedirectsChecks) if (!redirects.whoogle.tor.includes(item)) {
    var index = whoogleTorRedirectsChecks.indexOf(item);
    if (index !== -1) whoogleTorRedirectsChecks.splice(index, 1);
  }
  setWhoogleTorRedirectsChecks(whoogleTorRedirectsChecks);
}

let whoogleNormalRedirectsChecks;
const getWhoogleNormalRedirectsChecks = () => whoogleNormalRedirectsChecks;
function setWhoogleNormalRedirectsChecks(val) {
  whoogleNormalRedirectsChecks = val;
  browser.storage.local.set({ whoogleNormalRedirectsChecks })
  console.log("whoogleNormalRedirectsChecks: ", val)
}

let whoogleTorRedirectsChecks;
const getWhoogleTorRedirectsChecks = () => whoogleTorRedirectsChecks;
function setWhoogleTorRedirectsChecks(val) {
  whoogleTorRedirectsChecks = val;
  browser.storage.local.set({ whoogleTorRedirectsChecks })
  console.log("whoogleTorRedirectsChecks: ", val)
}

let whoogleNormalCustomRedirects = [];
const getWhoogleNormalCustomRedirects = () => whoogleNormalCustomRedirects;
function setWhoogleNormalCustomRedirects(val) {
  whoogleNormalCustomRedirects = val;
  browser.storage.local.set({ whoogleNormalCustomRedirects })
  console.log("whoogleNormalCustomRedirects: ", val)
}

let whoogleTorCustomRedirects = [];
const getWhoogleTorCustomRedirects = () => whoogleTorCustomRedirects;
function setWhoogleTorCustomRedirects(val) {
  whoogleTorCustomRedirects = val;
  browser.storage.local.set({ whoogleTorCustomRedirects })
  console.log("whoogleTorCustomRedirects: ", val)
}

let searxNormalRedirectsChecks;
const getSearxNormalRedirectsChecks = () => searxNormalRedirectsChecks;
function setSearxNormalRedirectsChecks(val) {
  searxNormalRedirectsChecks = val;
  browser.storage.local.set({ searxNormalRedirectsChecks })
  console.log("searxNormalRedirectsChecks: ", val)
}

let searxTorRedirectsChecks;
const getSearxTorRedirectsChecks = () => searxTorRedirectsChecks;
function setSearxTorRedirectsChecks(val) {
  searxTorRedirectsChecks = val;
  browser.storage.local.set({ searxTorRedirectsChecks })
  console.log("searxTorRedirectsChecks: ", val)
}

let searxNormalCustomRedirects = [];
const getSearxNormalCustomRedirects = () => searxNormalCustomRedirects;
function setSearxNormalCustomRedirects(val) {
  searxNormalCustomRedirects = val;
  browser.storage.local.set({ searxNormalCustomRedirects })
  console.log("searxNormalCustomRedirects: ", val)
}

let searxTorCustomRedirects = [];
const getSearxTorCustomRedirects = () => searxTorCustomRedirects;
function setSearxTorCustomRedirects(val) {
  searxTorCustomRedirects = val;
  browser.storage.local.set({ searxTorCustomRedirects })
  console.log("searxTorCustomRedirects: ", val)
}

let searxngNormalRedirectsChecks;
const getSearxngNormalRedirectsChecks = () => searxngNormalRedirectsChecks;
function setSearxngNormalRedirectsChecks(val) {
  searxngNormalRedirectsChecks = val;
  browser.storage.local.set({ searxngNormalRedirectsChecks })
  console.log("searxngNormalRedirectsChecks: ", val)
}

let searxngTorRedirectsChecks;
const getSearxngTorRedirectsChecks = () => searxngTorRedirectsChecks;
function setSearxngTorRedirectsChecks(val) {
  searxngTorRedirectsChecks = val;
  browser.storage.local.set({ searxngTorRedirectsChecks })
  console.log("searxngTorRedirectsChecks: ", val)
}

let searxngNormalCustomRedirects = [];
const getSearxngNormalCustomRedirects = () => searxngNormalCustomRedirects;
function setSearxngNormalCustomRedirects(val) {
  searxngNormalCustomRedirects = val;
  browser.storage.local.set({ searxngNormalCustomRedirects })
  console.log("searxngNormalCustomRedirects: ", val)
}

let searxngTorCustomRedirects = [];
const getSearxngTorCustomRedirects = () => searxngTorCustomRedirects;
function setSearxngTorCustomRedirects(val) {
  searxngTorCustomRedirects = val;
  browser.storage.local.set({ searxngTorCustomRedirects })
  console.log("searxngTorCustomRedirects: ", val)
}

let disable;
const getDisable = () => disable;
function setDisable(val) {
  disable = val;
  browser.storage.local.set({ disableSearch: disable })
  console.log("disableSearch: ", disable)
}

let frontend;
const getFrontend = () => frontend;
function setFrontend(val) {
  frontend = val;
  browser.storage.local.set({ searchFrontend: frontend })
  console.log("searchFrontend: ", frontend)
};

let protocol;
const getProtocol = () => protocol;
function setProtocol(val) {
  protocol = val;
  browser.storage.local.set({ searchProtocol: val })
  console.log("searchProtocol: ", val)
}

let theme;
let applyThemeToSites;
function initSearxCookies() {
  let themeValue;
  if (theme == 'light') themeValue = 'logicodev';
  if (theme == 'dark') themeValue = 'logicodev-dark';
  if (applyThemeToSites && themeValue) {
    let allInstances = [...redirects.searx.normal, ...redirects.searx.tor, ...searxNormalCustomRedirects, ...searxTorCustomRedirects]
    let checkedInstances = [...searxNormalRedirectsChecks, ...searxNormalCustomRedirects, ...searxTorRedirectsChecks, ...searxTorCustomRedirects]
    for (const instanceUrl of allInstances)
      if (!checkedInstances.includes(instanceUrl)) {
        browser.cookies.remove({
          url: instanceUrl,
          name: "oscar-style",
        })
        browser.cookies.remove({
          url: instanceUrl,
          name: "oscar",
        })
      }
    for (const instanceUrl of checkedInstances) {
      browser.cookies.set({
        url: instanceUrl,
        name: "oscar-style",
        value: themeValue
      })
      browser.cookies.set({
        url: instanceUrl,
        name: "theme",
        value: 'oscar'
      })
    }
  }
}

function initSearxngCookies() {
  let themeValue;
  if (theme == 'light') themeValue = 'logicodev';
  if (theme == 'dark') themeValue = 'logicodev-dark';
  if (applyThemeToSites && themeValue) {
    let allInstances = [...redirects.searxng.normal, ...redirects.searxng.tor, ...searxngNormalCustomRedirects, ...searxngTorCustomRedirects]
    let checkedInstances = [...searxngNormalRedirectsChecks, ...searxngNormalCustomRedirects, ...searxngTorRedirectsChecks, ...searxngTorCustomRedirects]
    for (const instanceUrl of allInstances)
      if (!checkedInstances.includes(instanceUrl)) {
        browser.cookies.remove({
          url: instanceUrl,
          name: "oscar-style",
        })
        browser.cookies.remove({
          url: instanceUrl,
          name: "oscar",
        })
      }
    for (const instanceUrl of checkedInstances) {
      browser.cookies.set({
        url: instanceUrl,
        name: "oscar-style",
        value: themeValue
      })
      browser.cookies.set({
        url: instanceUrl,
        name: "theme",
        value: 'oscar'
      })
    }
  }
}

function initWhoogleCookies() {
  let checkedInstances = [...whoogleNormalRedirectsChecks, ...whoogleNormalCustomRedirects, ...whoogleTorRedirectsChecks, ...whoogleTorCustomRedirects]

  // for (const item of checkedInstances) {
  let request = new XMLHttpRequest();
  // request.open("POST", `${item}/config`);
  browser.cookies.get(
    {
      url: 'http://0.0.0.0:5000',
      name: "session"
    },
    cookie => {
      request.open("POST", 'http://0.0.0.0:5000/config');
      request.withCredentials = true;

      let data = `country=&lang_interface=&lang_search=&near=&block=&block_title=&block_url=&theme=light&url=http%3A%2F%2F0.0.0.0%3A5000%2F&style=++++++++++++++++++++++++++++++++%2F*+Colors+*%2F%0D%0A%3Aroot+%7B%0D%0A++++%2F*+LIGHT+THEME+COLORS+*%2F%0D%0A++++--whoogle-logo%3A+%23685e79%3B%0D%0A++++--whoogle-page-bg%3A+%23ffffff%3B%0D%0A++++--whoogle-element-bg%3A+%234285f4%3B%0D%0A++++--whoogle-text%3A+%23000000%3B%0D%0A++++--whoogle-contrast-text%3A+%23ffffff%3B%0D%0A++++--whoogle-secondary-text%3A+%2370757a%3B%0D%0A++++--whoogle-result-bg%3A+%23ffffff%3B%0D%0A++++--whoogle-result-title%3A+%231967d2%3B%0D%0A++++--whoogle-result-url%3A+%230d652d%3B%0D%0A++++--whoogle-result-visited%3A+%234b11a8%3B%0D%0A%0D%0A++++%2F*+DARK+THEME+COLORS+*%2F%0D%0A++++--whoogle-dark-logo%3A+%23685e79%3B%0D%0A++++--whoogle-dark-page-bg%3A+%23101020%3B%0D%0A++++--whoogle-dark-element-bg%3A+%234285f4%3B%0D%0A++++--whoogle-dark-text%3A+%23ffffff%3B%0D%0A++++--whoogle-dark-contrast-text%3A+%23ffffff%3B%0D%0A++++--whoogle-dark-secondary-text%3A+%23bbbbbb%3B%0D%0A++++--whoogle-dark-result-bg%3A+%23212131%3B%0D%0A++++--whoogle-dark-result-title%3A+%2364a7f6%3B%0D%0A++++--whoogle-dark-result-url%3A+%2334a853%3B%0D%0A++++--whoogle-dark-result-visited%3A+%23bbbbff%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-w+%7B%0D%0A++++fill%3A+%234285f4%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-h+%7B%0D%0A++++fill%3A+%23ea4335%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-o-1+%7B%0D%0A++++fill%3A+%23fbbc05%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-o-2+%7B%0D%0A++++fill%3A+%234285f4%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-g+%7B%0D%0A++++fill%3A+%2334a853%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-l+%7B%0D%0A++++fill%3A+%23ea4335%3B%0D%0A%7D%0D%0A%0D%0A%23whoogle-e+%7B%0D%0A++++fill%3A+%23fbbc05%3B%0D%0A%7D%0D%0A%0D%0A++++++++++++++++++++++++++++`;
      // let data = prefsStyle + prefsTheme;
      console.log(data);
      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE)
          console.log(request.responseText)
      };
      request.send(data);
    })


  // let prefsStyle = `style=${encodeURIComponent('":root{--whoogle-logo:#685e79;--whoogle-page-bg:#fff;--whoogle-element-bg:#4285f4;--whoogle-text:#000;--whoogle-contrast-text:#fff;--whoogle-secondary-text:#70757a;--whoogle-result-bg:#fff;--whoogle-result-title:#1967d2;--whoogle-result-url:#0d652d;--whoogle-result-visited:#4b11a8;--whoogle-dark-logo:#685e79;--whoogle-dark-page-bg:#101020;--whoogle-dark-element-bg:#4285f4;--whoogle-dark-text:#fff;--whoogle-dark-contrast-text:#fff;--whoogle-dark-secondary-text:#bbb;--whoogle-dark-result-bg:#212131;--whoogle-dark-result-title:#64a7f6;--whoogle-dark-result-url:#34a853;--whoogle-dark-result-visited:#bbf}#whoogle-w{fill:#4285f4}#whoogle-h{fill:#ea4335}#whoogle-o-1{fill:#fbbc05}#whoogle-o-2{fill:#4285f4}#whoogle-g{fill:#34a853}#whoogle-l{fill:#ea4335}#whoogle-e{fill:#fbbc05}"')}`;

  //   {"style": ":root{--whoogle-logo:#685e79;--whoogle-page-bg:#fff;--whoogle-element-bg:#4285f4;--whoogle-text:#000;--whoogle-contrast-text:#fff;--whoogle-secondary-text:#70757a;--whoogle-result-bg:#fff;--whoogle-result-title:#1967d2;--whoogle-result-url:#0d652d;--whoogle-result-visited:#4b11a8;--whoogle-dark-logo:#685e79;--whoogle-dark-page-bg:#101020;--whoogle-dark-element-bg:#4285f4;--whoogle-dark-text:#fff;--whoogle-dark-contrast-text:#fff;--whoogle-dark-secondary-text:#bbb;--whoogle-dark-result-bg:#212131;--whoogle-dark-result-title:#64a7f6;--whoogle-dark-result-url:#34a853;--whoogle-dark-result-visited:#bbf}#whoogle-w{fill:#4285f4}#whoogle-h{fill:#ea4335}#whoogle-o-1{fill:#fbbc05}#whoogle-o-2{fill:#4285f4}#whoogle-g{fill:#34a853}#whoogle-l{fill:#ea4335}#whoogle-e{fill:#fbbc05}",
  // "theme":"dark"
  // }

  // let prefsStyle = `style=${encodeURIComponent('')}`;
  // let prefsTheme = "";
  // if (applyThemeToSites && theme != "DEFAULT") prefsTheme = `&theme=${encodeURIComponent(theme)}`;

  // }
}

function redirect(url) {
  if (disable) return;
  if (!targets.some(rx => rx.test(url.href))) return;
  if (url.searchParams.has('tbm')) return;

  if (!url.searchParams.has('q') && url.pathname != '/') return;

  let randomInstance;
  let path;
  if (frontend == 'searx') {
    let instancesList;
    if (protocol == 'normal') instancesList = [...searxNormalRedirectsChecks, ...searxNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...searxTorRedirectsChecks, ...searxTorCustomRedirects];
    if (instancesList.length === 0) return null;
    randomInstance = commonHelper.getRandomInstance(instancesList)
    path = "/";
  }
  else if (frontend == 'searxng') {
    let instancesList;
    if (protocol == 'normal') instancesList = [...searxngNormalRedirectsChecks, ...searxngNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...searxngTorRedirectsChecks, ...searxngTorCustomRedirects];
    if (instancesList.length === 0) return null;
    randomInstance = commonHelper.getRandomInstance(instancesList)
    path = "/";
  }
  else if (frontend == 'whoogle') {
    let instancesList
    if (protocol == 'normal') instancesList = [...whoogleNormalRedirectsChecks, ...whoogleNormalCustomRedirects];
    if (protocol == 'tor') instancesList = [...whoogleTorRedirectsChecks, ...whoogleTorCustomRedirects];
    if (instancesList.length === 0) return null;
    randomInstance = commonHelper.getRandomInstance(instancesList)
    path = "/search";
  }
  else if (frontend == 'startpage') {
    randomInstance = redirects.startpage.normal;
    path = "/do/search";
  }
  if (!url.searchParams.has('q')) path = '/';

  let searchQuery = "";
  if (url.searchParams.has('q')) searchQuery = `?q=${url.searchParams.get('q')}`;

  return `${randomInstance}${path}${searchQuery}`;
}

function switchInstance(url) {
  let protocolHost = commonHelper.protocolHost(url);

  let searchList = [
    ...redirects.searx.normal,
    ...redirects.searx.tor,

    ...searxNormalCustomRedirects,
    ...searxTorCustomRedirects,

    ...redirects.searx.normal,
    ...redirects.searxng.tor,

    ...searxngNormalCustomRedirects,
    ...searxngTorCustomRedirects,

    ...redirects.whoogle.normal,
    ...redirects.whoogle.tor,

    ...whoogleNormalCustomRedirects,
    ...whoogleTorCustomRedirects,
  ]

  if (!searchList.includes(protocolHost)) return null;

  let instancesList;
  if (frontend == 'searx') {
    if (protocol == 'normal') instancesList = [...searxNormalRedirectsChecks, ...searxNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...searxTorRedirectsChecks, ...searxTorCustomRedirects];
  }
  else if (frontend == 'searxng') {
    if (protocol == 'normal') instancesList = [...searxngNormalRedirectsChecks, ...searxngNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...searxngTorRedirectsChecks, ...searxngTorCustomRedirects];
  }
  else if (frontend == 'whoogle') {
    if (protocol == 'normal') instancesList = [...whoogleNormalRedirectsChecks, ...whoogleNormalCustomRedirects];
    else if (protocol == 'tor') instancesList = [...whoogleTorRedirectsChecks, ...whoogleTorCustomRedirects];
  }

  console.log("instancesList", instancesList);
  let index = instancesList.indexOf(protocolHost);
  if (index > -1) instancesList.splice(index, 1);

  if (instancesList.length === 0) return null;

  let randomInstance = commonHelper.getRandomInstance(instancesList);
  return `${randomInstance}${url.pathname}${url.search}`;
}

async function init() {
  return new Promise((resolve) => {
    fetch('/instances/data.json').then(response => response.text()).then(data => {
      let dataJson = JSON.parse(data);
      browser.storage.local.get(
        [
          "disableSearch",
          "searchFrontend",
          "searchRedirects",

          "whoogleNormalRedirectsChecks",
          "whoogleNormalCustomRedirects",

          "whoogleTorRedirectsChecks",
          "whoogleTorCustomRedirects",

          "searxNormalRedirectsChecks",
          "searxNormalCustomRedirects",

          "searxTorRedirectsChecks",
          "searxTorCustomRedirects",

          "searxngNormalRedirectsChecks",
          "searxngNormalCustomRedirects",

          "searxngTorRedirectsChecks",
          "searxngTorCustomRedirects",

          "theme",
          "applyThemeToSites",

          "searchProtocol",
        ],
        r => {
          disable = r.disableSearch ?? false;

          protocol = r.searchProtocol ?? 'normal';

          frontend = r.searchFrontend ?? 'searx';

          theme = r.theme ?? 'DEFAULT';
          applyThemeToSites = r.applyThemeToSites ?? false;

          redirects.searx = dataJson.searx;
          redirects.searxng = dataJson.searxng;
          redirects.whoogle = dataJson.whoogle;
          if (r.searchRedirects) redirects = r.searchRedirects;

          whoogleNormalRedirectsChecks = r.whoogleNormalRedirectsChecks ?? [...redirects.whoogle.normal];
          whoogleNormalCustomRedirects = r.whoogleNormalCustomRedirects ?? [];

          whoogleTorRedirectsChecks = r.whoogleTorRedirectsChecks ?? [...redirects.whoogle.tor];
          whoogleTorCustomRedirects = r.whoogleTorCustomRedirects ?? [];

          searxNormalRedirectsChecks = r.searxNormalRedirectsChecks ?? [...redirects.searx.normal];
          searxNormalCustomRedirects = r.searxNormalCustomRedirects ?? [];

          searxTorRedirectsChecks = r.searxTorRedirectsChecks ?? [...redirects.searx.tor];
          searxTorCustomRedirects = r.searxTorCustomRedirects ?? [];

          searxngNormalRedirectsChecks = r.searxngNormalRedirectsChecks ?? [...redirects.searxng.normal];
          searxngNormalCustomRedirects = r.searxngNormalCustomRedirects ?? [];

          searxngTorRedirectsChecks = r.searxngTorRedirectsChecks ?? [...redirects.searxng.tor];
          searxngTorCustomRedirects = r.searxngTorCustomRedirects ?? [];

          initSearxCookies()
          initSearxngCookies()
          // initWhoogleCookies()

          resolve();
        }
      );
    });
  });
}

export default {

  getDisable,
  setDisable,

  getRedirects,
  getCustomRedirects,

  setSearxRedirects,
  setSearxngRedirects,
  setWhoogleRedirects,

  getFrontend,
  setFrontend,

  getWhoogleNormalRedirectsChecks,
  setWhoogleNormalRedirectsChecks,
  getWhoogleNormalCustomRedirects,
  setWhoogleNormalCustomRedirects,

  getWhoogleTorRedirectsChecks,
  setWhoogleTorRedirectsChecks,
  getWhoogleTorCustomRedirects,
  setWhoogleTorCustomRedirects,

  getSearxNormalRedirectsChecks,
  setSearxNormalRedirectsChecks,
  getSearxNormalCustomRedirects,
  setSearxNormalCustomRedirects,

  getSearxTorRedirectsChecks,
  setSearxTorRedirectsChecks,
  getSearxTorCustomRedirects,
  setSearxTorCustomRedirects,

  getSearxngNormalRedirectsChecks,
  setSearxngNormalRedirectsChecks,
  getSearxngNormalCustomRedirects,
  setSearxngNormalCustomRedirects,

  getSearxngTorRedirectsChecks,
  setSearxngTorRedirectsChecks,
  getSearxngTorCustomRedirects,
  setSearxngTorCustomRedirects,

  getProtocol,
  setProtocol,

  redirect,
  init,
  switchInstance,
};
