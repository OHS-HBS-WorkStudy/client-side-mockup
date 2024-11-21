import { useContext, useState } from "react";
import { SwitchContext } from "../App";

import NewThread from "./NewThread";

import CustomButton2 from "../CustomButton2";

export default function Home() {
    const toQuestion = useContext(SwitchContext);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedThread, setSelectedThread] = useState(null);

    function handleExpand(questionId) {
        setSelectedThread(questionId);
        setIsAnimating(true);

       
        setTimeout(() => {
            toQuestion(6, questionId); 
        }, 1000); 
    }

    function getQuestions() {
        let num;
        try {
            num = Number(localStorage.getItem("questionCount"));
        } catch (err) {
            num = 0;
            localStorage.setItem("questionCount", 0);
        }

        if (num > 0) {
            let questionArray = [];
            for (let i = 0; i < num; i++) {
                let data = localStorage.getItem("question" + (i + 1));
                questionArray.push(JSON.parse(data));
            }
            return questionArray;
        }
        return [];
    }

    const stripHTML = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
      };

    const questions = getQuestions();

    return (
        <div>
            <div className="nav-space"></div>
                <div className="Home">
                {isAnimating && <div className="expanding-div"></div>}
                <div className="grid-container">
                    {questions.map((question) => (
                    <div
                        key={question.id}
                        className="grid-item"
                        onClick={() => handleExpand(question.id)}
                    >
                        <div className="vote-counter">2</div>
                        <div className="grid-item-content"> 
                            <div className="grid-item-title">{stripHTML(question.title)}</div>
                            <div className="grid-item-desc">{stripHTML(question.desc)}</div>
                        </div>

                    </div>
                    ))}
                </div>
                </div>

        </div>
    );
}