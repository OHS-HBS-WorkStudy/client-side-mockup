export default function GetQuestions({fromHome}) {
    let count;
    try {
        count = Number(localStorage.getItem("QuestionCount"));
    }catch(err) {
        count = 0;
        localStorage.setItem("QuestionCount", 0);
    }

    if(count > 0) {
        let questions = [];
        for(let i = 0; i < count; i++) {
            let data = localStorage.getItem("question"+(i+1));
            questions.push(JSON.parse(data));
        }
        
        console.log(questions);

        function trigger(count) {
                console.log("question"+count);
                fromHome("question"+count);
        }

        return(
            <div>
            {questions.map((question) => 
                <h2><button onClick={trigger.bind(this, question.count)}>{question.name}</button></h2>
            )}
            </div>
        );
    }else {
        return(
            <h2>No Questions Available</h2>
        );
    }
}