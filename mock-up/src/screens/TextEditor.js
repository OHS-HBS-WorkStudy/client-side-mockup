import React, { useEffect, useRef } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";

const TextEditor = ({ content, setContent }) => {
  const editorRef = useRef(null); 
  const quillRef = useRef(null); 

  useEffect(() => {
    // Initialize Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Type your question here...",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current.root.innerHTML);
      });


      if (content) {
        quillRef.current.root.innerHTML = content; 
      }
    }

   
    return () => {
      quillRef.current = null;
    };
  }, []); 

  return <div ref={editorRef} id="editor"></div>; // Render the editor
};

export default TextEditor;
