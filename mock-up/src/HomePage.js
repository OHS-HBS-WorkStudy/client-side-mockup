import GetQuestions from './GetQuestions.js';

export default function Home({homeFunctions}) {
    return (
        <div>
            <h1>Home Page</h1>
            <GetQuestions fromHome={homeFunctions}/>
        </div>
    );
}