// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hIyRZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "75e49df78d8841ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Z4Rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _characterDataJs = require("./character-data.js");
var _characterDataJsDefault = parcelHelpers.interopDefault(_characterDataJs);
var _characterJs = require("./character.js");
var _characterJsDefault = parcelHelpers.interopDefault(_characterJs);
var _spellsDataJs = require("./spells-data.js");
var _spellsDataJsDefault = parcelHelpers.interopDefault(_spellsDataJs);
var _spellsClassJs = require("./spells-class.js");
var _spellsClassJsDefault = parcelHelpers.interopDefault(_spellsClassJs);
var _utilsJs = require("./utils.js");
var _manaTriangleJs = require("./mana-triangle.js");
var _renderHealthChartJs = require("./render-health-chart.js");
var _audioJs = require("./audio.js");
// **********************  REGISTER SERVICE WORKER **********************
if ("serviceWorker" in navigator) navigator.serviceWorker.register(require("51eed6577d89974b")).then(function(reg) {
    console.log("Yey!", reg);
}).catch(function(err) {
    console.log("Boo!", err);
});
// **********************  CONTAINER ELEMENTS **********************
const player1Container = document.getElementById("character-1-art");
const player2Container = document.getElementById("character-2-art");
const mainContainer = document.getElementById("main-container");
const attackButton = document.getElementById("attack-button");
const manaRotateContainer = document.getElementById("mana-rotate");
// **********************  GLOBAL VARIABLES **********************
let isWaiting = false;
// this variable is for the message about running out of Mana
let hasNotDisplayedTheMessageBefore = true;
// this variable will create an array of the polygons that combine to form the Mana Heptagon
let polygonArr = (0, _manaTriangleJs.parseHeptagonArray)((0, _manaTriangleJs.heptagonNode));
// **********************  LOGIC FOR BUILDING ARRAY OF HEROES **********************
let heroArray = [
    "conscript",
    "ignisfatuus",
    "mage",
    "naqualk",
    "soulforge"
];
const characterOrder = (array)=>{
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [
            array[j],
            array[i]
        ];
    }
    return array;
};
let shuffledArray = characterOrder(heroArray);
// **********************  LOGIC FOR RENDERING CHARACTERS **********************
let hero = setNextCharacter();
const villain = new (0, _characterJsDefault.default)((0, _characterDataJsDefault.default).zedfire);
// shuffledSpellArr has to be below hero
let shuffledSpellArr = hero.spells.shuffleArr((0, _spellsDataJsDefault.default));
function render() {
    player1Container.innerHTML = hero.renderCharacter();
    player2Container.innerHTML = villain.renderCharacter();
    setTimeout(enableAttackButton, 3500);
}
render();
// **********************  LOGIC FOR PLAYING MUSIC **********************
(0, _audioJs.playGameMusic)();
// **********************  LOGIC FOR SPELLS **********************
function importSpellCSS() {
    if (document.getElementById("spellCSS")) return;
    else {
        const link = document.createElement("link");
        link.rel = "stylesheet", link.type = "text/css";
        link.href = "css/spell.css";
        link.id = "spellCss";
        document.head.appendChild(link);
    }
}
function castSpells() {
    // import spells here to prevent heavy load on first page load
    importSpellCSS();
    // set timeout gives imperceptible space to let CSS load before DOM refreshes, or else there is glitchiness
    setTimeout(()=>{
        let nextThreeCards = hero.spells.pickThreeCards(shuffledSpellArr);
        let cardRendering = hero.spells.renderCards(nextThreeCards).join("");
        hero.spells.appendCards(cardRendering);
        hero.spells.appendCardsTitle("spells-container");
        hero.spells.setCardChoiceHandler(hero.spells.handleCardChoice(hero, nextThreeCards, villain, render, handleSpellDeath), hero.spells.removeAppendedCards);
        // parseHeptagonArray manages the heptagon and subtracts a section each time
        (0, _manaTriangleJs.hideAPolygon)(polygonArr);
        (0, _manaTriangleJs.removeAPolygon)(polygonArr);
    // can't put the if statement here because it is getting set as a handler on an event listener.  Have to do the logic on the event listener
    }, 100);
}
function handleSpellDeath(hero, villain) {
    // at this point someone is dead.  Options are: hero and villain, just hero, just villain
    if (hero.dead || villain.dead) {
        if (hero.dead && villain.dead) // both are dead
        endGameWithDelay();
        else if (hero.dead) {
            // hero is dead, are there more heroes?
            isWaiting = true;
            if (shuffledArray.length > 0) // there are still characters left
            setTimeout(handleCharacterDeathTiming, 2510);
            else // no more characters left
            endGameWithDelay();
        } else // villain is dead
        endGameWithDelay();
    }
}
function displayNoManaMessage() {
    hasNotDisplayedTheMessageBefore = false;
    let messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "no-more-spells");
    messageDiv.setAttribute("id", "no-more-spells");
    messageDiv.innerHTML = `
    <div class="no-spells-message">
        <h1>Mana has been depleted</h1>
        <p>You must continue without any more magical prowess</p>
    </div>`;
    mainContainer.appendChild(messageDiv);
    setTimeout(()=>{
        document.getElementById("no-more-spells").classList.add("disappear");
        messageDiv.addEventListener("animationend", ()=>{
            messageDiv.style.display = "none";
        });
    }, 2500);
}
// **********************  LOGIC FOR BASIC ATTACKS **********************
function attack() {
    if (!isWaiting) {
        // creates a pause
        if (hero.numberOfTurns % 1 === 0 && hero.numberOfTurns > 0) {
            hero.numberOfTurns = hero.numberOfTurns + 1;
            // spell every 5th turn
            if (!hasNotDisplayedTheMessageBefore) return;
            else if (shuffledSpellArr.length === 0) {
                displayNoManaMessage();
                (0, _utilsJs.hideElement)(manaRotateContainer);
                return;
            } else castSpells();
        } else {
            hero.getDiceHTML(hero.currentDiceScore);
            villain.getDiceHTML(villain.currentDiceScore);
            hero.setDefendDiceHTML();
            villain.setDefendDiceHTML();
            hero.takeDamage(villain.currentDiceScore, hero.currentDefendDiceScore);
            villain.takeDamage(hero.currentDiceScore, villain.currentDefendDiceScore);
            disableAttackButton();
            handleFlyOuts();
            (0, _renderHealthChartJs.updateHealthChart)();
            render();
            if (villain.dead || hero.dead) {
                if (villain.dead && hero.dead) endGameWithDelay();
                else if (villain.dead) endGameWithDelay();
                else if (hero.dead) {
                    isWaiting = true;
                    if (shuffledArray.length > 0) setTimeout(handleCharacterDeathTiming, 2510);
                    else endGameWithDelay();
                }
            }
        }
    }
}
function disableAttackButton() {
    attackButton.disabled = true;
}
function enableAttackButton() {
    attackButton.disabled = false;
}
function handleFlyOuts() {
    hero.renderMultiplesForFlyOutMessage(villain.duplicates);
    villain.renderMultiplesForFlyOutMessage(hero.duplicates);
    hero.resetMultiplesForFlyOutMessage();
    villain.resetMultiplesForFlyOutMessage();
    disableAttackButton();
}
function handleCharacterDeathTiming() {
    hero = setNextCharacter();
    render();
    isWaiting = false;
}
function setNextCharacter() {
    const nextCharacterData = (0, _characterDataJsDefault.default)[shuffledArray.shift()];
    return nextCharacterData ? new (0, _characterJsDefault.default)(nextCharacterData, new (0, _spellsClassJsDefault.default)()) : {};
}
// **********************  LOGIC FOR ENDING GAME **********************
function endGame() {
    isWaiting = true;
    const villainMovieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>As Death descends from heights, and obscurity from the shadows, The hope of men has floundered and the memories of elves are no more...<span class="ending-message">You have lost and Zedfire has won!</span></h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_630909246.webm" type="video/webm">
                <track src="./assets/assets/defeat_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`;
    const heroMovieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2><span class="ending-message">You win!</span>  Only the integrity and fielty of a hero, combined with the unforseeable but infatigable friendship of this group of misfits could have saved us from such evil.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_396656517.webm" type="video/webm">
                <track src="./assets/assets/victory_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`;
    const tieHTML = `
        <div class="ending-message-container">
        <h1>Fantasy Slayer</h1>
            <h2>The Gods have not seen fit to determine how to which side to tip the scales of justice.  Both Hero and Villain have languised.  <span class="ending-message">It is a draw</span>It seems it will lay with another to determine the outcome of this story.</h2>
            <video id="background-video" autoplay muted>
                <source id="video-source" src="./assets/assets/AdobeStock_583211956.webm" type="video/webm">
                <track src="./assets/assets/tie_captions.vtt" kind="captions" srclang="en" label="english_captions" type="text/vtt" default>
            </video>
            <button class="quest-button" id="reset-button">Play Again</button>
        </div>`;
    if (villain.dead && hero.dead && shuffledArray.length === 0) {
        (0, _utilsJs.hideElement)(manaRotateContainer);
        mainContainer.innerHTML = tieHTML;
        const videoSource = document.getElementById("background-video");
        videoSource.load();
        (0, _audioJs.playAudio)((0, _audioJs.outTroAudio), (0, _audioJs.backGroundAudio));
    } else if (villain.dead) {
        (0, _utilsJs.hideElement)(manaRotateContainer);
        mainContainer.innerHTML = heroMovieHTML;
        const videoSource = document.getElementById("background-video");
        videoSource.load();
        (0, _audioJs.playAudio)((0, _audioJs.outTroAudio), (0, _audioJs.backGroundAudio));
    } else {
        (0, _utilsJs.hideElement)(manaRotateContainer);
        mainContainer.innerHTML = villainMovieHTML;
        const videoSource = document.getElementById("background-video");
        videoSource.load();
        (0, _audioJs.playAudio)((0, _audioJs.outTroAudio), (0, _audioJs.backGroundAudio));
    }
    document.getElementById("reset-button").addEventListener("click", ()=>{
        (0, _audioJs.stopAllAudio)();
        location.reload();
    });
}
function endGameWithDelay() {
    setTimeout(()=>{
        endGame();
    }, 2500);
}
document.getElementById("attack-button").addEventListener("mousedown", attack);

},{"./character-data.js":"c6Mh6","./character.js":"lSuNr","./spells-data.js":"3yCuS","./spells-class.js":"jFfFa","./utils.js":"eYK4L","./mana-triangle.js":"aTkNB","./render-health-chart.js":"BFBQo","./audio.js":"daaY0","51eed6577d89974b":"lq4Ai","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6Mh6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const characterData = {
    conscript: {
        avatar: "assets/assets/conscript2.webp",
        backstory: "Rose to the rank of captain during the Simerian wars.  In one night he saw his company run through with the arrows of the Naqalkuan archers.  To add to his shame they refused to take him prisoner, but sent him home to bear his shame in front of his land and people.  He vowed he would not return until his honor was restored.  So for ten years he lay in the wilderness, learning every type of war nature wages, from the persistence of the sun to the brutality of a hungry mother bear, to the coordination of an invading ant colony, to the stealth of moon-silk spider. Now he stands ready to complete his vow.",
        catchphrase: "Bravery only takes you so far.",
        characterCardFlexDirection: "row",
        characterClass: "hero",
        characterName: "Marcus anr\xe6d",
        cssOrder: -1,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        dead: false,
        duplicates: {},
        distance: 67,
        elId: "conscript",
        health: 200,
        numberOfTurns: 0,
        originalHealth: 200,
        intelligence: 89,
        messages: "",
        race: "human",
        relationship: "hardened",
        skill: [
            "hand-to-hand combat",
            "survival",
            "strategem",
            "honor"
        ],
        speed: 50,
        strength: 75,
        totalDiceCount: 3,
        weakness: [
            "hunger",
            "non-magic race"
        ],
        weapon: "Broad Sword"
    },
    ignisfatuus: {
        avatar: "assets/assets/ignisfatuus2.webp",
        backstory: "For centuries humans have wondered about the jack-o-wisps that have wandered the edge of the Elven forests, never being able to discover the truth behind this Elvish secret, until one day Sid fell in love with a young human girl.  Once the secret slipped, he was banished forever, and his betrothed was so scared he never saw her again. Abandoned by his people, lost to his love, the only thing he had left was a smile, but all he could do with it was to give it away.",
        catchphrase: "Wanna hear a secret?",
        characterCardFlexDirection: "row",
        characterClass: "hero",
        characterName: "Sidney son of Slugabed",
        cssOrder: -1,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        dead: false,
        duplicates: {},
        distance: 89,
        elId: "ignisfatuus",
        health: 75,
        numberOfTurns: 0,
        originalHealth: 75,
        intelligence: 100,
        messages: "",
        race: '"Fire-Fool" Elf',
        relationship: "loyal",
        skill: [
            "foolery",
            "levitation",
            "elemental"
        ],
        speed: 80,
        strength: 60,
        totalDiceCount: 7,
        weakness: [
            "rules",
            "strength",
            "secrets",
            "greed"
        ],
        weapon: "boughs and sparrows"
    },
    mage: {
        avatar: "assets/assets/mage2.webp",
        backstory: "Though his memory reaches beyond life before the Shadow of the Great War brought upon the world the Trials of Dauus, and even the moment the first rays of light broke over the Great Mountains of Fire before they were tamed by the Ignis Fatuii, he cannot remember the face of a mother.  He was here before all other races. Only time, and magic, and nature are older than He.",
        catchphrase: "Choose not to be harmed\u2014and you won't feel harmed. Don't feel harmed\u2014and you haven't been.",
        characterClass: "hero",
        characterCardFlexDirection: "row",
        characterName: "Hatchala the ancient one",
        cssOrder: -1,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        distance: 10,
        dead: false,
        duplicates: {},
        elId: "mage",
        health: 300,
        numberOfTurns: 0,
        originalHealth: 300,
        intelligence: 1000,
        messages: "",
        race: "unknown",
        relationship: "patriarchal",
        skill: [
            "cooking",
            "magic",
            "strategem"
        ],
        speed: 10,
        strength: 75,
        totalDiceCount: 4,
        weakness: [
            "remembrance"
        ],
        weapon: "magic"
    },
    naqualk: {
        avatar: "assets/assets/naqualk2.webp",
        backstory: 'Goyathlay emerged as a child from a land where scorching sun meets the unrelenting sands. She displayed an innate connection to the land. As a skilled tracker, she mastered the art of reading shifting dunes and deciphering desert secrets. Armed with his ancestral bow she became known as the "Sandborne Guardian." With the winds as her allies and the sun as her witness, Goyathlay stood as a beacon of hope against darkness in the heart of the scorching desert.',
        catchphrase: "Horizons are boundaries set by the mind, but broken by the heart",
        characterCardFlexDirection: "row",
        characterClass: "hero",
        characterName: "Goyathlay of the seering plains",
        cssOrder: -1,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        distance: 67,
        dead: false,
        duplicates: {},
        elId: "naqualk",
        health: 275,
        numberOfTurns: 0,
        originalHealth: 275,
        intelligence: 89,
        messages: "",
        race: "Desert Elf",
        relationship: "extrovert",
        skill: [
            "stealth",
            "infiltration",
            "elemental",
            "honor",
            "femininity"
        ],
        speed: 30,
        strength: 75,
        totalDiceCount: 3,
        weakness: [
            "intransigence",
            "rigid-fidelity"
        ],
        weapon: "Staff"
    },
    ogre: {
        avatar: "",
        backstory: "",
        catchphrase: "",
        characterCardFlexDirection: "row-reverse",
        characterClass: "villain",
        characterName: "",
        cssOrder: 0,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        distance: 10,
        dead: false,
        duplicates: {},
        elId: "",
        health: 1,
        numberOfTurns: 0,
        originalHealth: 1000,
        intelligence: 100,
        messages: "",
        race: "ogre",
        relationship: "",
        skill: "brute strength",
        speed: 15,
        strength: 80,
        totalDiceCount: 3,
        weakness: [
            "steel"
        ],
        weapon: "battle axe"
    },
    soulforge: {
        avatar: "assets/assets/soulforge2.webp",
        backstory: 'To the priest the process is called dismorgrification.  To the commoner it is called "soul-tearing" and "soul-forging."  The first is the process that happened while yet alive.  The dismorgrified must have commited an act so insidiously horrible the anatomy of their soul is literally ripped apart.  The second part of the process is what most term as "hell."  It is the absolutely solitary act of stitching together their own soul, one act of redemption at time. No one knows if it can actually be done, but everyone has a tale of the screams of the Soul Forge stalking the late hours.',
        catchphrase: "Death may be the greatest of all human blessings",
        characterCardFlexDirection: "row",
        characterClass: "hero",
        characterName: "Isolwyn Stormbrand",
        cssOrder: -1,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        distance: 67,
        dead: false,
        duplicates: {},
        elId: "soulforge",
        health: 325,
        numberOfTurns: 0,
        originalHealth: 325,
        intelligence: 89,
        messages: "",
        race: "dismorgrified soul",
        relationship: "empty",
        skill: [
            "interworld perception",
            "chaos",
            "foolery",
            "magic"
        ],
        speed: 5,
        strength: 90,
        totalDiceCount: 3,
        weakness: [
            "rage"
        ],
        weapon: "Styx Battle Axe"
    },
    zedfire: {
        avatar: "assets/assets/zedfire2.webp",
        backstory: "The original darkness.  The one who opposed humanities creation.  Born in the flames of the Gods wrath. Existing before the existence, he is not all-powerful, but he is connected to everything.  He is the shadow to every light, the trance that consumes when the dream flees your eyelids.  He is the not to everything that is, the antecedal complement that consumes everything that is good.  And he hungers for you.",
        catchphrase: "I am the fire that scorcheth humanity",
        characterCardFlexDirection: "row-reverse",
        characterClass: "villain",
        characterName: "Zedfire, H\xe6lend of darkness",
        cssOrder: 0,
        currentDiceScore: [],
        currentDefendDiceScore: [],
        distance: 10,
        dead: false,
        duplicates: {},
        elId: "zedfire",
        health: 2,
        numberOfTurns: 0,
        originalHealth: 2111,
        intelligence: 100,
        messages: "",
        race: "unknown",
        relationship: "adversarial",
        skill: [],
        speed: 50,
        strength: 80,
        totalDiceCount: 5,
        weakness: [
            "honor",
            "magic",
            "elemental"
        ],
        weapon: "dark-magic, fire"
    }
};
exports.default = characterData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lSuNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _renderHealthChartJs = require("./render-health-chart.js");
class Character {
    constructor(data, spells = null){
        Object.assign(this, data);
        this.diceArrayForRendering = (0, _utilsJs.renderDicePlaceHolderArray)(this.totalDiceCount);
        this.defendDiceArray = (0, _utilsJs.renderDefenseDicePlaceHolderArray)(1);
        this.defendDiceValue = "";
        this.spells = spells;
    }
    /* 

    FUNCTION PURPOSE: getIndexesOfDiceScoreMatches gets the indices of the matches so we know which element to highlight visually
    REQUIRED INPUT/DEPENDENCIES: an array
    OUTPUT: array
    SIDE EFFECTS: returns a sorted array of the correct indices that need to be highlighted

    */ getIndexesOfDiceScoreMatches(arr) {
        const indexOfDuplicates = [];
        const seenIndexes = {};
        for(let i = 0; i < arr.length; i++)if (arr[i] in seenIndexes) {
            indexOfDuplicates.push(seenIndexes[arr[i]]);
            indexOfDuplicates.push(i);
        } else seenIndexes[arr[i]] = i;
        return Array.from(new Set(indexOfDuplicates)).sort((a, b)=>a - b);
    }
    /* 

    FUNCTION PURPOSE: creates an array that represents the player's defensive dice roll and then renders HTML to the page for that roll
    REQUIRED INPUT/DEPENDENCIES: N/A
    OUTPUT: HTML
    SIDE EFFECTS: visually displays the Defensive dice for both Player and Villain

    */ setDefendDiceHTML() {
        this.defendDiceScore = (0, _utilsJs.getDiceRollArray)(1, 10);
        // this is hard coded because each player will always only have 1 ten-sided die
        this.defendDiceArray = this.defendDiceScore.map((num)=>{
            this.defendDiceValue = num;
            // defendDiceValue gets the same number printed out on the defend dice without rendering the dice
            return `
                <div class="dice defend-dice">
                    <div class="dice-inset">
                        ${num}
                    </div>
                </div>
            `;
        });
    }
    /* 

    FUNCTION PURPOSE: controls order of calling 1) offensive dice roll 2) render Banner 3) get matches 4) rendering dice to page;
    REQUIRED INPUT/DEPENDENCIES: N/A
    OUTPUT: logic & HTML
    SIDE EFFECTS: dice roll, banner display, highlighting matches, rendering offensive dice

    */ getDiceHTML() {
        console.log("getDiceHTML() firing");
        this.currentDiceScore = (0, _utilsJs.getDiceRollArray)(this.totalDiceCount, 6);
        console.log("this.currentDiceScore", this.currentDiceScore);
        this.renderBanner = (0, _utilsJs.hasDuplicates)(this.currentDiceScore);
        this.indicesToChange = this.getIndexesOfDiceScoreMatches(this.currentDiceScore);
        this.diceArray = this.currentDiceScore.map((num)=>{
            return `
                    <div class="dice">
                        <div class="dice-inset">
                        ${num}
                        </div>
                    </div>
                `;
        });
        this.indicesToChange.forEach((index)=>{
            if (this.diceArray[index]) this.diceArray[index] = this.diceArray[index].replace('<div class="dice">', '<div class="dice highlighted">');
        });
        this.diceArrayForRendering = this.diceArray.join("");
    }
    /* 

    FUNCTION PURPOSE: creates a string to be displayed of the matches on the offensive dice and puts a "X" symbol to indicate multiplied ... i.e. "3 x 3 x 3" for a roll with 3 3's
    REQUIRED INPUT/DEPENDENCIES: and object
    OUTPUT: string ... i.e. "2 x 2" of "3 x 3 x 3" or "5 x 5 x 4 x 4 x 4"
    SIDE EFFECTS: creates string which will be returned

    */ renderMultiplesForFlyOutMessage(obj) {
        let messagesArr = [];
        for (const [key, value] of Object.entries(obj)){
            let repeatedKey = Array(value.length).fill(key).join(" x ");
            messagesArr.push(`${repeatedKey}`);
        }
        this.messages = [
            ...messagesArr
        ].join(" x ");
        return [
            ...messagesArr
        ].join(" x ");
    }
    resetMultiplesForFlyOutMessage() {
        this.duplicates = {};
    }
    /* 

    FUNCTION PURPOSE: controls steps to determine how much damage an attack is worth, how much it is buffered after defending calculated, 
    and if there were matches how they are multiplied or if none how they are added, if they need to die, and then advances the turn
    REQUIRED INPUT/DEPENDENCIES: attackScoreArray...what player is getting attacked with, and defendDiceScore...what they defended with
    OUTPUT: string ... i.e. "2 x 2" of "3 x 3 x 3" or "5 x 5 x 4 x 4 x 4"
    SIDE EFFECTS: updates state of health, death, and turns

    */ takeDamage(attackScoreArray, defendDiceScore) {
        /* attackScoreArray begins here as an arbitrarily named parameter. It is what the current character is getting attacked by, not what they are attacking the other person with. */ const valueToIndices = {};
        const findDuplicateIndices = (arr)=>{
            /* I decided not to make this a utility function because if you move it out of here, it can't find valueToIndices, and if I move valueToIndices inside the function then it can't find this.duplicates. */ arr.forEach((value, index)=>{
                if (!valueToIndices[value]) valueToIndices[value] = [
                    index
                ];
                else if (valueToIndices[value].length === 1) {
                    valueToIndices[value].push(index);
                    this.duplicates[value] = valueToIndices[value];
                } else this.duplicates[value].push(index);
            });
            return this.duplicates;
        };
        if ((0, _utilsJs.hasDuplicates)(attackScoreArray)) {
            /* currentDiceScore should not be used to calculate the attack, only to check for duplicates.  attackScoreArray is the opposite character, not the this character */ this.totalDamage = (0, _utilsJs.calculateEnhancedScore)(findDuplicateIndices(attackScoreArray), attackScoreArray);
            /* here we have detected there are multiples, so we are iterating over them to find which ones, what the values are, and then timesing them together instead of adding them */ this.bufferedDamage = this.totalDamage - this.totalDamage * (this.defendDiceScore[0] * .10);
            /* the defendDiceScore is the percentage of the number they roll...i.e roll a 9 means you defended 90% of the attack, a 10 -> 10% */ this.health = this.health - Math.floor(this.bufferedDamage);
        } else {
            this.totalDamage = attackScoreArray.reduce((accumulator, currentVal)=>{
                return accumulator + currentVal;
            }, 0);
            /* here .reduce can be used because if no dice are repeated we are simply adding them together */ this.bufferedDamage = this.totalDamage - this.totalDamage * (this.defendDiceScore[0] * .10);
            this.health = this.health - Math.floor(this.bufferedDamage);
        }
        if (this.health <= 0) {
            this.dead = true;
            this.health = 0;
            console.log("death logic in takeDamage", this.dead, this.health, this);
        }
        this.numberOfTurns = this.numberOfTurns + 1;
    }
    renderCharacter() {
        const { alive, avatar, currentDiceScore, backstory, catchphrase, characterCardFlexDirection, characterClass, characterName, cssOrder, dead, defendDiceArray, displayMessageObj, duplicates, diceArrayForRendering, distance, elId, defendDiceValue, health, intelligence, masterString, messages, originalHealth, race, relationship, skill, speed, strength, renderBanner, totalDiceCount, weakness, weapon } = this;
        /* *********************************************** BANNER LOGIC *********************************************** 

        FUNCTION PURPOSE: heroDisplayLogic and renderBanner logic controls the display logic for the fly-in if a hero rolls matching dice
        REQUIRED INPUT/DEPENDENCIES: renderBanner is set by hasDuplicates(), when hasDuplicates() is called within the getDiceHTML() method
        OUTPUT: the display banner that flys in from the left
        SIDE EFFECTS: displays the banner 

        */ let heroDisplayLogic;
        if (renderBanner === true && characterClass === "hero") heroDisplayLogic = `<div class="power-hit-hero-container"><p class="power-hit-hero">The Spinner, the Giver, and the Inflexible looked warmly upon your fate and blessed your dice with matching pairs.  Your ${characterName}'s attack is increased to</p><div class="message">${messages ? messages : ""}</div></div>
            `;
        else heroDisplayLogic = "";
        let villainDisplayLogic;
        if (renderBanner === true && characterClass === "villain") villainDisplayLogic = `<div class="power-hit-villain-container"><p class="power-hit-villain">The Furies, the Fates, the Death-Daimones and Thanatos himself have conspired for your demise.  ${characterName}'s attack is increased to</p><div class="message">${messages ? messages : ""}</div></div>`;
        else villainDisplayLogic = "";
        /* *********************************************** GRAPH-CONTAINER LOGIC *********************************************** 

        (WIP, TRYING TO GET IT TO DRAW DYNAMICALLY INSTEAD OF JUST RE-RENDER EVERY TIME)

        FUNCTION PURPOSE: graphContainer holds the health bars.  renderHealthChart renders them
        REQUIRED INPUT/DEPENDENCIES: original health from character-data.js and correct output from renderHealthChart
        OUTPUT: the circular health charts
        SIDE EFFECTS: displays the circular health charts

        */ const graphContainer = document.querySelectorAll(".character-stats--health-graph");
        console.log("graphContainers are ", graphContainer);
        let graph;
        console.log("graph", graph);
        /* 
        length must be 3 here, because the first time nothing is there, it writes the first graph, turning it to 1, the second time it
        renders the villain graph, turning the length to 2.  So it must write 2 times, but not the third
        */ if (graphContainer.length < 3) {
            console.log("inside graphContainer.length < 3", graph);
            graph = (0, _renderHealthChartJs.renderHealthChart)(health, originalHealth);
            console.log("after renderHealthChart, graphContainers are", graphContainer, "and graph is ", graph);
        }
        return `

            <h2>${characterName}</h2>
                <div class="character-card" style="flex-direction: ${characterCardFlexDirection}">
                    
                    <div class="character-stats--container" style="order: ${cssOrder}">
                        <ul>
                            <li class="attributes alive"><p class="attributes-key">Status: </p><p class="attributes-value ${health > 1 * originalHealth ? "empowered" : health >= .75 * originalHealth ? "belligerent" : health >= .5 * originalHealth ? "unwielding" : health >= 1 ? "distraught" : "ofsl\xe6gen-slain"}">${health > 1 * originalHealth ? "empowered" : health >= .75 * originalHealth ? "Belligerent" : health >= .5 * originalHealth ? "unwielding" : health >= 1 ? "distraught" : "ofsl\xe6gen / slain"}</p>
                            </li>
                            <li class="attributes race"><p class="attributes-key">Race: </p><p class="attributes-value">${race}</p></li>
                            <li class="attributes skill"><p class="attributes-key">Skills: </p><p class="attributes-value"> ${skill.join(" ")}</p></li>
                            <li class="attributes speed"><p class="attributes-key">Speed: </p><p class="attributes-value"> ${speed}</p></li>
                            <li class="attributes strength"><p class="attributes-key">Strength: </p><p class="attributes-value"> ${strength}</p></li>
                            <li class="attributes intelligence"><p class="attributes-key">Intelligence: </p><p class="attributes-value"> ${intelligence}</p></li>
                            <li class="attributes weakness"><p class="attributes-key">Weakness: </p><p class="attributes-value"> ${weakness.join(" ")}</p></li>
                            <li class="attributes weapon">
                        </ul>
                    </div>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <div class="${characterClass}">
                                    <img src=${avatar} alt="sketch of ${characterName}, a ${race} character.">
                                </div>
                            </div>
                            <div class="flip-card-back">
                                <p class="backstory">${backstory}</p>
                            </div>
                        </div>
                    </div>
                    <div class="character-stats--health" id="character-stats-health">
                        <div class="character-stats--health-graph">
                        ${graph ? graph : ""}
                        </div>
                        <div class="character-stats--health-number">
                        ${health}
                        </div>
                    </div>
                    <div class="both-dice-container">
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${diceArrayForRendering}
                            </div>
                            <p class="attack-defend-label"> <strong>Feohtende  ( Attack ) </strong> </p>
                        </div>
                        <div class="dice-container">
                            <div class="real-dice-container">
                            ${defendDiceArray}
                            </div>
                            <p class="attack-defend-label"> <strong> Werede  ( Defend ): </strong> ${characterName === "Zedfire, H\xe6lend of darkness" ? "The Dark Lord" : "You"} defended ${defendDiceValue}0%</p>
                            <div class="elemental"></div>
                            </div>
                            </div>
                            ${heroDisplayLogic}
                            ${villainDisplayLogic}
                    </div>
                    
                </div>
                `;
    }
}
exports.default = Character;

},{"./utils.js":"eYK4L","./render-health-chart.js":"BFBQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYK4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateEnhancedScore", ()=>calculateEnhancedScore);
parcelHelpers.export(exports, "getDiceRollArray", ()=>getDiceRollArray);
parcelHelpers.export(exports, "hasDuplicates", ()=>hasDuplicates);
parcelHelpers.export(exports, "hideElement", ()=>hideElement);
parcelHelpers.export(exports, "renderDicePlaceHolderArray", ()=>renderDicePlaceHolderArray);
parcelHelpers.export(exports, "renderDefenseDicePlaceHolderArray", ()=>renderDefenseDicePlaceHolderArray);
function getDiceRollArray(totalDiceCount, diceSides) {
    return new Array(totalDiceCount).fill(0).map(()=>{
        return Math.floor(Math.random() * diceSides + 1);
    });
// new Array creates a new array with the length of dicecount, .fill fills each spot with the parameter provided.
// (Bad things happen if you fill an array with emptyness)
// It then immediately maps over it to fill it with random values
}
function renderDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=>{
        return `
            <div class="dice">
                <div class="dice-inset placeholder-dice">0</div>
            </div>
        `;
    }).join("");
}
function renderDefenseDicePlaceHolderArray(totalDiceCount) {
    return new Array(totalDiceCount).fill(0).map(()=>{
        return `
            <div class="dice defend-dice">
                <div class="dice-inset">0</div>
            </div>
        `;
    }).join("");
}
function hasDuplicates(arr) {
    let x = new Set();
    for(const value in arr)x.add(arr[value]);
    return x.size !== Object.keys(arr).length;
// if the size of the set does not match the length of the array 
// (i.e. the length of the array is longer), then there are duplicates, 
// because a set can only have unique values, where the array would have that same value multiple times
}
function hideElement(el) {
    el.style.display = "none";
}
function calculateEnhancedScore(obj, arr) {
    let total = 0;
    // Calculate the product of all multiplicants (i.e., repeated number raised to its frequency)
    let multiplicantTotal = Object.entries(obj).map(([key, value])=>Number(key) ** value.length).reduce((a, b)=>a * b, 1); // Default value of 1 for multiplication
    // Calculate the sum of numbers not repeated
    let uniqueNumbers = arr.filter((arrValue)=>!obj.hasOwnProperty(arrValue));
    let sumOfUniques = uniqueNumbers.reduce((acc, curr)=>acc + curr, 0);
    // Add the two values together for the final total
    total = multiplicantTotal + sumOfUniques;
    console.log("multiplicantTotal", multiplicantTotal, "sumOfUniques", sumOfUniques, "total", total);
    return total;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BFBQo":[function(require,module,exports) {
/* 

28 OCT 2023: COMMENTING THESE OUT.  THEY ARE HERE FOR DYNAMICALLY CALCULATING SIZE OF CIRCLE COMPARED TO WINDOW ASPECT RATIO.  
MAY NEED WHEN MOVE TO A MOBILE RESPONSIVE DESIGN.  SEE LINES 58, 60, 65, 66, 67 FOR CORRESPONDING CODE

function getAspectRatio(windowWidth, windowHeight) {
   return windowWidth / windowHeight;
 }

 function getBoxHeight(boxWidth, aspectRatio) {
   return boxWidth / .4444
 }

 function findCenterCoordinates (windowWidth, boxWidth, windowHeight, boxHeight) {
   return `${(windowWidth / 2) - (boxWidth / 2)} ${(windowHeight / 2) - (boxHeight / 2)}`
 }
 
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHealthChart", ()=>renderHealthChart);
parcelHelpers.export(exports, "updateHealthChart", ()=>updateHealthChart);
let containerWidth = 155;
const circumference = 310;
// circumference must be twice the containerWidth for the lines to meet in the end to form a circle
function glowEffectCodeBlock(health, originalHealth) {
    const glowOn = `url(#glow)`;
    const glowOff = "";
    if (health > originalHealth) return glowOn;
    else return glowOff;
}
/*

so I previously had 220 represented by c, the circumference, but for some reason it was such a large number it drew itself 
three or four loops and the player would get a ton of hits and never show any damage until suddenly they did.  So I had to 
test a number, albeit arbitrarily that stopped as soon as the number connected.  It turned out to be 220.

*/ function findRadius(circumference) {
    return circumference / Math.pow(Math.PI, 2);
}
function setColor(health, originalHealth) {
    // short hands for if/ else statements, but have to put the first value it will hit (i.e. highest health level) first
    if (health > originalHealth) return "#FFFFFF";
    if (health >= 0.75 * originalHealth) return "#6D8BA6";
    if (health >= 0.5 * originalHealth) return "#F2A341";
    return "#BF0404";
}
function findCircumference(containerWidth) {
    let r = containerWidth / 2;
    return 2 * (Math.PI * r);
}
function getBoxWidth(windowWidth, percentage) {
    return windowWidth * (percentage / 100);
}
function findDiameter(radius) {
    return radius * 2;
}
function setXInit(width) {
    return width / 2;
}
function setYInit(width, diameter) {
    return (width - diameter) / 2;
}
function renderHealthChart(currentHealthForBar, totalHealth) {
    const color = setColor(currentHealthForBar, totalHealth);
    const glow = glowEffectCodeBlock(currentHealthForBar, totalHealth);
    const healthPercentage = currentHealthForBar / totalHealth;
    // let aspect = getAspectRatio(containerWidth, containerWidth)
    const w = getBoxWidth(containerWidth, 100);
    // let h = getBoxHeight(w, aspect)
    const c = findCircumference(w, 2);
    const nc = healthPercentage * circumference;
    const r = findRadius(c);
    const d = findDiameter(r);
    // let coord = findCenterCoordinates(containerWidth, w, containerWidth, h)
    // let currentHealth = 360;
    // let totalHealth = 1000;
    const xInit = setXInit(containerWidth);
    const yInit = setYInit(containerWidth, d);
    const container = `
      <svg viewBox="0 0 ${w} ${w}">
      <defs>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <style>
          path {
            transition: stroke-dasharray 5s ease, stroke 5s ease;
          }
        </style>
      </defs>
        <path
          id="path"
          class="health-path"
          d="M${xInit} ${yInit}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 -${d}"
          fill="none"
          stroke="${color}"
          stroke-width="9.125"
          stroke-dasharray="${nc}, ${circumference}"
          filter="${glow}"
        />
      </svg>
    `;
    return container;
}
function updateHealthChart(currentHealthForBar, totalHealth) {
    console.log("updateHealthChart firing");
    const healthPercentage = currentHealthForBar / totalHealth;
    const color = setColor(currentHealthForBar, totalHealth);
    const healthPath = document.querySelectorAll(".health-path");
    const glow = glowEffectCodeBlock(currentHealthForBar, totalHealth);
    const nc = healthPercentage * circumference;
    console.log("healthPath", healthPath);
    for (const paths of healthPath){
        console.log("inside paths for of", paths, "healthPath");
        if (currentHealthForBar > totalHealth) {
            console.log("inside paths for of if statement, ", currentHealthForBar, totalHealth, healthPath);
            paths.setAttribute("filter", `${glow}`);
        } else {
            console.log("inside paths for of else statement, ", currentHealthForBar, totalHealth, healthPath);
            paths.removeAttribute("filter");
        }
        console.log("outside paths for of else statement, ", currentHealthForBar, totalHealth, healthPath);
        paths.setAttribute("stroke", `${color}`);
        paths.setAttribute("stroke-dasharray", `${nc}, ${circumference}`);
        paths.setAttribute("stroke", `${color}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3yCuS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const spellData = [
    {
        "spell_id": 1,
        "spell_name": "Strength",
        "spell_meaning": "Courage, Inner Strength, Control",
        "spell_type": "Honor",
        "spell_damage": 45,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "rage",
            "survival"
        ],
        "spell_drain_effect": 0,
        "spell_heal_effect": 25,
        "spell_description": "Strength spells yield both courage and physical strength to the benefactor.  Extra 25 point damage if combined with skills of 'honor' or 'rage,' or 'survival'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/strength_small.jpg",
        "spell_xp": "Evocation Mastery"
    },
    {
        "spell_id": 2,
        "spell_name": "The Tower",
        "spell_meaning": "Upheaval, chaos, revelation, disruption",
        "spell_type": "Honor",
        "spell_damage": 119,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "chaos",
            "foolery"
        ],
        "spell_drain_effect": 18,
        "spell_heal_effect": 0,
        "spell_description": "'The Tower' instills chaos wherever it is called.  Extra 25 point damage if combined with skills of 'chaos' or 'foolery.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_tower_small.jpg",
        "spell_xp": "Evocation Mastery"
    },
    {
        "spell_id": 3,
        "spell_name": "The Hermit",
        "spell_meaning": "Introspection, Solitude",
        "spell_type": "Honor",
        "spell_damage": 25,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "survical",
            "magic"
        ],
        "spell_drain_effect": 48,
        "spell_heal_effect": 300,
        "spell_description": "Opposite of chaos, the hermit brings inner peace that cannot be touched by external forces.  Extra 25 point damage if combined with skills of 'survival' or 'magic.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_hermit_small.jpg",
        "spell_xp": "Arcane Domain"
    },
    {
        "spell_id": 4,
        "spell_name": "The Hierophant",
        "spell_meaning": "Tradition, conformity, morality",
        "spell_type": "Honor",
        "spell_damage": 32,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "infiltration"
        ],
        "spell_drain_effect": 2,
        "spell_heal_effect": 0,
        "spell_secondary_weaknesses_which_trigger_effect": [
            ""
        ],
        "spell_description": "A debased magic used in thievery and priestcraft to instill belief or conformity.  Extra 25 point damage if combined with skills of 'honor' or 'infiltration.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_hierophant_small.jpg",
        "spell_xp": "Cantrips"
    },
    {
        "spell_id": 5,
        "spell_name": "The Star",
        "spell_meaning": "Hope, Faith, Spirituality",
        "spell_type": "Honor",
        "spell_damage": 0,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "elemental",
            "strategem"
        ],
        "spell_drain_effect": 5,
        "spell_heal_effect": 150,
        "spell_description": "Inspires subject with hope, faith, renewal.  Extra 25 point damage if combined with skills of 'elemental' or 'strategem.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_star_small.jpg",
        "spell_xp": "Intermediate Elemental"
    },
    {
        "spell_id": 6,
        "spell_name": "The Fool",
        "spell_meaning": "New Beginnings, Innocence, Spontaneity",
        "spell_type": "Honor",
        "spell_damage": 90,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "foolery",
            "chaos"
        ],
        "spell_drain_effect": 25,
        "spell_heal_effect": 90,
        "spell_description": "Represents a new beginning, spontaneity.  Increases faith, unfortunately it enhances neither wisdom or knowledge with it.  Extra 25 point damage if combined with skills of 'foolery' or 'chaos,' or 'infiltration'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_fool_small.jpg",
        "spell_xp": "Spoken Arcana"
    },
    {
        "spell_id": 7,
        "spell_name": "The Moon",
        "spell_meaning": "Illusion, intuition, dreams",
        "spell_type": "Honor",
        "spell_damage": 60,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "elemental",
            "stealth",
            "infiltration"
        ],
        "spell_drain_effect": 6,
        "spell_heal_effect": 25,
        "spell_description": "When used with stealh or infiltration, creates an astral projection of oneself.  Can also have healing properties.  Extra 25 point damage if combined with skills of 'elemental', 'stealth,' or 'infiltration.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_moon_small.jpg",
        "spell_xp": "Evocation Mastery"
    },
    {
        "spell_id": 8,
        "spell_name": "Justice",
        "spell_meaning": "Fairness, Truth, Balance",
        "spell_type": "Honor",
        "spell_damage": 102,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor"
        ],
        "spell_drain_effect": 15,
        "spell_heal_effect": 0,
        "spell_description": "Justice projects an understanding of truth within the mind of the caster and the bewitched, causing immense discomfort for anyone with evil intentions.  Extra 25 point damage if combined with skills of 'honor.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/justice_small.jpg",
        "spell_xp": "Evocation Mastery"
    },
    {
        "spell_id": 9,
        "spell_name": "The Magician",
        "spell_meaning": "Manifestations, Resourcefulness, Power",
        "spell_type": "Honor",
        "spell_damage": 164,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "magic",
            "chaos"
        ],
        "spell_drain_effect": 41,
        "spell_heal_effect": 0,
        "spell_description": "Has the ability to temporarily combine competing realities to create a blended, sometimes controllable outcome.  Extra 25 point damage if combined with skills of 'magic' or 'chaos.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_magician_small.jpg",
        "spell_xp": "Arcane Domain"
    },
    {
        "spell_id": 10,
        "spell_name": "Wheel of Fortune",
        "spell_meaning": "Cycles, Luck, Fate, Destiny",
        "spell_type": "Honor",
        "spell_damage": 134,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "foolery",
            "magic"
        ],
        "spell_drain_effect": 27,
        "spell_heal_effect": 0,
        "spell_description": "Represents a circle, or cycle, of unpredictable fate.  Extra 25 point damage if combined with skills of 'foolery' or 'magic.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/wheel_of_fortune_small.jpg",
        "spell_xp": "Spoken Arcana"
    },
    {
        "spell_id": 11,
        "spell_name": "The Sun",
        "spell_meaning": "Joy, Access, Celebration",
        "spell_type": "Honor",
        "spell_damage": 10,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "elemental"
        ],
        "spell_drain_effect": 8,
        "spell_heal_effect": 68,
        "spell_description": "To those who have walked the path of peace, it's light brings restorative life.  To the rest a burning consumption.  Extra 25 point damage if combined with skills of 'honor' or 'elemental.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_sun_small.jpg",
        "spell_xp": "Intermediate Elemental"
    },
    {
        "spell_id": 12,
        "spell_name": "The World",
        "spell_meaning": "Integration, Accomplishment",
        "spell_type": "Honor",
        "spell_damage": 15,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "foolery"
        ],
        "spell_drain_effect": 1,
        "spell_heal_effect": 0,
        "spell_description": "Represents completion.  Either increases subjects resoluteness, or blinds them to the consequences.  Either way, pushing them to decisive action.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_world_small.jpg",
        "spell_xp": "Cantrips"
    },
    {
        "spell_id": 13,
        "spell_name": "The Lovers",
        "spell_meaning": "Love, Harmony, Alignment",
        "spell_type": "Honor",
        "spell_damage": 143,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "foolery",
            "survival"
        ],
        "spell_drain_effect": 29,
        "spell_heal_effect": 0,
        "spell_description": "Unites and enhances any relationship based on love, trust, passion, or fate.  Extra 25 point damage if combined with skills of 'honor' or 'foolery,' or 'survival.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_lovers_small.jpg",
        "spell_xp": "Spoken Arcana"
    },
    {
        "spell_id": 14,
        "spell_name": "Death",
        "spell_meaning": "Ending, Beginnings, Transformations",
        "spell_type": "Honor",
        "spell_damage": 1000,
        "spell_magnification": 0,
        "spell_skills_it_magnifies": [],
        "spell_drain_effect": 25,
        "spell_heal_effect": 0,
        "spell_description": "The vessel of absolution and the ferrier to either judgement or peace.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/death_small.jpg",
        "spell_xp": "Cosmic"
    },
    {
        "spell_id": 15,
        "spell_name": "The High Priestess",
        "spell_meaning": "Intuition, unconcious knowledge, feminity",
        "spell_type": "Honor",
        "spell_damage": 178,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "survival",
            "femininity"
        ],
        "spell_drain_effect": 45,
        "spell_heal_effect": 0,
        "spell_description": "Summons the unconscious knowledge .  Extra 25 point damage if combined with skills of 'honor' or 'rage' or 'femininity'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/high_priestess_small.jpg",
        "spell_xp": "Arcane Domain"
    },
    {
        "spell_id": 16,
        "spell_name": "The Emperor",
        "spell_meaning": "Authority, Structure",
        "spell_type": "Honor",
        "spell_damage": 5,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "honor",
            "rage"
        ],
        "spell_drain_effect": 0,
        "spell_heal_effect": 0,
        "spell_description": "The Emperor spell influences all authorities within range to bring their armies to defend the spell caster, unfortunately it usually only influences the honorable or the insane.  Extra 25 point damage if combined with skills of 'honor' or 'rage.'",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/emperor_small.jpg",
        "spell_xp": "Cantrips"
    },
    {
        "spell_id": 17,
        "spell_name": "Judgment",
        "spell_meaning": "Judgement, Rebirth, Inner Calling, Absolution",
        "spell_type": "Honor",
        "spell_damage": 1000,
        "spell_magnification": 0,
        "spell_skills_it_magnifies": [],
        "spell_drain_effect": 25,
        "spell_heal_effect": 0,
        "spell_description": "Represents total absolution and finality.  Known as one of The Cosmic Pair, mastery can only be bestowed by a celestial power.",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/judgement_small.jpg",
        "spell_xp": "Cosmic"
    },
    {
        "spell_id": 18,
        "spell_name": "Empress",
        "spell_meaning": "Motherhood, nurturing, abundance",
        "spell_type": "Honor",
        "spell_damage": 142,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "survival",
            "femininity",
            "honor"
        ],
        "spell_drain_effect": 85,
        "spell_heal_effect": 250,
        "spell_description": "Represents fertility, nurturing and abundance. Signifies creation.",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/empress_small.jpg",
        "spell_xp": "Arcane Domain"
    },
    {
        "spell_id": 19,
        "spell_name": "The Chariot",
        "spell_meaning": "Control, willpower, and victory",
        "spell_type": "Honor",
        "spell_damage": 125,
        "spell_magnification": 0,
        "spell_skills_it_magnifies": [
            "elemental",
            "foolery"
        ],
        "spell_drain_effect": 25,
        "spell_heal_effect": 0,
        "spell_description": "The chariot spell brings progression to the casters intentions.",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/the_chariot_small.jpg",
        "spell_xp": "Intermediate Elemental"
    },
    {
        "spell_id": 20,
        "spell_name": "Temperance",
        "spell_meaning": "Balance, moderation and harmony",
        "spell_type": "Honor",
        "spell_damage": 50,
        "spell_magnification": 25,
        "spell_skills_it_magnifies": [
            "chaos"
        ],
        "spell_drain_effect": 100,
        "spell_heal_effect": 50,
        "spell_description": "Temperance finds virtue in positioning itself exactly between evil and goodness, hence this spell deals exactly the same damage to the bearer as the enemy",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/temperance_small.jpg",
        "spell_xp": "Cantrips"
    },
    {
        "spell_id": 21,
        "spell_name": "The Hanged Man",
        "spell_meaning": "Letting go, surrender",
        "spell_type": "Honor",
        "spell_damage": 104,
        "spell_magnification": 0,
        "spell_skills_it_magnifies": [
            "survival",
            "honor"
        ],
        "spell_drain_effect": 100,
        "spell_heal_effect": 0,
        "spell_description": "While this spell deals moderate damage, the act of surrender deals an exceptional toll on the caster.",
        "spell_asset_front": "./assets/assets/cards_small/front.jpg",
        "spell_asset_back": "./assets/cards_small/hanged_man_small.jpg",
        "spell_xp": "Intermediate Elemental"
    }
];
exports.default = spellData;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFfFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _audioJs = require("./audio.js");
class Spells {
    constructor(character, opponent){
        this.character = character;
        this.opponent = opponent;
    }
    cardClickedIndex;
    shuffleArr(arr) {
        for(let i = arr.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [
                arr[j],
                arr[i]
            ];
        }
        return arr;
    }
    // picks three cards and makes sure cards picked are removed from the deck
    pickThreeCards(arr) {
        return arr.splice(0, 3);
    }
    // COME BACK AND GET CARDS SET UP WITH CLASS SO THEY ARE TURNED AROUND.
    renderCards(arr) {
        const rendering = arr.map((card)=>{
            return `
            <div class="card-front-back-container" id="${arr.indexOf(card)}">
            
                <div class="spell-card-front">
                </div>
                <div class="spell-card-container spell-card-back" data-card-number="${arr.indexOf(card)}">
                    <img src="assets/${card.spell_asset_back}" alt="${card.spell_description}">
                    <ul>
                        <li>
                            <div class="icon-container">
                                <span class="sword"></span>
                                <span class="information">${card.spell_damage}</span>
                                <span class="caduceus"></span>
                                <span class="information">${card.spell_heal_effect}</span>
                                <span class="skull"></span>
                                <span class="information information-border">${card.spell_drain_effect} </span>
                            </div>
                        </li>
                        <li>
                            <div class="xp-container">
                                <span class="xp">
                                </span>
                                <span class="xp-text">
                                    ${card.spell_xp}
                                </span>
                            </div>
                                <span class="description">${card.spell_description}
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
            `;
        });
        return rendering;
    }
    appendCardsTitle(parentElId) {
        let spellsTitleText = "Select a spell";
        let spellElement = document.createElement("h2");
        spellElement.setAttribute("id", "spellTitle");
        spellElement.setAttribute("class", "spellTitle");
        spellElement.innerHTML = spellsTitleText;
        document.getElementById(parentElId).prepend(spellElement);
    }
    appendCards(cards) {
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute("class", "spells-container");
        parentDiv.setAttribute("id", "spells-container");
        parentDiv.innerHTML = cards;
        document.getElementById("main-container").appendChild(parentDiv);
    }
    removeAppendedCards() {
        let parentNode = document.getElementById("main-container");
        let childNode = document.getElementById("spells-container");
        parentNode.removeChild(childNode);
    }
    // create a function to unappend cards???? ^^^^^
    handleCardChoice(hero, arr, villain, render, handleSpellDeath) {
        console.log("entered handleCardChoice");
        return function(evt) {
            let cardClickedIndex = evt.target.id || evt.target.closest(".card-front-back-container").id;
            if (hero.skill.filter((item)=>arr[cardClickedIndex].spell_skills_it_magnifies.includes(item)).length > 0) // [cardClickedIndex] is set as the id in the rendering earlier to the same index as the array it's in, so it was an easy way to grab that info again instead of creating a global variable
            villain.health = villain.health - (arr[cardClickedIndex].spell_magnification + arr[cardClickedIndex].spell_damage);
            else villain.health = villain.health - arr[cardClickedIndex].spell_damage;
            hero.health = hero.health + arr[cardClickedIndex].spell_heal_effect - arr[cardClickedIndex].spell_drain_effect;
            hero.health <= 0 ? hero.health = 0 : hero.health = hero.health;
            villain.health <= 0 ? villain.health = 0 : villain.health = villain.health;
            // Separating UI from business logic:  health above ^^^ is used for rendering health graph.  Health below vvv is used for determining death state.
            hero.health <= 0 ? hero.dead = true : hero.dead = false;
            villain.health <= 0 ? villain.dead = true : villain.dead = false;
            // prevents character health from displaying a negative number
            console.log("inside handleCardChoice", hero.health, villain.health);
            if (hero.health <= 0 || villain.health <= 0) {
                console.log("inside handleCardChoice, someone is dead");
                setTimeout(()=>{
                    render();
                    handleSpellDeath(hero, villain);
                }, 8150);
            } else {
                console.log("After Spells: no one is dead");
                render();
            }
            document.getElementById(`${cardClickedIndex}`).classList.toggle("flip");
            setTimeout(()=>{
                document.getElementById(`${cardClickedIndex}`).classList.toggle("flip");
                console.log("inside set timeout that handles the card flip");
            }, 6000);
        };
    }
    setCardChoiceHandler(handler, callback) {
        const cards = document.querySelectorAll(".card-front-back-container");
        let isCardClicked = false;
        function cardClickListener(evt) {
            if (!isCardClicked) {
                handler(evt);
                (0, _audioJs.playAudio)((0, _audioJs.spellAudio), (0, _audioJs.backGroundAudio));
                isCardClicked = true;
                cards[0].classList.toggle("gather-left-cards");
                cards[2].classList.toggle("gather-right-cards");
                setTimeout(()=>{
                    document.getElementById("spells-container").classList.toggle("disappear");
                }, 6500);
                setTimeout(callCallBack, 7000);
            }
        }
        function callCallBack() {
            cards.forEach((el)=>el.removeEventListener("click", cardClickListener));
            callback();
        }
        setTimeout(()=>{
            // remove setTimout.  Just putting it here so I can fix a CSS issue without them disappearing on me
            cards.forEach((el)=>el.addEventListener("click", cardClickListener));
        }, 300);
    }
}
exports.default = Spells;

},{"./audio.js":"daaY0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"daaY0":[function(require,module,exports) {
// All audio clips used, except audio that is native to video elements
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spellAudio", ()=>spellAudio);
parcelHelpers.export(exports, "backGroundAudio", ()=>backGroundAudio);
parcelHelpers.export(exports, "outTroAudio", ()=>outTroAudio);
parcelHelpers.export(exports, "isPlaying", ()=>isPlaying);
parcelHelpers.export(exports, "playAudio", ()=>playAudio);
parcelHelpers.export(exports, "playGameMusic", ()=>playGameMusic);
parcelHelpers.export(exports, "stopAllAudio", ()=>stopAllAudio);
parcelHelpers.export(exports, "setAudioVolume", ()=>setAudioVolume);
const spellAudio = new Audio("./assets/assets/audio/Under-Attack_AdobeStock_353737497.mp3");
const backGroundAudio = new Audio("./assets/assets/audio/fantasmi-dell-opera-a-loop_AdobeStock_526744294.mp3");
const outTroAudio = new Audio("./assets/assets/audio/EPIC-TRAILER-ACTION-ADVENTURE-(TENSE-NERVE)_AdobeStock_637559773.mp3");
const isPlaying = (audio)=>{
    return !audio.paused && !audio.ended && 0 < audio.currentTime;
};
const playAudio = (audioNodeToPlay, currentAudioNode)=>{
    if (isPlaying(currentAudioNode)) {
        currentAudioNode.pause();
        const savedTime = currentAudioNode.currentTime;
        audioNodeToPlay.play();
        audioNodeToPlay.onended = ()=>{
            currentAudioNode.currentTime = savedTime;
            currentAudioNode.play();
        };
    } else audioNodeToPlay.play();
};
const playGameMusic = ()=>{
    setTimeout(()=>{
        setInterval(()=>{
            playAudio(backGroundAudio, spellAudio);
        }, 30000);
    }, 55000);
};
const stopAllAudio = ()=>{
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio)=>{
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset its time to the beginning
    });
};
const setAudioVolume = function(audio, volume) {
    audio.volume = volume;
};
exports.default = {
    spellAudio,
    backGroundAudio,
    outTroAudio,
    isPlaying,
    playAudio,
    playGameMusic
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTkNB":[function(require,module,exports) {
// Create SVG element
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// onlySevenPolygons = parseHeptagonArray(heptagonNode)
parcelHelpers.export(exports, "heptagonNode", ()=>heptagonNode);
parcelHelpers.export(exports, "parseHeptagonArray", ()=>parseHeptagonArray);
parcelHelpers.export(exports, "hideAPolygon", ()=>hideAPolygon);
parcelHelpers.export(exports, "removeAPolygon", ()=>removeAPolygon);
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "400");
svg.setAttribute("height", "400");
svg.setAttribute("id", "heptagon");
function createGradient(id, angle, defs) {
    const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    linearGradient.setAttribute("id", id);
    // Calculate the direction of the gradient
    const x1 = Math.round(50 + 50 * Math.cos(angle - Math.PI / 2));
    const y1 = Math.round(50 + 50 * Math.sin(angle - Math.PI / 2));
    const x2 = Math.round(50 + 50 * Math.cos(angle + Math.PI / 2));
    const y2 = Math.round(50 + 50 * Math.sin(angle + Math.PI / 2));
    linearGradient.setAttribute("x1", x1 + "%");
    linearGradient.setAttribute("y1", y1 + "%");
    linearGradient.setAttribute("x2", x2 + "%");
    linearGradient.setAttribute("y2", y2 + "%");
    const stops = [
        {
            offset: "0%",
            color: "rgba(242,169,34,1)",
            opacity: "1"
        },
        {
            offset: "16%",
            color: "rgba(242,123,19,1)",
            opacity: "1"
        },
        {
            offset: "35%",
            color: "rgba(242,93,7,1)",
            opacity: "1"
        },
        {
            offset: "62%",
            color: "rgba(191,4,38,1)",
            opacity: "1"
        },
        {
            offset: "89%",
            color: "rgba(89,18,2,1)",
            opacity: "1"
        }
    ];
    stops.forEach((stopInfo)=>{
        const stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop.setAttribute("offset", stopInfo.offset);
        stop.setAttribute("stop-color", stopInfo.color);
        stop.setAttribute("stop-opacity", stopInfo.opacity);
        linearGradient.appendChild(stop);
    });
    defs.appendChild(linearGradient);
}
const highlight = "#f2e3d520";
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
svg.appendChild(defs);
const numberOfSides = 7;
const centerX = 200;
const centerY = 200;
const radius = 100; // Adjust as needed
function createTriangleVertices(centerX, centerY, radius, index, totalSides) {
    const angle = 2 * Math.PI / totalSides;
    const x1 = centerX + radius * Math.cos(angle * index);
    const y1 = centerY + radius * Math.sin(angle * index);
    const x2 = centerX + radius * Math.cos(angle * (index + 1));
    const y2 = centerY + radius * Math.sin(angle * (index + 1));
    return `${centerX},${centerY} ${x1},${y1} ${x2},${y2}`;
}
// Create a triangle
function createTriangle(number, fillColor, strokeColor, strokeWidth) {
    let triangleArray = [];
    for(let i = 0; i < number; i++){
        const points = createTriangleVertices(centerX, centerY, radius, i, number);
        const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        triangle.setAttribute("points", points); // Example points
        triangle.setAttribute("fill", fillColor);
        triangle.setAttribute("stroke", strokeColor);
        triangle.setAttribute("stroke-width", strokeWidth);
        triangleArray.push(triangle);
    }
    return triangleArray;
}
const gradientFillColor = `url(#myGradient)`;
let triangles = createTriangle(numberOfSides, gradientFillColor, highlight, .5);
triangles.forEach((triangle)=>{
    svg.appendChild(triangle);
});
for(let i = 0; i < numberOfSides; i++){
    const angle = 2 * Math.PI / numberOfSides * i;
    const gradientId = `gradient-${i}`;
    createGradient(gradientId, angle, defs);
    const points = createTriangleVertices(centerX, centerY, radius, i, numberOfSides);
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    triangle.setAttribute("points", points);
    triangle.setAttribute("fill", `url(#${gradientId})`);
    triangle.setAttribute("stroke", highlight);
    triangle.setAttribute("stroke-width", "1");
    svg.appendChild(triangle);
}
const manaContainer = document.getElementById("mana-container");
manaContainer.appendChild(svg);
/* ************************************** CREATE FUNCTIONALITY OF HEPTAGON ************************************** */ /* CREATE AN ARRAY OF THE 'PIE SLICES' THAT WILL NEED TO APPEAR/DISAPPEAR.  
HEPTAGON HAS 13 CONSTITUENT POLYGONS.  NUMBERS 7 - 13 ARE THE VISIBLE PIE SLICES */ const heptagonNode = document.querySelectorAll("#heptagon > polygon");
function parseHeptagonArray(obj) {
    let heptagonArray = [];
    Object.values(heptagonNode).forEach((value)=>{
        heptagonArray.push(value);
    });
    return heptagonArray.slice(7, 14);
}
function hideAPolygon(arr) {
    console.log("inside hideAPolygon, arr is: ", arr, "arr[-1] is: ", arr[-1]);
    arr[arr.length - 1].style.display = "none";
}
function removeAPolygon(arr) {
    arr.pop();
    return arr;
}
function buildRingContainers() {
    const ringContainer = document.createElement("div");
    ringContainer.setAttribute("id", "ringContainer");
    svg.appendChild(ringContainer);
}
buildRingContainers();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lq4Ai":[function(require,module,exports) {
module.exports = require("f439cc47e0d4fe25").getBundleURL("a7xAU") + "js/sw.js" + "?" + Date.now();

},{"f439cc47e0d4fe25":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["hIyRZ","1Z4Rq"], "1Z4Rq", "parcelRequiref7a2")

//# sourceMappingURL=index.8d8841ea.js.map
