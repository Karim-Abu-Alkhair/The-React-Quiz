function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="container">
      <div class="row">
        <div className="col-md-12 text-center d-flex flex-column align-items-center">
          <h2 className="display-4">Welcome to The React Quiz!</h2>
          <h3 className="">
            {numQuestions} questions to test your React mastery
          </h3>
          <button
            className="btn-me"
            onClick={() => dispatch({ type: "start" })}
          >
            Let's start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
