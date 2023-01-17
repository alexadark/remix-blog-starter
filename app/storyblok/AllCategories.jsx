import { storyblokEditable } from "@storyblok/react";
import { useLoaderData, Link } from "@remix-run/react";

const AllCategories = ({ blok }) => {
  const { categories } = useLoaderData();
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <h1>{blok.headline}</h1>
      <div className="gap-10 md:grid-cols-2">
        {categories?.map((c) => {
          const category = c.content;
          return (
            <article key={category._uid}>
              <Link to={`/${c.full_slug}`}>
                <img
                  className=""
                  src={`${category.image.filename}/m/400x200/smart/filters:quality(60)/`}
                  alt=""
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {category.headline}
                  </h2>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AllCategories;
