import React from "react";
import style from "./CalendarBoxRestrict.module.css";
import Calendar from "react-calendar";

interface Props {
	onChange?: any;
	value?: any;
	onClickDay?: any;
	listCalendarDays?: any;
}

export const CalendarBoxRestrict = ({
	onChange,
	value,
	onClickDay,
	listCalendarDays = [],
}: Props) => {
	const availableDatesSet = new Set(
		listCalendarDays.map((date: any) => new Date(date.proconfec).toDateString())
	);

	const tileClassName = ({ date }: any) => {
		if (availableDatesSet.has(date.toDateString())) {
			return "highlight";
		}
		return null;
	};

	return (
		<Calendar
			onChange={onChange}
			value={value}
			onClickDay={onClickDay}
			tileDisabled={({ date }) => !availableDatesSet.has(date.toDateString())}
			tileClassName={tileClassName}
		/>
	);
};
