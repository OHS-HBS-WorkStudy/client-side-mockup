import { useState } from "react";
import CustomButton from "../CustomButton";
import TextEditor from "./TextEditor";

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

  return (
    <div className="nav-space">
      <div className="NewThread">
        <div className="split">
          <div className="container">
            <div className="center">
              <div className="input-container">
                <label>Question Title</label>
                <input
                  type="text"
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  placeholder="Enter your question title"
                />

                <label>Question Description</label>
                <TextEditor content={questionDesc} setContent={setQuestionDesc} />

                <CustomButton
                  className="btn-send"
                  func={questionSubmit}
                  name="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
