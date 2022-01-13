import { useState } from "react";
import "../styles.css";
import "../App.css";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  function handleSubmit(event) {
    event.preventDefault()
    event.target.reset()
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>


      </section>
      <section className="main__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>What would you say that are the best features of your rubber duck?</h3>
            <ul>
              <li><label>
                <input
                  type="checkbox"
                  value="colour"
                />
                It's yellow!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="sound"
                />
                It squeaks!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="logo"
                />
                It has a logo!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="size"
                />
                Its big!
              </label></li>
            </ul>
          </div>
          <div className="form__group">
            <h3>What would you say that are the worst nags of your rubber duck?</h3>
            <ul>
              <li><label>
                <input
                  type="checkbox"
                  value="colour"
                />
                It's yellow!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="sound"
                />
                It squeaks!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="logo"
                />
                It has a logo!
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  value="size"
                />
                Its big!
              </label></li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input id="consistency1" type="radio" name="consistency" value="1" /><label
                  htmlFor="consistency1"
                >1</label
                >
              </li>
              <li>
                <input id="consistency2" type="radio" name="consistency" value="2" /><label
                  htmlFor="consistency2"
                >2</label
                >
              </li>
              <li>
                <input id="consistency3" type="radio" name="consistency" value="3" /><label
                  htmlFor="consistency3"
                >3</label
                >
              </li>
              <li>
                <input id="consistency4" type="radio" name="consistency" value="4" /><label
                  htmlFor="consistency4"
                >4</label
                >
              </li>
            </ul>

          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="consistency1"
                  type="radio"
                  name="colour
                " value="1"
                /><label
                  htmlFor="consistency1"
                >1</label>
              </li>
              <li>
                <input id="consistency2"
                  type="radio"
                  name="colour
                " value="2"
                /><label
                  htmlFor="consistency2"
                >2</label>
              </li>
              <li>
                <input id="consistency3"
                  type="radio"
                  name="colour
                " value="3"
                /><label
                  htmlFor="consistency3"
                >3</label>
              </li>
              <li>
                <input id="consistency4"
                  type="radio"
                  name="colour
                " value="4"
                /><label
                  htmlFor="consistency4"
                >4</label>
              </li>
            </ul>

          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="consistency1"
                  type="radio"
                  name="logo"
                  value="1" />
                <label
                  htmlFor="consistency1"
                >1</label>
              </li>
              <li>
                <input id="consistency2"
                  type="radio"
                  name="logo"
                  value="2" />
                <label
                  htmlFor="consistency2"
                >2</label>
              </li>
              <li>
                <input id="consistency3"
                  type="radio"
                  name="logo"
                  value="3" />
                <label
                  htmlFor="consistency3"
                >3</label>
              </li>
              <li>
                <input id="consistency4"
                  type="radio"
                  name="logo"
                  value="4" />
                <label
                  htmlFor="consistency4"
                >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <ul>
              <li><label>
                <input
                  type="checkbox"
                  name="SwtimeSpent"
                  value="Swimming"
                />
                Swimming
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  name="btimeSpent"
                  value="Bathing"
                />
                Bathing
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  name="chtimeSpent"
                  value="Chatting"
                />
                Chatting
              </label></li>
              <li> <label>
                <input
                  type="checkbox"
                  name="timeSpent"
                  value="noTime"
                />
                I don't like to spend time with it
              </label></li>
            </ul>
          </div>
          <div>
            <li>
              <label>
                <h3>What else have you got to say about your rubber duck?</h3>
                <textarea
                  name="review"
                  cols={30}
                  rows={10}
                />
              </label></li>
          </div>
          <label
          >Put your name here (if you feel like it):<input
              type="text"
              name="username"
              value="" /></label>
          <label>
            Leave us your email pretty please??<input
              type="email"
              name="email"
              value="" /></label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form></section>
    </main>
  );
}

export default Main;
