export default function GetQuestions({fromHome}) {
    let count = Number(localStorage.getItem("QuestionCount"));

    if(count > 0) {
        let questions = [];
        for(let i = 0; i < count; i++) {
            let data = localStorage.getItem("question"+(i+1));
            questions.push(JSON.parse(data));
        }
        
        console.log(questions);

        return(
            <div>
            {questions.map((question) => 
                <h2><button onClick={trigger}>{question.name}</button></h2>
            )}
            </div>
        );
    }else {
        return(
            <h2>No Questions Available</h2>
        );
    }
}