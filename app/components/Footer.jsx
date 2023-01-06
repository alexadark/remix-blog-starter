import { useLoaderData } from "@remix-run/react";
import { render } from "storyblok-rich-text-react-renderer";
import SocialShare from "./SocialShare";
import { StoryblokComponent } from "@storyblok/react";

const Footer = () => {
  const { footerText, footerColumns } = useLoaderData();

  return (
    <footer>
      <h3 className="text-2xl font-bold text-black">Footer</h3>
      <div className="text-center">{render(footerText)}</div>
      {footerColumns.map((column) => (
        <StoryblokComponent blok={column} key={column._uid} />
      ))}
      <SocialShare />
    </footer>
  );
};

export default Footer;
