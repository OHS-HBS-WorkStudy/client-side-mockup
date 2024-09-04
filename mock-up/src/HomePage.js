import GetQuestions from './GetQuestions.js';

export default function Home({homeFunctions}) {
    function questionName(name) {
        //console.log(name);
        homeFunctions(name);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <GetQuestions fromHome={questionName}/>
        </div>
    );
}