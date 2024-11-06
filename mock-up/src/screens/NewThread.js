import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewThread() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");

  function DataSave(title, dataArray) {
    localStorage.setItem(title, JSON.stringify(dataArray));
  }

  function questionCount() {
    let countVal = Number(localStorage.getItem("questionCount")) || 0;
    localStorage.setItem("questionCount", countVal + 1);
    return countVal + 1;
  }

  function questionSubmit() {
    const num = questionCount();
    const dataArray = {
      title: questionTitle,
      desc: questionDesc,
      id: num,
    };

    DataSave("question" + num, dataArray);
    console.log("Submitted data:", dataArray);
  }

  function renderContent(htmlContent) {
    return { __html: htmlContent };
  }

  return (
    <div>
      <div className="nav-space"></div>
      <div className="NewThread">
        <div className="center">
          <div className="input-container">
            <label htmlFor="text-box">Question Title</label>
            <div className="text-box">
              <ReactQuill theme="snow" value={questionTitle} onChange={setQuestionTitle} />
            </div>

            <label htmlFor="text-box">Question Description</label>
            <div className="text-box">
              <ReactQuill theme="snow" value={questionDesc} onChange={setQuestionDesc} />
            </div>

            <button onClick={questionSubmit}>Submit Question</button>
          </div>
        </div>
      </div>
    </div>
  );
}
