function NextQuestion({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn-me btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn-me btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextQuestion;
