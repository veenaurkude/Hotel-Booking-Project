// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { useState } from "react";

// function DatePickerForm() {
//   const [checkInDate, setCheckInDate] = useState(null);
//   const [checkOutDate, setCheckOutDate] = useState(null);
//   const minDate = new Date(); // Today's date

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker
//           label="Check-in Date"
//           value={checkInDate}
//           onChange={(date) => setCheckInDate(date)}
//           minDate={minDate}
//         />

//         <DatePicker
//           label="Check-out Date"
//           value={checkOutDate}
//           onChange={(date) => setCheckOutDate(date)}
//           minDate={checkInDate || minDate}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// export default DatePickerForm;

// ---------------------------------------------------------------------------------


// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// function DatePickerForm() {

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>

//         <DatePicker label="Check-in Date"
          
          
//         />

//         <DatePicker label="Check-out Date"
        
        
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

// export default DatePickerForm;


// --------------------------------------------------------------------------

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatePickerForm() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DatePickerForm; 