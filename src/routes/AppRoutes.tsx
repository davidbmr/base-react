import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<p>Home</p>} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	);
}
