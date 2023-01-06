import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  const { _uid, text } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      key={_uid}
      className="prose center-container"
    >
      {render(text)}
    </div>
  );
};

export default Content;
