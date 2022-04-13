import { createContext,useReducer } from "react";
import question from '../data';
import {shuffleAnswers} from "../helper";
const intialState={
question,currentQuestionIndex:0,
showResult:false,
correctCount:0,
answer:shuffleAnswers(question[0]),
currentAnswer:'',
};
const reducer=(state,action)=>{
    switch (action.type){
        case 'select answer':{
            const correctCount=action.payload===state.question[state.currentQuestionIndex].correctAnswer?state.correctCount+1:state.correctCount;
            return{
                ...state,currentAnswer:action.payload,correctCount,
            }
        }
        case "Next question":{
            const showResult=state.currentQuestionIndex===state.question.length-1;
            const currentQuestionIndex=showResult?state.currentQuestionIndex:state.currentQuestionIndex+1;
            const answer=showResult?[]:shuffleAnswers(state.question[currentQuestionIndex]);
            const currentAnswer="";
            return {
                ...state,currentQuestionIndex,showResult,answer,currentAnswer,
            }
        }
        case "Restart":{
            return intialState;
        }
        default:
            return state;
    }
    
}
export const QuizContext=createContext();
export const QuizProvider=({ children })=>{
    const value=useReducer(reducer,intialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};