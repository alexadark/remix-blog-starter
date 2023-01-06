import { useLoaderData } from "@remix-run/react";
import SocialItem from "~/storyblok/SocialItem";

const SocialShare = () => {
  const { socialItems } = useLoaderData();
  return (
    <div className="flex justify-center gap-3">
      {socialItems.map((item) => (
        <SocialItem key={item._uid} blok={item} />
      ))}
    </div>
  );
};

export default SocialShare;
