import { useState } from 'react';

export default function NewThread() {
    function SaveData(name, data) {
        let val = JSON.stringify(data);
    
        localStorage.setItem(name, val);
    }

    function getCount() {
        let val = Number(localStorage.getItem("QuestionCount"));

        if(val === undefined) {
            return 1;
        }else {
            localStorage.setItem("QuestionCount", val+1);

            return val+1;
        }
    }

    function handlePress() {
            let count = getCount();

            let val1 = document.getElementById("QuestionName").value;
            let val2 = document.getElementById("QuestionDesc").value;

            let val_json = {
                name: val1,
                desc: val2,
                count: count,
                replying: {
                    replyCount:0,
                    replies:[]
                },
                voteStat: 0
            };

            SaveData("question"+count, val_json);
    }

    return(
        <div>
            <h1></h1>

            <input type="text" placeholder="Question Name" id="QuestionName"></input>
            <input type="text" placeholder="Question Description" id="QuestionDesc"></input>
            <button type="button" onClick={handlePress}>Submit</button>
        </div>
    );
}