const vt = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Y).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
};
class Oe extends Error {
  constructor(e, t = "FunctionsError", s) {
    super(e), this.name = t, this.context = s;
  }
}
class yt extends Oe {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class wt extends Oe {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class mt extends Oe {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var ye;
(function(n) {
  n.Any = "any", n.ApNortheast1 = "ap-northeast-1", n.ApNortheast2 = "ap-northeast-2", n.ApSouth1 = "ap-south-1", n.ApSoutheast1 = "ap-southeast-1", n.ApSoutheast2 = "ap-southeast-2", n.CaCentral1 = "ca-central-1", n.EuCentral1 = "eu-central-1", n.EuWest1 = "eu-west-1", n.EuWest2 = "eu-west-2", n.EuWest3 = "eu-west-3", n.SaEast1 = "sa-east-1", n.UsEast1 = "us-east-1", n.UsWest1 = "us-west-1", n.UsWest2 = "us-west-2";
})(ye || (ye = {}));
var bt = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
class kt {
  constructor(e, { headers: t = {}, customFetch: s, region: r = ye.Any } = {}) {
    this.url = e, this.headers = t, this.region = r, this.fetch = vt(s);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, t = {}) {
    var s;
    return bt(this, void 0, void 0, function* () {
      try {
        const { headers: r, method: i, body: o } = t;
        let a = {}, { region: c } = t;
        c || (c = this.region), c && c !== "any" && (a["x-region"] = c);
        let h;
        o && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && (typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", h = o) : typeof o == "string" ? (a["Content-Type"] = "text/plain", h = o) : typeof FormData < "u" && o instanceof FormData ? h = o : (a["Content-Type"] = "application/json", h = JSON.stringify(o)));
        const l = yield this.fetch(`${this.url}/${e}`, {
          method: i || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), r),
          body: h
        }).catch((g) => {
          throw new yt(g);
        }), u = l.headers.get("x-relay-error");
        if (u && u === "true")
          throw new wt(l);
        if (!l.ok)
          throw new mt(l);
        let d = ((s = l.headers.get("Content-Type")) !== null && s !== void 0 ? s : "text/plain").split(";")[0].trim(), f;
        return d === "application/json" ? f = yield l.json() : d === "application/octet-stream" ? f = yield l.blob() : d === "text/event-stream" ? f = l : d === "multipart/form-data" ? f = yield l.formData() : f = yield l.text(), { data: f, error: null };
      } catch (r) {
        return { data: null, error: r };
      }
    });
  }
}
function St(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Tt(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function s() {
      var r = !1;
      try {
        r = this instanceof s;
      } catch {
      }
      return r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(n).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(n, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return n[s];
      }
    });
  }), t;
}
var m = {}, q = {}, M = {}, z = {}, J = {}, H = {}, Ot = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Q = Ot();
const Et = Q.fetch, Ze = Q.fetch.bind(Q), et = Q.Headers, jt = Q.Request, Pt = Q.Response, Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: et,
  Request: jt,
  Response: Pt,
  default: Ze,
  fetch: Et
}, Symbol.toStringTag, { value: "Module" })), $t = /* @__PURE__ */ Tt(Y);
var oe = {}, Ae;
function tt() {
  if (Ae) return oe;
  Ae = 1, Object.defineProperty(oe, "__esModule", { value: !0 });
  let n = class extends Error {
    constructor(t) {
      super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
    }
  };
  return oe.default = n, oe;
}
var Re;
function st() {
  if (Re) return H;
  Re = 1;
  var n = H && H.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(H, "__esModule", { value: !0 });
  const e = n($t), t = n(tt());
  class s {
    constructor(i) {
      this.shouldThrowOnError = !1, this.method = i.method, this.url = i.url, this.headers = i.headers, this.schema = i.schema, this.body = i.body, this.shouldThrowOnError = i.shouldThrowOnError, this.signal = i.signal, this.isMaybeSingle = i.isMaybeSingle, i.fetch ? this.fetch = i.fetch : typeof fetch > "u" ? this.fetch = e.default : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(i, o) {
      return this.headers = Object.assign({}, this.headers), this.headers[i] = o, this;
    }
    then(i, o) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
      const a = this.fetch;
      let c = a(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (h) => {
        var l, u, d;
        let f = null, g = null, y = null, _ = h.status, O = h.statusText;
        if (h.ok) {
          if (this.method !== "HEAD") {
            const T = await h.text();
            T === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? g = T : g = JSON.parse(T));
          }
          const k = (l = this.headers.Prefer) === null || l === void 0 ? void 0 : l.match(/count=(exact|planned|estimated)/), S = (u = h.headers.get("content-range")) === null || u === void 0 ? void 0 : u.split("/");
          k && S && S.length > 1 && (y = parseInt(S[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(g) && (g.length > 1 ? (f = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, g = null, y = null, _ = 406, O = "Not Acceptable") : g.length === 1 ? g = g[0] : g = null);
        } else {
          const k = await h.text();
          try {
            f = JSON.parse(k), Array.isArray(f) && h.status === 404 && (g = [], f = null, _ = 200, O = "OK");
          } catch {
            h.status === 404 && k === "" ? (_ = 204, O = "No Content") : f = {
              message: k
            };
          }
          if (f && this.isMaybeSingle && (!((d = f?.details) === null || d === void 0) && d.includes("0 rows")) && (f = null, _ = 200, O = "OK"), f && this.shouldThrowOnError)
            throw new t.default(f);
        }
        return {
          error: f,
          data: g,
          count: y,
          status: _,
          statusText: O
        };
      });
      return this.shouldThrowOnError || (c = c.catch((h) => {
        var l, u, d;
        return {
          error: {
            message: `${(l = h?.name) !== null && l !== void 0 ? l : "FetchError"}: ${h?.message}`,
            details: `${(u = h?.stack) !== null && u !== void 0 ? u : ""}`,
            hint: "",
            code: `${(d = h?.code) !== null && d !== void 0 ? d : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), c.then(i, o);
    }
  }
  return H.default = s, H;
}
var Ce;
function rt() {
  if (Ce) return J;
  Ce = 1;
  var n = J && J.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(J, "__esModule", { value: !0 });
  const e = n(st());
  class t extends e.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(r) {
      let i = !1;
      const o = (r ?? "*").split("").map((a) => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)).join("");
      return this.url.searchParams.set("select", o), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(r, { ascending: i = !0, nullsFirst: o, foreignTable: a, referencedTable: c = a } = {}) {
      const h = c ? `${c}.order` : "order", l = this.url.searchParams.get(h);
      return this.url.searchParams.set(h, `${l ? `${l},` : ""}${r}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(r, { foreignTable: i, referencedTable: o = i } = {}) {
      const a = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(a, `${r}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(r, i, { foreignTable: o, referencedTable: a = o } = {}) {
      const c = typeof a > "u" ? "offset" : `${a}.offset`, h = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(c, `${r}`), this.url.searchParams.set(h, `${i - r + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(r) {
      return this.signal = r, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.Accept = "application/vnd.pgrst.object+json", this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.Accept = "text/csv", this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.Accept = "application/geo+json", this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: r = !1, verbose: i = !1, settings: o = !1, buffers: a = !1, wal: c = !1, format: h = "text" } = {}) {
      var l;
      const u = [
        r ? "analyze" : null,
        i ? "verbose" : null,
        o ? "settings" : null,
        a ? "buffers" : null,
        c ? "wal" : null
      ].filter(Boolean).join("|"), d = (l = this.headers.Accept) !== null && l !== void 0 ? l : "application/json";
      return this.headers.Accept = `application/vnd.pgrst.plan+${h}; for="${d}"; options=${u};`, h === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      var r;
      return ((r = this.headers.Prefer) !== null && r !== void 0 ? r : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */
    returns() {
      return this;
    }
  }
  return J.default = t, J;
}
var xe;
function Ee() {
  if (xe) return z;
  xe = 1;
  var n = z && z.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(z, "__esModule", { value: !0 });
  const e = n(rt());
  class t extends e.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(r, i) {
      return this.url.searchParams.append(r, `eq.${i}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(r, i) {
      return this.url.searchParams.append(r, `neq.${i}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(r, i) {
      return this.url.searchParams.append(r, `gt.${i}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(r, i) {
      return this.url.searchParams.append(r, `gte.${i}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(r, i) {
      return this.url.searchParams.append(r, `lt.${i}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(r, i) {
      return this.url.searchParams.append(r, `lte.${i}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(r, i) {
      return this.url.searchParams.append(r, `like.${i}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(r, i) {
      return this.url.searchParams.append(r, `like(all).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(r, i) {
      return this.url.searchParams.append(r, `like(any).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(r, i) {
      return this.url.searchParams.append(r, `ilike.${i}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(r, i) {
      return this.url.searchParams.append(r, `ilike(all).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(r, i) {
      return this.url.searchParams.append(r, `ilike(any).{${i.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(r, i) {
      return this.url.searchParams.append(r, `is.${i}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(r, i) {
      const o = Array.from(new Set(i)).map((a) => typeof a == "string" && new RegExp("[,()]").test(a) ? `"${a}"` : `${a}`).join(",");
      return this.url.searchParams.append(r, `in.(${o})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(r, i) {
      return typeof i == "string" ? this.url.searchParams.append(r, `cs.${i}`) : Array.isArray(i) ? this.url.searchParams.append(r, `cs.{${i.join(",")}}`) : this.url.searchParams.append(r, `cs.${JSON.stringify(i)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(r, i) {
      return typeof i == "string" ? this.url.searchParams.append(r, `cd.${i}`) : Array.isArray(i) ? this.url.searchParams.append(r, `cd.{${i.join(",")}}`) : this.url.searchParams.append(r, `cd.${JSON.stringify(i)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(r, i) {
      return this.url.searchParams.append(r, `sr.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(r, i) {
      return this.url.searchParams.append(r, `nxl.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(r, i) {
      return this.url.searchParams.append(r, `sl.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(r, i) {
      return this.url.searchParams.append(r, `nxr.${i}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(r, i) {
      return this.url.searchParams.append(r, `adj.${i}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(r, i) {
      return typeof i == "string" ? this.url.searchParams.append(r, `ov.${i}`) : this.url.searchParams.append(r, `ov.{${i.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(r, i, { config: o, type: a } = {}) {
      let c = "";
      a === "plain" ? c = "pl" : a === "phrase" ? c = "ph" : a === "websearch" && (c = "w");
      const h = o === void 0 ? "" : `(${o})`;
      return this.url.searchParams.append(r, `${c}fts${h}.${i}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(r) {
      return Object.entries(r).forEach(([i, o]) => {
        this.url.searchParams.append(i, `eq.${o}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(r, i, o) {
      return this.url.searchParams.append(r, `not.${i}.${o}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(r, { foreignTable: i, referencedTable: o = i } = {}) {
      const a = o ? `${o}.or` : "or";
      return this.url.searchParams.append(a, `(${r})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(r, i, o) {
      return this.url.searchParams.append(r, `${i}.${o}`), this;
    }
  }
  return z.default = t, z;
}
var Ie;
function it() {
  if (Ie) return M;
  Ie = 1;
  var n = M && M.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(M, "__esModule", { value: !0 });
  const e = n(Ee());
  class t {
    constructor(r, { headers: i = {}, schema: o, fetch: a }) {
      this.url = r, this.headers = i, this.schema = o, this.fetch = a;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(r, { head: i = !1, count: o } = {}) {
      const a = i ? "HEAD" : "GET";
      let c = !1;
      const h = (r ?? "*").split("").map((l) => /\s/.test(l) && !c ? "" : (l === '"' && (c = !c), l)).join("");
      return this.url.searchParams.set("select", h), o && (this.headers.Prefer = `count=${o}`), new e.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(r, { count: i, defaultToNull: o = !0 } = {}) {
      const a = "POST", c = [];
      if (this.headers.Prefer && c.push(this.headers.Prefer), i && c.push(`count=${i}`), o || c.push("missing=default"), this.headers.Prefer = c.join(","), Array.isArray(r)) {
        const h = r.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (h.length > 0) {
          const l = [...new Set(h)].map((u) => `"${u}"`);
          this.url.searchParams.set("columns", l.join(","));
        }
      }
      return new e.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: r,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */
    upsert(r, { onConflict: i, ignoreDuplicates: o = !1, count: a, defaultToNull: c = !0 } = {}) {
      const h = "POST", l = [`resolution=${o ? "ignore" : "merge"}-duplicates`];
      if (i !== void 0 && this.url.searchParams.set("on_conflict", i), this.headers.Prefer && l.push(this.headers.Prefer), a && l.push(`count=${a}`), c || l.push("missing=default"), this.headers.Prefer = l.join(","), Array.isArray(r)) {
        const u = r.reduce((d, f) => d.concat(Object.keys(f)), []);
        if (u.length > 0) {
          const d = [...new Set(u)].map((f) => `"${f}"`);
          this.url.searchParams.set("columns", d.join(","));
        }
      }
      return new e.default({
        method: h,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: r,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(r, { count: i } = {}) {
      const o = "PATCH", a = [];
      return this.headers.Prefer && a.push(this.headers.Prefer), i && a.push(`count=${i}`), this.headers.Prefer = a.join(","), new e.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: r,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: r } = {}) {
      const i = "DELETE", o = [];
      return r && o.push(`count=${r}`), this.headers.Prefer && o.unshift(this.headers.Prefer), this.headers.Prefer = o.join(","), new e.default({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return M.default = t, M;
}
var X = {}, Z = {}, Le;
function At() {
  return Le || (Le = 1, Object.defineProperty(Z, "__esModule", { value: !0 }), Z.version = void 0, Z.version = "0.0.0-automated"), Z;
}
var Ue;
function Rt() {
  if (Ue) return X;
  Ue = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.DEFAULT_HEADERS = void 0;
  const n = At();
  return X.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${n.version}` }, X;
}
var De;
function Ct() {
  if (De) return q;
  De = 1;
  var n = q && q.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(q, "__esModule", { value: !0 });
  const e = n(it()), t = n(Ee()), s = Rt();
  class r {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(o, { headers: a = {}, schema: c, fetch: h } = {}) {
      this.url = o, this.headers = Object.assign(Object.assign({}, s.DEFAULT_HEADERS), a), this.schemaName = c, this.fetch = h;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(o) {
      const a = new URL(`${this.url}/${o}`);
      return new e.default(a, {
        headers: Object.assign({}, this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(o) {
      return new r(this.url, {
        headers: this.headers,
        schema: o,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(o, a = {}, { head: c = !1, get: h = !1, count: l } = {}) {
      let u;
      const d = new URL(`${this.url}/rpc/${o}`);
      let f;
      c || h ? (u = c ? "HEAD" : "GET", Object.entries(a).filter(([y, _]) => _ !== void 0).map(([y, _]) => [y, Array.isArray(_) ? `{${_.join(",")}}` : `${_}`]).forEach(([y, _]) => {
        d.searchParams.append(y, _);
      })) : (u = "POST", f = a);
      const g = Object.assign({}, this.headers);
      return l && (g.Prefer = `count=${l}`), new t.default({
        method: u,
        url: d,
        headers: g,
        schema: this.schemaName,
        body: f,
        fetch: this.fetch,
        allowEmpty: !1
      });
    }
  }
  return q.default = r, q;
}
var Be;
function xt() {
  if (Be) return m;
  Be = 1;
  var n = m && m.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(m, "__esModule", { value: !0 }), m.PostgrestError = m.PostgrestBuilder = m.PostgrestTransformBuilder = m.PostgrestFilterBuilder = m.PostgrestQueryBuilder = m.PostgrestClient = void 0;
  const e = n(Ct());
  m.PostgrestClient = e.default;
  const t = n(it());
  m.PostgrestQueryBuilder = t.default;
  const s = n(Ee());
  m.PostgrestFilterBuilder = s.default;
  const r = n(rt());
  m.PostgrestTransformBuilder = r.default;
  const i = n(st());
  m.PostgrestBuilder = i.default;
  const o = n(tt());
  return m.PostgrestError = o.default, m.default = {
    PostgrestClient: e.default,
    PostgrestQueryBuilder: t.default,
    PostgrestFilterBuilder: s.default,
    PostgrestTransformBuilder: r.default,
    PostgrestBuilder: i.default,
    PostgrestError: o.default
  }, m;
}
var It = xt();
const Lt = /* @__PURE__ */ St(It), {
  PostgrestClient: Ut,
  PostgrestQueryBuilder: gr,
  PostgrestFilterBuilder: pr,
  PostgrestTransformBuilder: _r,
  PostgrestBuilder: vr
} = Lt, Dt = "2.11.2", Bt = { "X-Client-Info": `realtime-js/${Dt}` }, Nt = "1.0.0", nt = 1e4, Ft = 1e3;
var V;
(function(n) {
  n[n.connecting = 0] = "connecting", n[n.open = 1] = "open", n[n.closing = 2] = "closing", n[n.closed = 3] = "closed";
})(V || (V = {}));
var j;
(function(n) {
  n.closed = "closed", n.errored = "errored", n.joined = "joined", n.joining = "joining", n.leaving = "leaving";
})(j || (j = {}));
var $;
(function(n) {
  n.close = "phx_close", n.error = "phx_error", n.join = "phx_join", n.reply = "phx_reply", n.leave = "phx_leave", n.access_token = "access_token";
})($ || ($ = {}));
var we;
(function(n) {
  n.websocket = "websocket";
})(we || (we = {}));
var B;
(function(n) {
  n.Connecting = "connecting", n.Open = "open", n.Closing = "closing", n.Closed = "closed";
})(B || (B = {}));
class qt {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, t) {
    return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const t = new DataView(e), s = new TextDecoder();
    return this._decodeBroadcast(e, t, s);
  }
  _decodeBroadcast(e, t, s) {
    const r = t.getUint8(1), i = t.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = s.decode(e.slice(o, o + r));
    o = o + r;
    const c = s.decode(e.slice(o, o + i));
    o = o + i;
    const h = JSON.parse(s.decode(e.slice(o, e.byteLength)));
    return { ref: null, topic: a, event: c, payload: h };
  }
}
class ot {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var w;
(function(n) {
  n.abstime = "abstime", n.bool = "bool", n.date = "date", n.daterange = "daterange", n.float4 = "float4", n.float8 = "float8", n.int2 = "int2", n.int4 = "int4", n.int4range = "int4range", n.int8 = "int8", n.int8range = "int8range", n.json = "json", n.jsonb = "jsonb", n.money = "money", n.numeric = "numeric", n.oid = "oid", n.reltime = "reltime", n.text = "text", n.time = "time", n.timestamp = "timestamp", n.timestamptz = "timestamptz", n.timetz = "timetz", n.tsrange = "tsrange", n.tstzrange = "tstzrange";
})(w || (w = {}));
const Ne = (n, e, t = {}) => {
  var s;
  const r = (s = t.skipTypes) !== null && s !== void 0 ? s : [];
  return Object.keys(e).reduce((i, o) => (i[o] = Mt(o, n, e, r), i), {});
}, Mt = (n, e, t, s) => {
  const r = e.find((a) => a.name === n), i = r?.type, o = t[n];
  return i && !s.includes(i) ? at(i, o) : me(o);
}, at = (n, e) => {
  if (n.charAt(0) === "_") {
    const t = n.slice(1, n.length);
    return Gt(e, t);
  }
  switch (n) {
    case w.bool:
      return zt(e);
    case w.float4:
    case w.float8:
    case w.int2:
    case w.int4:
    case w.int8:
    case w.numeric:
    case w.oid:
      return Jt(e);
    case w.json:
    case w.jsonb:
      return Ht(e);
    case w.timestamp:
      return Kt(e);
    // Format to be consistent with PostgREST
    case w.abstime:
    // To allow users to cast it based on Timezone
    case w.date:
    // To allow users to cast it based on Timezone
    case w.daterange:
    case w.int4range:
    case w.int8range:
    case w.money:
    case w.reltime:
    // To allow users to cast it based on Timezone
    case w.text:
    case w.time:
    // To allow users to cast it based on Timezone
    case w.timestamptz:
    // To allow users to cast it based on Timezone
    case w.timetz:
    // To allow users to cast it based on Timezone
    case w.tsrange:
    case w.tstzrange:
      return me(e);
    default:
      return me(e);
  }
}, me = (n) => n, zt = (n) => {
  switch (n) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return n;
  }
}, Jt = (n) => {
  if (typeof n == "string") {
    const e = parseFloat(n);
    if (!Number.isNaN(e))
      return e;
  }
  return n;
}, Ht = (n) => {
  if (typeof n == "string")
    try {
      return JSON.parse(n);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), n;
    }
  return n;
}, Gt = (n, e) => {
  if (typeof n != "string")
    return n;
  const t = n.length - 1, s = n[t];
  if (n[0] === "{" && s === "}") {
    let i;
    const o = n.slice(1, t);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((a) => at(e, a));
  }
  return n;
}, Kt = (n) => typeof n == "string" ? n.replace(" ", "T") : n, ct = (n) => {
  let e = n;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class fe {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, s = {}, r = nt) {
    this.channel = e, this.event = t, this.payload = s, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var s;
    return this._hasReceived(e) && t((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Fe;
(function(n) {
  n.SYNC = "sync", n.JOIN = "join", n.LEAVE = "leave";
})(Fe || (Fe = {}));
class se {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const s = t?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(s.state, {}, (r) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = se.syncState(this.state, r, i, o), this.pendingDiffs.forEach((c) => {
        this.state = se.syncDiff(this.state, c, i, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(s.diff, {}, (r) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(r) : (this.state = se.syncDiff(this.state, r, i, o), a());
    }), this.onJoin((r, i, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: r,
        currentPresences: i,
        newPresences: o
      });
    }), this.onLeave((r, i, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: r,
        currentPresences: i,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, s, r) {
    const i = this.cloneDeep(e), o = this.transformState(t), a = {}, c = {};
    return this.map(i, (h, l) => {
      o[h] || (c[h] = l);
    }), this.map(o, (h, l) => {
      const u = i[h];
      if (u) {
        const d = l.map((_) => _.presence_ref), f = u.map((_) => _.presence_ref), g = l.filter((_) => f.indexOf(_.presence_ref) < 0), y = u.filter((_) => d.indexOf(_.presence_ref) < 0);
        g.length > 0 && (a[h] = g), y.length > 0 && (c[h] = y);
      } else
        a[h] = l;
    }), this.syncDiff(i, { joins: a, leaves: c }, s, r);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, s, r) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return s || (s = () => {
    }), r || (r = () => {
    }), this.map(i, (a, c) => {
      var h;
      const l = (h = e[a]) !== null && h !== void 0 ? h : [];
      if (e[a] = this.cloneDeep(c), l.length > 0) {
        const u = e[a].map((f) => f.presence_ref), d = l.filter((f) => u.indexOf(f.presence_ref) < 0);
        e[a].unshift(...d);
      }
      s(a, l, c);
    }), this.map(o, (a, c) => {
      let h = e[a];
      if (!h)
        return;
      const l = c.map((u) => u.presence_ref);
      h = h.filter((u) => l.indexOf(u.presence_ref) < 0), e[a] = h, r(a, h, c), h.length === 0 && delete e[a];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, s) => {
      const r = e[s];
      return "metas" in r ? t[s] = r.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : t[s] = r, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var qe;
(function(n) {
  n.ALL = "*", n.INSERT = "INSERT", n.UPDATE = "UPDATE", n.DELETE = "DELETE";
})(qe || (qe = {}));
var Me;
(function(n) {
  n.BROADCAST = "broadcast", n.PRESENCE = "presence", n.POSTGRES_CHANGES = "postgres_changes", n.SYSTEM = "system";
})(Me || (Me = {}));
var R;
(function(n) {
  n.SUBSCRIBED = "SUBSCRIBED", n.TIMED_OUT = "TIMED_OUT", n.CLOSED = "CLOSED", n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(R || (R = {}));
class je {
  constructor(e, t = { config: {} }, s) {
    this.topic = e, this.params = t, this.socket = s, this.bindings = {}, this.state = j.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new fe(this, $.join, this.params, this.timeout), this.rejoinTimer = new ot(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = j.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = j.closed, this.socket._remove(this);
    }), this._onError((r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = j.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = j.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on($.reply, {}, (r, i) => {
      this._trigger(this._replyEventName(i), r);
    }), this.presence = new se(this), this.broadcastEndpointURL = ct(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var s, r;
    if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const { config: { broadcast: i, presence: o, private: a } } = this.params;
      this._onError((l) => e?.(R.CHANNEL_ERROR, l)), this._onClose(() => e?.(R.CLOSED));
      const c = {}, h = {
        broadcast: i,
        presence: o,
        postgres_changes: (r = (s = this.bindings.postgres_changes) === null || s === void 0 ? void 0 : s.map((l) => l.filter)) !== null && r !== void 0 ? r : [],
        private: a
      };
      this.socket.accessTokenValue && (c.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: h }, c)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: l }) => {
        var u;
        if (this.socket.setAuth(), l === void 0) {
          e?.(R.SUBSCRIBED);
          return;
        } else {
          const d = this.bindings.postgres_changes, f = (u = d?.length) !== null && u !== void 0 ? u : 0, g = [];
          for (let y = 0; y < f; y++) {
            const _ = d[y], { filter: { event: O, schema: A, table: k, filter: S } } = _, T = l && l[y];
            if (T && T.event === O && T.schema === A && T.table === k && T.filter === S)
              g.push(Object.assign(Object.assign({}, _), { id: T.id }));
            else {
              this.unsubscribe(), e?.(R.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = g, e && e(R.SUBSCRIBED);
          return;
        }
      }).receive("error", (l) => {
        e?.(R.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(l).join(", ") || "error")));
      }).receive("timeout", () => {
        e?.(R.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, s) {
    return this._on(e, t, s);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var s, r;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: i, payload: o } = e, c = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const h = await this._fetchWithTimeout(this.broadcastEndpointURL, c, (s = t.timeout) !== null && s !== void 0 ? s : this.timeout);
        return await ((r = h.body) === null || r === void 0 ? void 0 : r.cancel()), h.ok ? "ok" : "error";
      } catch (h) {
        return h.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, c;
        const h = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((c = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || c === void 0) && c.ack) && i("ok"), h.receive("ok", () => i("ok")), h.receive("error", () => i("error")), h.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = j.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger($.close, "leave", this._joinRef());
    };
    return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((s) => {
      const r = new fe(this, $.leave, {}, e);
      r.receive("ok", () => {
        t(), s("ok");
      }).receive("timeout", () => {
        t(), s("timed out");
      }).receive("error", () => {
        s("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    });
  }
  /** @internal */
  async _fetchWithTimeout(e, t, s) {
    const r = new AbortController(), i = setTimeout(() => r.abort(), s), o = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: r.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _push(e, t, s = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let r = new fe(this, e, t, s);
    return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, s) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, s) {
    var r, i;
    const o = e.toLocaleLowerCase(), { close: a, error: c, leave: h, join: l } = $;
    if (s && [a, c, h, l].indexOf(o) >= 0 && s !== this._joinRef())
      return;
    let d = this._onMessage(o, t, s);
    if (t && !d)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter((f) => {
      var g, y, _;
      return ((g = f.filter) === null || g === void 0 ? void 0 : g.event) === "*" || ((_ = (y = f.filter) === null || y === void 0 ? void 0 : y.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === o;
    }).map((f) => f.callback(d, s)) : (i = this.bindings[o]) === null || i === void 0 || i.filter((f) => {
      var g, y, _, O, A, k;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in f) {
          const S = f.id, T = (g = f.filter) === null || g === void 0 ? void 0 : g.event;
          return S && ((y = t.ids) === null || y === void 0 ? void 0 : y.includes(S)) && (T === "*" || T?.toLocaleLowerCase() === ((_ = t.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()));
        } else {
          const S = (A = (O = f?.filter) === null || O === void 0 ? void 0 : O.event) === null || A === void 0 ? void 0 : A.toLocaleLowerCase();
          return S === "*" || S === ((k = t?.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase());
        }
      else
        return f.type.toLocaleLowerCase() === o;
    }).map((f) => {
      if (typeof d == "object" && "ids" in d) {
        const g = d.data, { schema: y, table: _, commit_timestamp: O, type: A, errors: k } = g;
        d = Object.assign(Object.assign({}, {
          schema: y,
          table: _,
          commit_timestamp: O,
          eventType: A,
          new: {},
          old: {},
          errors: k
        }), this._getPayloadRecords(g));
      }
      f.callback(d, s);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === j.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === j.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === j.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === j.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, s) {
    const r = e.toLocaleLowerCase(), i = {
      type: r,
      filter: t,
      callback: s
    };
    return this.bindings[r] ? this.bindings[r].push(i) : this.bindings[r] = [i], this;
  }
  /** @internal */
  _off(e, t) {
    const s = e.toLocaleLowerCase();
    return this.bindings[s] = this.bindings[s].filter((r) => {
      var i;
      return !(((i = r.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === s && je.isEqual(r.filter, t));
    }), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const s in e)
      if (e[s] !== t[s])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on($.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on($.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = j.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Ne(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Ne(e.columns, e.old_record)), t;
  }
}
const Wt = () => {
}, Vt = typeof WebSocket < "u", Qt = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Yt {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket.
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers The optional headers to pass when connecting.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, t) {
    var s;
    this.accessTokenValue = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.httpEndpoint = "", this.headers = Bt, this.params = {}, this.timeout = nt, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = Wt, this.conn = null, this.sendBuffer = [], this.serializer = new qt(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (i) => {
      let o;
      return i ? o = i : typeof fetch > "u" ? o = (...a) => Promise.resolve().then(() => Y).then(({ default: c }) => c(...a)) : o = fetch, (...a) => o(...a);
    }, this.endPoint = `${e}/${we.websocket}`, this.httpEndpoint = ct(e), t?.transport ? this.transport = t.transport : this.transport = null, t?.params && (this.params = t.params), t?.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)), t?.timeout && (this.timeout = t.timeout), t?.logger && (this.logger = t.logger), t?.heartbeatIntervalMs && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
    const r = (s = t?.params) === null || s === void 0 ? void 0 : s.apikey;
    if (r && (this.accessTokenValue = r, this.apiKey = r), this.reconnectAfterMs = t?.reconnectAfterMs ? t.reconnectAfterMs : (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4, this.encode = t?.encode ? t.encode : (i, o) => o(JSON.stringify(i)), this.decode = t?.decode ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new ot(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t?.fetch), t?.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = t?.worker || !1, this.workerUrl = t?.workerUrl;
    }
    this.accessToken = t?.accessToken || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this.endpointURL(), void 0, {
          headers: this.headers
        });
        return;
      }
      if (Vt) {
        this.conn = new WebSocket(this.endpointURL()), this.setupConnection();
        return;
      }
      this.conn = new Xt(this.endpointURL(), void 0, {
        close: () => {
          this.conn = null;
        }
      }), import("./browser-BltQb4_s.mjs").then((e) => e.b).then(({ default: e }) => {
        this.conn = new e(this.endpointURL(), void 0, {
          headers: this.headers
        }), this.setupConnection();
      });
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: Nt }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, t ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, s) {
    this.logger(e, t, s);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case V.connecting:
        return B.Connecting;
      case V.open:
        return B.Open;
      case V.closing:
        return B.Closing;
      default:
        return B.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === B.Open;
  }
  channel(e, t = { config: {} }) {
    const s = new je(`realtime:${e}`, t, this);
    return this.channels.push(s), s;
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: s, payload: r, ref: i } = e, o = () => {
      this.encode(e, (a) => {
        var c;
        (c = this.conn) === null || c === void 0 || c.send(a);
      });
    };
    this.log("push", `${t} ${s} (${i})`, r), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    let t = e || this.accessToken && await this.accessToken() || this.accessTokenValue;
    if (t) {
      let s = null;
      try {
        s = JSON.parse(atob(t.split(".")[1]));
      } catch {
      }
      if (s && s.exp && !(Math.floor(Date.now() / 1e3) - s.exp < 0))
        return this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`), Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${s.exp}`);
      this.accessTokenValue = t, this.channels.forEach((r) => {
        t && r.updateJoinPayload({ access_token: t }), r.joinedOnce && r._isJoined() && r._push($.access_token, {
          access_token: t
        });
      });
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(Ft, "hearbeat timeout");
        return;
      }
      this.pendingHeartbeatRef = this._makeRef(), this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      }), this.setAuth();
    }
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((s) => s.topic === e && (s._isJoined() || s._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t._joinRef() !== e._joinRef());
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      let { topic: s, event: r, payload: i, ref: o } = t;
      o && o === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${i.status || ""} ${s} ${r} ${o && "(" + o + ")" || ""}`, i), this.channels.filter((a) => a._isMember(s)).forEach((a) => a._trigger(r, i, o)), this.stateChangeCallbacks.message.forEach((a) => a(t));
    });
  }
  /** @internal */
  async _onConnOpen() {
    if (this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), !this.worker)
      this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    else {
      this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
      const e = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
        this.log("worker", "worker error", t.message), this.workerRef.terminate();
      }, this.workerRef.onmessage = (t) => {
        t.data.event === "keepAlive" && this.sendHeartbeat();
      }, this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t) => t(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t) => t(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger($.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const s = e.match(/\?/) ? "&" : "?", r = new URLSearchParams(t);
    return `${e}${s}${r}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const s = new Blob([Qt], { type: "application/javascript" });
      t = URL.createObjectURL(s);
    }
    return t;
  }
}
class Xt {
  constructor(e, t, s) {
    this.binaryType = "arraybuffer", this.onclose = () => {
    }, this.onerror = () => {
    }, this.onmessage = () => {
    }, this.onopen = () => {
    }, this.readyState = V.connecting, this.send = () => {
    }, this.url = null, this.url = e, this.close = s.close;
  }
}
class Pe extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function b(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
class Zt extends Pe {
  constructor(e, t) {
    super(e), this.name = "StorageApiError", this.status = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class be extends Pe {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
var es = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
const lt = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Y).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, ts = () => es(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Y)).Response : Response;
}), ke = (n) => {
  if (Array.isArray(n))
    return n.map((t) => ke(t));
  if (typeof n == "function" || n !== Object(n))
    return n;
  const e = {};
  return Object.entries(n).forEach(([t, s]) => {
    const r = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[r] = ke(s);
  }), e;
};
var N = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
const ge = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), ss = (n, e, t) => N(void 0, void 0, void 0, function* () {
  const s = yield ts();
  n instanceof s && !t?.noResolveJson ? n.json().then((r) => {
    e(new Zt(ge(r), n.status || 500));
  }).catch((r) => {
    e(new be(ge(r), r));
  }) : e(new be(ge(n), n));
}), rs = (n, e, t, s) => {
  const r = { method: n, headers: e?.headers || {} };
  return n === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json" }, e?.headers), s && (r.body = JSON.stringify(s)), Object.assign(Object.assign({}, r), t));
};
function ne(n, e, t, s, r, i) {
  return N(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      n(t, rs(e, s, r, i)).then((c) => {
        if (!c.ok)
          throw c;
        return s?.noResolveJson ? c : c.json();
      }).then((c) => o(c)).catch((c) => ss(c, a, s));
    });
  });
}
function ue(n, e, t, s) {
  return N(this, void 0, void 0, function* () {
    return ne(n, "GET", e, t, s);
  });
}
function I(n, e, t, s, r) {
  return N(this, void 0, void 0, function* () {
    return ne(n, "POST", e, s, r, t);
  });
}
function is(n, e, t, s, r) {
  return N(this, void 0, void 0, function* () {
    return ne(n, "PUT", e, s, r, t);
  });
}
function ns(n, e, t, s) {
  return N(this, void 0, void 0, function* () {
    return ne(n, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), s);
  });
}
function ht(n, e, t, s, r) {
  return N(this, void 0, void 0, function* () {
    return ne(n, "DELETE", e, s, r, t);
  });
}
var E = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
const os = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, ze = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class as {
  constructor(e, t = {}, s, r) {
    this.url = e, this.headers = t, this.bucketId = s, this.fetch = lt(r);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, s, r) {
    return E(this, void 0, void 0, function* () {
      try {
        let i;
        const o = Object.assign(Object.assign({}, ze), r);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(o.upsert) });
        const c = o.metadata;
        typeof Blob < "u" && s instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), c && i.append("metadata", this.encodeMetadata(c)), i.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (i = s, i.append("cacheControl", o.cacheControl), c && i.append("metadata", this.encodeMetadata(c))) : (i = s, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, c && (a["x-metadata"] = this.toBase64(this.encodeMetadata(c)))), r?.headers && (a = Object.assign(Object.assign({}, a), r.headers));
        const h = this._removeEmptyFolders(t), l = this._getFinalPath(h), u = yield this.fetch(`${this.url}/object/${l}`, Object.assign({ method: e, body: i, headers: a }, o?.duplex ? { duplex: o.duplex } : {})), d = yield u.json();
        return u.ok ? {
          data: { path: h, id: d.Id, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (i) {
        if (b(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, t, s) {
    return E(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, s);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, t, s, r) {
    return E(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), o = this._getFinalPath(i), a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", t);
      try {
        let c;
        const h = Object.assign({ upsert: ze.upsert }, r), l = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(h.upsert) });
        typeof Blob < "u" && s instanceof Blob ? (c = new FormData(), c.append("cacheControl", h.cacheControl), c.append("", s)) : typeof FormData < "u" && s instanceof FormData ? (c = s, c.append("cacheControl", h.cacheControl)) : (c = s, l["cache-control"] = `max-age=${h.cacheControl}`, l["content-type"] = h.contentType);
        const u = yield this.fetch(a.toString(), {
          method: "PUT",
          body: c,
          headers: l
        }), d = yield u.json();
        return u.ok ? {
          data: { path: i, fullPath: d.Key },
          error: null
        } : { data: null, error: d };
      } catch (c) {
        if (b(c))
          return { data: null, error: c };
        throw c;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, t) {
    return E(this, void 0, void 0, function* () {
      try {
        let s = this._getFinalPath(e);
        const r = Object.assign({}, this.headers);
        t?.upsert && (r["x-upsert"] = "true");
        const i = yield I(this.fetch, `${this.url}/object/upload/sign/${s}`, {}, { headers: r }), o = new URL(this.url + i.url), a = o.searchParams.get("token");
        if (!a)
          throw new Pe("No token returned by API");
        return { data: { signedUrl: o.toString(), path: e, token: a }, error: null };
      } catch (s) {
        if (b(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, t, s) {
    return E(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, s);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, t, s) {
    return E(this, void 0, void 0, function* () {
      try {
        return { data: yield I(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s?.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (b(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, t, s) {
    return E(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield I(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: s?.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (r) {
        if (b(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, t, s) {
    return E(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e), i = yield I(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: t }, s?.transform ? { transform: s.transform } : {}), { headers: this.headers });
        const o = s?.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }, { data: i, error: null };
      } catch (r) {
        if (b(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, t, s) {
    return E(this, void 0, void 0, function* () {
      try {
        const r = yield I(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = s?.download ? `&download=${s.download === !0 ? "" : s.download}` : "";
        return {
          data: r.map((o) => Object.assign(Object.assign({}, o), { signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null })),
          error: null
        };
      } catch (r) {
        if (b(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, t) {
    return E(this, void 0, void 0, function* () {
      const r = typeof t?.transform < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString(t?.transform || {}), o = i ? `?${i}` : "";
      try {
        const a = this._getFinalPath(e);
        return { data: yield (yield ue(this.fetch, `${this.url}/${r}/${a}${o}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (a) {
        if (b(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return E(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const s = yield ue(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: ke(s), error: null };
      } catch (s) {
        if (b(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return E(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield ns(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (s) {
        if (b(s) && s instanceof be) {
          const r = s.originalError;
          if ([400, 404].includes(r?.status))
            return { data: !1, error: s };
        }
        throw s;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, t) {
    const s = this._getFinalPath(e), r = [], i = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && r.push(i);
    const a = typeof t?.transform < "u" ? "render/image" : "object", c = this.transformOptsToQueryString(t?.transform || {});
    c !== "" && r.push(c);
    let h = r.join("&");
    return h !== "" && (h = `?${h}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${s}${h}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return E(this, void 0, void 0, function* () {
      try {
        return { data: yield ht(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (b(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, t, s) {
    return E(this, void 0, void 0, function* () {
      try {
        const r = Object.assign(Object.assign(Object.assign({}, os), t), { prefix: e || "" });
        return { data: yield I(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, s), error: null };
      } catch (r) {
        if (b(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const cs = "2.7.1", ls = { "X-Client-Info": `storage-js/${cs}` };
var G = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
class hs {
  constructor(e, t = {}, s) {
    this.url = e, this.headers = Object.assign(Object.assign({}, ls), t), this.fetch = lt(s);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield ue(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (b(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield ue(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (b(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, t = {
    public: !1
  }) {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield I(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (b(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, t) {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield is(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (s) {
        if (b(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield I(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (b(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return G(this, void 0, void 0, function* () {
      try {
        return { data: yield ht(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (b(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class us extends hs {
  constructor(e, t = {}, s) {
    super(e, t, s);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new as(this.url, this.headers, e, this.fetch);
  }
}
const ds = "2.47.7";
let te = "";
typeof Deno < "u" ? te = "deno" : typeof document < "u" ? te = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? te = "react-native" : te = "node";
const fs = { "X-Client-Info": `supabase-js-${te}/${ds}` }, gs = {
  headers: fs
}, ps = {
  schema: "public"
}, _s = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, vs = {};
var ys = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
const ws = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = Ze : e = fetch, (...t) => e(...t);
}, ms = () => typeof Headers > "u" ? et : Headers, bs = (n, e, t) => {
  const s = ws(t), r = ms();
  return (i, o) => ys(void 0, void 0, void 0, function* () {
    var a;
    const c = (a = yield e()) !== null && a !== void 0 ? a : n;
    let h = new r(o?.headers);
    return h.has("apikey") || h.set("apikey", n), h.has("Authorization") || h.set("Authorization", `Bearer ${c}`), s(i, Object.assign(Object.assign({}, o), { headers: h }));
  });
};
var ks = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
function Ss(n) {
  return n.replace(/\/$/, "");
}
function Ts(n, e) {
  const { db: t, auth: s, realtime: r, global: i } = n, { db: o, auth: a, realtime: c, global: h } = e, l = {
    db: Object.assign(Object.assign({}, o), t),
    auth: Object.assign(Object.assign({}, a), s),
    realtime: Object.assign(Object.assign({}, c), r),
    global: Object.assign(Object.assign({}, h), i),
    accessToken: () => ks(this, void 0, void 0, function* () {
      return "";
    })
  };
  return n.accessToken ? l.accessToken = n.accessToken : delete l.accessToken, l;
}
const ut = "2.67.1", Os = "http://localhost:9999", Es = "supabase.auth.token", js = { "X-Client-Info": `gotrue-js/${ut}` }, Je = 10, Se = "X-Supabase-Api-Version", dt = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
};
function Ps(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function $s() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const e = Math.random() * 16 | 0;
    return (n == "x" ? e : e & 3 | 8).toString(16);
  });
}
const P = () => typeof document < "u", U = {
  tested: !1,
  writable: !1
}, re = () => {
  if (!P())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (U.tested)
    return U.writable;
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n), globalThis.localStorage.removeItem(n), U.tested = !0, U.writable = !0;
  } catch {
    U.tested = !0, U.writable = !1;
  }
  return U.writable;
};
function pe(n) {
  const e = {}, t = new URL(n);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((r, i) => {
        e[i] = r;
      });
    } catch {
    }
  return t.searchParams.forEach((s, r) => {
    e[r] = s;
  }), e;
}
const ft = (n) => {
  let e;
  return n ? e = n : typeof fetch > "u" ? e = (...t) => Promise.resolve().then(() => Y).then(({ default: s }) => s(...t)) : e = fetch, (...t) => e(...t);
}, As = (n) => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function", gt = async (n, e, t) => {
  await n.setItem(e, JSON.stringify(t));
}, ae = async (n, e) => {
  const t = await n.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, ce = async (n, e) => {
  await n.removeItem(e);
};
function Rs(n) {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let t = "", s, r, i, o, a, c, h, l = 0;
  for (n = n.replace("-", "+").replace("_", "/"); l < n.length; )
    o = e.indexOf(n.charAt(l++)), a = e.indexOf(n.charAt(l++)), c = e.indexOf(n.charAt(l++)), h = e.indexOf(n.charAt(l++)), s = o << 2 | a >> 4, r = (a & 15) << 4 | c >> 2, i = (c & 3) << 6 | h, t = t + String.fromCharCode(s), c != 64 && r != 0 && (t = t + String.fromCharCode(r)), h != 64 && i != 0 && (t = t + String.fromCharCode(i));
  return t;
}
class de {
  constructor() {
    this.promise = new de.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
de.promiseConstructor = Promise;
function He(n) {
  const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, t = n.split(".");
  if (t.length !== 3)
    throw new Error("JWT is not valid: not a JWT structure");
  if (!e.test(t[1]))
    throw new Error("JWT is not valid: payload is not in base64url format");
  const s = t[1];
  return JSON.parse(Rs(s));
}
async function Cs(n) {
  return await new Promise((e) => {
    setTimeout(() => e(null), n);
  });
}
function xs(n, e) {
  return new Promise((s, r) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await n(i);
          if (!e(i, null, o)) {
            s(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            r(o);
            return;
          }
        }
    })();
  });
}
function Is(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function Ls() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", s = t.length;
    let r = "";
    for (let i = 0; i < 56; i++)
      r += t.charAt(Math.floor(Math.random() * s));
    return r;
  }
  return crypto.getRandomValues(e), Array.from(e, Is).join("");
}
async function Us(n) {
  const t = new TextEncoder().encode(n), s = await crypto.subtle.digest("SHA-256", t), r = new Uint8Array(s);
  return Array.from(r).map((i) => String.fromCharCode(i)).join("");
}
function Ds(n) {
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Bs(n) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), n;
  const t = await Us(n);
  return Ds(t);
}
async function K(n, e, t = !1) {
  const s = Ls();
  let r = s;
  t && (r += "/PASSWORD_RECOVERY"), await gt(n, `${e}-code-verifier`, r);
  const i = await Bs(s);
  return [i, s === i ? "plain" : "s256"];
}
const Ns = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Fs(n) {
  const e = n.headers.get(Se);
  if (!e || !e.match(Ns))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class $e extends Error {
  constructor(e, t, s) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = s;
  }
}
function p(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class qs extends $e {
  constructor(e, t, s) {
    super(e, t, s), this.name = "AuthApiError", this.status = t, this.code = s;
  }
}
function Ms(n) {
  return p(n) && n.name === "AuthApiError";
}
class pt extends $e {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}
class F extends $e {
  constructor(e, t, s, r) {
    super(e, s, r), this.name = t, this.status = s;
  }
}
class C extends F {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function zs(n) {
  return p(n) && n.name === "AuthSessionMissingError";
}
class _e extends F {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class le extends F {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class he extends F {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function Js(n) {
  return p(n) && n.name === "AuthImplicitGrantRedirectError";
}
class Ge extends F {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Te extends F {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
}
function ve(n) {
  return p(n) && n.name === "AuthRetryableFetchError";
}
class Ke extends F {
  constructor(e, t, s) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = s;
  }
}
var Hs = function(n, e) {
  var t = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[r]) && (t[s[r]] = n[s[r]]);
  return t;
};
const D = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), Gs = [502, 503, 504];
async function We(n) {
  var e;
  if (!As(n))
    throw new Te(D(n), 0);
  if (Gs.includes(n.status))
    throw new Te(D(n), n.status);
  let t;
  try {
    t = await n.json();
  } catch (i) {
    throw new pt(D(i), i);
  }
  let s;
  const r = Fs(n);
  if (r && r.getTime() >= dt["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? s = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (s = t.error_code), s) {
    if (s === "weak_password")
      throw new Ke(D(t), n.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (s === "session_not_found")
      throw new C();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new Ke(D(t), n.status, t.weak_password.reasons);
  throw new qs(D(t), n.status || 500, s);
}
const Ks = (n, e, t, s) => {
  const r = { method: n, headers: e?.headers || {} };
  return n === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e?.headers), r.body = JSON.stringify(s), Object.assign(Object.assign({}, r), t));
};
async function v(n, e, t, s) {
  var r;
  const i = Object.assign({}, s?.headers);
  i[Se] || (i[Se] = dt["2024-01-01"].name), s?.jwt && (i.Authorization = `Bearer ${s.jwt}`);
  const o = (r = s?.query) !== null && r !== void 0 ? r : {};
  s?.redirectTo && (o.redirect_to = s.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", c = await Ws(n, e, t + a, {
    headers: i,
    noResolveJson: s?.noResolveJson
  }, {}, s?.body);
  return s?.xform ? s?.xform(c) : { data: Object.assign({}, c), error: null };
}
async function Ws(n, e, t, s, r, i) {
  const o = Ks(e, s, r, i);
  let a;
  try {
    a = await n(t, Object.assign({}, o));
  } catch (c) {
    throw console.error(c), new Te(D(c), 0);
  }
  if (a.ok || await We(a), s?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (c) {
    await We(c);
  }
}
function x(n) {
  var e;
  let t = null;
  Xs(n) && (t = Object.assign({}, n), n.expires_at || (t.expires_at = Ps(n.expires_in)));
  const s = (e = n.user) !== null && e !== void 0 ? e : n;
  return { data: { session: t, user: s }, error: null };
}
function Ve(n) {
  const e = x(n);
  return !e.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((t, s) => t && typeof s == "string", !0) && (e.data.weak_password = n.weak_password), e;
}
function L(n) {
  var e;
  return { data: { user: (e = n.user) !== null && e !== void 0 ? e : n }, error: null };
}
function Vs(n) {
  return { data: n, error: null };
}
function Qs(n) {
  const { action_link: e, email_otp: t, hashed_token: s, redirect_to: r, verification_type: i } = n, o = Hs(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: t,
    hashed_token: s,
    redirect_to: r,
    verification_type: i
  }, c = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: c
    },
    error: null
  };
}
function Ys(n) {
  return n;
}
function Xs(n) {
  return n.access_token && n.refresh_token && n.expires_in;
}
var Zs = function(n, e) {
  var t = {};
  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(n); r < s.length; r++)
      e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[r]) && (t[s[r]] = n[s[r]]);
  return t;
};
class er {
  constructor({ url: e = "", headers: t = {}, fetch: s }) {
    this.url = e, this.headers = t, this.fetch = ft(s), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = "global") {
    try {
      return await v(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (s) {
      if (p(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await v(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: L
      });
    } catch (s) {
      if (p(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, s = Zs(e, ["options"]), r = Object.assign(Object.assign({}, s), t);
      return "newEmail" in s && (r.new_email = s?.newEmail, delete r.newEmail), await v(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: r,
        headers: this.headers,
        xform: Qs,
        redirectTo: t?.redirectTo
      });
    } catch (t) {
      if (p(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await v(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: L
      });
    } catch (t) {
      if (p(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, s, r, i, o, a, c;
    try {
      const h = { nextPage: null, lastPage: 0, total: 0 }, l = await v(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (s = (t = e?.page) === null || t === void 0 ? void 0 : t.toString()) !== null && s !== void 0 ? s : "",
          per_page: (i = (r = e?.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Ys
      });
      if (l.error)
        throw l.error;
      const u = await l.json(), d = (o = l.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, f = (c = (a = l.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && c !== void 0 ? c : [];
      return f.length > 0 && (f.forEach((g) => {
        const y = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(g.split(";")[1].split("=")[1]);
        h[`${_}Page`] = y;
      }), h.total = parseInt(d)), { data: Object.assign(Object.assign({}, u), h), error: null };
    } catch (h) {
      if (p(h))
        return { data: { users: [] }, error: h };
      throw h;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    try {
      return await v(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: L
      });
    } catch (t) {
      if (p(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    try {
      return await v(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: L
      });
    } catch (s) {
      if (p(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    try {
      return await v(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: L
      });
    } catch (s) {
      if (p(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  async _listFactors(e) {
    try {
      const { data: t, error: s } = await v(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (r) => ({ data: { factors: r }, error: null })
      });
      return { data: t, error: s };
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    try {
      return { data: await v(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
}
const tr = {
  getItem: (n) => re() ? globalThis.localStorage.getItem(n) : null,
  setItem: (n, e) => {
    re() && globalThis.localStorage.setItem(n, e);
  },
  removeItem: (n) => {
    re() && globalThis.localStorage.removeItem(n);
  }
};
function Qe(n = {}) {
  return {
    getItem: (e) => n[e] || null,
    setItem: (e, t) => {
      n[e] = t;
    },
    removeItem: (e) => {
      delete n[e];
    }
  };
}
function sr() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const W = {
  /**
   * @experimental
   */
  debug: !!(globalThis && re() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class _t extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class rr extends _t {
}
async function ir(n, e, t) {
  W.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, e);
  const s = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    s.abort(), W.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", n);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(n, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: s.signal
  }, async (r) => {
    if (r) {
      W.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", n, r.name);
      try {
        return await t();
      } finally {
        W.debug && console.log("@supabase/gotrue-js: navigatorLock: released", n, r.name);
      }
    } else {
      if (e === 0)
        throw W.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", n), new rr(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);
      if (W.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
sr();
const nr = {
  url: Os,
  storageKey: Es,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: js,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
}, ee = 30 * 1e3, Ye = 3;
async function Xe(n, e, t) {
  return await t();
}
class ie {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var t, s;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = ie.nextInstanceID, ie.nextInstanceID += 1, this.instanceID > 0 && P() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const r = Object.assign(Object.assign({}, nr), e);
    if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new er({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch
    }), this.url = r.url, this.headers = r.headers, this.fetch = ft(r.fetch), this.lock = r.lock || Xe, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : P() && (!((t = globalThis?.navigator) === null || t === void 0) && t.locks) ? this.lock = ir : this.lock = Xe, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? r.storage ? this.storage = r.storage : re() ? this.storage = tr : (this.memoryStorage = {}, this.storage = Qe(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Qe(this.memoryStorage)), P() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (i) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i);
      }
      (s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", async (i) => {
        this._debug("received broadcast notification from other tab or client", i), await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${ut}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const t = P() ? await this._isPKCEFlow() : !1;
      if (this._debug("#_initialize()", "begin", "is PKCE flow", t), t || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
        const { data: s, error: r } = await this._getSessionFromURL(t);
        if (r) {
          if (this._debug("#_initialize()", "error detecting session from URL", r), Js(r)) {
            const a = (e = r.details) === null || e === void 0 ? void 0 : e.code;
            if (a === "identity_already_exists" || a === "identity_not_found" || a === "single_identity_not_deletable")
              return { error: r };
          }
          return await this._removeSession(), { error: r };
        }
        const { session: i, redirectType: o } = s;
        return this._debug("#_initialize()", "detected session in URL", i, "redirect type", o), await this._saveSession(i), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return p(t) ? { error: t } : {
        error: new pt("Unexpected error during initialization", t)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, s, r;
    try {
      const i = await v(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (s = (t = e?.options) === null || t === void 0 ? void 0 : t.data) !== null && s !== void 0 ? s : {},
          gotrue_meta_security: { captcha_token: (r = e?.options) === null || r === void 0 ? void 0 : r.captchaToken }
        },
        xform: x
      }), { data: o, error: a } = i;
      if (a || !o)
        return { data: { user: null, session: null }, error: a };
      const c = o.session, h = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (i) {
      if (p(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, s, r;
    try {
      let i;
      if ("email" in e) {
        const { email: l, password: u, options: d } = e;
        let f = null, g = null;
        this.flowType === "pkce" && ([f, g] = await K(this.storage, this.storageKey)), i = await v(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: d?.emailRedirectTo,
          body: {
            email: l,
            password: u,
            data: (t = d?.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: d?.captchaToken },
            code_challenge: f,
            code_challenge_method: g
          },
          xform: x
        });
      } else if ("phone" in e) {
        const { phone: l, password: u, options: d } = e;
        i = await v(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: l,
            password: u,
            data: (s = d?.data) !== null && s !== void 0 ? s : {},
            channel: (r = d?.channel) !== null && r !== void 0 ? r : "sms",
            gotrue_meta_security: { captcha_token: d?.captchaToken }
          },
          xform: x
        });
      } else
        throw new le("You must provide either an email or phone number and a password");
      const { data: o, error: a } = i;
      if (a || !o)
        return { data: { user: null, session: null }, error: a };
      const c = o.session, h = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (i) {
      if (p(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: o, options: a } = e;
        t = await v(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Ve
        });
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        t = await v(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Ve
        });
      } else
        throw new le("You must provide either an email or phone number and a password");
      const { data: s, error: r } = t;
      return r ? { data: { user: null, session: null }, error: r } : !s || !s.session || !s.user ? { data: { user: null, session: null }, error: new _e() } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), {
        data: Object.assign({ user: s.user, session: s.session }, s.weak_password ? { weakPassword: s.weak_password } : null),
        error: r
      });
    } catch (t) {
      if (p(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, s, r, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
      queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  async _exchangeCodeForSession(e) {
    const t = await ae(this.storage, `${this.storageKey}-code-verifier`), [s, r] = (t ?? "").split("/");
    try {
      const { data: i, error: o } = await v(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: s
        },
        xform: x
      });
      if (await ce(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      return !i || !i.session || !i.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new _e()
      } : (i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), { data: Object.assign(Object.assign({}, i), { redirectType: r ?? null }), error: o });
    } catch (i) {
      if (p(i))
        return { data: { user: null, session: null, redirectType: null }, error: i };
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: s, token: r, access_token: i, nonce: o } = e, a = await v(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: s,
          id_token: r,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: t?.captchaToken }
        },
        xform: x
      }), { data: c, error: h } = a;
      return h ? { data: { user: null, session: null }, error: h } : !c || !c.session || !c.user ? {
        data: { user: null, session: null },
        error: new _e()
      } : (c.session && (await this._saveSession(c.session), await this._notifyAllSubscribers("SIGNED_IN", c.session)), { data: c, error: h });
    } catch (t) {
      if (p(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, s, r, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: c } = e;
        let h = null, l = null;
        this.flowType === "pkce" && ([h, l] = await K(this.storage, this.storageKey));
        const { error: u } = await v(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (t = c?.data) !== null && t !== void 0 ? t : {},
            create_user: (s = c?.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: c?.captchaToken },
            code_challenge: h,
            code_challenge_method: l
          },
          redirectTo: c?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: u };
      }
      if ("phone" in e) {
        const { phone: a, options: c } = e, { data: h, error: l } = await v(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (r = c?.data) !== null && r !== void 0 ? r : {},
            create_user: (i = c?.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: c?.captchaToken },
            channel: (o = c?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: h?.message_id }, error: l };
      }
      throw new le("You must provide either an email or phone number.");
    } catch (a) {
      if (p(a))
        return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, s;
    try {
      let r, i;
      "options" in e && (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken);
      const { data: o, error: a } = await v(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: r,
        xform: x
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const c = o.session, h = o.user;
      return c?.access_token && (await this._saveSession(c), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", c)), { data: { user: h, session: c }, error: null };
    } catch (r) {
      if (p(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, s, r;
    try {
      let i = null, o = null;
      return this.flowType === "pkce" && ([i, o] = await K(this.storage, this.storageKey)), await v(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (s = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && s !== void 0 ? s : void 0 }), !((r = e?.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: i, code_challenge_method: o }),
        headers: this.headers,
        xform: Vs
      });
    } catch (i) {
      if (p(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: s } = e;
        if (s)
          throw s;
        if (!t)
          throw new C();
        const { error: r } = await v(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return { data: { user: null, session: null }, error: r };
      });
    } catch (e) {
      if (p(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: s, type: r, options: i } = e, { error: o } = await v(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: s,
            type: r,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: o };
      } else if ("phone" in e) {
        const { phone: s, type: r, options: i } = e, { data: o, error: a } = await v(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: s,
            type: r,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: o?.message_id }, error: a };
      }
      throw new le("You must provide either an email or phone number and a type");
    } catch (t) {
      if (p(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const s = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), r = (async () => (await s, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await r;
          } catch {
          }
        })()), r;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const s = t();
          for (this.pendingInLock.push((async () => {
            try {
              await s;
            } catch {
            }
          })()), await s; this.pendingInLock.length; ) {
            const r = [...this.pendingInLock];
            await Promise.all(r), this.pendingInLock.splice(0, r.length);
          }
          return await s;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await ae(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const s = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
      if (this._debug("#__loadSession()", `session has${s ? "" : " not"} expired`, "expires_at", e.expires_at), !s) {
        if (this.storage.isServer) {
          let o = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (c, h, l) => (!o && h === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), o = !0, this.suppressGetSessionWarning = !0), Reflect.get(c, h, l))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? { data: { session: null }, error: i } : { data: { session: r }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await v(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: L
      }) : await this._useSession(async (t) => {
        var s, r, i;
        const { data: o, error: a } = t;
        if (a)
          throw a;
        return !(!((s = o.session) === null || s === void 0) && s.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new C() } : await v(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (r = o.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : void 0,
          xform: L
        });
      });
    } catch (t) {
      if (p(t))
        return zs(t) && (await this._removeSession(), await ce(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (s) => {
        const { data: r, error: i } = s;
        if (i)
          throw i;
        if (!r.session)
          throw new C();
        const o = r.session;
        let a = null, c = null;
        this.flowType === "pkce" && e.email != null && ([a, c] = await K(this.storage, this.storageKey));
        const { data: h, error: l } = await v(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t?.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: c }),
          jwt: o.access_token,
          xform: L
        });
        if (l)
          throw l;
        return o.user = h.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), { data: { user: o.user }, error: null };
      });
    } catch (s) {
      if (p(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Decodes a JWT (without performing any validation).
   */
  _decodeJWT(e) {
    return He(e);
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new C();
      const t = Date.now() / 1e3;
      let s = t, r = !0, i = null;
      const o = He(e.access_token);
      if (o.exp && (s = o.exp, r = s <= t), r) {
        const { session: a, error: c } = await this._callRefreshToken(e.refresh_token);
        if (c)
          return { data: { user: null, session: null }, error: c };
        if (!a)
          return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: c } = await this._getUser(e.access_token);
        if (c)
          throw c;
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: s - t,
          expires_at: s
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return { data: { user: i.user, session: i }, error: null };
    } catch (t) {
      if (p(t))
        return { data: { session: null, user: null }, error: t };
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        if (!e) {
          const { data: o, error: a } = t;
          if (a)
            throw a;
          e = (s = o.session) !== null && s !== void 0 ? s : void 0;
        }
        if (!e?.refresh_token)
          throw new C();
        const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? { data: { user: null, session: null }, error: i } : r ? { data: { user: r.user, session: r }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (t) {
      if (p(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e) {
    try {
      if (!P())
        throw new he("No browser detected.");
      if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
        throw new he("Not a valid implicit grant flow url.");
      if (this.flowType == "pkce" && !e)
        throw new Ge("Not a valid PKCE flow url.");
      const t = pe(window.location.href);
      if (e) {
        if (!t.code)
          throw new Ge("No code detected.");
        const { data: A, error: k } = await this._exchangeCodeForSession(t.code);
        if (k)
          throw k;
        const S = new URL(window.location.href);
        return S.searchParams.delete("code"), window.history.replaceState(window.history.state, "", S.toString()), { data: { session: A.session, redirectType: null }, error: null };
      }
      if (t.error || t.error_description || t.error_code)
        throw new he(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      const { provider_token: s, provider_refresh_token: r, access_token: i, refresh_token: o, expires_in: a, expires_at: c, token_type: h } = t;
      if (!i || !a || !o || !h)
        throw new he("No session defined in URL");
      const l = Math.round(Date.now() / 1e3), u = parseInt(a);
      let d = l + u;
      c && (d = parseInt(c));
      const f = d - l;
      f * 1e3 <= ee && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);
      const g = d - u;
      l - g >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", g, d, l) : l - g < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", g, d, l);
      const { data: y, error: _ } = await this._getUser(i);
      if (_)
        throw _;
      const O = {
        provider_token: s,
        provider_refresh_token: r,
        access_token: i,
        expires_in: u,
        expires_at: d,
        refresh_token: o,
        token_type: h,
        user: y.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: O, redirectType: t.type }, error: null };
    } catch (t) {
      if (p(t))
        return { data: { session: null, redirectType: null }, error: t };
      throw t;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantFlow() {
    const e = pe(window.location.href);
    return !!(P() && (e.access_token || e.error_description));
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCEFlow() {
    const e = pe(window.location.href), t = await ae(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var s;
      const { data: r, error: i } = t;
      if (i)
        return { error: i };
      const o = (s = r.session) === null || s === void 0 ? void 0 : s.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(Ms(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return { error: a };
      }
      return e !== "others" && (await this._removeSession(), await ce(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const t = $s(), s = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, s), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: s } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var s, r;
      try {
        const { data: { session: i }, error: o } = t;
        if (o)
          throw o;
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0 ? void 0 : s.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let s = null, r = null;
    this.flowType === "pkce" && ([s, r] = await K(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await v(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: s,
          code_challenge_method: r,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (p(i))
        return { data: null, error: i };
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: s } = await this.getUser();
      if (s)
        throw s;
      return { data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var t;
    try {
      const { data: s, error: r } = await this._useSession(async (i) => {
        var o, a, c, h, l;
        const { data: u, error: d } = i;
        if (d)
          throw d;
        const f = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (c = e.options) === null || c === void 0 ? void 0 : c.queryParams,
          skipBrowserRedirect: !0
        });
        return await v(this.fetch, "GET", f, {
          headers: this.headers,
          jwt: (l = (h = u.session) === null || h === void 0 ? void 0 : h.access_token) !== null && l !== void 0 ? l : void 0
        });
      });
      if (r)
        throw r;
      return P() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(s?.url), { data: { provider: e.provider, url: s?.url }, error: null };
    } catch (s) {
      if (p(s))
        return { data: { provider: e.provider, url: null }, error: s };
      throw s;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var s, r;
        const { data: i, error: o } = t;
        if (o)
          throw o;
        return await v(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (r = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null && r !== void 0 ? r : void 0
        });
      });
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const s = Date.now();
      return await xs(async (r) => (r > 0 && await Cs(200 * Math.pow(2, r - 1)), this._debug(t, "refreshing attempt", r), await v(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: x
      })), (r, i) => {
        const o = 200 * Math.pow(2, r);
        return i && ve(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - s < ee;
      });
    } catch (s) {
      if (this._debug(t, "error", s), p(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", s), P() && !t.skipBrowserRedirect && window.location.assign(s), { data: { provider: e, url: s }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const t = "#_recoverAndRefresh()";
    this._debug(t, "begin");
    try {
      const s = await ae(this.storage, this.storageKey);
      if (this._debug(t, "session from storage", s), !this._isValidSession(s)) {
        this._debug(t, "session is not valid"), s !== null && await this._removeSession();
        return;
      }
      const r = Math.round(Date.now() / 1e3), i = ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) < r + Je;
      if (this._debug(t, `session has${i ? "" : " not"} expired with margin of ${Je}s`), i) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o && (console.error(o), ve(o) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(t, "error", s), console.error(s);
      return;
    } finally {
      this._debug(t, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, s;
    if (!e)
      throw new C();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      this.refreshingDeferred = new de();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!i.session)
        throw new C();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { session: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if (this._debug(r, "error", i), p(i)) {
        const o = { session: null, error: i };
        return ve(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(o), o;
      }
      throw (s = this.refreshingDeferred) === null || s === void 0 || s.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(r, "end");
    }
  }
  async _notifyAllSubscribers(e, t, s = !0) {
    const r = `#_notifyAllSubscribers(${e})`;
    this._debug(r, "begin", t, `broadcast = ${s}`);
    try {
      this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, t);
        } catch (c) {
          i.push(c);
        }
      });
      if (await Promise.all(o), i.length > 0) {
        for (let a = 0; a < i.length; a += 1)
          console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(r, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await gt(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await ce(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && P() && window?.removeEventListener && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), ee);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: s } } = t;
              if (!s || !s.refresh_token || !s.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const r = Math.floor((s.expires_at * 1e3 - e) / ee);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${ee}ms, refresh threshold is ${Ye} ticks`), r <= Ye && await this._callRefreshToken(s.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof _t)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !P() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, s) {
    const r = [`provider=${encodeURIComponent(t)}`];
    if (s?.redirectTo && r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s?.scopes && r.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await K(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      r.push(a.toString());
    }
    if (s?.queryParams) {
      const i = new URLSearchParams(s.queryParams);
      r.push(i.toString());
    }
    return s?.skipBrowserRedirect && r.push(`skip_http_redirect=${s.skipBrowserRedirect}`), `${e}?${r.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s;
        const { data: r, error: i } = t;
        return i ? { data: null, error: i } : await v(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (s = r?.session) === null || s === void 0 ? void 0 : s.access_token
        });
      });
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var s, r;
        const { data: i, error: o } = t;
        if (o)
          return { data: null, error: o };
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: c, error: h } = await v(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (s = i?.session) === null || s === void 0 ? void 0 : s.access_token
        });
        return h ? { data: null, error: h } : (e.factorType === "totp" && (!((r = c?.totp) === null || r === void 0) && r.qr_code) && (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`), { data: c, error: null });
      });
    } catch (t) {
      if (p(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: r, error: i } = t;
          if (i)
            return { data: null, error: i };
          const { data: o, error: a } = await v(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (s = r?.session) === null || s === void 0 ? void 0 : s.access_token
          });
          return a ? { data: null, error: a } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), { data: o, error: a });
        });
      } catch (t) {
        if (p(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var s;
          const { data: r, error: i } = t;
          return i ? { data: null, error: i } : await v(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (s = r?.session) === null || s === void 0 ? void 0 : s.access_token
          });
        });
      } catch (t) {
        if (p(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: s } = await this._challenge({
      factorId: e.factorId
    });
    return s ? { data: null, error: s } : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: t } = await this.getUser();
    if (t)
      return { data: null, error: t };
    const s = e?.factors || [], r = s.filter((o) => o.factor_type === "totp" && o.status === "verified"), i = s.filter((o) => o.factor_type === "phone" && o.status === "verified");
    return {
      data: {
        all: s,
        totp: r,
        phone: i
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var t, s;
      const { data: { session: r }, error: i } = e;
      if (i)
        return { data: null, error: i };
      if (!r)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const o = this._decodeJWT(r.access_token);
      let a = null;
      o.aal && (a = o.aal);
      let c = a;
      ((s = (t = r.user.factors) === null || t === void 0 ? void 0 : t.filter((u) => u.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (c = "aal2");
      const l = o.amr || [];
      return { data: { currentLevel: a, nextLevel: c, currentAuthenticationMethods: l }, error: null };
    }));
  }
}
ie.nextInstanceID = 0;
const or = ie;
class ar extends or {
  constructor(e) {
    super(e);
  }
}
var cr = function(n, e, t, s) {
  function r(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(l) {
      try {
        h(s.next(l));
      } catch (u) {
        o(u);
      }
    }
    function c(l) {
      try {
        h(s.throw(l));
      } catch (u) {
        o(u);
      }
    }
    function h(l) {
      l.done ? i(l.value) : r(l.value).then(a, c);
    }
    h((s = s.apply(n, e || [])).next());
  });
};
class lr {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, t, s) {
    var r, i, o;
    if (this.supabaseUrl = e, this.supabaseKey = t, !e)
      throw new Error("supabaseUrl is required.");
    if (!t)
      throw new Error("supabaseKey is required.");
    const a = Ss(e);
    this.realtimeUrl = `${a}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${a}/auth/v1`, this.storageUrl = `${a}/storage/v1`, this.functionsUrl = `${a}/functions/v1`;
    const c = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, h = {
      db: ps,
      realtime: vs,
      auth: Object.assign(Object.assign({}, _s), { storageKey: c }),
      global: gs
    }, l = Ts(s ?? {}, h);
    this.storageKey = (r = l.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken ? (this.accessToken = l.accessToken, this.auth = new Proxy({}, {
      get: (u, d) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((o = l.auth) !== null && o !== void 0 ? o : {}, this.headers, l.global.fetch), this.fetch = bs(t, this._getAccessToken.bind(this), l.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, l.realtime)), this.rest = new Ut(`${a}/rest/v1`, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch
    }), l.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new kt(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new us(this.storageUrl, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, t = {}, s = {}) {
    return this.rest.rpc(e, t, s);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, t = { config: {} }) {
    return this.realtime.channel(e, t);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, t;
    return cr(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: s } = yield this.auth.getSession();
      return (t = (e = s.session) === null || e === void 0 ? void 0 : e.access_token) !== null && t !== void 0 ? t : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: t, detectSessionInUrl: s, storage: r, storageKey: i, flowType: o, lock: a, debug: c }, h, l) {
    var u;
    const d = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new ar({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, d), h),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: t,
      detectSessionInUrl: s,
      storage: r,
      flowType: o,
      lock: a,
      debug: c,
      fetch: l,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: (u = "Authorization" in this.headers) !== null && u !== void 0 ? u : !1
    });
  }
  _initRealtimeClient(e) {
    return new Yt(this.realtimeUrl, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e?.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, s) => {
      this._handleTokenChanged(t, "CLIENT", s?.access_token);
    });
  }
  _handleTokenChanged(e, t, s) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== s ? this.changedAccessToken = s : e === "SIGNED_OUT" && (this.realtime.setAuth(), t == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const hr = (n, e, t) => new lr(n, e, t), ur = "https://pqrgvelzxmtdqrofxujx.supabase.co", dr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcmd2ZWx6eG10ZHFyb2Z4dWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTc0ODAsImV4cCI6MjA3MTY5MzQ4MH0.s8JZLDdzIS1wBLln0Zs3LK_9BHelUcbRhyAC_0-5sos", yr = hr(ur, dr);
export {
  St as g,
  yr as s
};
