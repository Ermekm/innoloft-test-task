import { froalaEditorConfig } from "./config";
import Froala from "react-froala-wysiwyg";
import { type FC } from "react";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";

interface EditorProps {
  content: string;
  onContentChange: (content: string) => void;
}

export const Editor: FC<EditorProps> = ({ content, onContentChange }) => {
  return (
    <Froala
      model={content}
      tag="textarea"
      config={froalaEditorConfig}
      onModelChange={onContentChange}
    ></Froala>
  );
};
