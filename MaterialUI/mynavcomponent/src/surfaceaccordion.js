import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 function SimpleAccordionExm() {
  return (
    <div>
        <h2>Accordion example</h2>
        <Accordion>
        <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1a-content"
             id="panel1a-header"
        >
            <Typography sx={{ width: '50%', flexShrink: 0 }}> Student services</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            This section is designed to give prospective students an opportunity to discover CEPT University
            and explore ways of becoming part of the community. Besides providing information about the the
            admission procedure and various academic programs at the University, it also offers glimpses of
            student life on campus and information about the city of Ahmedabad.. 
           </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography>Student Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            IT Services provides information and communications technology support to all activities at the University. 
            It is responsible for providing and maintaining high quality infrastructure and for ensuring uninterrupted availability of services.   
           A group of information technology professionals along with faculty members, are responsible for developing a vision for CEPT University’s 
           IT infrastructure and for deepening the use of information and communications technology in teaching, research and all other activities of the University.
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
        >
            <Typography>Student experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            What Does Student Experience Mean? The student experience encompasses the many different
             aspects of student life; academic and intellectual; social and emotional; and the growth 
             of cultural, political, sporting and artistic interests..
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
        >
            <Typography>career services</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Career exploration Getting a degree can prepare students for a job in a specific industry or 
            provide students with skills that can be used in a wide range of career fields. ...
            </Typography>
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
        >
           <Typography>feedback & complaints</Typography>
        </AccordionSummary>
           <Typography>
           rom and improve the experiences of people with a learning disability, autism or both, their families and carers when giving feedback,
            raising a concern or making a complaint.
           </Typography>
        </Accordion>
    </div>
  );
}
export default SimpleAccordionExm;