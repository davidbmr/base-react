import "./App.css";
import { TextBoxField } from "./components/TextBoxField/TextBoxField";
import { SelectField } from "./components/SelectField/SelectField";

function App() {
	return (
		<>
			<div
				style={{
					width: "250px",
					height: "300px",
					margin: "50px",
					border: "solid 1px #333",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<TextBoxField value="" onChange={() => {}} name="" textLabel="Input" />
				<SelectField
					value=""
					onChange={() => {}}
					name=""
					textLabel="Select"
					options={[{ id: 1, name: "hola", value: "hola" }]}
				/>
			</div>
		</>
	);
}

export default App;
