import { useContext, useState } from "react";
import { QuestionContext } from "../App";
import CustomButton from "../CustomButton"

export default function Thread() {
    const [isReplying, activateReply] = useState(false);
    const questionType = useContext(QuestionContext);

    function showReply() {
        activateReply(true);
    }

    let data = JSON.parse(localStorage.getItem("question"+questionType));

    //const [replyCheck, changeCheck] = useState(false);

    function Reply({checkStatus, getFunc}) {
        if (checkStatus === true) {
    
            console.log("work");
    
    
    
            /* const getReply = document.getElementById("replyText").value;
    
            console.log(getReply);
    
            let reply_data = {
                contents: getReply
            }
    
            data.reply.count += 1;
            data.reply.replies.push(reply_data);
    
            localStorage.setItem("question"+questionType, JSON.stringify(data)); */
    
            return(
                <div>
                    <p>Reply:</p>
                    <input type="text" placeholder="Enter text here..." id="replyText"/>
                    <CustomButton name="Submit" />
                </div>
            )
        }else {
            return(
                <div>
                    <CustomButton func={getFunc} name="Reply" />
                </div>
            )
        }
    }

    return(
        <div>
            <h2>{data.title}</h2>
            <h3>{data.desc}</h3>

            <Reply checkStatus={isReplying} getFunc={showReply}  />
        </div>
    );
}