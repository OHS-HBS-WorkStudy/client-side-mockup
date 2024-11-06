import { useContext } from "react";
import { SwitchContext } from "../App";

import NewThread from "./NewThread";

import CustomButton2 from "../CustomButton2";

export default function Home() {
    const toQuestion = useContext(SwitchContext);
    
    function getQuestions() {
        let num;
        try {
            num = Number(localStorage.getItem("questionCount"));
        }catch(err) {
            num = 0;
            localStorage.setItem("questionCount", 0);
        }

        if(num > 0) {
            let questionArray = [];
            for (let i = 0; i < num; i++) {
                let data = localStorage.getItem("question"+(i+1));
                questionArray.push(JSON.parse(data));
            }

            return questionArray
        }


    }


    try{
        let questions = getQuestions();
        console.log(questions)

        return(
              <div>
            <body>
            <div className="nav-space"></div>
                <h2>Home</h2>
                <div className="Home">
                    <div className="grid-container">
                        {questions.map((question) => 
                            <CustomButton2 func={toQuestion} data1={6} data2={question.id} name={question.title} desc={question.desc} />
                        )}
                    </div>
                </div>
            </body>
            </div>
        );
    }catch(err) {
        return(
            <div>
                <div className="nav-space"></div>
                <h2>Home</h2>
                <p><b>No Questions</b></p>
            </div>
        )
    }
}
