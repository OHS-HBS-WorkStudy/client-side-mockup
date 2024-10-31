import { useState, useEffect } from "react";
import CustomButton from "../CustomButton";

export default function NewThread() {
  const [selectedTags, setSelectedTags] = useState([]); 

  function DataSave(title, dataArray) {
    localStorage.setItem(title, JSON.stringify(dataArray));
  }

  function questionCount() {
    let countVal = Number(localStorage.getItem("questionCount"));

    if (countVal >= 1) {
      localStorage.setItem("questionCount", countVal + 1);
      return countVal + 1;
    } else {
      localStorage.setItem("questionCount", 1);
      return 1;
    }
  }

  function questionSubmit() {
    let num = questionCount();
    let get1 = document.getElementById("QuestionTitle").value;
    let get2 = document.getElementById("QuestionDesc").value;
    let get3 = selectedTags.length > 0 ? selectedTags.join(", ") : "none"; 

    let dataArray = {
      title: get1,
      desc: get2,
      tag: get3,
      id: num
    };

    DataSave("question" + num, dataArray);
    console.log("Submitted data:", dataArray);
  }

  const handleTagChange = (event) => {
    const tag = event.target.value;
    setSelectedTags(prevTags =>
      event.target.checked
        ? [...prevTags, tag]
        : prevTags.filter(selectedTag => selectedTag !== tag)
    );
    console.log("Selected tags:", selectedTags);
  };

  return (
    <div>
      <input type="text" placeholder="Question Title" id="QuestionTitle" />
      <input type="text" placeholder="Question Description" id="QuestionDesc" />

      <label>
        <input type="checkbox" className="SearchTag" value="English" onChange={handleTagChange} /> English
      </label>
      <label>
        <input type="checkbox" className="SearchTag" value="Math" onChange={handleTagChange} /> Math
      </label>
      <label>
        <input type="checkbox" className="SearchTag" value="Science" onChange={handleTagChange} /> Science
      </label>
      <label>
        <input type="checkbox" className="SearchTag" value="History" onChange={handleTagChange} /> History
      </label>

      <CustomButton func={questionSubmit} name="Submit" />
    </div>
  );
}


