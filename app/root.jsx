import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json, redirect } from "@remix-run/node";

import styles from "./styles/app.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

import Page from "./storyblok/Page";
import Post from "./storyblok/Post";
import Content from "./storyblok/Content";
import LastPosts from "./storyblok/LastPosts";
import MenuItem from "./storyblok/MenuItem";
import AllPosts from "./storyblok/AllPosts";
import AllCategories from "./storyblok/AllCategories";
import Category from "./storyblok/Category";
import Tag from "./storyblok/Tag";
import SocialItem from "./storyblok/SocialItem";
import FooterColumn from "./storyblok/FooterColumn";

const isServer = typeof window === "undefined";

const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : window.env.STORYBLOK_PREVIEW_TOKEN;

export const loader = async () => {
  const sbApi = getStoryblokApi();
  const { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
    headerNav: config?.story?.content?.header_nav,
    socialItems: config?.story?.content?.social_items,
    footerText: config?.story?.content?.footer_text,
    footerColumns: config?.story?.content?.footer_columns,
  });
};

const components = {
  content: Content,
  "last-posts": LastPosts,
  page: Page,
  post: Post,
  "nav-item": MenuItem,
  "all-posts": AllPosts,
  "all-categories": AllCategories,
  category: Category,
  tag: Tag,
  "social-item": SocialItem,
  "footer-column": FooterColumn,
};

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

export const action = async ({ request }) => {
  const body = await request.formData();
  return redirect(`/search?query=${body.get("query")}`);
};

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { env } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
