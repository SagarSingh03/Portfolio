import * as React from 'react';
import './Education.css';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Education() {
  return (
    <div className="education">
      <h1>Education</h1>

      <Timeline position="alternate">

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <strong>B.Tech (2021-2025)</strong>
            Kalinga Institute of Industrial Technology
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <strong>Higher Secondary & Matriculation</strong>
            Hindustani Kendriya Vidyalaya, Guwahati
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <strong>Upper Primary</strong>
            Manas Valley Academy, Assam
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <strong>Middle Primary</strong>
            Chapra Central School, Bihar
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <strong>Primary</strong>
            Holy Family School, Bihar
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="warning" />
          </TimelineSeparator>
          <TimelineContent>
            <strong>Pre-Primary</strong>
            Kendriya Vidyalaya, Navi Mumbai
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </div>
  );
}