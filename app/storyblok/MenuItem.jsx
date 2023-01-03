import { NavLink } from "@remix-run/react";
import { storyblokEditable } from "@storyblok/react";

const MenuItem = ({ blok }) => {
  const { label, link, _uid } = blok;

  return (
    <>
      {link.linktype === "story" ? (
        <NavLink
          key={_uid}
          to={`/${link.cached_url}`}
          className="mx-5 text-gray-500 hover:text-red-900"
          {...storyblokEditable(blok)}
        >
          {label}
        </NavLink>
      ) : (
        <a
          href={link.url}
          target={link.target}
          className="mx-5 text-gray-500 hover:text-gray-900 blok"
          {...storyblokEditable(blok)}
        >
          {label}
        </a>
      )}
    </>
  );
};

export default MenuItem;
