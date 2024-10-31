import { useContext } from "react";
import { QuestionContext } from "../App";

export default function Thread() {
    const questionType = useContext(QuestionContext);

    let data = JSON.parse(localStorage.getItem("question"+questionType));

    return(
        <div>
            <h2>{data.title}</h2>
            <h4>{data.tag}</h4>
        </div>
    );
}