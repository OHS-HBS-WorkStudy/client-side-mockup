import { useContext } from "react";
import { QuestionContext } from "../App";

export default function Thread() {
    const questionType = useContext(QuestionContext);

    const data = JSON.parse(localStorage.getItem("question" + questionType));


    return (
        <div>
            <div className="nav-space"></div>
            <div>
                <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                
                <p dangerouslySetInnerHTML={{ __html: data.desc }} />
            </div>
        </div>
    );
}
