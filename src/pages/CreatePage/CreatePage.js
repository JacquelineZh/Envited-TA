import * as React from "react";
import { useNavigate } from "react-router-dom";
import DateTimePicker from "../../components/DateTimePicker/DateTimePicker";
import "./CreatePage.scss";

export default function CreatePage() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [host, setHost] = React.useState("");
  const [location, setLocation] = React.useState("");

  const [description, setDescription] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The event form is submitted");
    //TODO add validation of input data ; error handler; call apis from backend to add data
    navigate("/event");
  };
  return (
    <div className="CreatePageContainer">
      <form id="eventForm" onSubmit={(e) => handleSubmit(e)}>
        <h1>🎉Create your event</h1>
        <div>
          <p>Your event is called</p>
          <input
            className="formInput"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <p>The Host is</p>
          <input
            className="formInput"
            type="text"
            value={host}
            onChange={(event) => setHost(event.target.value)}
          />
        </div>
        <div>
          <p>Location </p>
          <input
            className="formInput"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div>
          <p>Starts at:</p>
          <DateTimePicker setTime={setStartTime} />
        </div>
        <div>
          <p>Ends at:</p>
          <DateTimePicker setTime={setEndTime} />
        </div>
        <div>
          <p>Event Cover</p> 
          <button type="button" className="nextBtn">
            ADD
          </button>
        </div>
        <div>
          <p>Description (optional)</p>
          <input
            className="formInput"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="nextBtn"
          style={
            !name || !location || !startTime || !endTime
              ? { cursor: "no-drop" }
              : { cursor: "pointer" }
          }
          // user need to finished all required text field
          disabled={!name || !location || !startTime || !endTime}
        >
          Next
        </button>
      </form>
    </div>
  );
}
