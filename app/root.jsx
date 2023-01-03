import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "./styles/app.css";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

import Page from "./storyblok/Page";
import Post from "./storyblok/Post";
import Content from "./storyblok/Content";
import LastPosts from "./storyblok/LastPosts";
import MenuItem from "./storyblok/MenuItem";
import MainMenu from "./components/MainMenu";
import AllPosts from "./storyblok/AllPosts";

const components = {
  content: Content,
  "last-posts": LastPosts,
  page: Page,
  post: Post,
  "nav-item": MenuItem,
  "all-posts": AllPosts,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  const sbApi = getStoryblokApi();

  let { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });

  return json({
    config: config?.story,
  });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <div className="flex justify-between align-center">
            <Link to="/">
              <h1 className="text-3xl font-bold">Alexandra Spalato</h1>
            </Link>
            <MainMenu />
          </div>
        </header>
        <Outlet />
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
