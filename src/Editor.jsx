import React from "react";

const Editor = props => {
  return (
    <div className="editor">
      <div className="editorHeader">Editor</div>
      <textarea
        className="editingArea"
        id="editor"
        onChange={props.handleChange}
        value={props.text}
      />
    </div>
  );
};

export default Editor;
