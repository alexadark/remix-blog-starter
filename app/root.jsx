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
import { Page, Post } from "./storyblok";

const components = {
  // content: Content,
  // "last-posts": LastPosts,
  page: Page,
  post: Post,
  // "nav-item": MenuItem,
  // "featured-projects": FeaturedProjects,
  // "posts-archive": PostsArchive,
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
