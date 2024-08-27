import React, { useState } from "react";

interface Props {
	cupos?: any;
	currentMedic?: any;
}

export const TimeSlotSelector = ({ cupos, currentMedic }: Props) => {
	console.log(currentMedic);
	const [selectedTime, setSelectedTime] = useState(null);

	const handleClick = (hora: any) => {
		setSelectedTime(hora);
	};

	return (
		<div style={{ display: "flex", flexWrap: "wrap", width: "300px" }}>
			{currentMedic.proconperasisdocidennum &&
				cupos &&
				cupos.map((slot: any) => (
					<div
						key={slot.hora}
						onClick={() => handleClick(slot.hora)}
						style={{
							padding: "10px",
							margin: "2px",
							backgroundColor: selectedTime === slot.hora ? "#00cccc" : "#f0f0f0",
							border: selectedTime === slot.hora ? "2px solid #008080" : "1px solid #ccc",
							borderRadius: "4px",
							cursor: "pointer",
							textAlign: "center",
							minWidth: "50px",
							color: selectedTime === slot.hora ? "#ffffff" : "#000000",
						}}
					>
						{slot.hora}
					</div>
				))}
		</div>
	);
};
