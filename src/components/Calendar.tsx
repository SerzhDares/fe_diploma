import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import { ru } from 'date-fns/locale/ru';

registerLocale('ru', ru);

export const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <DatePicker 
      locale="ru" 
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      dateFormat={"dd MMMM"}
      placeholderText={"ДД/ММ/ГГ"} 
     />
  );
};