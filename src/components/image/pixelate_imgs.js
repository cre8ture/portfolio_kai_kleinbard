import React, { useState } from "react";

const ImageSplitter = ({ src }) => {
  const [isSplit, setIsSplit] = useState(false);

  const handleScroll = () => {
    const componentTop = document
      .getElementById("image-splitter")
      .getBoundingClientRect().top;
    const splitThreshold = 50;
    setIsSplit(componentTop < splitThreshold);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getRandomTranslation = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const pieceStyle = (isRight) => ({
    backgroundImage: `url(${src})`,
    backgroundSize: "200% 200%",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "100%",
    transition: "transform .5s ease-out",
    transform: isSplit
      ? `translate(${
          isRight
            ? getRandomTranslation(200, 300)
            : -getRandomTranslation(200, 300)
        }px, ${getRandomTranslation(-50, 50)}px)`
      : "none", // Reset transform when not split
  });

  return (
    <div
      id="image-splitter"
      style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
    >
      <div style={{ ...pieceStyle(false), backgroundPosition: "0 0" }} />
      <div style={{ ...pieceStyle(true), backgroundPosition: "100% 0" }} />
      <div style={{ ...pieceStyle(false), backgroundPosition: "0 100%" }} />
      <div style={{ ...pieceStyle(true), backgroundPosition: "100% 100%" }} />
    </div>
  );
};

export default ImageSplitter;
