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
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220925T052743Z&X-Amz-Expires=86400&X-Amz-Signature=af426abfd5f090cd669f6ce4fbd8db2699bd45724d67ef266cda1e9954b8a69c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
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
