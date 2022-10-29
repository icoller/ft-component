import { reactive as fe, ref as L, resolveComponent as j, resolveDirective as De, openBlock as a, createElementBlock as h, Fragment as H, createElementVNode as i, toDisplayString as g, createVNode as f, withCtx as $, unref as I, withDirectives as Te, createTextVNode as Q, renderList as te, normalizeClass as de, createBlock as le, createCommentVNode as ae, onMounted as je, withModifiers as ze, pushScopeId as Ue, popScopeId as Fe, nextTick as He, withScopeId as ot, markRaw as it, shallowReactive as at, renderSlot as ke, getCurrentInstance as Je, computed as Pe } from "vue";
import { ElMessage as rt } from "element-plus";
import ut from "axios";
import he from "pinyin-match";
var ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var We = { exports: {} };
(function(e, t) {
  (function(n, o) {
    e.exports = o();
  })(ct, function() {
    function n(l) {
      var A = [];
      return l.AMapUI && A.push(o(l.AMapUI)), l.Loca && A.push(r(l.Loca)), Promise.all(A);
    }
    function o(l) {
      return new Promise(function(A, w) {
        var F = [];
        if (l.plugins)
          for (var v = 0; v < l.plugins.length; v += 1)
            c.AMapUI.plugins.indexOf(l.plugins[v]) == -1 && F.push(l.plugins[v]);
        if (p.AMapUI === d.failed)
          w("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");
        else if (p.AMapUI === d.notload) {
          p.AMapUI = d.loading, c.AMapUI.version = l.version || c.AMapUI.version, v = c.AMapUI.version;
          var O = document.body || document.head, W = document.createElement("script");
          W.type = "text/javascript", W.src = "https://webapi.amap.com/ui/" + v + "/main.js", W.onerror = function(z) {
            p.AMapUI = d.failed, w("\u8BF7\u6C42 AMapUI \u5931\u8D25");
          }, W.onload = function() {
            if (p.AMapUI = d.loaded, F.length)
              window.AMapUI.loadUI(F, function() {
                for (var z = 0, Y = F.length; z < Y; z++) {
                  var J = F[z].split("/").slice(-1)[0];
                  window.AMapUI[J] = arguments[z];
                }
                for (A(); u.AMapUI.length; )
                  u.AMapUI.splice(0, 1)[0]();
              });
            else
              for (A(); u.AMapUI.length; )
                u.AMapUI.splice(0, 1)[0]();
          }, O.appendChild(W);
        } else
          p.AMapUI === d.loaded ? l.version && l.version !== c.AMapUI.version ? w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528") : F.length ? window.AMapUI.loadUI(F, function() {
            for (var z = 0, Y = F.length; z < Y; z++) {
              var J = F[z].split("/").slice(-1)[0];
              window.AMapUI[J] = arguments[z];
            }
            A();
          }) : A() : l.version && l.version !== c.AMapUI.version ? w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528") : u.AMapUI.push(function(z) {
            z ? w(z) : F.length ? window.AMapUI.loadUI(F, function() {
              for (var Y = 0, J = F.length; Y < J; Y++) {
                var Z = F[Y].split("/").slice(-1)[0];
                window.AMapUI[Z] = arguments[Y];
              }
              A();
            }) : A();
          });
      });
    }
    function r(l) {
      return new Promise(function(A, w) {
        if (p.Loca === d.failed)
          w("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");
        else if (p.Loca === d.notload) {
          p.Loca = d.loading, c.Loca.version = l.version || c.Loca.version;
          var F = c.Loca.version, v = c.AMap.version.startsWith("2"), O = F.startsWith("2");
          if (v && !O || !v && O)
            w("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");
          else {
            v = c.key, O = document.body || document.head;
            var W = document.createElement("script");
            W.type = "text/javascript", W.src = "https://webapi.amap.com/loca?v=" + F + "&key=" + v, W.onerror = function(z) {
              p.Loca = d.failed, w("\u8BF7\u6C42 AMapUI \u5931\u8D25");
            }, W.onload = function() {
              for (p.Loca = d.loaded, A(); u.Loca.length; )
                u.Loca.splice(0, 1)[0]();
            }, O.appendChild(W);
          }
        } else
          p.Loca === d.loaded ? l.version && l.version !== c.Loca.version ? w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528") : A() : l.version && l.version !== c.Loca.version ? w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528") : u.Loca.push(function(z) {
            z ? w(z) : w();
          });
      });
    }
    if (!window)
      throw Error("AMap JSAPI can only be used in Browser.");
    var d;
    (function(l) {
      l.notload = "notload", l.loading = "loading", l.loaded = "loaded", l.failed = "failed";
    })(d || (d = {}));
    var c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, p = { AMap: d.notload, AMapUI: d.notload, Loca: d.notload }, u = { AMap: [], AMapUI: [], Loca: [] }, _ = [], k = function(l) {
      typeof l == "function" && (p.AMap === d.loaded ? l(window.AMap) : _.push(l));
    };
    return { load: function(l) {
      return new Promise(function(A, w) {
        if (p.AMap == d.failed)
          w("");
        else if (p.AMap == d.notload) {
          var F = l.key, v = l.version, O = l.plugins;
          F ? (window.AMap && location.host !== "lbs.amap.com" && w("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"), c.key = F, c.AMap.version = v || c.AMap.version, c.AMap.plugins = O || c.AMap.plugins, p.AMap = d.loading, v = document.body || document.head, window.___onAPILoaded = function(z) {
            if (delete window.___onAPILoaded, z)
              p.AMap = d.failed, w(z);
            else
              for (p.AMap = d.loaded, n(l).then(function() {
                A(window.AMap);
              }).catch(w); _.length; )
                _.splice(0, 1)[0]();
          }, O = document.createElement("script"), O.type = "text/javascript", O.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + c.AMap.version + "&key=" + F + "&plugin=" + c.AMap.plugins.join(","), O.onerror = function(z) {
            p.AMap = d.failed, w(z);
          }, v.appendChild(O)) : w("\u8BF7\u586B\u5199key");
        } else if (p.AMap == d.loaded)
          if (l.key && l.key !== c.key)
            w("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
          else if (l.version && l.version !== c.AMap.version)
            w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");
          else {
            if (F = [], l.plugins)
              for (v = 0; v < l.plugins.length; v += 1)
                c.AMap.plugins.indexOf(l.plugins[v]) == -1 && F.push(l.plugins[v]);
            F.length ? window.AMap.plugin(F, function() {
              n(l).then(function() {
                A(window.AMap);
              }).catch(w);
            }) : n(l).then(function() {
              A(window.AMap);
            }).catch(w);
          }
        else if (l.key && l.key !== c.key)
          w("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
        else if (l.version && l.version !== c.AMap.version)
          w("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");
        else {
          var W = [];
          if (l.plugins)
            for (v = 0; v < l.plugins.length; v += 1)
              c.AMap.plugins.indexOf(l.plugins[v]) == -1 && W.push(l.plugins[v]);
          k(function() {
            W.length ? window.AMap.plugin(W, function() {
              n(l).then(function() {
                A(window.AMap);
              }).catch(w);
            }) : n(l).then(function() {
              A(window.AMap);
            }).catch(w);
          });
        }
      });
    }, reset: function() {
      delete window.AMap, delete window.AMapUI, delete window.Loca, c = { key: "", AMap: { version: "1.4.15", plugins: [] }, AMapUI: { version: "1.1", plugins: [] }, Loca: { version: "1.3.2" } }, p = {
        AMap: d.notload,
        AMapUI: d.notload,
        Loca: d.notload
      }, u = { AMap: [], AMapUI: [], Loca: [] };
    } };
  });
})(We);
const dt = We.exports, pt = Object.prototype.toString;
function Ye(e, t) {
  return pt.call(e) === `[object ${t}]`;
}
function Ce(e) {
  return e != null;
}
function ft(e) {
  return Ye(e, "String");
}
function ht(e) {
  return e !== null && Ye(e, "Object");
}
function vt(e) {
  return _t(e) || ft(e) ? e.length === 0 : e instanceof Map || e instanceof Set ? e.size === 0 : ht(e) ? Object.keys(e).length === 0 : !1;
}
function mt(e, t) {
  const n = t.split(".");
  let o = e;
  return n.forEach((r) => {
    o = Ce(o) && Ce(o[r]) ? o[r] : null;
  }), o;
}
const pe = function(e) {
  if (e !== void 0)
    return JSON.parse(JSON.stringify(e));
};
function _t(e) {
  return e && Array.isArray(e);
}
var Ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = {
    name: "en",
    el: {
      colorpicker: {
        confirm: "OK",
        clear: "Clear",
        defaultLabel: "color picker",
        description: "current color is {color}. press enter to select a new color."
      },
      datepicker: {
        now: "Now",
        today: "Today",
        cancel: "Cancel",
        clear: "Clear",
        confirm: "OK",
        dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
        monthTablePrompt: "Use the arrow keys and enter to select the month",
        yearTablePrompt: "Use the arrow keys and enter to select the year",
        selectedDate: "Selected date",
        selectDate: "Select date",
        selectTime: "Select time",
        startDate: "Start Date",
        startTime: "Start Time",
        endDate: "End Date",
        endTime: "End Time",
        prevYear: "Previous Year",
        nextYear: "Next Year",
        prevMonth: "Previous Month",
        nextMonth: "Next Month",
        year: "",
        month1: "January",
        month2: "February",
        month3: "March",
        month4: "April",
        month5: "May",
        month6: "June",
        month7: "July",
        month8: "August",
        month9: "September",
        month10: "October",
        month11: "November",
        month12: "December",
        week: "week",
        weeks: {
          sun: "Sun",
          mon: "Mon",
          tue: "Tue",
          wed: "Wed",
          thu: "Thu",
          fri: "Fri",
          sat: "Sat"
        },
        weeksFull: {
          sun: "Sunday",
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday"
        },
        months: {
          jan: "Jan",
          feb: "Feb",
          mar: "Mar",
          apr: "Apr",
          may: "May",
          jun: "Jun",
          jul: "Jul",
          aug: "Aug",
          sep: "Sep",
          oct: "Oct",
          nov: "Nov",
          dec: "Dec"
        }
      },
      inputNumber: {
        decrease: "decrease number",
        increase: "increase number"
      },
      select: {
        loading: "Loading",
        noMatch: "No matching data",
        noData: "No data",
        placeholder: "Select"
      },
      dropdown: {
        toggleDropdown: "Toggle Dropdown"
      },
      cascader: {
        noMatch: "No matching data",
        loading: "Loading",
        placeholder: "Select",
        noData: "No data"
      },
      pagination: {
        goto: "Go to",
        pagesize: "/page",
        total: "Total {total}",
        pageClassifier: "",
        deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
      },
      dialog: {
        close: "Close this dialog"
      },
      drawer: {
        close: "Close this dialog"
      },
      messagebox: {
        title: "Message",
        confirm: "OK",
        cancel: "Cancel",
        error: "Illegal input",
        close: "Close this dialog"
      },
      upload: {
        deleteTip: "press delete to remove",
        delete: "Delete",
        preview: "Preview",
        continue: "Continue"
      },
      slider: {
        defaultLabel: "slider between {min} and {max}",
        defaultRangeStartLabel: "pick start value",
        defaultRangeEndLabel: "pick end value"
      },
      table: {
        emptyText: "No Data",
        confirmFilter: "Confirm",
        resetFilter: "Reset",
        clearFilter: "All",
        sumText: "Sum"
      },
      tree: {
        emptyText: "No Data"
      },
      transfer: {
        noMatch: "No matching data",
        noData: "No data",
        titles: ["List 1", "List 2"],
        filterPlaceholder: "Enter keyword",
        noCheckedFormat: "{total} items",
        hasCheckedFormat: "{checked}/{total} checked"
      },
      image: {
        error: "FAILED"
      },
      pageHeader: {
        title: "Back"
      },
      popconfirm: {
        confirmButtonText: "Yes",
        cancelButtonText: "No"
      }
    }
  };
  e.default = t;
})(Ge);
const gt = /* @__PURE__ */ Ke(Ge);
var qe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  e.default = t;
})(qe);
const yt = /* @__PURE__ */ Ke(qe), bt = {
  common: {
    confirm: "Confirm",
    cancel: "Cancel",
    clear: "Cancel",
    all: "All",
    selected: "Selected",
    selectPlaceholder: "Please Select"
  },
  location: {
    name: "Location",
    selectLocation: "Select Location",
    inputLocation: "Please enter a name to search"
  },
  distpicker: {
    province: "Province",
    city: "City",
    district: "District",
    street: "Street"
  },
  deptEmpl: {
    deptName: "Department",
    emplName: "Employee",
    deptView: "View by Department",
    letterView: "View by letter",
    searchResults: "Search results",
    enterKeywords: "Enter keywords",
    multipleLimit: "Multiple Limit"
  }
}, wt = {
  common: {
    confirm: "\u786E\u5B9A",
    cancel: "\u53D6\u6D88",
    clear: "\u6E05\u9664",
    all: "\u5168\u90E8",
    selected: "\u5DF2\u9009\u4E2D",
    selectPlaceholder: "\u8BF7\u9009\u62E9"
  },
  location: {
    name: "\u5B9A\u4F4D",
    selectLocation: "\u9009\u62E9\u5B9A\u4F4D",
    inputLocation: "\u8BF7\u8F93\u5165\u540D\u79F0\u641C\u7D22"
  },
  distpicker: {
    province: "\u7701\u4EFD",
    city: "\u57CE\u5E02",
    district: "\u533A/\u53BF",
    street: "\u9547/\u8857\u9053"
  },
  deptEmpl: {
    deptName: "\u90E8\u95E8",
    emplName: "\u4EBA\u5458",
    deptView: "\u6309\u90E8\u95E8\u67E5\u770B",
    letterView: "\u6309\u5B57\u6BCD\u67E5\u770B",
    searchResults: "\u67E5\u8BE2\u7ED3\u679C",
    enterKeywords: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD",
    multipleLimit: "\u9650\u9009"
  }
};
let kt = fe({
  lang: localStorage.getItem("lang") || "zh"
});
const $t = {
  en: {
    ...gt,
    ...bt
  },
  zh: {
    ...yt,
    ...wt
  }
};
function Ct(e) {
  return {
    messages: e.messages,
    $st(t, ...n) {
      const o = mt(this.messages[kt.lang], t);
      return typeof o == "function" ? o(...n) : o !== null ? o : t;
    }
  };
}
const Et = Ct({
  locale: localStorage.getItem("lang") || "zh",
  messages: $t
}), B = function(e) {
  return Et.$st(e);
};
const ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, At = { key: 0 }, It = { key: 1 }, Lt = { class: "ft-location" }, St = { class: "area-title" }, Mt = { class: "name" }, Vt = { id: "map" }, xt = { class: "footer" }, Dt = /* @__PURE__ */ Q("cancel"), Tt = /* @__PURE__ */ Q("\u786E\u5B9A"), zt = {
  name: "index",
  props: {
    visible: Boolean,
    modelValue: {
      type: Object,
      default: () => ({
        lng: "",
        lat: "",
        address: ""
      })
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    }
  },
  emits: ["update:visible", "change"],
  setup(e, { emit: t }) {
    const n = e, o = L(n.modelValue.address), r = L(n.modelValue.address), d = L(!1);
    window._AMapSecurityConfig = {
      securityJsCode: "081ca4bb09fb1423b750cf82854b9718"
    };
    const c = fe({
      lng: n.modelValue.lng,
      lat: n.modelValue.lat,
      address: n.modelValue.address
    }), p = L(), u = L(), _ = L(null), k = L(n.visible);
    function l() {
      z();
    }
    function A() {
      t("update:visible", !1);
    }
    function w() {
      k.value = !k.value;
    }
    let F, v, O, W;
    function z() {
      d.value = !0, dt.load({
        key: "528c074304eca4d4c8a61bece33483d4",
        version: "2.0"
      }).then((D) => {
        v = D, _.value = new D.Map("map"), _.value.on("click", J), c.lng && m(), D.plugin(
          ["AMap.ToolBar", "AMap.Scale", "AMap.Geolocation", "AMap.PlaceSearch", "AMap.Geocoder"],
          () => {
            const G = new D.ToolBar(), q = new D.Scale(), R = new D.Geolocation({
              enableHighAccuracy: !0,
              timeout: 1e4,
              position: "RB",
              buttonOffset: new D.Pixel(10, 20),
              zoomToAccuracy: !0
            });
            d.value = !1, W = new D.Geocoder({
              city: "\u5168\u56FD"
            }), c.lng == "" && (R.getCurrentPosition((P, M) => {
            }), _.value.addControl(R)), _.value.addControl(G), _.value.addControl(q), F = new D.PlaceSearch({
              map: _.value,
              type: "\u8D2D\u7269\u670D\u52A1|\u4FBF\u6C11\u5546\u5E97|\u4FBF\u5229\u5E97",
              city: "",
              pageSize: 20,
              pageIndex: 1,
              citylimit: !1,
              autoFitView: !0
            });
          }
        );
      });
    }
    function Y(D, G) {
      D ? F.search(D, (q, R) => {
        if (R && typeof R == "object" && R.poiList) {
          const P = R.poiList.pois;
          P.forEach((M) => {
            if (M.name !== M.adname || M.name !== M.cityname) {
              let x;
              M.address.indexOf(M.name) != -1 ? x = M.address : x = M.address + M.name, M.cityname === M.adname ? M.value = M.adname + x : M.value = M.cityname + M.adname + x;
            }
          }), G(P);
        } else
          G([]);
      }) : G([]);
    }
    function J(D) {
      const { lng: G, lat: q } = D.lnglat;
      W.getAddress([G, q], (R, P) => {
        if (R === "complete" && P.info === "OK") {
          const { formattedAddress: M } = P.regeocode;
          c.lng = G, c.lat = q, c.address = M, o.value = M;
        }
      });
    }
    function Z(D) {
      c.lng = D.location.lng, c.lat = D.location.lat, c.address = D.value, _.value.setZoomAndCenter(16, [c.lng, c.lat]);
    }
    function m(D) {
      const { lng: G, lat: q } = c || D;
      O && (O.setMap(null), s), O = new v.Marker({
        position: new v.LngLat(G, q),
        anchor: "bottom-center"
      }), _.value.add(O), _.value.setZoomAndCenter(16, [G, q]);
    }
    function C() {
      if (o.value == "") {
        rt.error("\u8BF7\u60A8\u641C\u7D22\u9009\u62E9\u5B9A\u4F4D\u4FE1\u606F");
        return;
      }
      A(), r.value = o.value, t("change", c);
    }
    return (D, G) => {
      const q = j("el-autocomplete"), R = j("el-button"), P = j("el-popover"), M = De("loading");
      return a(), h(H, null, [
        i("div", {
          ref_key: "buttonRef",
          ref: p,
          class: "cursor",
          onClick: w
        }, [
          r.value ? (a(), h("span", At, g(r.value), 1)) : (a(), h("span", It, g(e.placeholder), 1))
        ], 512),
        f(P, {
          visible: k.value,
          width: 400,
          ref_key: "popoverRef",
          ref: u,
          trigger: "click",
          "virtual-ref": p.value,
          "virtual-triggering": "",
          onHide: A,
          onBeforeEnter: l
        }, {
          default: $(() => [
            i("div", Lt, [
              i("div", St, g(I(B)("location.name")), 1),
              f(q, {
                modelValue: o.value,
                "onUpdate:modelValue": G[0] || (G[0] = (x) => o.value = x),
                "fetch-suggestions": Y,
                style: { width: "100%" },
                placeholder: I(B)("location.inputLocation"),
                clearable: "",
                debounce: 500,
                onSelect: Z
              }, {
                title: $(({ item: x }) => [
                  i("div", Mt, g(x.address + x.title), 1)
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              Te(i("div", Vt, null, 512), [
                [M, d.value]
              ]),
              i("div", xt, [
                f(R, { onClick: w }, {
                  default: $(() => [
                    Dt
                  ]),
                  _: 1
                }),
                f(R, {
                  type: "primary",
                  onClick: C
                }, {
                  default: $(() => [
                    Tt
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ], 64);
    };
  }
}, Ee = /* @__PURE__ */ ve(zt, [["__scopeId", "data-v-050ed7d3"]]);
Ee.install = function(e) {
  e.component("FtLocation", Ee);
};
const ce = ut.create({
  baseURL: "/api",
  timeout: 1e4,
  withCredentials: !1
});
ce.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("authKey");
    if (t && (e.headers.authKey = t), !e.headers.notEnt) {
      const n = localStorage.getItem("entId");
      n && (e.url = "ent_" + n + "/m/v1/" + e.url);
    }
    return e;
  },
  (e) => Promise.reject(e)
);
ce.interceptors.response.use(
  (e) => (e.data.code === 5 && location.reload(), e.data),
  (e) => Promise.reject(e)
);
const Ut = { key: 0 }, Ft = { key: 1 }, Ot = { class: "region-list" }, Bt = ["onClick"], Pt = { class: "region-list" }, Rt = ["onClick"], Nt = { class: "region-list" }, jt = ["onClick"], Ht = { class: "region-list" }, Jt = ["onClick"], Kt = {
  name: "index",
  props: {
    modelValue: Object,
    visible: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: B("distpicker.selectPlaceholder")
    },
    precision: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:visible"],
  setup(e, { emit: t }) {
    const n = e, o = L(!1), r = L("province"), d = L(n.visible), c = L([
      {
        id: 2,
        code: 11e4,
        name: "\u5317\u4EAC\u5E02"
      },
      {
        id: 3,
        code: 12e4,
        name: "\u5929\u6D25\u5E02"
      },
      {
        id: 4,
        code: 44e4,
        name: "\u5E7F\u4E1C\u7701"
      },
      {
        id: 5,
        code: 32e4,
        name: "\u6C5F\u82CF\u7701"
      },
      {
        id: 6,
        code: 31e4,
        name: "\u4E0A\u6D77\u5E02"
      },
      {
        id: 7,
        code: 5e5,
        name: "\u91CD\u5E86\u5E02"
      },
      {
        id: 8,
        code: 37e4,
        name: "\u5C71\u4E1C\u7701"
      },
      {
        id: 9,
        code: 33e4,
        name: "\u6D59\u6C5F\u7701"
      },
      {
        id: 10,
        code: 41e4,
        name: "\u6CB3\u5357\u7701"
      },
      {
        id: 11,
        code: 51e4,
        name: "\u56DB\u5DDD\u7701"
      },
      {
        id: 12,
        code: 42e4,
        name: "\u6E56\u5317\u7701"
      },
      {
        id: 13,
        code: 43e4,
        name: "\u6E56\u5357\u7701"
      },
      {
        id: 14,
        code: 35e4,
        name: "\u798F\u5EFA\u7701"
      },
      {
        id: 15,
        code: 13e4,
        name: "\u6CB3\u5317\u7701"
      },
      {
        id: 16,
        code: 52e4,
        name: "\u8D35\u5DDE\u7701"
      },
      {
        id: 17,
        code: 61e4,
        name: "\u9655\u897F\u7701"
      },
      {
        id: 18,
        code: 36e4,
        name: "\u6C5F\u897F\u7701"
      },
      {
        id: 19,
        code: 21e4,
        name: "\u8FBD\u5B81\u7701"
      },
      {
        id: 20,
        code: 53e4,
        name: "\u4E91\u5357\u7701"
      },
      {
        id: 21,
        code: 34e4,
        name: "\u5B89\u5FBD\u7701"
      },
      {
        id: 22,
        code: 14e4,
        name: "\u5C71\u897F\u7701"
      },
      {
        id: 23,
        code: 15e4,
        name: "\u5185\u8499\u53E4\u81EA\u6CBB\u533A"
      },
      {
        id: 24,
        code: 45e4,
        name: "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A"
      },
      {
        id: 25,
        code: 65e4,
        name: "\u65B0\u7586\u7EF4\u543E\u5C14\u81EA\u6CBB\u533A"
      },
      {
        id: 26,
        code: 23e4,
        name: "\u9ED1\u9F99\u6C5F\u7701"
      },
      {
        id: 27,
        code: 22e4,
        name: "\u5409\u6797\u7701"
      },
      {
        id: 28,
        code: 46e4,
        name: "\u6D77\u5357\u7701"
      },
      {
        id: 29,
        code: 62e4,
        name: "\u7518\u8083\u7701"
      },
      {
        id: 30,
        code: 64e4,
        name: "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A"
      },
      {
        id: 31,
        code: 63e4,
        name: "\u9752\u6D77\u7701"
      },
      {
        id: 32,
        code: 54e4,
        name: "\u897F\u85CF\u81EA\u6CBB\u533A"
      },
      {
        id: 33,
        code: 71e4,
        name: "\u53F0\u6E7E\u7701"
      },
      {
        id: 34,
        code: 81e4,
        name: "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A"
      },
      {
        id: 35,
        code: 82e4,
        name: "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A"
      }
    ]), p = L([]), u = L([]), _ = L([]), k = fe({
      province: n.modelValue.province,
      city: n.modelValue.city,
      district: n.modelValue.district,
      street: n.modelValue.street,
      address: ""
    }), l = fe({
      province: "",
      city: "",
      district: "",
      street: ""
    });
    function A() {
      d.value = !d.value, r.value = "province", d.value || t("update:visible", !1);
    }
    const w = L(), F = L();
    function v() {
      t("update:visible", !1);
    }
    function O(m) {
      k.province = m, k.city = l.city = "", k.district = l.district = "", k.street = l.street = "", u.value = [], _.value = [], o.value = !0, Z(m, "province").then((C) => {
        l.province = C.data.name, C.data.keepOn ? (p.value = C.data.children || [], r.value = "city") : (p.value = [], u.value = C.data.children || [], r.value = "district"), n.precision <= 3 || J();
      }).catch((C) => {
        console.log(C);
      }), o.value = !1;
    }
    function W(m) {
      k.city = m, k.district = l.district = "", k.street = l.street = "", _.value = [], o.value = !0, Z(m, "city").then((C) => {
        l.city = C.data.name, C.data.keepOn ? (u.value = C.data.children || [], r.value = "district", n.precision <= 2 || J()) : (r.value = "street", u.value = [], _.value = C.data.children || [], n.precision <= 1 || J());
      }), o.value = !1;
    }
    function z(m) {
      k.district = m, k.street = l.street = "", o.value = !0, Z(m, "district").then((C) => {
        l.district = C.data.name, C.data.keepOn ? (_.value = C.data.children || [], r.value = "street", n.precision <= 1 || J()) : (_.value = [], J());
      }), o.value = !1;
    }
    function Y(m) {
      k.street = m, Z(m, "street").then((C) => {
        l.street = C.data.name, J();
      });
    }
    function J() {
      k.address = l.province + l.city + l.district + l.street, t("change", k), A();
    }
    function Z(m, C) {
      return ce.post("common/data/getDistrict", { code: m, level: C }, { headers: { notEnt: !0 } });
    }
    return (m, C) => {
      const D = j("el-tab-pane"), G = j("el-tabs"), q = j("el-popover"), R = De("loading");
      return a(), h(H, null, [
        i("div", {
          ref_key: "buttonRef",
          ref: F,
          class: "cursor",
          onClick: A
        }, [
          k.address ? (a(), h("span", Ut, g(k.address), 1)) : (a(), h("span", Ft, g(e.placeholder), 1))
        ], 512),
        f(q, {
          visible: d.value,
          width: 570,
          ref_key: "popoverRef",
          ref: w,
          trigger: "click",
          "virtual-ref": F.value,
          "virtual-triggering": "",
          onHide: v
        }, {
          default: $(() => [
            f(G, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (P) => r.value = P),
              class: "ft-position"
            }, {
              default: $(() => [
                f(D, {
                  label: I(B)("distpicker.province"),
                  name: "province"
                }, {
                  default: $(() => [
                    i("div", Ot, [
                      (a(!0), h(H, null, te(c.value, (P, M) => (a(), h("span", {
                        class: de(["region-item", { "is-current": P.code === k.province }]),
                        onClick: (x) => O(P.code),
                        key: M
                      }, g(P.name), 11, Bt))), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label"]),
                e.precision <= 3 ? (a(), le(D, {
                  key: 0,
                  label: I(B)("distpicker.city"),
                  name: "city",
                  disabled: p.value.length == 0
                }, {
                  default: $(() => [
                    Te((a(), h("div", Pt, [
                      (a(!0), h(H, null, te(p.value, (P, M) => (a(), h("span", {
                        class: de(["region-item", { "is-current": P.code === k.city }]),
                        onClick: (x) => W(P.code),
                        key: M
                      }, g(P.name), 11, Rt))), 128))
                    ])), [
                      [R, o.value]
                    ])
                  ]),
                  _: 1
                }, 8, ["label", "disabled"])) : ae("", !0),
                e.precision <= 2 ? (a(), le(D, {
                  key: 1,
                  label: I(B)("distpicker.district"),
                  name: "district",
                  disabled: u.value.length == 0
                }, {
                  default: $(() => [
                    i("div", Nt, [
                      (a(!0), h(H, null, te(u.value, (P, M) => (a(), h("span", {
                        class: de(["region-item", { "is-current": P.code === k.district }]),
                        onClick: (x) => z(P.code),
                        key: M
                      }, g(P.name), 11, jt))), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label", "disabled"])) : ae("", !0),
                e.precision <= 1 ? (a(), le(D, {
                  key: 2,
                  label: I(B)("distpicker.street"),
                  name: "street",
                  disabled: _.value.length == 0
                }, {
                  default: $(() => [
                    i("div", Ht, [
                      (a(!0), h(H, null, te(_.value, (P, M) => (a(), h("span", {
                        class: de(["region-item", { "is-current": P.code === k.street }]),
                        onClick: (x) => Y(P.code),
                        key: M
                      }, g(P.name), 11, Jt))), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label", "disabled"])) : ae("", !0)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ], 64);
    };
  }
}, Ae = /* @__PURE__ */ ve(Kt, [["__scopeId", "data-v-c0871004"]]);
Ae.install = function(e) {
  e.component("FtDistpicker", Ae);
};
/*! Element Plus Icons Vue v2.0.10 */
var me = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [o, r] of t)
    n[o] = r;
  return n;
}, Wt = {
  name: "ArrowDown"
}, Yt = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Gt = /* @__PURE__ */ i("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), qt = [
  Gt
];
function Zt(e, t, n, o, r, d) {
  return a(), h("svg", Yt, qt);
}
var Xt = /* @__PURE__ */ me(Wt, [["render", Zt], ["__file", "arrow-down.vue"]]), Qt = {
  name: "ArrowRight"
}, en = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, tn = /* @__PURE__ */ i("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), nn = [
  tn
];
function ln(e, t, n, o, r, d) {
  return a(), h("svg", en, nn);
}
var ue = /* @__PURE__ */ me(Qt, [["render", ln], ["__file", "arrow-right.vue"]]), sn = {
  name: "Close"
}, on = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, an = /* @__PURE__ */ i("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), rn = [
  an
];
function un(e, t, n, o, r, d) {
  return a(), h("svg", on, rn);
}
var Oe = /* @__PURE__ */ me(sn, [["render", un], ["__file", "close.vue"]]), cn = {
  name: "More"
}, dn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, pn = /* @__PURE__ */ i("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), fn = [
  pn
];
function hn(e, t, n, o, r, d) {
  return a(), h("svg", dn, fn);
}
var vn = /* @__PURE__ */ me(cn, [["render", hn], ["__file", "more.vue"]]), mn = {
  name: "Search"
}, _n = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, gn = /* @__PURE__ */ i("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), yn = [
  gn
];
function bn(e, t, n, o, r, d) {
  return a(), h("svg", _n, yn);
}
var Be = /* @__PURE__ */ me(mn, [["render", bn], ["__file", "search.vue"]]);
function Ze(e, t, n, o) {
  let r = {};
  function d(c, p, u, _) {
    _.forEach((k) => {
      c === k[p] && (r = k), k[u] != null && d(c, p, u, k[u]);
    });
  }
  return d(e, t, n, o), r;
}
const wn = { key: 0 }, kn = { key: 1 }, $n = { class: "ft-select-dept" }, Cn = { class: "ft-select-dept__left" }, En = { class: "ft-select-dept__header" }, An = {
  key: 0,
  class: "ft-select-dept__body"
}, In = { class: "ft-select-dept__breadcrumb" }, Ln = { class: "ft-select-dept__list" }, Sn = {
  key: 1,
  class: "ft-select-dept__body"
}, Mn = { class: "ft-select-dept__breadcrumb" }, Vn = ["onClick"], xn = ["onClick"], Dn = { class: "ft-select-dept__right" }, Tn = { class: "ft-select-dept__header" }, zn = { class: "user-select" }, Un = {
  key: 0,
  class: "user-item"
}, Fn = { class: "footer" }, On = {
  name: "index",
  props: {
    modelValue: Number,
    visible: {
      type: Boolean,
      default: !1
    },
    deptList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: B("common.selectPlaceholder")
    }
  },
  emits: ["change", "update:visible", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = L(n.visible), r = L(), d = L(), c = L(""), p = L([]), u = L([]), _ = L([]), k = L(n.modelValue), l = L(""), A = L("");
    function w() {
      o.value = !o.value, o.value ? W() : t("update:visible", !1);
    }
    je(() => {
      n.modelValue && (W(), l.value = Ze(n.modelValue, "id", "children", _.value).name || "", l.value && (A.value = l.value));
    });
    function F() {
      w(), A.value = l.value, t("update:modelValue", k.value), t("change", k.value);
    }
    function v(Z) {
      p.value = [], _.value && _.value.length && (p.value = _.value.filter((m) => he.match(m.name, Z)));
    }
    function O() {
      Y();
    }
    async function W(Z = !1, m = {}) {
      let C = pe(n.deptList);
      if (C.length === 0) {
        const { data: D } = await ce.post("admin/dept/getTree");
        C = D || [];
      }
      _.value = [], JSON.stringify(m) == "{}" ? C[0].children.length > 0 && (u.value = [{ label: B("common.all"), deptList: C }]) : (C = m.children || [], u.value.push({ label: m.name, deptList: C })), _.value = C;
    }
    function z(Z) {
      l.value = Z;
    }
    function Y() {
      l.value = "", k.value = 0;
    }
    function J(Z, m) {
      m + 1 <= u.value.length - 1 && u.value.splice(m + 1, u.value.length - 1), _.value = Z.deptList;
    }
    return (Z, m) => {
      const C = j("el-icon"), D = j("el-input"), G = j("el-radio"), q = j("el-radio-group"), R = j("el-breadcrumb-item"), P = j("el-breadcrumb"), M = j("el-scrollbar"), x = j("el-button"), X = j("el-popover");
      return a(), h(H, null, [
        i("div", {
          ref_key: "buttonRef",
          ref: d,
          class: "cursor",
          onClick: w
        }, [
          A.value ? (a(), h("span", wn, g(A.value), 1)) : (a(), h("span", kn, g(e.placeholder), 1))
        ], 512),
        f(X, {
          visible: o.value,
          width: 570,
          ref_key: "popoverRef",
          ref: r,
          trigger: "click",
          "virtual-ref": d.value,
          "virtual-triggering": "",
          "fallback-placements": ["bottom", "top", "right", "left"]
        }, {
          default: $(() => [
            i("div", $n, [
              i("div", Cn, [
                i("div", En, [
                  f(D, {
                    modelValue: c.value,
                    "onUpdate:modelValue": m[0] || (m[0] = (V) => c.value = V),
                    placeholder: I(B)("deptEmpl.enterKeywords"),
                    onInput: v
                  }, {
                    suffix: $(() => [
                      f(C, {
                        class: "el-input__icon ft-cursor",
                        onClick: v
                      }, {
                        default: $(() => [
                          f(I(Be))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                c.value ? (a(), h("div", An, [
                  i("div", In, g(I(B)("deptEmpl.searchResults")) + " : " + g(c.value), 1),
                  i("div", Ln, [
                    f(q, {
                      modelValue: k.value,
                      "onUpdate:modelValue": m[1] || (m[1] = (V) => k.value = V)
                    }, {
                      default: $(() => [
                        (a(!0), h(H, null, te(p.value, (V, K) => (a(), h("div", {
                          class: "ft-select-dept__item",
                          key: K
                        }, [
                          f(G, {
                            label: V.id,
                            onChange: (oe) => z(V.name)
                          }, {
                            default: $(() => [
                              Q(g(V.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["label", "onChange"])
                        ]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])
                ])) : (a(), h("div", Sn, [
                  i("div", Mn, [
                    f(P, { "separator-icon": I(ue) }, {
                      default: $(() => [
                        (a(!0), h(H, null, te(u.value, (V, K) => (a(), le(R, { key: K }, {
                          default: $(() => [
                            i("a", {
                              href: "javascript:;",
                              onClick: (oe) => J(V, K)
                            }, g(V.label), 9, Vn)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    }, 8, ["separator-icon"])
                  ]),
                  f(M, { class: "ft-select-dept__list" }, {
                    default: $(() => [
                      f(q, {
                        modelValue: k.value,
                        "onUpdate:modelValue": m[2] || (m[2] = (V) => k.value = V)
                      }, {
                        default: $(() => [
                          (a(!0), h(H, null, te(_.value, (V, K) => (a(), h("div", {
                            class: "ft-select-dept__item",
                            key: K
                          }, [
                            V.children ? (a(), h(H, { key: 0 }, [
                              f(G, {
                                label: V.id,
                                onChange: (oe) => z(V.name)
                              }, {
                                default: $(() => [
                                  Q(g(), 1)
                                ]),
                                _: 2
                              }, 1032, ["label", "onChange"]),
                              i("div", {
                                class: "dept-name",
                                onClick: (oe) => W(!0, V)
                              }, [
                                Q(g(V.name) + " ", 1),
                                f(C, null, {
                                  default: $(() => [
                                    f(I(ue))
                                  ]),
                                  _: 1
                                })
                              ], 8, xn)
                            ], 64)) : (a(), le(G, {
                              key: 1,
                              label: V.id,
                              onChange: (oe) => z(V.name)
                            }, {
                              default: $(() => [
                                Q(g(V.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["label", "onChange"]))
                          ]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]))
              ]),
              i("div", Dn, [
                i("div", Tn, [
                  Q(g(I(B)("common.selected")) + g(I(B)("deptEmpl.deptName")) + " ", 1),
                  f(x, {
                    text: "",
                    onClick: m[3] || (m[3] = (V) => O()),
                    disabled: !k.value
                  }, {
                    default: $(() => [
                      Q(g(I(B)("common.clear")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                i("div", zn, [
                  l.value && k.value ? (a(), h("span", Un, [
                    Q(g(l.value) + " ", 1),
                    f(C, {
                      onClick: m[4] || (m[4] = ze((V) => Y(), ["stop"]))
                    }, {
                      default: $(() => [
                        f(I(Oe))
                      ]),
                      _: 1
                    })
                  ])) : ae("", !0)
                ])
              ])
            ]),
            i("div", Fn, [
              f(x, { onClick: w }, {
                default: $(() => [
                  Q(g(I(B)("common.cancel")), 1)
                ]),
                _: 1
              }),
              f(x, {
                type: "primary",
                onClick: F
              }, {
                default: $(() => [
                  Q(g(I(B)("common.confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ], 64);
    };
  }
}, Ie = /* @__PURE__ */ ve(On, [["__scopeId", "data-v-bb3f561c"]]);
Ie.install = function(e) {
  e.component("FtSelectDept", Ie);
};
function Bn() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var o = e.indexOf("rv:");
    return parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
  }
  var r = e.indexOf("Edge/");
  return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
let _e;
function Le() {
  Le.init || (Le.init = !0, _e = Bn() !== -1);
}
var be = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    Le(), He(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", _e && this.$el.appendChild(e), e.data = "about:blank", _e || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!_e && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Pn = /* @__PURE__ */ ot("data-v-b329ee4c");
Ue("data-v-b329ee4c");
const Rn = {
  class: "resize-observer",
  tabindex: "-1"
};
Fe();
const Nn = /* @__PURE__ */ Pn((e, t, n, o, r, d) => (a(), le("div", Rn)));
be.render = Nn;
be.__scopeId = "data-v-b329ee4c";
be.__file = "src/components/ResizeObserver.vue";
function ge(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ge = function(t) {
    return typeof t;
  } : ge = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ge(e);
}
function jn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Re(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function Hn(e, t, n) {
  return t && Re(e.prototype, t), n && Re(e, n), e;
}
function Ne(e) {
  return Jn(e) || Kn(e) || Wn(e) || Yn();
}
function Jn(e) {
  if (Array.isArray(e))
    return Se(e);
}
function Kn(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Wn(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Se(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Se(e, t);
  }
}
function Se(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function Yn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gn(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function qn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, r, d, c = function(u) {
    for (var _ = arguments.length, k = new Array(_ > 1 ? _ - 1 : 0), l = 1; l < _; l++)
      k[l - 1] = arguments[l];
    if (d = k, !(o && u === r)) {
      var A = n.leading;
      typeof A == "function" && (A = A(u, r)), (!o || u !== r) && A && e.apply(void 0, [u].concat(Ne(d))), r = u, clearTimeout(o), o = setTimeout(function() {
        e.apply(void 0, [u].concat(Ne(d))), o = 0;
      }, t);
    }
  };
  return c._clear = function() {
    clearTimeout(o), o = null;
  }, c;
}
function Xe(e, t) {
  if (e === t)
    return !0;
  if (ge(e) === "object") {
    for (var n in e)
      if (!Xe(e[n], t[n]))
        return !1;
    return !0;
  }
  return !1;
}
var Zn = /* @__PURE__ */ function() {
  function e(t, n, o) {
    jn(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n, o);
  }
  return Hn(e, [{
    key: "createObserver",
    value: function(n, o) {
      var r = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Gn(n), this.callback = function(p, u) {
          r.options.callback(p, u), p && r.options.once && (r.frozen = !0, r.destroyObserver());
        }, this.callback && this.options.throttle) {
          var d = this.options.throttleOptions || {}, c = d.leading;
          this.callback = qn(this.callback, this.options.throttle, {
            leading: function(u) {
              return c === "both" || c === "visible" && u || c === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(p) {
          var u = p[0];
          if (p.length > 1) {
            var _ = p.find(function(l) {
              return l.isIntersecting;
            });
            _ && (u = _);
          }
          if (r.callback) {
            var k = u.isIntersecting && u.intersectionRatio >= r.threshold;
            if (k === r.oldResult)
              return;
            r.oldResult = k, r.callback(k, u);
          }
        }, this.options.intersection), He(function() {
          r.observer && r.observer.observe(r.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function Qe(e, t, n) {
  var o = t.value;
  if (!!o)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var r = new Zn(e, o, n);
      e._vue_visibilityState = r;
    }
}
function Xn(e, t, n) {
  var o = t.value, r = t.oldValue;
  if (!Xe(o, r)) {
    var d = e._vue_visibilityState;
    if (!o) {
      et(e);
      return;
    }
    d ? d.createObserver(o, n) : Qe(e, {
      value: o
    }, n);
  }
}
function et(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Qn = {
  beforeMount: Qe,
  updated: Xn,
  unmounted: et
}, el = {
  itemsLimit: 1e3
}, tl = /(auto|scroll)/;
function tt(e, t) {
  return e.parentNode === null ? t : tt(e.parentNode, t.concat([e]));
}
var $e = function(t, n) {
  return getComputedStyle(t, null).getPropertyValue(n);
}, nl = function(t) {
  return $e(t, "overflow") + $e(t, "overflow-y") + $e(t, "overflow-x");
}, ll = function(t) {
  return tl.test(nl(t));
};
function sl(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = tt(e.parentNode, []), n = 0; n < t.length; n += 1)
      if (ll(t[n]))
        return t[n];
    return document.scrollingElement || document.documentElement;
  }
}
function ye(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ye = function(t) {
    return typeof t;
  } : ye = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ye(e);
}
var ol = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  }
};
function il() {
  return this.items.length && ye(this.items[0]) !== "object";
}
var Me = !1;
if (typeof window < "u") {
  Me = !1;
  try {
    var al = Object.defineProperty({}, "passive", {
      get: function() {
        Me = !0;
      }
    });
    window.addEventListener("test", null, al);
  } catch {
  }
}
let rl = 0;
var we = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: be
  },
  directives: {
    ObserveVisibility: Qn
  },
  props: {
    ...ol,
    itemSize: {
      type: Number,
      default: null
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, n = this.sizeField, o = this.minItemSize;
        let r = 1e4, d = 0, c;
        for (let p = 0, u = t.length; p < u; p++)
          c = t[p][n] || o, c < r && (r = c), d += c, e[p] = { accumulator: d, size: c };
        return this.$_computedMinItemSize = r, e;
      }
      return [];
    },
    simpleArray: il
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1));
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, n, o, r) {
      const d = it({
        id: rl++,
        index: t,
        used: !0,
        key: o,
        type: r
      }), c = at({
        item: n,
        position: 0,
        nr: d
      });
      return e.push(c), c;
    },
    unuseView(e, t = !1) {
      const n = this.$_unusedViews, o = e.nr.type;
      let r = n.get(o);
      r || (r = [], n.set(o, r)), r.push(e), t || (e.nr.used = !1, e.position = -9999, this.$_views.delete(e.nr.key));
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      this.$_scrollDirty || (this.$_scrollDirty = !0, requestAnimationFrame(() => {
        this.$_scrollDirty = !1;
        const { continuous: t } = this.updateVisibleItems(!1, !0);
        t || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, 100));
      }));
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const n = this.itemSize, o = this.$_computedMinItemSize, r = this.typeField, d = this.simpleArray ? null : this.keyField, c = this.items, p = c.length, u = this.sizes, _ = this.$_views, k = this.$_unusedViews, l = this.pool;
      let A, w, F;
      if (!p)
        A = w = F = 0;
      else if (this.$_prerender)
        A = 0, w = this.prerender, F = null;
      else {
        const m = this.getScroll();
        if (t) {
          let D = m.start - this.$_lastUpdateScrollPosition;
          if (D < 0 && (D = -D), n === null && D < o || D < n)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = m.start;
        const C = this.buffer;
        if (m.start -= C, m.end += C, n === null) {
          let D, G = 0, q = p - 1, R = ~~(p / 2), P;
          do
            P = R, D = u[R].accumulator, D < m.start ? G = R : R < p - 1 && u[R + 1].accumulator > m.start && (q = R), R = ~~((G + q) / 2);
          while (R !== P);
          for (R < 0 && (R = 0), A = R, F = u[p - 1].accumulator, w = R; w < p && u[w].accumulator < m.end; w++)
            ;
          w === -1 ? w = c.length - 1 : (w++, w > p && (w = p));
        } else
          A = ~~(m.start / n), w = Math.ceil(m.end / n), A < 0 && (A = 0), w > p && (w = p), F = p * n;
      }
      w - A > el.itemsLimit && this.itemsLimitError(), this.totalSize = F;
      let v;
      const O = A <= this.$_endIndex && w >= this.$_startIndex;
      if (this.$_continuous !== O) {
        if (O) {
          _.clear(), k.clear();
          for (let m = 0, C = l.length; m < C; m++)
            v = l[m], this.unuseView(v);
        }
        this.$_continuous = O;
      } else if (O)
        for (let m = 0, C = l.length; m < C; m++)
          v = l[m], v.nr.used && (e && (v.nr.index = c.findIndex(
            (D) => d ? D[d] === v.item[d] : D === v.item
          )), (v.nr.index === -1 || v.nr.index < A || v.nr.index >= w) && this.unuseView(v));
      const W = O ? null : /* @__PURE__ */ new Map();
      let z, Y, J, Z;
      for (let m = A; m < w; m++) {
        z = c[m];
        const C = d ? z[d] : z;
        if (C == null)
          throw new Error(`Key is ${C} on item (keyField is '${d}')`);
        if (v = _.get(C), !n && !u[m].size) {
          v && this.unuseView(v);
          continue;
        }
        v ? (v.nr.used = !0, v.item = z) : (Y = z[r], J = k.get(Y), O ? J && J.length ? (v = J.pop(), v.item = z, v.nr.used = !0, v.nr.index = m, v.nr.key = C, v.nr.type = Y) : v = this.addView(l, m, z, C, Y) : (Z = W.get(Y) || 0, (!J || Z >= J.length) && (v = this.addView(l, m, z, C, Y), this.unuseView(v, !0), J = k.get(Y)), v = J[Z], v.item = z, v.nr.used = !0, v.nr.index = m, v.nr.key = C, v.nr.type = Y, W.set(Y, Z + 1), Z++), _.set(C, v)), n === null ? v.position = u[m - 1].accumulator : v.position = m * n;
      }
      return this.$_startIndex = A, this.$_endIndex = w, this.emitUpdate && this.$emit("update", A, w), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, 300), {
        continuous: O
      };
    },
    getListenerTarget() {
      let e = sl(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, n = t === "vertical";
      let o;
      if (this.pageMode) {
        const r = e.getBoundingClientRect(), d = n ? r.height : r.width;
        let c = -(n ? r.top : r.left), p = n ? window.innerHeight : window.innerWidth;
        c < 0 && (p += c, c = 0), c + p > d && (p = d - c), o = {
          start: c,
          end: c + p
        };
      } else
        n ? o = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : o = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return o;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Me ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      !this.listenerTarget || (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = e * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      this.direction === "vertical" ? this.$el.scrollTop = e : this.$el.scrollLeft = e;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.index - t.index);
    }
  }
};
const ul = {
  key: 0,
  class: "vue-recycle-scroller__slot"
}, cl = {
  key: 1,
  class: "vue-recycle-scroller__slot"
};
function dl(e, t, n, o, r, d) {
  const c = j("ResizeObserver"), p = De("observe-visibility");
  return Te((a(), le("div", {
    class: ["vue-recycle-scroller", {
      ready: r.ready,
      "page-mode": n.pageMode,
      [`direction-${e.direction}`]: !0
    }],
    onScrollPassive: t[2] || (t[2] = (...u) => d.handleScroll && d.handleScroll(...u))
  }, [
    e.$slots.before ? (a(), le("div", ul, [
      ke(e.$slots, "before")
    ])) : ae("v-if", !0),
    f("div", {
      ref: "wrapper",
      style: { [e.direction === "vertical" ? "minHeight" : "minWidth"]: r.totalSize + "px" },
      class: "vue-recycle-scroller__item-wrapper"
    }, [
      (a(!0), le(H, null, te(r.pool, (u) => (a(), le("div", {
        key: u.nr.id,
        style: r.ready ? { transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${u.position}px)` } : null,
        class: ["vue-recycle-scroller__item-view", { hover: r.hoverKey === u.nr.key }],
        onMouseenter: (_) => r.hoverKey = u.nr.key,
        onMouseleave: t[1] || (t[1] = (_) => r.hoverKey = null)
      }, [
        ke(e.$slots, "default", {
          item: u.item,
          index: u.nr.index,
          active: u.nr.used
        })
      ], 46, ["onMouseenter"]))), 128))
    ], 4),
    e.$slots.after ? (a(), le("div", cl, [
      ke(e.$slots, "after")
    ])) : ae("v-if", !0),
    f(c, { onNotify: d.handleResize }, null, 8, ["onNotify"])
  ], 34)), [
    [p, d.handleVisibilityChange]
  ]);
}
we.render = dl;
we.__file = "src/components/RecycleScroller.vue";
const pl = (e) => (Ue("data-v-6302d1a5"), e = e(), Fe(), e), fl = { key: 0 }, hl = { key: 1 }, vl = { class: "ft-select-empl" }, ml = { class: "ft-select-empl__left" }, _l = { class: "ft-select-empl__header" }, gl = {
  key: 0,
  class: "ft-select-empl__body"
}, yl = { class: "ft-select-empl__breadcrumb" }, bl = { class: "ft-select-empl__list" }, wl = { class: "letter-block" }, kl = { class: "ft-select-empl__item-bd" }, $l = { class: "user-info" }, Cl = { class: "user-name" }, El = { class: "user-post" }, Al = { class: "item-cell user-switch" }, Il = {
  key: 1,
  class: "ft-select-empl__body"
}, Ll = { class: "ft-select-empl__breadcrumb" }, Sl = ["onClick"], Ml = { class: "ft-select-empl__list" }, Vl = ["onClick"], xl = {
  key: 1,
  class: "dept-name"
}, Dl = { class: "ft-select-empl__item-bd" }, Tl = { class: "user-info" }, zl = { class: "user-name" }, Ul = { class: "user-post" }, Fl = {
  key: 2,
  class: "ft-select-empl__body"
}, Ol = { class: "ft-select-empl__list" }, Bl = {
  key: 0,
  class: "header"
}, Pl = { class: "label" }, Rl = /* @__PURE__ */ pl(() => /* @__PURE__ */ i("span", { class: "line" }, null, -1)), Nl = {
  key: 1,
  class: "ft-select-empl__item"
}, jl = { class: "ft-select-empl__item-bd" }, Hl = { class: "user-info" }, Jl = { class: "user-name" }, Kl = { class: "user-post" }, Wl = { class: "index-nav" }, Yl = { class: "index-nav-wrap" }, Gl = { class: "letter-list" }, ql = ["onClick"], Zl = { class: "ft-select-empl__right" }, Xl = { class: "ft-select-empl__header" }, Ql = { class: "user-select" }, es = {
  key: 0,
  class: "user-item"
}, ts = { class: "footer" }, ns = {
  name: "index",
  props: {
    modelValue: Number,
    visible: {
      type: Boolean,
      default: !1
    },
    deptList: {
      type: Array,
      default: () => []
    },
    emplList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    }
  },
  emits: ["change", "update:visible", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = L(n.visible), r = L(), d = L(), c = L(""), p = L([]), u = L([]), _ = L([]), k = L(n.modelValue), l = L(""), A = L(""), w = L(!1), F = fe(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]), v = L(null), O = L([]);
    L([]);
    const { ctx: W } = Je();
    function z() {
      o.value = !o.value, o.value ? m() : t("update:visible", !1);
    }
    function Y() {
      z(), A.value = l.value, t("update:modelValue", k.value), t("change", k.value);
    }
    function J(M) {
      p.value = [], _.value && _.value.length && (p.value = _.value.filter((x) => he.match(x.realname, M)));
    }
    function Z() {
      D();
    }
    async function m(M = !1, x = {}) {
      let X = pe(n.deptList), V = pe(n.emplList);
      if (X.length === 0) {
        const { data: K } = await ce.post("admin/dept/getTree");
        X = K || [];
      }
      if (V.length === 0) {
        const { data: K } = await ce.post("admin/empl/getList", { types: "all" });
        V = K.list || [];
      }
      if (X.forEach((K) => {
        K.userType = "dept";
      }), M)
        _.value = [], JSON.stringify(x) == "{}" ? (V = [], X[0].children.length > 0 && (u.value = [{ label: B("common.all"), deptList: X, emplList: V }])) : (V = G(x.id, V), X = x.children || [], X.forEach((K) => {
          K.userType = "dept", V.length === 0 && (K.disabled = !0);
        }), u.value.push({ label: x.name, deptList: X, emplList: V }));
      else {
        let K = [];
        V.forEach((E) => {
          E.height = 42, E.pinyin = F.filter((U) => he.match(E.realname.substr(0, 1), U))[0], E.pinyin ? (K[E.pinyin] = K[E.pinyin] || [], K[E.pinyin].push(E)) : (K["#"] = K["#"] || [], K["#"].push(E));
        }), V = [];
        let oe = 0;
        F.forEach((E) => {
          if (K[E]) {
            oe++, V.push({ id: E, types: "letter", height: 21 });
            for (let T = 0; T < K[E].length; T++)
              V.push(K[E][T]), oe++;
            const U = oe - K[E].length;
            O.value.push({ id: E, count: U, current: U === 0 });
          } else
            O.value.push({ id: E, count: -1, current: !1 });
        });
      }
      _.value = X.concat(V);
    }
    function C(M) {
      l.value = M;
    }
    function D() {
      l.value = "", k.value = 0;
    }
    function G(M, x) {
      let X = [];
      if (M)
        for (let V = 0; V < x.length; V++)
          x[V].deptId === M && X.push(x[V]);
      return X;
    }
    function q(M, x) {
      x + 1 <= u.value.length - 1 && u.value.splice(x + 1, u.value.length - 1);
      const X = M.deptList, V = M.emplList;
      _.value = X.concat(V);
    }
    function R() {
      w.value = !w.value, _.value = [], w.value ? m(!0) : m();
    }
    function P(M, x) {
      M !== -1 && (W.$refs.vlist.scrollToItem(M), O.value.forEach((X) => {
        X.current = !1, X.id === x && (X.current = !0);
      }));
    }
    return (M, x) => {
      const X = j("el-icon"), V = j("el-input"), K = j("el-avatar"), oe = j("el-radio"), E = j("el-radio-group"), U = j("el-breadcrumb-item"), T = j("el-breadcrumb"), S = j("el-scrollbar"), N = j("el-button"), ie = j("el-popover");
      return a(), h(H, null, [
        i("div", {
          ref_key: "buttonRef",
          ref: d,
          class: "cursor",
          onClick: z
        }, [
          A.value ? (a(), h("span", fl, g(A.value), 1)) : (a(), h("span", hl, g(e.placeholder), 1))
        ], 512),
        f(ie, {
          visible: o.value,
          width: 570,
          ref_key: "popoverRef",
          ref: r,
          trigger: "click",
          "virtual-ref": d.value,
          "virtual-triggering": ""
        }, {
          default: $(() => [
            i("div", vl, [
              i("div", ml, [
                i("div", _l, [
                  f(V, {
                    modelValue: c.value,
                    "onUpdate:modelValue": x[0] || (x[0] = (y) => c.value = y),
                    placeholder: I(B)("deptEmpl.enterKeywords"),
                    onInput: J
                  }, {
                    suffix: $(() => [
                      f(X, {
                        class: "el-input__icon ft-cursor",
                        onClick: J
                      }, {
                        default: $(() => [
                          f(I(Be))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ]),
                c.value ? (a(), h("div", gl, [
                  i("div", yl, g(I(B)("deptEmpl.searchResults")) + " : " + g(c.value), 1),
                  i("div", bl, [
                    i("div", wl, [
                      f(E, {
                        modelValue: k.value,
                        "onUpdate:modelValue": x[1] || (x[1] = (y) => k.value = y)
                      }, {
                        default: $(() => [
                          (a(!0), h(H, null, te(p.value, (y, ee) => (a(), h("div", {
                            class: "ft-select-empl__item",
                            key: ee
                          }, [
                            f(oe, {
                              label: y.id,
                              onChange: (re) => C(y.realname)
                            }, {
                              default: $(() => [
                                i("div", kl, [
                                  f(K, {
                                    class: "user-img",
                                    size: 30,
                                    src: y.img || y.thumbImg
                                  }, null, 8, ["src"]),
                                  i("div", $l, [
                                    i("div", Cl, g(y.realname), 1),
                                    i("div", El, g(y.post), 1)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["label", "onChange"])
                          ]))), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ])
                ])) : ae("", !0),
                i("div", Al, [
                  i("div", {
                    class: "item-cell__hd",
                    onClick: R
                  }, g(w.value === !1 ? I(B)("deptEmpl.deptView") : I(B)("deptEmpl.letterView")), 1),
                  f(X, null, {
                    default: $(() => [
                      f(I(ue))
                    ]),
                    _: 1
                  })
                ]),
                w.value ? (a(), h("div", Il, [
                  i("div", Ll, [
                    f(T, { "separator-icon": I(ue) }, {
                      default: $(() => [
                        (a(!0), h(H, null, te(u.value, (y, ee) => (a(), le(U, { key: ee }, {
                          default: $(() => [
                            i("a", {
                              href: "javascript:;",
                              onClick: (re) => q(y, ee)
                            }, g(y.label), 9, Sl)
                          ]),
                          _: 2
                        }, 1024))), 128))
                      ]),
                      _: 1
                    }, 8, ["separator-icon"])
                  ]),
                  i("div", Ml, [
                    f(S, {
                      class: "dept-tree",
                      height: "200px"
                    }, {
                      default: $(() => [
                        f(E, {
                          modelValue: k.value,
                          "onUpdate:modelValue": x[2] || (x[2] = (y) => k.value = y)
                        }, {
                          default: $(() => [
                            (a(!0), h(H, null, te(_.value, (y, ee) => (a(), h("div", {
                              class: "ft-select-empl__item",
                              key: ee
                            }, [
                              y.userType == "dept" ? (a(), h(H, { key: 0 }, [
                                y.children ? (a(), h(H, { key: 0 }, [
                                  i("div", {
                                    class: "dept-name",
                                    onClick: (re) => m(!0, y)
                                  }, g(y.name), 9, Vl),
                                  f(X, null, {
                                    default: $(() => [
                                      f(I(ue))
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : (a(), h("div", xl, g(y.name), 1))
                              ], 64)) : (a(), le(oe, {
                                key: 1,
                                label: y.id,
                                onChange: (re) => C(y.realname)
                              }, {
                                default: $(() => [
                                  i("div", Dl, [
                                    f(K, {
                                      class: "user-img",
                                      size: 30,
                                      src: y.img || y.thumbImg
                                    }, null, 8, ["src"]),
                                    i("div", Tl, [
                                      i("div", zl, g(y.realname), 1),
                                      i("div", Ul, g(y.post), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["label", "onChange"]))
                            ]))), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ])
                ])) : (a(), h("div", Fl, [
                  i("div", Ol, [
                    f(E, {
                      modelValue: k.value,
                      "onUpdate:modelValue": x[3] || (x[3] = (y) => k.value = y)
                    }, {
                      default: $(() => [
                        f(I(we), {
                          ref_key: "vlist",
                          ref: v,
                          class: "letter-block",
                          items: _.value,
                          "key-field": "id",
                          "size-field": "height"
                        }, {
                          default: $(({ item: y }) => [
                            y.types === "letter" ? (a(), h("div", Bl, [
                              i("span", Pl, g(y.id), 1),
                              Rl
                            ])) : (a(), h("div", Nl, [
                              f(oe, {
                                label: y.id,
                                onChange: (ee) => C(y.realname)
                              }, {
                                default: $(() => [
                                  i("div", jl, [
                                    f(K, {
                                      class: "user-img",
                                      size: 30,
                                      src: y.img || y.thumbImg
                                    }, null, 8, ["src"]),
                                    i("div", Hl, [
                                      i("div", Jl, g(y.realname), 1),
                                      i("div", Kl, g(y.post), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["label", "onChange"])
                            ]))
                          ]),
                          _: 1
                        }, 8, ["items"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    i("div", Wl, [
                      i("div", Yl, [
                        i("ul", Gl, [
                          (a(!0), h(H, null, te(O.value, (y, ee) => (a(), h("li", {
                            key: ee,
                            class: de({ "is-current": y.current, "is-invalid": y.count === -1 && !y.current }),
                            onClick: (re) => P(y.count, y.id)
                          }, g(y.id), 11, ql))), 128))
                        ])
                      ])
                    ])
                  ])
                ]))
              ]),
              i("div", Zl, [
                i("div", Xl, [
                  Q(g(I(B)("common.selected")) + g(I(B)("deptEmpl.emplName")) + " ", 1),
                  f(N, {
                    text: "",
                    onClick: x[4] || (x[4] = (y) => Z()),
                    disabled: !k.value
                  }, {
                    default: $(() => [
                      Q(g(I(B)("common.clear")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                i("div", Ql, [
                  l.value && k.value ? (a(), h("span", es, [
                    Q(g(l.value) + " ", 1),
                    f(X, {
                      onClick: x[5] || (x[5] = ze((y) => D(), ["stop"]))
                    }, {
                      default: $(() => [
                        f(I(Oe))
                      ]),
                      _: 1
                    })
                  ])) : ae("", !0)
                ])
              ])
            ]),
            i("div", ts, [
              f(N, { onClick: z }, {
                default: $(() => [
                  Q(g(I(B)("common.cancel")), 1)
                ]),
                _: 1
              }),
              f(N, {
                type: "primary",
                onClick: Y
              }, {
                default: $(() => [
                  Q(g(I(B)("common.confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ], 64);
    };
  }
}, Ve = /* @__PURE__ */ ve(ns, [["__scopeId", "data-v-6302d1a5"]]);
Ve.install = function(e) {
  e.component("FtSelectEmpl", Ve);
};
const ls = (e) => (Ue("data-v-480523e0"), e = e(), Fe(), e), ss = {
  class: "el-select__tags",
  ref: "tags"
}, os = { class: "ft-dept-empl" }, is = { class: "ft-dept-empl__left" }, as = {
  key: 0,
  class: "ft-dept-empl__header"
}, rs = {
  key: 1,
  class: "ft-dept-empl__body"
}, us = { class: "ft-dept-empl__breadcrumb" }, cs = { class: "ft-dept-empl__list" }, ds = { class: "letter-block" }, ps = { class: "ft-dept-empl__item-bd" }, fs = { class: "user-info" }, hs = { class: "user-name" }, vs = { class: "user-post" }, ms = {
  key: 0,
  class: "ft-dept-empl__tabs"
}, _s = {
  key: 1,
  class: "item-cell user-switch"
}, gs = {
  key: 2,
  class: "ft-dept-empl__body"
}, ys = { class: "ft-dept-empl__breadcrumb" }, bs = ["onClick"], ws = { class: "ft-dept-empl__list" }, ks = {
  key: 0,
  class: "dept-name text-one-line"
}, $s = ["onClick"], Cs = ["onClick"], Es = {
  key: 1,
  class: "dept-name text-one-line"
}, As = { class: "ft-dept-empl__item-bd" }, Is = { class: "user-info" }, Ls = { class: "user-name" }, Ss = { class: "user-post" }, Ms = {
  key: 3,
  class: "ft-dept-empl__body"
}, Vs = { class: "ft-dept-empl__list" }, xs = {
  key: 0,
  class: "header"
}, Ds = { class: "label" }, Ts = /* @__PURE__ */ ls(() => /* @__PURE__ */ i("span", { class: "line" }, null, -1)), zs = {
  key: 1,
  class: "ft-dept-empl__item"
}, Us = { class: "ft-dept-empl__item-bd" }, Fs = { class: "user-info" }, Os = { class: "user-name" }, Bs = { class: "user-post" }, Ps = { class: "index-nav" }, Rs = { class: "index-nav-wrap" }, Ns = { class: "letter-list" }, js = ["onClick"], Hs = { class: "ft-dept-empl__right" }, Js = { class: "ft-dept-empl__header" }, Ks = {
  class: "user-selects",
  wrap: "wrap"
}, Ws = { class: "dialog-footer" }, Ys = {
  name: "index",
  props: {
    modelValue: Array,
    title: {
      type: String,
      default: ""
    },
    multipleLimit: {
      type: Number,
      default: 0
    },
    showType: {
      type: Number,
      default: 0
    },
    deptList: {
      type: Array,
      default: () => []
    },
    emplList: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default() {
        return "\u8BF7\u9009\u62E9";
      }
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = L(!1), r = L(!1), d = L(""), c = L([]), p = L([]), u = L([]), _ = L([]), k = L([]), l = L(!1), A = L(!1), w = fe(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]), F = L(null), v = L([]), O = L([]), { ctx: W } = Je();
    function z() {
      o.value = !0, q();
    }
    function Y() {
      o.value = !1, J();
    }
    function J() {
      k.value = pe(_.value), _.value.length > 0 ? (O.value = _.value.map((E) => E.id), t("change", O.value)) : t("change", []);
    }
    const Z = Pe(() => n.showType == 2 ? n.deptList : n.showType == 1 ? n.emplList : n.emplList.concat(n.deptList)), m = Pe(() => n.multipleLimit > 0 && _.value.length >= n.multipleLimit);
    je(() => {
      n.showType == 2 ? (l.value = !0, A.value = !0) : A.value = !1, (!vt(n.modelValue) || !Ce(n.modelValue)) && Z.value.length > 0 && (n.modelValue.forEach((E) => {
        _.value.push(Ze(E, "id", "children", Z.value));
      }), J());
    });
    function C(E) {
      c.value = [], u.value && u.value.length && (c.value = u.value.filter((U) => he.match(U.realname, E)));
    }
    function D(E = {}, U = !1) {
      if (JSON.stringify(E) == "{}") {
        _.value = [], u.value.forEach((T) => {
          T.isCheck = !1;
        });
        return;
      }
      if (U)
        for (let T = 0; T < u.value.length; T++) {
          const S = u.value[T];
          E.id == S.id ? S.isCheck = !0 : S.isCheck = !1;
        }
      else {
        const T = V(_.value, E, "id");
        T >= 0 && _.value.splice(T, 1);
        for (let S = 0; S < u.value.length; S++) {
          const N = u.value[S];
          if (E.id == N.id) {
            N.isCheck = !1;
            break;
          }
        }
      }
    }
    function G(E) {
      E == 2 ? (A.value = !0, r.value = !0, l.value = !0, q(!0)) : (A.value = !1, r.value = !1, l.value = !1, q());
    }
    async function q(E = !1, U = {}) {
      let T = pe(n.deptList), S = pe(n.emplList);
      if (T.length === 0) {
        const { data: N } = await ce.post("admin/dept/getTree");
        T = N || [];
      }
      if (S.length === 0) {
        const { data: N } = await ce.post("admin/empl/getList", { types: "all" });
        S = N.list || [];
      }
      if (T.forEach((N) => {
        N.userType = "dept";
      }), E)
        u.value = [], JSON.stringify(U) == "{}" ? (S = [], T[0].children.length > 0 && (p.value = [{ label: B("common.all"), deptList: T, emplList: S }])) : (S = M(U.id, S), console.log(S, "users"), T = U.children || [], T.forEach((N) => {
          N.userType = "dept", S.length === 0 && (N.disabled = !0);
        }), p.value.push({ label: U.name, deptList: T, emplList: S }));
      else {
        let N = [];
        S.forEach((y) => {
          y.height = 42, y.pinyin = w.filter((ee) => he.match(y.realname.substr(0, 1), ee))[0], y.pinyin ? (N[y.pinyin] = N[y.pinyin] || [], N[y.pinyin].push(y)) : (N["#"] = N["#"] || [], N["#"].push(y));
        }), S = [];
        let ie = 0;
        w.forEach((y) => {
          if (N[y]) {
            ie++, S.push({ id: y, types: "letter", height: 21 });
            for (let re = 0; re < N[y].length; re++)
              S.push(N[y][re]), ie++;
            const ee = ie - N[y].length;
            v.value.push({ id: y, count: ee, current: ee === 0 });
          } else
            v.value.push({ id: y, count: -1, current: !1 });
        });
      }
      u.value = T.concat(S), _.value.length > 0 && u.value.forEach((N) => {
        _.value.forEach((ie) => {
          N.id == ie.id && (N.isCheck = !0);
        });
      });
    }
    function R(E, U) {
      console.log("selectUsers", E), E ? _.value.push(U) : P(U);
    }
    function P(E = {}, U = !1) {
      if (JSON.stringify(E) == "{}") {
        _.value = [], u.value.forEach((T) => {
          T.isCheck = !1;
        });
        return;
      }
      if (U)
        for (let T = 0; T < u.value.length; T++) {
          const S = u.value[T];
          E.id == S.id ? S.isCheck = !0 : S.isCheck = !1;
        }
      else {
        const T = V(_.value, E, "id");
        T >= 0 && _.value.splice(T, 1);
        for (let S = 0; S < u.value.length; S++) {
          const N = u.value[S];
          if (E.id == N.id) {
            N.isCheck = !1;
            break;
          }
        }
      }
    }
    function M(E, U) {
      let T = [];
      if (E)
        for (let S = 0; S < U.length; S++)
          U[S].deptId === E && T.push(U[S]);
      return T;
    }
    function x(E) {
      P(E), J();
    }
    function X(E, U) {
      U + 1 <= p.value.length - 1 && p.value.splice(U + 1, p.value.length - 1);
      const T = E.deptList, S = E.emplList;
      u.value = T.concat(S);
    }
    function V(E, U, T) {
      for (let S = 0; S < E.length; S++)
        if (E[S][T] == U[T])
          return S;
      return -1;
    }
    function K() {
      l.value = !l.value, u.value = [], l.value ? q(!0) : q();
    }
    function oe(E, U) {
      E !== -1 && (W.$refs.vlist.scrollToItem(E), v.value.forEach((T) => {
        T.current = !1, T.id === U && (T.current = !0);
      }));
    }
    return (E, U) => {
      const T = j("el-tag"), S = j("el-icon"), N = j("el-input"), ie = j("el-checkbox"), y = j("el-avatar"), ee = j("el-button"), re = j("el-breadcrumb-item"), nt = j("el-breadcrumb"), lt = j("el-scrollbar"), st = j("el-dialog");
      return a(), h(H, null, [
        i("div", {
          class: "ft-select-input el-select",
          onClick: z
        }, [
          i("div", ss, [
            (a(!0), h(H, null, te(k.value, (b, se) => (a(), le(T, {
              key: se,
              closable: !e.disabled,
              type: "info",
              onClose: (ne) => x(b)
            }, {
              default: $(() => [
                Q(g(b.realname || b.name), 1)
              ]),
              _: 2
            }, 1032, ["closable", "onClose"]))), 128))
          ], 512),
          f(N, { placeholder: "\u8BF7\u8F93\u5165" }, {
            suffix: $(() => [
              f(S, { class: "el-input__icon" }, {
                default: $(() => [
                  _.value.length > e.multipleLimit ? (a(), le(I(vn), { key: 0 })) : (a(), le(I(Xt), { key: 1 }))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        f(st, {
          modelValue: o.value,
          "onUpdate:modelValue": U[5] || (U[5] = (b) => o.value = b),
          "append-to-body": !0,
          "close-on-click-modal": !1,
          title: e.title,
          "show-close": !1,
          width: "700px"
        }, {
          footer: $(() => [
            i("span", Ws, [
              f(ee, {
                onClick: U[4] || (U[4] = (b) => o.value = !1)
              }, {
                default: $(() => [
                  Q(g(I(B)("common.cancel")), 1)
                ]),
                _: 1
              }),
              f(ee, {
                onClick: Y,
                type: "primary"
              }, {
                default: $(() => [
                  Q(g(I(B)("common.confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: $(() => [
            i("div", os, [
              i("div", is, [
                e.showType <= 1 ? (a(), h("div", as, [
                  f(N, {
                    modelValue: d.value,
                    "onUpdate:modelValue": U[0] || (U[0] = (b) => d.value = b),
                    placeholder: I(B)("deptEmpl.enterKeywords"),
                    onInput: C
                  }, {
                    suffix: $(() => [
                      f(S, {
                        class: "el-input__icon",
                        onClick: C
                      }, {
                        default: $(() => [
                          f(I(Be))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ])) : ae("", !0),
                d.value && e.showType <= 1 ? (a(), h("div", rs, [
                  i("div", us, g(I(B)("deptEmpl.searchResults")) + " : " + g(d.value), 1),
                  i("div", cs, [
                    i("div", ds, [
                      (a(!0), h(H, null, te(c.value, (b, se) => (a(), h("div", {
                        class: "ft-dept-empl__item",
                        key: se
                      }, [
                        f(ie, {
                          modelValue: b.isCheck,
                          "onUpdate:modelValue": (ne) => b.isCheck = ne,
                          disabled: I(m) && !b.isCheck,
                          onChange: (ne) => R(ne, b)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"]),
                        i("div", ps, [
                          f(y, {
                            class: "user-img",
                            size: 30,
                            src: b.img || b.thumbImg
                          }, null, 8, ["src"]),
                          i("div", fs, [
                            i("div", hs, g(b.realname), 1),
                            i("div", vs, g(b.post), 1)
                          ])
                        ])
                      ]))), 128))
                    ])
                  ])
                ])) : (a(), h(H, { key: 2 }, [
                  e.showType === 0 ? (a(), h("div", ms, [
                    f(ee, {
                      type: r.value ? "" : "info",
                      onClick: U[1] || (U[1] = (b) => G(1))
                    }, {
                      default: $(() => [
                        Q(g(I(B)("deptEmpl.emplName")), 1)
                      ]),
                      _: 1
                    }, 8, ["type"]),
                    f(ee, {
                      type: r.value ? "info" : "",
                      onClick: U[2] || (U[2] = (b) => G(2))
                    }, {
                      default: $(() => [
                        Q(g(I(B)("deptEmpl.deptName")), 1)
                      ]),
                      _: 1
                    }, 8, ["type"])
                  ])) : ae("", !0),
                  e.showType <= 1 && !r.value ? (a(), h("div", _s, [
                    i("div", {
                      class: "item-cell__hd",
                      onClick: K
                    }, g(l.value === !1 ? I(B)("deptEmpl.deptView") : I(B)("deptEmpl.letterView")), 1),
                    f(S, null, {
                      default: $(() => [
                        f(I(ue))
                      ]),
                      _: 1
                    })
                  ])) : ae("", !0),
                  l.value ? (a(), h("div", gs, [
                    i("div", ys, [
                      f(nt, { "separator-icon": I(ue) }, {
                        default: $(() => [
                          (a(!0), h(H, null, te(p.value, (b, se) => (a(), le(re, { key: se }, {
                            default: $(() => [
                              i("a", {
                                href: "javascript:;",
                                onClick: (ne) => X(b, se)
                              }, g(b.label), 9, bs)
                            ]),
                            _: 2
                          }, 1024))), 128))
                        ]),
                        _: 1
                      }, 8, ["separator-icon"])
                    ]),
                    i("div", ws, [
                      f(lt, { height: "200px" }, {
                        default: $(() => [
                          (a(!0), h(H, null, te(u.value, (b, se) => (a(), h("div", {
                            class: "ft-dept-empl__item",
                            key: se
                          }, [
                            b.userType == "dept" ? (a(), h(H, { key: 0 }, [
                              A.value ? (a(), h(H, { key: 0 }, [
                                f(ie, {
                                  modelValue: b.isCheck,
                                  "onUpdate:modelValue": (ne) => b.isCheck = ne,
                                  disabled: I(m) && !b.isCheck,
                                  onChange: (ne) => R(ne, b)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"]),
                                b.isCheck || !b.children ? (a(), h("div", ks, g(b.name), 1)) : (a(), h(H, { key: 1 }, [
                                  i("div", {
                                    class: "dept-name text-one-line",
                                    onClick: (ne) => q(!0, b)
                                  }, g(b.name), 9, $s),
                                  f(S, null, {
                                    default: $(() => [
                                      f(I(ue))
                                    ]),
                                    _: 1
                                  })
                                ], 64))
                              ], 64)) : (a(), h(H, { key: 1 }, [
                                f(ie, {
                                  disabled: !0,
                                  indeterminate: ""
                                }),
                                b.children ? (a(), h(H, { key: 0 }, [
                                  i("div", {
                                    class: "dept-name text-one-line",
                                    onClick: (ne) => q(!0, b)
                                  }, g(b.name), 9, Cs),
                                  f(S, null, {
                                    default: $(() => [
                                      f(I(ue))
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : (a(), h("div", Es, g(b.name), 1))
                              ], 64))
                            ], 64)) : e.showType !== 2 && !r.value ? (a(), h(H, { key: 1 }, [
                              f(ie, {
                                modelValue: b.isCheck,
                                "onUpdate:modelValue": (ne) => b.isCheck = ne,
                                disabled: I(m) && !b.isCheck,
                                onChange: (ne) => R(ne, b)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"]),
                              i("div", As, [
                                f(y, {
                                  class: "user-img",
                                  size: 30,
                                  src: b.img || b.thumbImg
                                }, null, 8, ["src"]),
                                i("div", Is, [
                                  i("div", Ls, g(b.realname), 1),
                                  i("div", Ss, g(b.post), 1)
                                ])
                              ])
                            ], 64)) : ae("", !0)
                          ]))), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ])) : (a(), h("div", Ms, [
                    i("div", Vs, [
                      f(I(we), {
                        ref_key: "vlist",
                        ref: F,
                        class: "letter-block",
                        items: u.value,
                        "key-field": "id",
                        "size-field": "height"
                      }, {
                        default: $(({ item: b }) => [
                          b.types === "letter" ? (a(), h("div", xs, [
                            i("span", Ds, g(b.id), 1),
                            Ts
                          ])) : (a(), h("div", zs, [
                            f(ie, {
                              modelValue: b.isCheck,
                              "onUpdate:modelValue": (se) => b.isCheck = se,
                              disabled: I(m) && !b.isCheck,
                              onChange: (se) => R(se, b)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"]),
                            i("div", Us, [
                              f(y, {
                                class: "user-img",
                                size: 30,
                                src: b.img || b.thumbImg
                              }, null, 8, ["src"]),
                              i("div", Fs, [
                                i("div", Os, g(b.realname), 1),
                                i("div", Bs, g(b.post), 1)
                              ])
                            ])
                          ]))
                        ]),
                        _: 1
                      }, 8, ["items"]),
                      i("div", Ps, [
                        i("div", Rs, [
                          i("ul", Ns, [
                            (a(!0), h(H, null, te(v.value, (b, se) => (a(), h("li", {
                              key: se,
                              class: de({ "is-current": b.current, "is-invalid": b.count === -1 && !b.current }),
                              onClick: (ne) => oe(b.count, b.id)
                            }, g(b.id), 11, js))), 128))
                          ])
                        ])
                      ])
                    ])
                  ]))
                ], 64))
              ]),
              i("div", Hs, [
                i("div", Js, [
                  Q(g(e.multipleLimit ? I(B)("deptEmpl.multipleLimit") + " " + e.multipleLimit : "") + " " + g(I(B)("common.selected")) + " " + g(_.value.length) + " ", 1),
                  f(ee, {
                    text: "",
                    onClick: U[3] || (U[3] = (b) => D({})),
                    disabled: !_.value.length
                  }, {
                    default: $(() => [
                      Q(g(I(B)("common.clear")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                i("div", Ks, [
                  (a(!0), h(H, null, te(_.value, (b, se) => (a(), h("span", {
                    key: se,
                    class: "user-item text-one-line"
                  }, [
                    Q(g(b.name || b.realname) + " ", 1),
                    f(S, {
                      onClick: ze((ne) => P(b), ["stop"])
                    }, {
                      default: $(() => [
                        f(I(Oe))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
}, xe = /* @__PURE__ */ ve(Ys, [["__scopeId", "data-v-480523e0"]]);
xe.install = function(e) {
  e.component("FtSelectUser", xe);
};
const Gs = (e) => {
  e.use(Ee), e.use(Ae), e.use(Ie), e.use(Ve), e.use(xe);
}, eo = {
  install: Gs
};
export {
  eo as default
};
