import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import CalendarHeatMap from 'react-calendar-heatmap';

function Github() {

  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    getLeetCodeData();
  }, []);

  const getLeetCodeData = async () => {
      const data = await fetch('https://alfa-leetcode-api.onrender.com/rohangaddam/calendar')
      const json = await data.json()
      const submissionCalendar = JSON.parse(json.submissionCalendar);
      const calendarData = Object.keys(submissionCalendar).map(timestamp => {
      const date = new Date(parseInt(timestamp) * 1000); // convert Unix timestamp to Date object
      return {
        date: date.toISOString().split('T')[0], // format date as YYYY-MM-DD
        count: submissionCalendar[timestamp]
      };
    });
    setCalendarData(calendarData);
  }

  return (

    // made changes to implement Leetcode calendar
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <CalendarHeatMap
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        values={calendarData}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`; // Adjust based on your color scheme
        }}
      />
    </Row>
  );
}

export default Github;
