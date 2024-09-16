import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Link, Typography } from "@mui/material";

const RecentTransactions = () => {
  return (
    <DashboardCard title="Daily Activities">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: "-40px",
            "& .MuiTimelineConnector-root": {
              width: "1px",
              backgroundColor: "#efefef",
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>John Michael Anderson</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>10:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Emily Rose Thompson
              <Link href="/" underline="none"></Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>David Alexander Miller</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Sarah Elizabeth Collins
              <Link href="/" underline="none"></Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>09:30 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Matthew James Peterson</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>12:00 am</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Olivia Grace Walker</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
