import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import styles from "./styles/app.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./storyblok/Page";
import Post from "./storyblok/Post";
import Content from "./storyblok/Content";
import LastPosts from "./storyblok/LastPosts";
import MenuItem from "./storyblok/MenuItem";
import AllPosts from "./storyblok/AllPosts";
import Category from "./storyblok/Category";
import { json } from "@remix-run/node";

const isServer = typeof window === "undefined";

const accessToken = isServer
  ? process.env.STORYBLOK_PREVIEW_TOKEN
  : window.env.STORYBLOK_PREVIEW_TOKEN;

export const loader = async () => {
  return json({
    env: {
      STORYBLOK_PREVIEW_TOKEN: process.env.STORYBLOK_PREVIEW_TOKEN,
    },
  });
};

const components = {
  content: Content,
  "last-posts": LastPosts,
  page: Page,
  post: Post,
  "nav-item": MenuItem,
  "all-posts": AllPosts,
  category: Category,
};

storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
});

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
        <Outlet />
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
