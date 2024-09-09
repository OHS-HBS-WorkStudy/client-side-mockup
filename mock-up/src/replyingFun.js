
export default function Response({check, closeButton, name}) {

    if (check === true) {

        function submitData() {
            let val = document.getElementById("reply");
            console.log(val.value);
            getLS(val.value);
        }

        function getLS(val) {
            let data = JSON.parse(localStorage.getItem(name));
            data.replying.replyCount += 1;
            data.replying.replies.push(val);
            localStorage.setItem(name, JSON.stringify(data));
        }

        return (
            <div>
                <input type="text" placeholder="type your reply" id="reply"></input>
                <button onClick={submitData}>Submit</button>
                <button onClick={closeButton}>Close</button>
            </div>
        );
    } else {
       console.log("yo");
    }

}

