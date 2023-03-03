// import 'date-fns';
// import React from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import MuiPickersUtilsProvider from '@material-ui/pickers';
//     //     KeyboardTimePicker,
//     //     KeyboardDatePicker,
     
//     //  from '@material-ui/pickers';
 
// function PickersExm(){
//     const[selectedDate, setSelectedDate] = React.useState(new Date('2023-10-02T20-15-20'));
//     const handleDatechange = (date) =>{
//         setSelectedDate(date);
//     }
//     return(
//         <div>
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//            <Grid container justifyContent="space-around">
//                 <KeyboardDatePicker
//                     disableToolbar
//                     variant="inline"
//                     format="MM/dd/yyyy"
//                     margin="normal"
//                     id="date-picker-inline"
//                     label="Date picker inline"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{'aria-label': 'change date', }}
//                 />
//                 <KeyboardDatePicker
//                     margin="normal"
//                     id="date-picker-dialog"
//                     label="date picker dialog"
//                     value={selectedDate}
//                     onchange={handleDateChange}
//                     KeyboardButtonProps={{'aria-label': 'change date'}}
//                 />
//                 <KeyboardTimePicker
//                     margin="normal"
//                     id="time-picker"
//                     label="time picker"
//                     value={seletedDate}
//                     onchange = {handleDatechange}
//                     KeyboardButtonProps = {{'aria-label' : 'change date'}}
//                 />

//             </Grid>
//         </MuiPickersUtilsProvider>
//         </div>

//     );
// }
// export default PickersExm;