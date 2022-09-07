import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
};

export function DateTimePicker({ name }: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          dateFormat={'dd/MM/yyyy'}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"
          selected={value}
          onChange={(date: Date) => onChange(date)}
        />
      )}
    />
  );
}
