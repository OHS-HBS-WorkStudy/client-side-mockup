import CustomButton from "../CustomButton";


export default function NewThread() {

    function DataSave(title, dataArray) {
        let datas = JSON.stringify(dataArray);

        localStorage.setItem(title, JSON.stringify(dataArray));
    }

    function questionCount() {
        let countVal = Number(localStorage.getItem("questionCount"));

        console.log(countVal)

        if (countVal >= 1) {
            localStorage.setItem("questionCount", countVal+1);
            return countVal+1;
        } else {
            localStorage.setItem("questionCount", 1);
            return 1;
        }
    }

    function questionSubmit() {
        let num = questionCount();

        let get1 = document.getElementById("QuestionTitle").value;
        let get2 =  document.getElementById("QuestionDesc").value;

        let dataArray = {
            title: get1,
            desc: get2,
            id: num,
            reply: {
                count:0,
                replies: []
            }
        };

        DataSave(("question"+num), dataArray);
    }

    return(
        <div>
            <input type="text" placeholder="Question Title" id="QuestionTitle"/>
            <input type="text" placeholder="Question Description" id="QuestionDesc"/>

            <CustomButton func={questionSubmit} name="Submit" />
        </div>
    );
}