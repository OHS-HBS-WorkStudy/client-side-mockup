import { useContext } from "react";
import { QuestionContext } from "../App";
import DOMPurify from "dompurify";

export default function Thread() {
    const questionType = useContext(QuestionContext);

    // Get and parse the data from localStorage
    const data = JSON.parse(localStorage.getItem("question" + questionType));

    // Conditionally sanitize if data exists
    const sanitizedTitle = data ? DOMPurify.sanitize(data.title) : "";
    const sanitizedDesc = data ? DOMPurify.sanitize(data.desc) : "";

    return (
        <div>
            <div className="nav-space"></div>
            <div>
                <div
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
                />
                <div
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
                />
            </div>
        </div>
    );
}

