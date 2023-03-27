import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckIcon from '@mui/icons-material/Check';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

export default function CustomizedTimeline() {
  return (
    
    <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>   
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
         <TimelineContent sx={{ py: '12px' }}>
          <Typography variant="body2" >
          
           <Chip label="12,APR" /> 
          </Typography>
         </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <PauseIcon sx={{}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2}}>
          <Typography>
            Stoped timer for 
          </Typography>
          <Typography >UX&Ui Redesign</Typography>
          <Typography variant="subtitles2" >
            12 minutes ago
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <PlayArrowIcon />
          </TimelineDot>
          <TimelineConnector sx={{ }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography component="span">
            Started Timer for
          </Typography>
          <Typography>UX & Ui Redesign </Typography>
          <Typography  variant="subtitles2">12 minutes ago </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{  }} />
          <TimelineDot >
            <MailOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography  component="span">
            Sent Invoice to
          </Typography>
          <Typography>Filip justic</Typography>
          <Typography>12 minutes ago</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{  }} />
          <TimelineDot  color="success">
            <PlayArrowIcon  />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography  component="span">
            Started Timer for
          </Typography>
          <Typography>UX & Ui Redesign</Typography>
          <Typography>12 minutes ago</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ }} />
          <TimelineDot color="info">
            <CheckIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography component="span">
            Invoice Paid
          </Typography>
          <Typography>Filip justic</Typography>
          <Typography>12 minutes ago</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
         <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="body2" component="span">
          <Chip label="11,APR Filled" />
          </Typography>
         </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ }} />
          <TimelineDot color="warning">
            <ReportGmailerrorredIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography  component="span">
            Invoice For NIKE ltd.
          </Typography>
          <Typography>is overdue 51 days!</Typography>
          <Typography>12 minutes ago</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}