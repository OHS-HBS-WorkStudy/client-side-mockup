export default function GetReplies({questionName}) {
    let data = JSON.parse(localStorage.getItem(questionName));
    let count = data.replying.replyCount;

    if(count === 0) {
        return(
            <div>
                <p>np replies</p>
            </div>
        )
    }else {
        let replies = data.replying.replies;
            return(
                <div>
                    {replies.map((reply) =>
                        <p>{reply}</p>
                    )}
                </div>
            );
    }


}