import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./index.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
