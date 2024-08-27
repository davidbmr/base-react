import React from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { SelectField } from "@/components/SelectField/SelectField";

export const App = () => {
	return (
		<>
			<AppRoutes />
			<SelectField value="" name="" onChange={() => {}} options={[]} />
		</>
	);
};
