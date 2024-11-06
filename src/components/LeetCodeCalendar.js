import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const LeetCodeCalendar = () => {
  const values = [ // Sample data 
    { date: '2024-10-23', count: 2 },
    { date: '2024-10-22', count: 1 },
    // ... more data
  ];

  return (
    <CalendarHeatmap
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-12-31')}
      values={values}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-scale-${value.count}`; // Adjust based on your color scheme
      }}
    />
  );
};

export default LeetCodeCalendar;