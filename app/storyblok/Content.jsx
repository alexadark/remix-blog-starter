import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  const { _uid, text, button } = blok;
  return (
    <div {...storyblokEditable(blok)} key={_uid}>
      {render(text)}
    </div>
  );
};

export default Content;
