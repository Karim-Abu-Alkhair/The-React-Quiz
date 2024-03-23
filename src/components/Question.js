import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4 className="display-6 ">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
