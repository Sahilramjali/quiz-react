import { QuizContext } from "../contexts/quiz";
import { useContext } from "react";
import Question from './question'

const Quiz=()=>{
    const[quizState,dispatch]=  useContext(QuizContext);
    return <div className="quiz">
        {quizState.showResult &&<div className="results">
            {quizState.correctCount>2 &&<div className="congratulation">Congratulations!</div> }
            {quizState.correctCount<=2 &&<div className="poor">Better luck next time</div>}
            <div className="result-info">
                <div>you have completed the quiz</div>
                <div>You have got {quizState.correctCount} out of {quizState.question.length} right.</div>
           <div className="next-button" onClick={()=>dispatch({type:"Restart"})}>Restart</div>
            </div>

            </div>}
        {
            !quizState.showResult&&(
                <div>
                    <div className="score">
        Question {quizState.currentQuestionIndex+1}/{quizState.question.length}
        <div></div>
    </div>
    <Question/>
    <div className="next-button" onClick={()=>dispatch({type:"Next question"})}>Next question</div>
                </div>
                )
        }
    
    </div>
}
export default Quiz;