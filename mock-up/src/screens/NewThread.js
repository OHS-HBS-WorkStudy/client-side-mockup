import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

export default function NewThread() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function DataSave(title, dataArray) {
    localStorage.setItem(title, JSON.stringify(dataArray));
  }

  const maxTitleLength = 200;
  const maxDescLength = 10000;


  function questionCount() {
    let countVal = Number(localStorage.getItem("questionCount")) || 0;
    localStorage.setItem("questionCount", countVal + 1);
    return countVal + 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionTitle.trim() || !questionDesc.trim()) {
      alert("Please fill out both forms before submitting.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const num = questionCount();
      const dataArray = {
        title: questionTitle,
        desc: questionDesc,
        id: num,
      };

      DataSave("question" + num, dataArray);
      console.log("Submitted data:", dataArray);

      setIsLoading(false);
    }, 3000);
  };

  function renderContent(htmlContent) {
    return { __html: DOMPurify.sanitize(htmlContent) };
  }

  const getPlainText = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    return tempDiv.innerText || tempDiv.textContent;
  };

  const handleChange = (value, setValue, maxLength) => {
    const plainText = getPlainText(value);

    if (plainText.length <= maxLength) {
      setValue(value);
    }
  };

const editorStyle = {
  width: "100%",
  minHeight: "160px",  
  overflowY: "auto",
  backgroundColor: "white",
  paddingBottom: "10px" 
};

const editorStyle1 = {
  width: "100%",
  minHeight: "160px",  
  overflowY: "auto",
  backgroundColor: "white",
  paddingBottom: "10px" 
};


  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'size': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link', 'blockquote', 'code-block'],
      ['clean'],
    ],
  };

  return (
    <div>
      <div className="nav-space"></div>
      <div className="NewThread">
        <div className="center">
          <label htmlFor="text-box ql-container  ql-editor">Question Title</label>
          <div className="text-box ql-container ql-editor">
            <ReactQuill
              theme="snow"
              modules={modules}
              style={editorStyle}
              value={questionTitle}
              onChange={(value) => handleChange(value, setQuestionTitle, maxTitleLength)}
              placeholder="Enter Question"
            />
            <div>{getPlainText(questionTitle).length}/{maxTitleLength} characters</div>
          </div>

          <label htmlFor="text-box ql-container  ql-editor">Question Description</label>
          <div className="text-box ql-container  ql-editor">
            <ReactQuill
              theme="snow"
              style={editorStyle1}
              modules={modules}
              value={questionDesc}
              onChange={(value) => handleChange(value, setQuestionDesc, maxTitleLength)}
              placeholder="Enter Desc"
            />
            <div>{getPlainText(questionDesc).length}/{maxDescLength} characters</div>
          </div>

          <button
            id="loadButton"
            className={`btn ${isLoading ? 'loading' : ''}`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
            {isLoading && <div className="loader" id="loader"></div>}
          </button>
        </div>
      </div>
    </div>
  );
}
