import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import  Answer from "./answer";
const Question=()=>{
    const[quizState,dispatch]=  useContext(QuizContext);
const currentquestion=quizState.question[quizState.currentQuestionIndex]
    return (<div>
        <div className="question">{currentquestion.question}</div>
        <div className="answers">
        {quizState.answer.map((answer,index)=>(<Answer anstext={answer} 
        key={index} 
        index={index}
        currentAnswer={quizState.currentAnswer}
        correctAnswer={currentquestion.correctAnswer}
         onSelectAnswer={(anstext)=>dispatch({type:"select answer",payload:anstext})}/>)
            
        )}
        </div>
    </div>
   
    
    );}
export default Question;