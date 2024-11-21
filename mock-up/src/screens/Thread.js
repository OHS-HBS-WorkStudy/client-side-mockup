import { useContext, useState } from "react";
import { QuestionContext } from "../App";
import DOMPurify from "dompurify";

export default function Thread() {
    const questionType = useContext(QuestionContext);

    // Get and parse the data from localStorage
    const data = JSON.parse(localStorage.getItem("question" + questionType));

    const sanitizedTitle = data ? DOMPurify.sanitize(data.title) : "No Title Available";
    const sanitizedDesc = data ? DOMPurify.sanitize(data.desc) : "No Description Available";

    const [selectedVote, setSelectedVote] = useState(null); 

    const handleVoteClick = (vote) => {
      setSelectedVote((prev) => (prev === vote ? null : vote));
    };

    return (
        <div>
            <div className="nav-space"></div>
            <div>
                
            <div className="vote-box">
                <div
                    className={`up-vote ${selectedVote === "up" ? "selected" : ""}`}
                    onClick={() => handleVoteClick("up")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24px" height="24px">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="vote-number">
                    <p>2</p>
                </div>
                <div
                    className={`down-vote ${selectedVote === "down" ? "selected" : ""}`}
                    onClick={() => handleVoteClick("down")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24px" height="24px">
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" fill="currentColor"/>
                    </svg>
                </div>
            </div>

                <h1
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
                />
                <p
                    className="submitted-content"
                    dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
                />
            </div>
        </div>
    );
}

