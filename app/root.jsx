import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./storyblok/Page";
import Post from "./storyblok/Post";
import Content from "./storyblok/Content";
import LastPosts from "./storyblok/LastPosts";
import MenuItem from "./storyblok/MenuItem";

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
  accessToken: "xvluQNsWzAEEKECrdlwWVQtt",
  // accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components,
});

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
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
