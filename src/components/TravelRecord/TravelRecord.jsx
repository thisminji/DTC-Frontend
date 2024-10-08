import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const TravelRecord = ({ className, props }) => {
  const navigate = useNavigate();
  
  const currentDate = new Date();
  const departDate = new Date(props.depart_at);
  const timeDifference = departDate - currentDate;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div className={`travel-record ${className}`} onClick={()=>{navigate("/record-detail/" + props.travel_record_id)}}>
      {console.log(props)}
          <img  className="travel-image" src = {props.image_url}/>
        <div className="div">
          <div className="travel-title">
            <p className="p">
              <span className="text-wrapper">
                <br />
              </span>
              <span className="span">{props.title}</span>
            </p>
          </div>
          <div className="travel-content">
            <div className="wrap">
              <div className="location">
                <img
                  className="img"
                  alt="Location"
                  src="https://c.animaapp.com/x2g7jTEH/img/location-1@2x.png"
                />
                <div className="text-wrapper-2">{props.place}</div>
              </div>
              <div className="date">
                <img
                  className="calendar"
                  alt="Calendar"
                  src="https://c.animaapp.com/x2g7jTEH/img/calendar-1@2x.png"
                />
                <div className="element"> {props.depart_at}~{props.arrive_at}</div>
              </div>
            </div>
            <div className="status">
              <div className="text-wrapper-3">{daysRemaining < 0 ? '여행종료' : 'D-'+{daysRemaining}}</div>
            </div>
          </div>
        </div>
    </div>
  );
};
