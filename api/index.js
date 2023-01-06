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
var import_react23 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-SPQPI3QQ.css";

// app/root.jsx
var import_react24 = require("@storyblok/react");

// app/storyblok/Page.jsx
var import_react2 = require("@storyblok/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), import_react3 = require("react"), Page = ({ blok }) => {
  var _a;
  return /* @__PURE__ */ (0, import_react3.createElement)("main", { ...(0, import_react2.storyblokEditable)(blok), key: blok._uid }, (_a = blok.body) == null ? void 0 : _a.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
    fileName: "app/storyblok/Page.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)));
}, Page_default = Page;

// app/storyblok/Post.jsx
var import_react4 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer = require("storyblok-rich-text-react-renderer"), import_react5 = require("@remix-run/react"), import_date_fns = require("date-fns"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), import_react6 = require("react"), Post = ({ blok }) => {
  let { publishDate } = (0, import_react5.useLoaderData)(), { headline, content, categories, image, tags, author } = blok;
  return /* @__PURE__ */ (0, import_react6.createElement)("article", { ...(0, import_react4.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: (0, import_date_fns.format)(new Date(publishDate), "MMMM dd, yyyy") }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
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
  ), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this), (0, import_storyblok_rich_text_react_renderer.render)(content), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Categories" }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: c.name }, c._uid, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Tags" }, void 0, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    tags.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t.name }, t._uid, !1, {
      fileName: "app/storyblok/Post.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this))
  ] }, void 0, !0, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 22,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Author" }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: author.name }, void 0, !1, {
    fileName: "app/storyblok/Post.jsx",
    lineNumber: 33,
    columnNumber: 7
  }, this));
}, Post_default = Post;

// app/storyblok/Content.jsx
var import_react7 = require("@storyblok/react"), import_storyblok_rich_text_react_renderer2 = require("storyblok-rich-text-react-renderer"), import_react8 = require("react"), Content = ({ blok }) => {
  let { _uid, text, button } = blok;
  return /* @__PURE__ */ (0, import_react8.createElement)("div", { ...(0, import_react7.storyblokEditable)(blok), key: _uid }, (0, import_storyblok_rich_text_react_renderer2.render)(text));
}, Content_default = Content;

// app/storyblok/LastPosts.jsx
var import_react9 = require("@storyblok/react"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), import_react11 = require("react"), LastPosts = ({ blok }) => {
  var _a, _b;
  let { _uid, headline } = blok, { posts, story } = (0, import_react10.useLoaderData)(), numberOfPosts = (_b = (_a = story.content.body) == null ? void 0 : _a.find(
    (item) => item.component === "last-posts"
  )) == null ? void 0 : _b.number_of_posts, lastPosts = posts.slice(0, numberOfPosts);
  return /* @__PURE__ */ (0, import_react11.createElement)("div", { ...(0, import_react9.storyblokEditable)(blok), key: _uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: headline }, void 0, !1, {
    fileName: "app/storyblok/LastPosts.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this), lastPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: post.content.headline }, void 0, !1, {
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
var import_react12 = require("@remix-run/react"), import_react13 = require("@storyblok/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), MenuItem = ({ blok }) => {
  let { label, link, _uid } = blok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: link.linktype === "story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react12.NavLink,
    {
      to: `/${link.cached_url}`,
      className: "mx-5 text-gray-500 hover:text-red-900",
      ...(0, import_react13.storyblokEditable)(blok),
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
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "a",
    {
      href: link.url,
      target: link.target,
      className: "mx-5 text-gray-500 hover:text-gray-900 blok",
      ...(0, import_react13.storyblokEditable)(blok),
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
var import_react14 = require("@storyblok/react"), import_react15 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), import_react16 = require("react"), AllPosts = ({ blok }) => {
  let { posts } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_react16.createElement)("div", { ...(0, import_react14.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllPosts.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), posts == null ? void 0 : posts.map((p) => {
    let post = p.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react15.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: post.headline }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 14,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: post.teaser }, void 0, !1, {
        fileName: "app/storyblok/AllPosts.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    ] }, post._uid, !0, {
      fileName: "app/storyblok/AllPosts.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this);
  }));
}, AllPosts_default = AllPosts;

// app/storyblok/AllCategories.jsx
var import_react17 = require("@storyblok/react"), import_react18 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), import_react19 = require("react"), AllCategories = ({ blok }) => {
  let { categories } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ (0, import_react19.createElement)("div", { ...(0, import_react17.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: blok.headline }, void 0, !1, {
    fileName: "app/storyblok/AllCategories.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "gap-10 md:grid-cols-2", children: categories == null ? void 0 : categories.map((c) => {
    let category = c.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react18.Link, { to: `/categories/${c.slug}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: category.headline }, void 0, !1, {
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
var import_react20 = require("@remix-run/react"), import_react21 = require("@storyblok/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), import_react22 = require("react"), Category = ({ blok }) => {
  let { slug, posts } = (0, import_react20.useLoaderData)(), categoryPosts = posts.filter((p) => p.content.categories.map((c) => c.slug).includes(slug));
  return /* @__PURE__ */ (0, import_react22.createElement)("div", { ...(0, import_react21.storyblokEditable)(blok), key: blok._uid }, /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: [
    "Posts for: ",
    blok.headline
  ] }, void 0, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this), blok.description && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: blok.description }, void 0, !1, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 13,
    columnNumber: 28
  }, this), categoryPosts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react20.Link, { to: `/blog/${p.slug}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: p.content.headline }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 18,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: p.content.teaser }, void 0, !1, {
      fileName: "app/storyblok/Category.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, p._uid, !0, {
    fileName: "app/storyblok/Category.jsx",
    lineNumber: 16,
    columnNumber: 11
  }, this)));
}, Category_default = Category;

// app/root.jsx
var import_node = require("@remix-run/node"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), isServer = typeof window > "u", accessToken = isServer ? process.env.STORYBLOK_PREVIEW_TOKEN : window.env.STORYBLOK_PREVIEW_TOKEN, loader = async () => (0, import_node.json)({
  env: {
    STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN
  }
}), components = {
  content: Content_default,
  "last-posts": LastPosts_default,
  page: Page_default,
  post: Post_default,
  "nav-item": MenuItem_default,
  "all-posts": AllPosts_default,
  "all-categories": AllCategories_default,
  category: Category_default
};
(0, import_react24.storyblokInit)({
  accessToken,
  use: [import_react24.apiPlugin],
  components
});
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let { env } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
          lineNumber: 71,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react23.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Page2,
  loader: () => loader2
});

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Page2,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react28 = require("@remix-run/react"), import_react29 = require("@storyblok/react");

// app/components/Header.jsx
var import_react27 = require("@remix-run/react");

// app/components/MainMenu.jsx
var import_react25 = require("@storyblok/react"), import_react26 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), MainMenu = () => {
  let { config } = (0, import_react26.useLoaderData)(), {
    content: { header_nav: nav }
  } = config;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex", ...(0, import_react25.storyblokEditable)(nav), children: nav.map((nestedBlok) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react25.StoryblokComponent, { blok: nestedBlok }, nestedBlok._uid, !1, {
    fileName: "app/components/MainMenu.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/MainMenu.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}, MainMenu_default = MainMenu;

// app/components/Header.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-between align-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react27.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-3xl font-bold", children: "Alexandra Spalato" }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MainMenu_default, {}, void 0, !1, {
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

// app/routes/$.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Page2() {
  let { story } = (0, import_react28.useLoaderData)();
  return story = (0, import_react29.useStoryblokState)(story), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/routes/$.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react29.StoryblokComponent, { blok: story.content }, void 0, !1, {
      fileName: "app/routes/$.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var loader2 = async ({ params }) => {
  var _a, _b, _c;
  let slug = params["*"] ?? "home", sbApi = (0, import_react29.getStoryblokApi)(), resolveRelations = ["post.categories", "post.tags", "post.author"], { data } = await (0, import_react29.getStoryblokApi)().get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations
  }), { data: blog } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "blog/",
    is_startpage: !1,
    resolve_relations: resolveRelations
  }), { data: category } = await sbApi.get("cdn/stories", {
    version: "draft",
    starts_with: "categories/",
    is_startpage: !1
  }), { data: config } = await sbApi.get("cdn/stories/config", {
    version: "draft",
    resolve_links: "url"
  });
  return (0, import_node2.json)({
    story: data == null ? void 0 : data.story,
    publishDate: (_a = data == null ? void 0 : data.story) == null ? void 0 : _a.published_at,
    slug: (_b = data == null ? void 0 : data.story) == null ? void 0 : _b.slug,
    fullSlug: (_c = data == null ? void 0 : data.story) == null ? void 0 : _c.full_slug,
    posts: blog == null ? void 0 : blog.stories,
    config: config == null ? void 0 : config.story,
    categories: category == null ? void 0 : category.stories
  });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4365c4e3", entry: { module: "/build/entry.client-A264KRU2.js", imports: ["/build/_shared/chunk-MSLNAK24.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-M5RDHWWC.js", imports: ["/build/_shared/chunk-3SYU2WYZ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-JMSMPLML.js", imports: ["/build/_shared/chunk-NG6HUXIW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6ARVRSXS.js", imports: ["/build/_shared/chunk-NG6HUXIW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-4365C4E3.js" };

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
