import { Typography } from "@material-ui/core";
import React from "react";
import feedback from "./SupportIcons/feedback.svg";
import megaphone from "./SupportIcons/megaphone.svg";
import Subtract from "./SupportIcons/Subtract.svg";

function Support({ index, setIndex }) {
  return (
    <div
      onClick={() => (index === 7 ? setIndex(73) : setIndex(83))}
      style={{
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "5% 3% 10% 5%",
      }}
    >
      <Typography
        style={{
          height: "33px",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "33px",
          color: "#FFFFFF",
          letterSpacing: "0.4px",
        }}
      >
        Support
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: "3%",
          width: "70vw",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "276px",
            height: "310px",
            backgroundColor: "#2D2D2D",
            border: "0.5px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <img
            src={feedback}
            style={{ width: "84.43px", height: "92px", marginLeft: "35%" }}
          />
          <Typography
            style={{
              marginLeft: "30%",

              width: "85px",
              height: "33px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "33px",
              color: "#FFFFFF",
              letterSpacing: "0.4px",
            }}
          >
            Feedbacks
          </Typography>
        </div>
        <div
          style={{
            width: "276px",
            height: "310px",
            backgroundColor: "#2D2D2D",

            border: "0.5px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <img
            src={megaphone}
            style={{ width: "92px", height: "92px", marginLeft: "35%" }}
          />
          <Typography
            style={{
              marginLeft: "20%",

              width: "85px",
              height: "33px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "33px",
              color: "#FFFFFF",
              letterSpacing: "0.4px",
            }}
          >
            Announcements
          </Typography>
        </div>
        <div
          style={{
            width: "276px",
            height: "310px",
            backgroundColor: "#2D2D2D",

            border: "0.5px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <img
            src={Subtract}
            style={{ width: "92px", height: "92px", marginLeft: "35%" }}
          />
          <Typography
            style={{
              marginLeft: "37%",

              width: "85px",
              height: "33px",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "24px",
              lineHeight: "33px",
              color: "#FFFFFF",
              letterSpacing: "0.4px",
            }}
          >
            Ratings
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Support;
