import NewThread from "./NewThread";

import CustomButton from "../CustomButton";

export default function Home() {

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

    let questions = getQuestions();
    console.log(questions)

    return(
        <div>
            <h2>Home</h2>

            {questions.map(question => 
                <h1>{question.title}</h1>
            )}

        </div>
    );
}