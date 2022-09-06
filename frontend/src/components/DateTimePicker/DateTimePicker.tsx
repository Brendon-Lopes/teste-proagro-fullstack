import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function DateTimePicker() {
  return (
    <DatePicker
      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
      selected={new Date()}
      onChange={(date: Date) => console.log(date.toISOString())}
    />
  );
}
