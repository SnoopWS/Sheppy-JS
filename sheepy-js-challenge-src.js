//
// Deobfuscated & Renamed by @redstoneprojrjr
//

const elroy = function () {
  let jenavive = true;
  return function (mah, kensy) {
    const caitland = jenavive ? function () {
      if (kensy) {
        const arihan = kensy.apply(mah, arguments);
        kensy = null;
        return arihan;
      }
    } : function () {};
    jenavive = false;
    return caitland;
  };
}();

const naomee = elroy(this, function () {
  const rosenia = function () {
    let montford;
    try {
      montford = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (verl) {
      montford = window;
    }
    return montford;
  };
  const anamia = rosenia();
  const fount = anamia.console = anamia.console || {};
  const alcario = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let radoslav = 0; radoslav < alcario.length; radoslav++) {
    const emone = elroy.constructor.prototype.bind(elroy);
    const kymari = alcario[radoslav];
    const tawania = fount[kymari] || emone;
    emone.__proto__ = elroy.bind(elroy);
    emone.toString = tawania.toString.bind(tawania);
    fount[kymari] = emone;
  }
});
naomee();

const fetchIPAddress = async () => {
  const issiah = await fetch("https://api.ipify.org?format=json");
  const amiaha = await issiah.json();
  return amiaha.ip;
};

const calculateSHA256 = async input => {
  const textEncoder = new TextEncoder();
  const encodedInput = textEncoder.encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedInput);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedString = hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
  return hashedString;
};

const getUniqueId = async (jadarrien, ollye, philemon, tonielle, brionne, makiala, saralynn, najera, allysandra, merick, mattix, quayshaun, anny) => {
  const result = [jadarrien, ollye, philemon, tonielle, brionne, makiala, saralynn, najera, allysandra, merick, mattix, quayshaun, anny].join("|");
  return await calculateSHA256(result);
};

function detectPuppeteer() {
  let err = new Error("sheep err");
  if (err.stack.toString().includes("puppeteer")) {
    return true;
  }
  return false;
}

const checkPDFLoad = () => {
  return new Promise((factual, idk) => {
    const frame = document.createElement("iframe");
    frame.style.display = "none";
    frame.src = "https://www.africau.edu/images/default/sample.pdf";
    frame.onload = () => factual(true);
    frame.onerror = () => factual(false);
    document.body.appendChild(frame);
  });
};

(async () => {
  const ip = await fetchIPAddress();
  const usrAgent = navigator.userAgent;
  const screenWidth = screen.width;
  const screenHeight = screen.height;
  const resolution = screenWidth + "x" + screenHeight;
  const innerRes = window.innerWidth + "x" + window.innerHeight;
  const browserInfo = navigator.appName + " " + navigator.appVersion + " | " + navigator.platform + " | " + navigator.vendor;
  const supportRTC = "RTCPeerConnection" in window || "mozRTCPeerConnection" in window || "webkitRTCPeerConnection" in window;
  const supportBT = ("bluetooth" in navigator);
  const browserProduct = window.navigator.product;
  const plugins = Array.from(navigator.plugins).map(tomothy => tomothy.name + " (" + Array.from(tomothy).map(negeen => negeen.type).join(",") + ")").join(";");
  let resCheck = false;
  const phoneResCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (!phoneResCheck) {
    resCheck = screenWidth < 800 || screenHeight < 600;
  } else {
    resCheck = screenWidth < 100 || screenHeight < 100;
  }
  const webdriverList = ["__webdriver_evaluate", "__selenium_evaluate", "playwright-extra", "playwright", "wright", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped", "webdriver", "__driver_evaluate", "__webdriver_evaluate", "__selenium_evaluate", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__selenium_unwrapped", "__fxdriver_unwrapped", "_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "_WEBDRIVER_ELEM_CACHE", "ChromeDriverw", "driver-evaluate", "webdriver-evaluate", "selenium-evaluate", "webdriverCommand", "webdriver-evaluate-response", "__webdriverFunc", "__webdriver_script_fn", "__$webdriverAsyncExecutor", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "$chrome_asyncScriptInfo", "$cdc_asdjflasutopfhvcZLmcfl_"];
  
  const pdfCheck = await checkPDFLoad();
  let passed = pdfCheck && !resCheck;
  
  if (detectPuppeteer()) {
    passed = false;
  }
  
  if (!passed) {
    for (const webdriver of webdriverList) {
      if (window[webdriver]) {
        passed = true;
        break;
      }
    }
  }
  
  if (!passed) {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    const expiresUTC = date.toUTCString();
    document.cookie = "uniqueId=" + UniqueID + " bot=true; path=/; expires=" + expiresUTC + ";";
    window.location.href = "https://www.google.com";
    return;
  }
  
  const timezoneOffset = new Date().getTimezoneOffset();
  const Languages = navigator.languages.join(",");
  const screenColorDepth = screen.colorDepth;
  
  const UniqueID = await getUniqueId(ip, usrAgent, resolution, innerRes, browserInfo, supportRTC, supportBT, browserProduct, plugins, "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, timezoneOffset, Languages, screenColorDepth);
  
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 7);
  const expireTime = expireDate.toUTCString();
  
  // creates a cookie formatted "1111111ab111c1a1c01111db37326ba36ac68a8fa7fed79ab03220162e11c465 bot=false"
  document.cookie = "uniqueId=" + UniqueID + " bot=false; path=/; expires=" + expireTime + ";";
})();
