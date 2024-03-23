function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  // if (answer === null) return;
  return (
    <header className="progress-me mb-5">
      <div className="row">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <div
          className="d-flex justify-content-between
        "
        >
          <p>
            Question <strong>{index + 1}</strong> / {numQuestions}
          </p>
          <p>
            <strong>{points}</strong> / {maxPossiblePoints}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Progress;
