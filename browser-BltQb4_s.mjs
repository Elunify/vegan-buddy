import { g as o } from "./supabaseClient-D6hBZpog.mjs";
var r, e;
function t() {
  return e || (e = 1, r = function() {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  }), r;
}
var s = t();
const n = /* @__PURE__ */ o(s), w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n
}, Symbol.toStringTag, { value: "Module" }));
export {
  w as b
};
