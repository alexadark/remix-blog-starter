var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react35 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-MH6UCCWD.css";

// app/root.jsx
var import_react36 = require("@storyblok/react");

// app/components/Header.jsx
var import_react4 = require("@remix-run/react");

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

// app/components/Header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "py-4 text-white bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between center-container", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold", children: "My Blog" }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainMenu_default, {}, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.jsx",
  lineNumber: 7,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.jsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Header_default = Header;

// app/components/Footer.jsx
var import_react8 = require("@remix-run/react"), import_storyblok_rich_text_react_renderer = require("storyblok-rich-text-react-renderer");

// app/components/SocialShare.jsx
var import_react7 = require("@remix-run/react");

// app/storyblok/SocialItem.jsx
var import_react5 = require("@storyblok/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), import_react6 = require("react"), SocialItem = ({ blok }) => {
  let { icon, url } = blok;
  return /* @__PURE__ */ (0, import_react6.createElement)(
    "a",
    {
      href: url.cached_url,
      target: "_blank",
      rel: "noopener noreferrer",
      ...(0, import_react5.storyblokEditable)(blok),
      key: blok._uid
    },
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: `${icon.filename}/m/30x30`, alt: icon.alt }, void 0, !1, {
      fileName: "app/storyblok/SocialItem.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  );
}, SocialItem_default = SocialItem;

// app/components/SocialShare.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), SocialShare = () => {
  let { socialItems } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center gap-3", children: socialItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SocialItem_default, { blok: item }, item._uid, !1, {
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
var import_react9 = require("@storyblok/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Footer = () => {
  let { footerText, footerColumns } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { className: "py-10 text-white bg-black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "center-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center", children: (0, import_storyblok_rich_text_react_renderer.render)(footerText) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    footerColumns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react9.StoryblokComponent, { blok: column }, column._uid, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SocialShare_default, {}, void 0, !1, {
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

// app/storyblok/Page.jsx
var import_react10 = require("@storyblok/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), import_react11 = require("react"), Page = ({ blok }) => {
  var _a;
  return /* @__PURE__ */ (0, import_react11.createElement)("main", { ...(0, import_react10.storyblokEditable)(blok), key: blok._uid }, (_a = blok.body) == null ? void 0 : _a.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react10.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
    fileName: "app/storyblok/Page.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)));
}, Page_default = Page;

// app/storyblok/Post.jsx
var import_react12 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer2 = require("storyblok-rich-text-react-renderer"), import_react13 = require("@remix-run/react"), import_date_fns = require("date-fns"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), import_react14 = require("react"), Post = ({ blok }) => {
  let { publishDate } = (0, import_react13.useLoaderData)(), { headline, content, categories, image, tags, author } = blok;
  return /* @__PURE__ */ (0, import_react14.createElement)("article", { ...(0, import_react12.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: (0, import_date_fns.format)(new Date(publishDate), "MMMM dd, yyyy") }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "img",
    {
      src: `${image.filename}/m/1200x400/smart/filters:grayscale():quality(60)/`,
      alt: ""
    },
    void 0,
    !1,
    {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this), (0, import_storyblok_rich_text_react_renderer2.render)(content), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Categories" }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.Link, { to: `/categories/${c.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: c.name }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) }, c._uid, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Tags" }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    tags.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.Link, { to: `/tags/${t.slug}/${t.uuid}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: t.name }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, t._uid, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: "Author" }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: author.name }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this));
}, Post_default = Post;

// app/storyblok/Content.jsx
var import_react15 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer3 = require("storyblok-rich-text-react-renderer"), import_react16 = require("react"), Content = ({ blok }) => {
  let { _uid, text } = blok;
  return /* @__PURE__ */ (0, import_react16.createElement)(
    "div",
    {
      ...(0, import_react15.storyblokEditable)(blok),
      key: _uid,
      className: "prose center-container"
    },
    (0, import_storyblok_rich_text_react_renderer3.render)(text)
  );
}, Content_default = Content;

// app/storyblok/LastPosts.jsx
var import_react17 = require("@storyblok/react"), import_react18 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), import_react19 = require("react"), LastPosts = ({ blok }) => {
  let { _uid, headline } = blok, { lastPosts } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_react19.createElement)("div", { ...(0, import_react17.storyblokEditable)(blok), key: _uid, className: "center-container" }, /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this), lastPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: post.content.headline }, void 0, !1, {
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
var import_react20 = require("@remix-run/react"), import_react21 = require("@storyblok/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), MenuItem = ({ blok }) => {
  let { label, link, _uid } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: link.linktype === "story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_react20.NavLink,
    {
      to: `/${link.cached_url}`,
      ...(0, import_react21.storyblokEditable)(blok),
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    "a",
    {
      href: link.url,
      target: link.target,
      ...(0, import_react21.storyblokEditable)(blok),
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
var import_react22 = require("@storyblok/react"), import_react23 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), import_react24 = require("react"), AllPosts = ({ blok }) => {
  let { posts } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_react24.createElement)("div", { ...(0, import_react22.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllPosts.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this), posts == null ? void 0 : posts.map((p) => {
    let post = p.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react23.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: post.headline }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 15,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: post.teaser }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    ] }, post._uid, !0, {
      fileName: "app/storyblok/AllPosts.jsx",
      lineNumber: 13,
      columnNumber: 11
    }, this);
  }));
}, AllPosts_default = AllPosts;

// app/storyblok/AllCategories.jsx
var import_react25 = require("@storyblok/react"), import_react26 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), import_react27 = require("react"), AllCategories = ({ blok }) => {
  let { categories } = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_react27.createElement)("div", { ...(0, import_react25.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllCategories.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "gap-10 md:grid-cols-2", children: categories == null ? void 0 : categories.map((c) => {
    let category = c.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react26.Link, { to: `/categories/${c.slug}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: category.headline }, void 0, !1, {
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
var import_react28 = require("@remix-run/react"), import_react29 = require("@storyblok/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), import_react30 = require("react"), Category = ({ blok }) => {
  let { postsByCategory } = (0, import_react28.useLoaderData)();
  return /* @__PURE__ */ (0, import_react30.createElement)("div", { ...(0, import_react29.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: [
    "Posts for: ",
    blok.headline
  ] }, void 0, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 9,
    columnNumber: 28
  }, this), postsByCategory.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react28.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 14,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this)
  ] }, p._uid, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 12,
    columnNumber: 11
  }, this)));
}, Category_default = Category;

// app/storyblok/Tag.jsx
var import_react31 = require("@remix-run/react"), import_react32 = require("@storyblok/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), import_react33 = require("react"), Tag = ({ blok }) => {
  let { postsByTag } = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_react33.createElement)("div", { ...(0, import_react32.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: [
    "Posts for: ",
    blok.headline
  ] }, void 0, !0, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 9,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 10,
    columnNumber: 28
  }, this), postsByTag.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react31.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 15,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
      fileName: "app/storyblok/Tag.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, p._uid, !0, {
    fileName: "app/storyblok/Tag.jsx",
    lineNumber: 13,
    columnNumber: 11
  }, this)));
}, Tag_default = Tag;

// app/storyblok/FooterColumn.jsx
var import_react34 = require("@storyblok/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), FooterColumn = ({ blok }) => {
  let { headline, footer_menu } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { ...(0, import_react34.storyblokEditable)(blok), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { children: headline }, void 0, !1, {
      fileName: "app/storyblok/FooterColumn.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "", children: footer_menu == null ? void 0 : footer_menu.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react34.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
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
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), isServer = typeof window > "u", accessToken = isServer ? process.env.STORYBLOK_PREVIEW_TOKEN : window.env.STORYBLOK_PREVIEW_TOKEN, loader = async () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let sbApi = (0, import_react36.getStoryblokApi)(), { data: config } = await sbApi.get("cdn/stories/config", {
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
(0, import_react36.storyblokInit)({
  accessToken,
  use: [import_react36.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let { env } = (0, import_react35.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react35.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// app/routes/tags/$slug.$uuid.jsx
var slug_uuid_exports = {};
__export(slug_uuid_exports, {
  default: () => slug_uuid_default,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node");

// app/hooks/useStoryblokContent.jsx
var import_react37 = require("@remix-run/react"), import_react38 = require("@storyblok/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), useStoryblokContent = () => {
  let data = (0, import_react37.useLoaderData)(), story = (0, import_react38.useStoryblokState)(data.story);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react38.StoryblokComponent, { blok: story.content }, void 0, !1, {
    fileName: "app/hooks/useStoryblokContent.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
};

// app/routes/tags/$slug.$uuid.jsx
var import_react39 = require("@storyblok/react"), loader2 = async ({ params }) => {
  let { slug, uuid } = params, sbApi = (0, import_react39.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await sbApi.get(`cdn/stories/tags/${slug}`, {
    version: "draft"
  }), { data: postsByTag } = await sbApi.get("cdn/stories/", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: !1,
    resolve_relations: resolveRelations,
    filter_query: {
      tags: {
        in_array: uuid
      }
    }
  });
  return (0, import_node2.json)({
    story: data == null ? void 0 : data.story,
    postsByTag: postsByTag == null ? void 0 : postsByTag.stories,
    params
  });
}, TagPage = () => useStoryblokContent(), slug_uuid_default = TagPage;

// app/routes/blog/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");
var import_react40 = require("@storyblok/react"), loader3 = async ({ params }) => {
  var _a;
  let { slug } = params, sbApi = (0, import_react40.getStoryblokApi)(), { data } = await sbApi.get(`cdn/stories/blog/${slug}`, {
    version: "draft",
    resolve_relations: ["post.categories", "post.tags", "post.author"]
  });
  return (0, import_node3.json)({
    story: data == null ? void 0 : data.story,
    publishDate: (_a = data == null ? void 0 : data.story) == null ? void 0 : _a.published_at
  });
}, PostPage = () => useStoryblokContent(), slug_default = PostPage;

// app/routes/blog/index.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node");
var import_react41 = require("@storyblok/react"), loader4 = async () => {
  let sbApi = (0, import_react41.getStoryblokApi)(), { data } = await sbApi.get("cdn/stories/blog", {
    version: "draft"
  }), { data: blog } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: !1
  });
  return (0, import_node4.json)({
    story: data == null ? void 0 : data.story,
    posts: blog.stories
  });
}, BlogPage = () => useStoryblokContent(), blog_default = BlogPage;

// app/routes/categories.jsx
var categories_exports = {};
__export(categories_exports, {
  default: () => categories_default,
  loader: () => loader5
});
var import_react42 = require("@remix-run/react"), import_node5 = require("@remix-run/node"), import_react43 = require("@storyblok/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader5 = async () => {
  let sbApi = (0, import_react43.getStoryblokApi)(), { data } = await sbApi.get("cdn/stories/categories", {
    version: "draft"
  });
  return (0, import_node5.json)({
    catStory: data == null ? void 0 : data.story
  });
}, Categories = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { children: "Categories pages" }, void 0, !1, {
    fileName: "app/routes/categories.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react42.Outlet, {}, void 0, !1, {
    fileName: "app/routes/categories.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/categories.jsx",
  lineNumber: 16,
  columnNumber: 5
}, this), categories_default = Categories;

// app/routes/categories/$slug.jsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => slug_default2,
  loader: () => loader6
});
var import_node6 = require("@remix-run/node");
var import_react44 = require("@storyblok/react"), loader6 = async ({ params }) => {
  let { slug } = params, sbApi = (0, import_react44.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await sbApi.get(`cdn/stories/categories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations
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
  return (0, import_node6.json)({
    story: data == null ? void 0 : data.story,
    postsByCategory: postsByCategory == null ? void 0 : postsByCategory.stories
  });
}, CategoryPage = () => useStoryblokContent(), slug_default2 = CategoryPage;

// app/routes/categories/index.jsx
var categories_exports2 = {};
__export(categories_exports2, {
  default: () => categories_default2,
  loader: () => loader7
});
var import_node7 = require("@remix-run/node");
var import_react45 = require("@storyblok/react"), loader7 = async () => {
  let sbApi = (0, import_react45.getStoryblokApi)(), { data } = await sbApi.get("cdn/stories/categories", {
    version: "draft"
  }), { data: categories } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "categories/",
    is_startpage: !1
  });
  return (0, import_node7.json)({
    story: data == null ? void 0 : data.story,
    categories: categories == null ? void 0 : categories.stories
  });
}, CategoryArchive = () => useStoryblokContent(), categories_default2 = CategoryArchive;

// app/routes/$slug.jsx
var slug_exports3 = {};
__export(slug_exports3, {
  default: () => slug_default3,
  loader: () => loader8
});
var import_node8 = require("@remix-run/node");
var import_react46 = require("@storyblok/react"), loader8 = async ({ params }) => {
  var _a, _b;
  let slug = params.slug ?? "home", sbApi = (0, import_react46.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await sbApi.get(`cdn/stories/${slug}`, {
    version: "draft"
  }), { data: allPosts } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: !1,
    resolve_relations: resolveRelations
  }), numberOfPosts = (_b = (_a = data.story.content.body) == null ? void 0 : _a.find(
    (item) => item.component === "last-posts"
  )) == null ? void 0 : _b.number_of_posts;
  return (0, import_node8.json)({
    story: data == null ? void 0 : data.story,
    posts: allPosts == null ? void 0 : allPosts.stories,
    lastPosts: allPosts.stories.slice(0, numberOfPosts)
  });
}, RootPage = () => useStoryblokContent(), slug_default3 = RootPage;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => slug_default3,
  loader: () => loader8
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d9adcb49", entry: { module: "/build/entry.client-A264KRU2.js", imports: ["/build/_shared/chunk-MSLNAK24.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AWJ7GKHX.js", imports: ["/build/_shared/chunk-3SYU2WYZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-R5ERLSA3.js", imports: ["/build/_shared/chunk-AYAXJPEC.js", "/build/_shared/chunk-4A7F4MYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$slug": { id: "routes/blog/$slug", parentId: "root", path: "blog/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$slug-JLV6RQGA.js", imports: ["/build/_shared/chunk-4A7F4MYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-T2L3EJ6W.js", imports: ["/build/_shared/chunk-4A7F4MYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories": { id: "routes/categories", parentId: "root", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/categories-XAVUIVU5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories/$slug": { id: "routes/categories/$slug", parentId: "routes/categories", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/categories/$slug-H3BGJ2WJ.js", imports: ["/build/_shared/chunk-4A7F4MYV.js", "/build/_shared/chunk-3SYU2WYZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories/index": { id: "routes/categories/index", parentId: "routes/categories", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/categories/index-SQFARVKY.js", imports: ["/build/_shared/chunk-4A7F4MYV.js", "/build/_shared/chunk-3SYU2WYZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WNM5BE2D.js", imports: ["/build/_shared/chunk-AYAXJPEC.js", "/build/_shared/chunk-4A7F4MYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tags/$slug.$uuid": { id: "routes/tags/$slug.$uuid", parentId: "root", path: "tags/:slug/:uuid", index: void 0, caseSensitive: void 0, module: "/build/routes/tags/$slug.$uuid-GTL7OC5Q.js", imports: ["/build/_shared/chunk-4A7F4MYV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D9ADCB49.js" };

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
  "routes/tags/$slug.$uuid": {
    id: "routes/tags/$slug.$uuid",
    parentId: "root",
    path: "tags/:slug/:uuid",
    index: void 0,
    caseSensitive: void 0,
    module: slug_uuid_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/categories": {
    id: "routes/categories",
    parentId: "root",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/categories/$slug": {
    id: "routes/categories/$slug",
    parentId: "routes/categories",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/categories/index": {
    id: "routes/categories/index",
    parentId: "routes/categories",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: categories_exports2
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports3
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
