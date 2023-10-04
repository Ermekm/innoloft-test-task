import { type FC } from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { froalaEditorConfig } from "./config";

import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
interface EditorViewProps {
  content: string;
}

export const EditorView: FC<EditorViewProps> = ({ content }) => {
  return (
    <div>
      <FroalaEditorView
        model={content}
        config={froalaEditorConfig}
      ></FroalaEditorView>
    </div>
  );
};
