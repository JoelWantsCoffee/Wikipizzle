import "../assets/styles/App.css";
import { Interweave } from "interweave";
import { PieChart } from "react-minimal-pie-chart";
import Template from "../components/template";
import style from "../assets/styles/pizzle.module.css";

function Pizzle({ state, setState, data }) {
  const subtitle = (
    <p className="subtitle">
      Wikipedia or AI-Generated? Take a guess and test your skills!
    </p>
  );

  const choose = () => (
    <div className={style["pizzle"]}>
      {/* <header> {this.topbar()} </header> */}
      {subtitle}

      <div className={style["article-container"]}>
        <div className="article">
          <Interweave content={data.html} />
        </div>
      </div>

      <div className={style["choices"]}>
        <div className={style["button-container"]}>
          <button
            className={style["choice-button"]}
            style={
              data.loaded
                ? { backgroundColor: "" }
                : { backgroundColor: "#5851a2c7" }
            }
            onClick={() =>
              !data.loaded
                ? () => {
                    return;
                  }
                : guessed(true)
            }
          >
            <span>WIKIPEDIA</span>
          </button>
        </div>
        <div className={style["button-container"]}>
          <button
            className={style["choice-button"]}
            style={
              data.loaded
                ? { backgroundColor: "" }
                : { backgroundColor: "#5851a2c7" }
            }
            onClick={() =>
              !data.loaded
                ? () => {
                    return;
                  }
                : guessed(false)
            }
          >
            <span>AI GENERATED</span>
          </button>
        </div>
      </div>
    </div>
  );

  const chosen = () => {
    const stats = JSON.parse(localStorage.getItem("stats"));
    const answerbox =
      "answer-box " + (state.page === 1 ? "correct" : "incorrect");
    const wins = parseInt(state.piedata.win);
    const loss = parseInt(state.piedata.loss);
    return (
      <div className={style["pizzle"]}>
        {subtitle}

        <div className={style["chosen-container"]}>
          <div className={answerbox}>
            <h2 className="answer-box">
              {state.page === 1 ? "Correct" : "Incorrect"}
            </h2>
            <h3 className="answer-box">
              {state.page === 1 ? "You're right! " : "You have been deceived! "}
              Today's article
              {data.contentType
                ? " was an actual Wikipedia article"
                : " was generated by AI"}
            </h3>
          </div>

          <div className={style["left-wrapper"]}>
            <div className="chosen-article">
              <div className="article">
                <Interweave content={data.html} />
              </div>
            </div>
            <div className={style["learn-more"]}>
              Want to find out more about this topic?
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://letmegooglethat.com/?q=${data.title}`}
              >
                <span> Click here </span>
              </a>
            </div>
          </div>

          <div className={style["right-wrapper"]}>
            <div className={style["stats"]}>
              <h2> people deceived </h2>
              <div className={style["pie"]}>
                <PieChart
                  style={{ gridArea: "2 / 1 / 1" }}
                  data={[
                    { title: "Deceived!", value: loss, color: "#D8D9DB" },
                    { title: "NotDeceived!", value: wins, color: "#554F9C" },
                  ]}
                  lineWidth={40}
                  startAngle={270}
                />
                <h1 style={{ gridArea: "2 / 1 / 1" }}>
                  {Math.round(100 - (100 * wins) / (wins + loss))}%
                </h1>
              </div>
              <h3> your win rate </h3>
              <div className={style["bar"]}>
                <div
                  style={{
                    width: `${(stats.win / (stats.loss + stats.win)) * 100}%`,
                    margin: "0",
                    height: "100%",
                    background: "#554F9C",
                    borderRadius: "2px",
                  }}
                />
              </div>
              <h3> Correct Streak of {stats.streak} </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };

  function guessed(x) {
    localStorage.setItem("lastGuess", new Date().getTime());
    let stats = JSON.parse(localStorage.getItem("stats"));
    if (stats === null) {
      stats = { win: 0, loss: 0, streak: 0 };
    }
    if (x === data.contentType) {
      stats["win"] += 1;
      stats["streak"] += 1;
      localStorage.setItem("stats", JSON.stringify(stats));
      localStorage.setItem("guess", "true");
      setState((s) => ({ ...s, page: 1 }));
    } else {
      stats["loss"] += 1;
      stats["streak"] = 0;
      localStorage.setItem("stats", JSON.stringify(stats));
      localStorage.setItem("guess", "false");
      setState((s) => ({ ...s, page: 2 }));
    }

    fetch("http://localhost:3001/stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: x === data.contentType ? "win" : "loss" }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setState((s) => ({ ...s, piedata: data }));
      })
      .catch((err) => {
        // console.log(err);
        setState((s) => ({ ...s, piedata: { win: 1, loss: 1 } }));
      });
  }

  return (
    <Template state={state} setState={setState} page={"q"}>
      <div className={style["page-container-pizzle"]} id="guess">
        {state.page === 0 ? choose() : chosen()}
      </div>
    </Template>
  );
}

export default Pizzle;
