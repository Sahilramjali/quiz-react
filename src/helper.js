export const shuffleAnswers =(question)=>{
    const unsuffleanswer=[
question.correctAnswer,...question.incorrectAnswers
    ];
    return unsuffleanswer.map(answer=>({sort:Math.random(),value:answer})).sort((a,b)=>a.sort-b.sort).map((obj)=>obj.value);
};