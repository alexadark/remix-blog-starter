import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function Page() {
  let { story } = useLoaderData();
  story = useStoryblokState(story);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>
        <StoryblokComponent blok={story.content} />
      </main>
      <Footer />
    </div>
  );
}

export const loader = async ({ params }) => {
  let slug = params["*"] ?? "home";
  const sbApi = getStoryblokApi();

  const resolveRelations = ["post.categories", "post.tags", "post.author"];

  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, {
    version: "draft",
    resolve_relations: resolveRelations,
  });
  const { data: blog } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    per_page: 2,
    is_startpage: false,
    resolve_relations: resolveRelations,
  });

  const { data: postsByCategory } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "blog/",
    is_startpage: false,
    resolve_relations: resolveRelations,
    filter_query: {
      categories: {
        in: "2d34ee77-e2f8-4050-af4e-8fcc7f117a44",
      },
    },
  });

  const { data: category } = await sbApi.get(`cdn/stories`, {
    version: "draft",
    starts_with: "categories/",
    is_startpage: false,
  });

  const { data: config } = await sbApi.get(`cdn/stories/config`, {
    version: "draft",
    resolve_links: "url",
  });

  return json({
    story: data?.story,
    publishDate: data?.story?.published_at,
    slug: data?.story?.slug,
    fullSlug: data?.story?.full_slug,
    posts: blog?.stories,
    headerNav: config?.story?.content?.header_nav,
    socialItems: config?.story?.content?.social_items,
    footerText: config?.story?.content?.footer_text,
    footerColumns: config?.story?.content?.footer_columns,
    categories: category?.stories,
    postsByCategory,
  });
};
