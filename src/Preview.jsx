import React from "react";
import "./Preview.css";

const Preview = props => {
  return (
    <div className="preview">
      <div className="previewHeader">Preview</div>
      <div
        className="previewArea"
        id="preview"
        dangerouslySetInnerHTML={{ __html: props.renderedText }}
      />
    </div>
  );
};

export default Preview;
