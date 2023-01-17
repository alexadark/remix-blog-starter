var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react40 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-LSZYOL5F.css";

// app/root.jsx
var import_react41 = require("@storyblok/react");

// app/components/Header.jsx
var import_react8 = require("@remix-run/react");

// app/components/MainMenu.jsx
var import_react2 = require("@storyblok/react"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), MainMenu = () => {
  let { headerNav: nav } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-menu", ...(0, import_react2.storyblokEditable)(nav), children: nav.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
    fileName: "app/components/MainMenu.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/MainMenu.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, MainMenu_default = MainMenu;

// app/components/search/index.jsx
var import_react6 = require("react"), import_react7 = require("@headlessui/react"), import_hi = require("react-icons/hi"), import_md = require("react-icons/md");

// app/components/search/SearchForm.jsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_clsx = __toESM(require("clsx")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), SearchForm = () => {
  let [params] = (0, import_react5.useSearchParams)(), query = params.get("query"), formRef = (0, import_react4.useRef)();
  return (0, import_react4.useEffect)(() => {
    formRef.current.reset();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react5.Form,
    {
      method: "post",
      ref: formRef,
      className: "flex justify-between md:w-[90%]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "input",
        {
          type: "text",
          name: "query",
          placeholder: "Search...",
          defaultValue: query,
          className: (0, import_clsx.default)(
            "w-full h-12",
            "bg-black",
            "border-0 border-l-8 border-white focus:border-pink-500",
            "text-white",
            "text-xl font-bold tracking-wide uppercase",
            "focus:outline-none focus:ring-transparent focus:placeholder-transparent  text-white"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/search/SearchForm.jsx",
          lineNumber: 19,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/search/SearchForm.jsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}, SearchForm_default = SearchForm;

// app/components/search/index.jsx
var import_clsx2 = __toESM(require("clsx")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Search = () => {
  let [open, setOpen] = (0, import_react6.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        "aria-label": "search",
        onClick: () => setOpen(!0),
        className: "border-l border-pink-500 cursor-pointer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_hi.HiOutlineSearch, { className: "text-[24px] text-white   ml-3" }, void 0, !1, {
          fileName: "app/components/search/index.jsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/search/index.jsx",
        lineNumber: 13,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Transition, { show: open, as: import_react6.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_react7.Dialog,
      {
        as: "div",
        static: !0,
        className: (0, import_clsx2.default)("fixed inset-0 overflow-hidden", "z-20"),
        open,
        onClose: setOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_clsx2.default)("absolute inset-0 overflow-hidden"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            import_react7.Transition.Child,
            {
              as: import_react6.Fragment,
              enter: "ease-in-out duration-500",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in-out duration-500",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react7.Dialog.Overlay,
                {
                  className: (0, import_clsx2.default)(
                    "absolute inset-0",
                    "transition-opacity",
                    "bg-black bg-opacity-80"
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/search/index.jsx",
                  lineNumber: 39,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/search/index.jsx",
              lineNumber: 30,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              className: (0, import_clsx2.default)("fixed inset-x-0 top-0", "flex", "max-w-full"),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_react7.Transition.Child,
                {
                  as: import_react6.Fragment,
                  enter: " transition ease-in-out duration-500",
                  enterFrom: "-translate-y-full",
                  enterTo: "-translate-y-0",
                  leave: "transition ease-in-out duration-500 ",
                  leaveFrom: "-translate-y-0",
                  leaveTo: "-translate-y-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                    "div",
                    {
                      className: (0, import_clsx2.default)(
                        "relative",
                        "w-screen max-w-full",
                        "bg-black",
                        "px-10 py-5"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                          "button",
                          {
                            className: (0, import_clsx2.default)("absolute right-3 top-3"),
                            "aria-label": "close menu",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                              import_md.MdClose,
                              {
                                className: "text-[24px] text-white ",
                                onClick: () => setOpen(!1)
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/components/search/index.jsx",
                                lineNumber: 72,
                                columnNumber: 21
                              },
                              this
                            )
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/search/index.jsx",
                            lineNumber: 68,
                            columnNumber: 19
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchForm_default, {}, void 0, !1, {
                          fileName: "app/components/search/index.jsx",
                          lineNumber: 78,
                          columnNumber: 21
                        }, this) }, void 0, !1, {
                          fileName: "app/components/search/index.jsx",
                          lineNumber: 77,
                          columnNumber: 19
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/search/index.jsx",
                      lineNumber: 60,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/search/index.jsx",
                  lineNumber: 51,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/search/index.jsx",
              lineNumber: 47,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/search/index.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/search/index.jsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/search/index.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/search/index.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}, search_default = Search;

// app/components/Header.jsx
var import_react_headroom = __toESM(require("react-headroom")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_headroom.default, { className: "z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "py-4 text-white bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between center-container", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-3xl font-bold", children: "My Blog" }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 11,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-between gap-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainMenu_default, {}, void 0, !1, {
      fileName: "app/components/Header.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(search_default, {}, void 0, !1, {
      fileName: "app/components/Header.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.jsx",
    lineNumber: 14,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.jsx",
  lineNumber: 10,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Header.jsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.jsx",
  lineNumber: 8,
  columnNumber: 5
}, this), Header_default = Header;

// app/components/Footer.jsx
var import_react12 = require("@remix-run/react"), import_storyblok_rich_text_react_renderer = require("storyblok-rich-text-react-renderer");

// app/components/SocialShare.jsx
var import_react11 = require("@remix-run/react");

// app/storyblok/SocialItem.jsx
var import_react9 = require("@storyblok/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), import_react10 = require("react"), SocialItem = ({ blok }) => {
  let { icon, url } = blok;
  return /* @__PURE__ */ (0, import_react10.createElement)(
    "a",
    {
      href: url.cached_url,
      target: "_blank",
      rel: "noopener noreferrer",
      ...(0, import_react9.storyblokEditable)(blok),
      key: blok._uid
    },
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `${icon.filename}/m/30x30`, alt: icon.alt }, void 0, !1, {
      fileName: "app/storyblok/SocialItem.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  );
}, SocialItem_default = SocialItem;

// app/components/SocialShare.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), SocialShare = () => {
  let { socialItems } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center gap-3", children: socialItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SocialItem_default, { blok: item }, item._uid, !1, {
    fileName: "app/components/SocialShare.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/SocialShare.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, SocialShare_default = SocialShare;

// app/components/Footer.jsx
var import_react13 = require("@storyblok/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Footer = () => {
  let { footerText, footerColumns } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("footer", { className: "py-10 text-white bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "center-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center", children: (0, import_storyblok_rich_text_react_renderer.render)(footerText) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    footerColumns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.StoryblokComponent, { blok: column }, column._uid, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SocialShare_default, {}, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}, Footer_default = Footer;

// app/components/Layout.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Layout = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col justify-between min-h-screen", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer_default, {}, void 0, !1, {
    fileName: "app/components/Layout.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Layout.jsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Layout_default = Layout;

// app/storyblok/Page.jsx
var import_react14 = require("@storyblok/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), import_react15 = require("react"), Page = ({ blok }) => {
  var _a;
  return /* @__PURE__ */ (0, import_react15.createElement)("main", { ...(0, import_react14.storyblokEditable)(blok), key: blok._uid }, (_a = blok.body) == null ? void 0 : _a.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react14.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
    fileName: "app/storyblok/Page.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)));
}, Page_default = Page;

// app/storyblok/Post.jsx
var import_react17 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer2 = require("storyblok-rich-text-react-renderer"), import_react18 = require("@remix-run/react");

// app/components/SubmitComment.jsx
var import_react16 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), SubmitComment = ({ slug, id, name, blok }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { children: "Submit Comment" }, void 0, !1, {
    fileName: "app/components/SubmitComment.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react16.Form, { method: "post", className: "block space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "postSlug", value: slug }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "postName", value: name }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "hidden", name: "blok", value: JSON.stringify(blok) }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", name: "name", placeholder: "name" }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "text", name: "mail", id: "", placeholder: "mail" }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "textarea",
      {
        name: "text",
        id: "",
        cols: "30",
        rows: "10",
        placeholder: "your comment"
      },
      void 0,
      !1,
      {
        fileName: "app/components/SubmitComment.jsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("input", { type: "submit" }, void 0, !1, {
      fileName: "app/components/SubmitComment.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SubmitComment.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/SubmitComment.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), SubmitComment_default = SubmitComment;

// app/storyblok/Post.jsx
var import_date_fns = require("date-fns"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), import_react19 = require("react"), Post = ({ blok }) => {
  let { publishDate, id, name } = (0, import_react18.useLoaderData)(), slug = (0, import_react18.useParams)()["*"];
  console.log("params", slug);
  let { headline, content, categories, image, tags, author, comments } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_react19.createElement)("article", { ...(0, import_react17.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: (0, import_date_fns.format)(new Date(publishDate), "MMMM dd, yyyy") }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this), image && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "img",
      {
        src: `${image == null ? void 0 : image.filename}/m/1200x400/smart/filters:grayscale():quality(60)/`,
        alt: ""
      },
      void 0,
      !1,
      {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: headline }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this), (0, import_storyblok_rich_text_react_renderer2.render)(content), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Categories" }, void 0, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      categories == null ? void 0 : categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react18.Link, { to: `/${c.full_slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: c.name }, void 0, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 32,
        columnNumber: 15
      }, this) }, c._uid, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Tags" }, void 0, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      tags == null ? void 0 : tags.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react18.Link, { to: `/${t.full_slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: t.name }, void 0, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, t._uid, !1, {
        fileName: "app/storyblok/Post.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this))
    ] }, void 0, !0, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h3", { children: "Author" }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: author.name }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(SubmitComment_default, { slug, id, name, blok }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}, Post_default = Post;

// app/storyblok/Content.jsx
var import_react20 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer3 = require("storyblok-rich-text-react-renderer"), import_react21 = require("react"), Content = ({ blok }) => {
  let { _uid, text } = blok;
  return /* @__PURE__ */ (0, import_react21.createElement)(
    "div",
    {
      ...(0, import_react20.storyblokEditable)(blok),
      key: _uid,
      className: "prose center-container"
    },
    (0, import_storyblok_rich_text_react_renderer3.render)(text)
  );
}, Content_default = Content;

// app/storyblok/LastPosts.jsx
var import_react22 = require("@storyblok/react"), import_react23 = require("@remix-run/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), import_react24 = require("react"), LastPosts = ({ blok }) => {
  let { _uid, headline } = blok, { lastPosts } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_react24.createElement)("div", { ...(0, import_react22.storyblokEditable)(blok), key: _uid, className: "center-container" }, /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this), lastPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react23.Link, { to: `/${post.full_slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: post.content.headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, post.content._uid, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 13,
    columnNumber: 11
  }, this)));
}, LastPosts_default = LastPosts;

// app/storyblok/MenuItem.jsx
var import_react25 = require("@remix-run/react"), import_react26 = require("@storyblok/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), MenuItem = ({ blok }) => {
  let { label, link, _uid } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: link.linktype === "story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react25.NavLink,
    {
      to: `/${link.cached_url}`,
      ...(0, import_react26.storyblokEditable)(blok),
      className: "menu-item",
      children: label
    },
    _uid,
    !1,
    {
      fileName: "app/storyblok/MenuItem.jsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "a",
    {
      href: link.url,
      target: link.target,
      ...(0, import_react26.storyblokEditable)(blok),
      className: "menu-item",
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/storyblok/MenuItem.jsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/storyblok/MenuItem.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}, MenuItem_default = MenuItem;

// app/storyblok/AllPosts.jsx
var import_react27 = require("@storyblok/react"), import_react28 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), import_react29 = require("react"), AllPosts = ({ blok }) => {
  let { posts, total } = (0, import_react28.useLoaderData)();
  return console.log("total", total), /* @__PURE__ */ (0, import_react29.createElement)("div", { ...(0, import_react27.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllPosts.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this), posts == null ? void 0 : posts.map((p) => {
    let post = p.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react28.Link, { to: `/${p.full_slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: post.headline }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 16,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: post.teaser }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, post._uid, !0, {
      fileName: "app/storyblok/AllPosts.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this);
  }));
}, AllPosts_default = AllPosts;

// app/storyblok/AllCategories.jsx
var import_react30 = require("@storyblok/react"), import_react31 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), import_react32 = require("react"), AllCategories = ({ blok }) => {
  let { categories } = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_react32.createElement)("div", { ...(0, import_react30.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllCategories.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "gap-10 md:grid-cols-2", children: categories == null ? void 0 : categories.map((c) => {
    let category = c.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react31.Link, { to: `/${c.full_slug}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          className: "",
          src: `${category.image.filename}/m/400x200/smart/filters:quality(60)/`,
          alt: ""
        },
        void 0,
        !1,
        {
          fileName: "app/storyblok/AllCategories.jsx",
          lineNumber: 17,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: category.headline }, void 0, !1, {
        fileName: "app/storyblok/AllCategories.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/storyblok/AllCategories.jsx",
        lineNumber: 23,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/storyblok/AllCategories.jsx",
      lineNumber: 16,
      columnNumber: 17
    }, this) }, category._uid, !1, {
      fileName: "app/storyblok/AllCategories.jsx",
      lineNumber: 15,
      columnNumber: 15
    }, this);
  }) }, void 0, !1, {
    fileName: "app/storyblok/AllCategories.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this));
}, AllCategories_default = AllCategories;

// app/storyblok/Category.jsx
var import_react33 = require("@remix-run/react"), import_react34 = require("@storyblok/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), import_react35 = require("react"), Category = ({ blok }) => {
  let { postsByCategory } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ (0, import_react35.createElement)("div", { ...(0, import_react34.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: [
    "Posts for: ",
    blok.headline
  ] }, void 0, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 10,
    columnNumber: 28
  }, this), postsByCategory.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react33.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 15,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, p._uid, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 13,
    columnNumber: 11
  }, this)));
}, Category_default = Category;

// app/storyblok/Tag.jsx
var import_react36 = require("@remix-run/react"), import_react37 = require("@storyblok/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), import_react38 = require("react"), Tag = ({ blok }) => {
  let { postsByTag } = (0, import_react36.useLoaderData)();
  return /* @__PURE__ */ (0, import_react38.createElement)("div", { ...(0, import_react37.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: [
    "Posts for: ",
    blok.headline
  ] }, void 0, !0, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 9,
    columnNumber: 28
  }, this), postsByTag.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react36.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 14,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, p._uid, !0, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 12,
    columnNumber: 11
  }, this)));
}, Tag_default = Tag;

// app/storyblok/FooterColumn.jsx
var import_react39 = require("@storyblok/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), FooterColumn = ({ blok }) => {
  let { headline, footer_menu } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { ...(0, import_react39.storyblokEditable)(blok), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { children: headline }, void 0, !1, {
      fileName: "app/storyblok/FooterColumn.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "", children: footer_menu == null ? void 0 : footer_menu.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react39.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
      fileName: "app/storyblok/FooterColumn.jsx",
      lineNumber: 10,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/storyblok/FooterColumn.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/storyblok/FooterColumn.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}, FooterColumn_default = FooterColumn;

// app/root.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), isServer = typeof window > "u", accessToken = isServer ? process.env.STORYBLOK_PREVIEW_TOKEN : window.env.STORYBLOK_PREVIEW_TOKEN, loader = async () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let sbApi = (0, import_react41.getStoryblokApi)(), { data: config } = await sbApi.get("cdn/stories/config", {
    version: "draft",
    resolve_links: "url"
  });
  return (0, import_node.json)({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN
    },
    headerNav: (_b = (_a = config == null ? void 0 : config.story) == null ? void 0 : _a.content) == null ? void 0 : _b.header_nav,
    socialItems: (_d = (_c = config == null ? void 0 : config.story) == null ? void 0 : _c.content) == null ? void 0 : _d.social_items,
    footerText: (_f = (_e = config == null ? void 0 : config.story) == null ? void 0 : _e.content) == null ? void 0 : _f.footer_text,
    footerColumns: (_h = (_g = config == null ? void 0 : config.story) == null ? void 0 : _g.content) == null ? void 0 : _h.footer_columns
  });
}, components = {
  content: Content_default,
  "last-posts": LastPosts_default,
  page: Page_default,
  post: Post_default,
  "nav-item": MenuItem_default,
  "all-posts": AllPosts_default,
  "all-categories": AllCategories_default,
  category: Category_default,
  tag: Tag_default,
  "social-item": SocialItem_default,
  "footer-column": FooterColumn_default
};
(0, import_react41.storyblokInit)({
  accessToken,
  use: [import_react41.apiPlugin],
  components
});
var action = async ({ request }) => {
  let body = await request.formData();
  return (0, import_node.redirect)(`/search?query=${body.get("query")}`);
}, meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let { env } = (0, import_react40.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.env = ${JSON.stringify(env)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 95,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react40.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// app/routes/categories/$.jsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");

// app/hooks/useStoryblokData.jsx
var import_react42 = require("@remix-run/react"), import_react43 = require("@storyblok/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), useStoryblokData = () => {
  let data = (0, import_react42.useLoaderData)(), story = (0, import_react43.useStoryblokState)(data.story);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react43.StoryblokComponent, { blok: story.content }, void 0, !1, {
    fileName: "app/hooks/useStoryblokData.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
};

// app/routes/categories/$.jsx
var import_react44 = require("@storyblok/react"), loader2 = async ({ params }) => {
  let slug = params["*"] ?? "home", sbApi = (0, import_react44.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await sbApi.get(`cdn/stories/categories/${slug}`, {
    version: "draft"
  }), { data: categories } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "categories/",
    is_startpage: !1
  }), { data: postsByCategory } = await sbApi.get("cdn/stories/", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: !1,
    resolve_relations: resolveRelations,
    filter_query: {
      categories: {
        in_array: data.story.uuid
      }
    }
  });
  return (0, import_node2.json)({
    story: data == null ? void 0 : data.story,
    postsByCategory: postsByCategory == null ? void 0 : postsByCategory.stories,
    categories: categories == null ? void 0 : categories.stories
  });
}, CategoryPage = () => useStoryblokData(), __default = CategoryPage;

// app/routes/create-post.jsx
var create_post_exports = {};
__export(create_post_exports, {
  action: () => action2,
  default: () => create_post_default
});
var import_react45 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_storyblok_js_client = __toESM(require("storyblok-js-client")), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), Storyblok = new import_storyblok_js_client.default({
  oauthToken: process.env.AUTH_TOKEN,
  https: !0
}), createPost = async (postData) => {
  let { headline, teaser } = postData;
  try {
    return await Storyblok.post("spaces/189880/stories/", {
      story: {
        name: headline,
        slug: headline,
        parent_id: 241402052,
        content: {
          component: "post",
          headline,
          teaser
        }
      },
      publish: 1
    });
  } catch (error) {
    throw console.log(error), error;
  }
}, action2 = async ({ request }) => {
  let formData = await request.formData(), postData = Object.fromEntries(formData);
  return await createPost(postData), (0, import_node3.redirect)(`/blog/${postData.headline}`);
}, CreatePost = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { children: "create post" }, void 0, !1, {
    fileName: "app/routes/create-post.jsx",
    lineNumber: 41,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react45.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "text", name: "headline" }, void 0, !1, {
      fileName: "app/routes/create-post.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("textarea", { name: "teaser", id: "", cols: "30", rows: "10" }, void 0, !1, {
      fileName: "app/routes/create-post.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("button", { type: "submit", children: "Submit" }, void 0, !1, {
      fileName: "app/routes/create-post.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/create-post.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/create-post.jsx",
  lineNumber: 40,
  columnNumber: 5
}, this), create_post_default = CreatePost;

// app/routes/Search.jsx
var Search_exports = {};
__export(Search_exports, {
  default: () => Search_default,
  loader: () => loader3
});
var import_react46 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_react47 = require("@storyblok/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), loader3 = async ({ request, params }) => {
  let sbApi = (0, import_react47.getStoryblokApi)(), url = new URL(request.url), query = new URLSearchParams(url.search).get("query"), { data } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: !1,
    filter_query: {
      __or: [
        {
          content: {
            like: `*${query}*`
          }
        },
        {
          headline: {
            like: `*${query}*`
          }
        }
      ]
    }
  });
  return (0, import_node4.json)({ stories: data.stories });
}, SearchPage = () => {
  let { stories } = (0, import_react46.useLoaderData)();
  return console.log("stories", stories), /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/Search.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}, Search_default = SearchPage;

// app/routes/blog/$.jsx
var __exports2 = {};
__export(__exports2, {
  action: () => action3,
  default: () => __default2,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node");
var import_react48 = require("@storyblok/react"), import_storyblok_js_client2 = __toESM(require("storyblok-js-client")), Storyblok2 = new import_storyblok_js_client2.default({
  oauthToken: process.env.AUTH_TOKEN,
  https: !0
}), addComment = async (commentData) => {
  let { name, mail, text } = commentData;
  try {
    return await Storyblok2.post("spaces/189880/stories/", {
      story: {
        name,
        slug: name,
        parent_id: 246074567,
        content: {
          component: "comment",
          name,
          mail,
          text
        }
      },
      publish: 1
    });
  } catch (error) {
    throw console.log(error), error;
  }
}, getCreatedCommentUuid = async (name) => {
  let sbApi = (0, import_react48.getStoryblokApi)(), { data } = await sbApi.get("cdn/stories/", {
    version: "draft",
    starts_with: "comments/",
    is_startpage: !1,
    filter_query: {
      name: {
        like: name
      }
    }
  });
  return data.stories[0].uuid;
}, updatePostWithComment = async (formData, uuid) => {
  let { postName, id, postSlug } = formData, postData = JSON.parse(formData.blok);
  try {
    return await Storyblok2.put(`spaces/189880/stories/${id}`, {
      story: {
        name: postName,
        slug: postSlug,
        id,
        content: {
          component: "post",
          ...postData,
          categories: postData.categories.map((cat) => cat.uuid),
          tags: postData.tags.map((tag) => tag.uuid),
          author: postData.author.uuid,
          comments: [...postData.comments.map((comment) => comment.uuid), uuid]
        }
      },
      publish: 1
    });
  } catch (error) {
    throw console.log(error), error;
  }
}, action3 = async ({ request }) => {
  let formData = await request.formData();
  formData = Object.fromEntries(formData), await addComment(formData);
  let uuid = await getCreatedCommentUuid(formData.name);
  return await updatePostWithComment(formData, uuid), (0, import_node5.redirect)(`/blog/${formData.postSlug}`);
}, loader4 = async ({ params }) => {
  var _a, _b, _c;
  let slug = params["*"] ?? "home", sbApi = (0, import_react48.getStoryblokApi)(), resolveRelations = [
    "post.categories",
    "post.tags",
    "post.author",
    "post.comments"
  ], { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations
  }), { data: blog } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: !1
  }), response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?token=${process.env.STORYBLOK_PREVIEW_TOKEN}&starts_with=blog/&version=draft/&per_page=20&is_startpage=false`
  ), total = await (response == null ? void 0 : response.headers.get("total"));
  return console.log("response", await (response == null ? void 0 : response.headers.get("total"))), (0, import_node5.json)({
    story: data == null ? void 0 : data.story,
    publishDate: (_a = data == null ? void 0 : data.story) == null ? void 0 : _a.published_at,
    id: (_b = data == null ? void 0 : data.story) == null ? void 0 : _b.id,
    name: (_c = data == null ? void 0 : data.story) == null ? void 0 : _c.name,
    posts: blog.stories,
    total
  });
}, PostPage = () => useStoryblokData(), __default2 = PostPage;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => __default3,
  loader: () => loader5
});

// app/routes/$.jsx
var __exports3 = {};
__export(__exports3, {
  default: () => __default3,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react49 = require("@storyblok/react");
var loader5 = async ({ params }) => {
  var _a, _b;
  let slug = params["*"] ?? "home", sbApi = (0, import_react49.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations
  }), numberOfPosts = (_b = (_a = data.story.content.body) == null ? void 0 : _a.find(
    (item) => item.component === "last-posts"
  )) == null ? void 0 : _b.number_of_posts, { data: blog } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: !1
  }), { data: lastPosts } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: numberOfPosts,
    is_startpage: !1,
    resolve_relations: resolveRelations
  });
  return (0, import_node6.json)({
    story: data == null ? void 0 : data.story,
    posts: blog.stories,
    lastPosts: lastPosts.stories
  });
}, RootPage = () => useStoryblokData(), __default3 = RootPage;

// app/routes/tags.jsx
var tags_exports = {};
__export(tags_exports, {
  default: () => tags_default
});
var import_react50 = require("@remix-run/react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), TagsPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h3", { children: "Tags Pages" }, void 0, !1, {
    fileName: "app/routes/tags.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react50.Outlet, {}, void 0, !1, {
    fileName: "app/routes/tags.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/tags.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), tags_default = TagsPage;

// app/routes/tags/$.jsx
var __exports4 = {};
__export(__exports4, {
  default: () => __default4,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node"), import_react51 = require("@remix-run/react"), import_react52 = require("@storyblok/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), loader6 = async ({ params }) => {
  let slug = params["*"] ?? "home", resolveRelations = ["post.categories", "post.tags", "post.author"], sbApi = (0, import_react52.getStoryblokApi)(), { data } = await (0, import_react52.getStoryblokApi)().get(`cdn/stories/tags/${slug}`, {
    version: "draft"
  }), { data: postsByTag } = await sbApi.get("cdn/stories/", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: !1,
    resolve_relations: resolveRelations,
    filter_query: {
      tags: {
        in_array: data.story.uuid
      }
    }
  });
  return (0, import_node7.json)({
    story: data == null ? void 0 : data.story,
    postsByTag: postsByTag == null ? void 0 : postsByTag.stories
  });
}, TagPage = () => {
  let { story } = (0, import_react51.useLoaderData)();
  return story = (0, import_react52.useStoryblokState)(story), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { children: "Test" }, void 0, !1, {
      fileName: "app/routes/tags/$.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react52.StoryblokComponent, { blok: story.content }, void 0, !1, {
      fileName: "app/routes/tags/$.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tags/$.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}, __default4 = TagPage;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "5692ec82", entry: { module: "/build/entry.client-LTXVPIUH.js", imports: ["/build/_shared/chunk-S3ZP66JD.js", "/build/_shared/chunk-AUMS3EWJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-47FWATI5.js", imports: ["/build/_shared/chunk-NLX3DJXF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-NYSW7LYL.js", imports: ["/build/_shared/chunk-IRUKAZE7.js", "/build/_shared/chunk-MUCPB2EB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Search": { id: "routes/Search", parentId: "root", path: "Search", index: void 0, caseSensitive: void 0, module: "/build/routes/Search-GTEMSHMW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$": { id: "routes/blog/$", parentId: "root", path: "blog/*", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$-GK6CEWNR.js", imports: ["/build/_shared/chunk-J2FGCOTP.js", "/build/_shared/chunk-MUCPB2EB.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories/$": { id: "routes/categories/$", parentId: "root", path: "categories/*", index: void 0, caseSensitive: void 0, module: "/build/routes/categories/$-GSD4AZAN.js", imports: ["/build/_shared/chunk-MUCPB2EB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create-post": { id: "routes/create-post", parentId: "root", path: "create-post", index: void 0, caseSensitive: void 0, module: "/build/routes/create-post-TI6TEDEL.js", imports: ["/build/_shared/chunk-J2FGCOTP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-CTEFYUGQ.js", imports: ["/build/_shared/chunk-IRUKAZE7.js", "/build/_shared/chunk-MUCPB2EB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tags": { id: "routes/tags", parentId: "root", path: "tags", index: void 0, caseSensitive: void 0, module: "/build/routes/tags-GASWUA3J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tags/$": { id: "routes/tags/$", parentId: "routes/tags", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/tags/$-ONSKBKD3.js", imports: ["/build/_shared/chunk-NLX3DJXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-5692EC82.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/categories/$": {
    id: "routes/categories/$",
    parentId: "root",
    path: "categories/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/create-post": {
    id: "routes/create-post",
    parentId: "root",
    path: "create-post",
    index: void 0,
    caseSensitive: void 0,
    module: create_post_exports
  },
  "routes/Search": {
    id: "routes/Search",
    parentId: "root",
    path: "Search",
    index: void 0,
    caseSensitive: void 0,
    module: Search_exports
  },
  "routes/blog/$": {
    id: "routes/blog/$",
    parentId: "root",
    path: "blog/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/tags": {
    id: "routes/tags",
    parentId: "root",
    path: "tags",
    index: void 0,
    caseSensitive: void 0,
    module: tags_exports
  },
  "routes/tags/$": {
    id: "routes/tags/$",
    parentId: "routes/tags",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports4
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports3
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
