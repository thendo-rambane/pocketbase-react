(function(e,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("pocketbase"),require("react")):typeof define=="function"&&define.amd?define(["exports","pocketbase","react"],o):(e=typeof globalThis<"u"?globalThis:e||self,o(e.PocketbaseReact={},e.Pocketbase,e.React))})(this,function(e,o,f){"use strict";const c=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},s=c(o),u=c(f);function d(t,a,i){function b(){return new s.default(t,a,i)}const r=u.default.createContext(new s.default(t,a,i));function l({children:n,client:k}){return u.default.createElement(r.Provider,{value:k},n)}function P(){const n=u.default.useContext(r);if(n===void 0)throw new Error("usePocketbaseClient must be used within a PocketbaseProvider");return n}return{PocketbaseProvider:l,usePocketbaseClient:P,usePocketbase:b}}e.createPocketbase=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});