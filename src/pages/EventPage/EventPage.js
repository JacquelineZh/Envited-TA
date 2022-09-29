import * as React from "react";
import "./EventPage.scss";
import locationIcon from "../../assests/location.png";
import calendarIcon from "../../assests/calendar.png";
import strokeIcon from "../../assests/Stroke.png";

export default function EventPage() {
  // Mock backend or data coming from Redux
  const EVENT_INFO = {
    author: "Elysia",
    name: "Birthday Bash",
    startTime: "18 August 6:00PM",
    endTime: "18 August 6:00PM",
    timeZone: "UTC +10",
    streetName: {
      Suburb: "Suburb",
      State: "State",
      Postcode: "Postcode",
    },
  };

  return (
    <div className="EventPageContainer">
      <img
        src="https://www.envited.io/templates/Cake.webp"
        alt="event cover"
        className="eventCover"
      />
      <h1> {EVENT_INFO.name} </h1>
      <p className="eventHost">
        {" "}
        Hosted by <b>{EVENT_INFO.author}</b>
      </p>

      <div className="eventDetailItem">
        <div className="evetIcon">
          <img src={calendarIcon} alt="event time" />
        </div>

        <div className="content">
          <div className="contentTitle"> {EVENT_INFO.startTime} </div>
          <div className="contentSubTitle">
            to <b>{EVENT_INFO.endTime}</b> {EVENT_INFO.timeZone}{" "}
          </div>
        </div>
        <div className="stroke">
          <img src={strokeIcon} alt="stroke" className="EvetIcon" />
        </div>
      </div>
      <div className="eventDetailItem">
        <div className="evetIcon">
          <img src={locationIcon} alt="event cover" />
        </div>

        <div className="content">
          <div className="contentTitle">Street Name </div>
          <div className="contentSubTitle">
            {EVENT_INFO.streetName.Suburb},{EVENT_INFO.streetName.State},
            {EVENT_INFO.streetName.Postcode},
          </div>
        </div>
        <div className="stroke">
          <img src={strokeIcon} alt="stroke" className="EvetIcon" />
        </div>

        {/* <img src={calendarIcon} alt="calendar" className="EvetIcon" /> */}
      </div>
    </div>
  );
}
