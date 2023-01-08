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
var import_react32 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-VDKU2TQD.css";

// app/root.jsx
var import_react33 = require("@storyblok/react");

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
  let { publishDate } = (0, import_react13.useLoaderData)(), { headline, content, categories: categories2, image, tags, author } = blok;
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
    categories2.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.Link, { to: `/categories/${c.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: c.name }, void 0, !1, {
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
    tags.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react13.Link, { to: `/tags/${t.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: t.name }, void 0, !1, {
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
  var _a, _b;
  let { _uid, headline } = blok, { posts, story } = (0, import_react18.useLoaderData)(), numberOfPosts = (_b = (_a = story.content.body) == null ? void 0 : _a.find(
    (item) => item.component === "last-posts"
  )) == null ? void 0 : _b.number_of_posts, lastPosts = posts.slice(0, numberOfPosts);
  return /* @__PURE__ */ (0, import_react19.createElement)("div", { ...(0, import_react17.storyblokEditable)(blok), key: _uid, className: "center-container" }, /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this), lastPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { children: post.content.headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, post.content._uid, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 17,
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
  let { categories: categories2 } = (0, import_react26.useLoaderData)();
  return /* @__PURE__ */ (0, import_react27.createElement)("div", { ...(0, import_react25.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllCategories.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "gap-10 md:grid-cols-2", children: categories2 == null ? void 0 : categories2.map((c) => {
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
    lineNumber: 9,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 10,
    columnNumber: 28
  }, this), postsByCategory.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react28.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 15,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
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

// app/storyblok/FooterColumn.jsx
var import_react31 = require("@storyblok/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), FooterColumn = ({ blok }) => {
  let { headline, footer_menu } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { ...(0, import_react31.storyblokEditable)(blok), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h3", { children: headline }, void 0, !1, {
      fileName: "app/storyblok/FooterColumn.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "", children: footer_menu == null ? void 0 : footer_menu.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react31.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
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
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), isServer = typeof window > "u", accessToken = isServer ? process.env.STORYBLOK_PREVIEW_TOKEN : window.env.STORYBLOK_PREVIEW_TOKEN, loader = async () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let sbApi = (0, import_react33.getStoryblokApi)(), { data: config } = await sbApi.get("cdn/stories/config", {
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
  "social-item": SocialItem_default,
  "footer-column": FooterColumn_default
};
(0, import_react33.storyblokInit)({
  accessToken,
  use: [import_react33.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let { env } = (0, import_react32.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col justify-between min-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Header_default, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.Outlet, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Footer_default, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react32.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// app/routes/categories.jsx
var categories_exports = {};
__export(categories_exports, {
  default: () => categories_default
});
var import_react34 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), categories = () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: "Categories pages" }, void 0, !1, {
    fileName: "app/routes/categories.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react34.Outlet, {}, void 0, !1, {
    fileName: "app/routes/categories.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/categories.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), categories_default = categories;

// app/routes/tags/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react35 = require("@remix-run/react"), import_react36 = require("@storyblok/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let { slug } = params, resolveRelations = ["post.categories", "post.tags", "post.author"], sbApi = (0, import_react36.getStoryblokApi)(), { data } = await (0, import_react36.getStoryblokApi)().get(`cdn/stories/tags/${slug}`, {
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
  return (0, import_node2.json)({
    story: data == null ? void 0 : data.story,
    postsByTag: postsByTag == null ? void 0 : postsByTag.stories
  });
}, TagPage = () => {
  let { story } = (0, import_react35.useLoaderData)();
  return story = (0, import_react36.useStoryblokState)(story), /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react36.StoryblokComponent, { blok: story.content }, void 0, !1, {
    fileName: "app/routes/tags/$slug.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}, slug_default = TagPage;

// app/routes/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default
});
var import_react37 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Dashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: "Dashboard" }, void 0, !1, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react37.Outlet, {}, void 0, !1, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/dashboard.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), dashboard_default = Dashboard;

// app/routes/dashboard/index.jsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), DashboardPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: "DashboardPage Index" }, void 0, !1, {
  fileName: "app/routes/dashboard/index.jsx",
  lineNumber: 2,
  columnNumber: 10
}, this), dashboard_default2 = DashboardPage;

// app/routes/dashboard/users.jsx
var users_exports = {};
__export(users_exports, {
  default: () => users_default
});
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), UsersPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: "UsersPage" }, void 0, !1, {
  fileName: "app/routes/dashboard/users.jsx",
  lineNumber: 2,
  columnNumber: 10
}, this), users_default = UsersPage;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Page2,
  loader: () => loader3,
  tagLoader: () => loader2
});

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Page2,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react38 = require("@remix-run/react"), import_react39 = require("@storyblok/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Page2() {
  let { story } = (0, import_react38.useLoaderData)();
  return story = (0, import_react39.useStoryblokState)(story), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react39.StoryblokComponent, { blok: story.content }, void 0, !1, {
    fileName: "app/routes/$.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
var loader3 = async ({ params }) => {
  var _a;
  let slug = params["*"] ?? "home", catsSlug = params["*"] === "categories/" ? "categories/home" : null, tagsSlug = params["*"] === "tags/" ? "tags/home" : null, sbApi = (0, import_react39.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await (0, import_react39.getStoryblokApi)().get(
    `cdn/stories/${catsSlug || tagsSlug || slug}`,
    {
      version: "draft",
      resolve_relations: resolveRelations
    }
  ), { data: blog } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    per_page: 20,
    is_startpage: !1,
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
  }), { data: category } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "categories/",
    is_startpage: !1
  });
  return (0, import_node3.json)({
    story: data == null ? void 0 : data.story,
    publishDate: (_a = data == null ? void 0 : data.story) == null ? void 0 : _a.published_at,
    posts: blog == null ? void 0 : blog.stories,
    categories: category == null ? void 0 : category.stories,
    postsByCategory: postsByCategory == null ? void 0 : postsByCategory.stories
  });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "14f35059", entry: { module: "/build/entry.client-OYODRT5P.js", imports: ["/build/_shared/chunk-YL6Q2456.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-C2RSA4HL.js", imports: ["/build/_shared/chunk-PET3BD27.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-77UJEY3D.js", imports: ["/build/_shared/chunk-7TDJDKXI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/categories": { id: "routes/categories", parentId: "root", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/categories-HIKN6D3A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-7K4PRXCR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-WU6ALPIB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/users": { id: "routes/dashboard/users", parentId: "routes/dashboard", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/users-YUPBB3DS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-RSIA7KDX.js", imports: ["/build/_shared/chunk-7TDJDKXI.js", "/build/_shared/chunk-OOUQTKY7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tags/$slug": { id: "routes/tags/$slug", parentId: "root", path: "tags/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/tags/$slug-F23P5GPB.js", imports: ["/build/_shared/chunk-OOUQTKY7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-14F35059.js" };

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
  "routes/categories": {
    id: "routes/categories",
    parentId: "root",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/tags/$slug": {
    id: "routes/tags/$slug",
    parentId: "root",
    path: "tags/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/dashboard/users": {
    id: "routes/dashboard/users",
    parentId: "routes/dashboard",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
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
