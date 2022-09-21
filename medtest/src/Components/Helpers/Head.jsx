import React from "react";

export default function Head(props) {
  React.useEffect(() => {
    document.title = props.title + " | Medtest";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.descriptions || "");
  }, [props]);
  return <></>;
}
