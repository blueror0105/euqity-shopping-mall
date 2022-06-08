import * as React from "react";

export interface INormalLayoutProps {
  backgroundImage: string;
  buttonText: string;
  blogs: { backgroundImage: string; buttonText: string }[];
}

export interface IBlogFrameProps {
  backgroundImage: string;
  buttonText: string;
}

export default function NormalLayout(props: INormalLayoutProps) {
  const { backgroundImage, buttonText, blogs } = props;

  const BlogFrame = (blogFrameProps: IBlogFrameProps) => {
    return (
      <div className="blog-frame" style={{ backgroundImage: backgroundImage }}>
        <button>{buttonText}</button>
      </div>
    );
  };

  return (
    <div className="normal-layout">
      {blogs.map((item: any) => {
        return (
          <BlogFrame
            key={item.backgroundImage}
            backgroundImage={item.backgroundImage}
            buttonText={item.buttonText}
          />
        );
      })}
    </div>
  );
}
