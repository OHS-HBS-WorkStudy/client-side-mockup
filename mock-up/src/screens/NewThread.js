import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NewThread() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function DataSave(title, dataArray) {
    localStorage.setItem(title, JSON.stringify(dataArray));
  }

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
              <ReactQuill theme="snow" value={questionTitle} onChange={setQuestionTitle} placeholder="Enter Title" />
            </div>

            <label htmlFor="text-box">Question Description</label>
            <div className="text-box">
              <ReactQuill theme="snow" value={questionDesc} onChange={setQuestionDesc} placeholder="Enter Desc" />
            </div>

            <div className="btn-container">
                <button id="loadButton" className={`btn ${isLoading ? 'loading' : ''}`} onClick={handleSubmit} disabled={isLoading}>
                  Submit
                  {isLoading && <div className="loader" id="loader"></div>}
                </button>
            </div>
       
      </div>
      </div>
    </div>
    </div>
  );
}
