import { useContext } from "react";
import { QuestionContext } from "../App";
import DOMPurify from "dompurify";

export default function Thread() {
    const questionType = useContext(QuestionContext);

    const data = JSON.parse(localStorage.getItem("question" + questionType));


    const sanitizedTitle = DOMPurify.sanitize(data.title);
    const sanitizedDesc = DOMPurify.sanitize(data.desc);


    return (
        <div>
            <div className="nav-space"></div>
            <div>
                <h3 dangerouslySetInnerHTML={{__html: sanitizedTitle  }} />
                
                <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />
            </div>
        </div>
    );
}
