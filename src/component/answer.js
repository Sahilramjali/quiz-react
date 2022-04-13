const Answer=({anstext ,index,onSelectAnswer,currentAnswer,correctAnswer})=>{
    const lettermapping=[1,2,3,4];
    const isCorrectAnswer=currentAnswer && anstext===correctAnswer;
    const iswrongAnswer= currentAnswer ===anstext &&currentAnswer !==correctAnswer;
    const correctclass=isCorrectAnswer?'correct-answer':'';
    const wrongclass=iswrongAnswer?'wrong-answer':'';
    const disableclass=currentAnswer?'disabled-answer':'';
    return <div className={`answer ${correctclass} ${wrongclass} ${disableclass}`} onClick={()=>onSelectAnswer(anstext)}>
        <div className="answer-letter">{lettermapping[index]}</div>
        <div className="answer-text">{anstext}</div>
    </div>
}
 export default Answer;
// const Answer=(props)=>{
//     const lettermapping=[1,2,3,4];
//     return <div className="answer" onClick={()=>props.onSelectAnswer(props.anstext)}>
//         <div className="answer-letter">{lettermapping[props.index]}</div>
//         <div className="answer-text">{props.anstext}</div>
//     </div>
// }
// export default Answer;