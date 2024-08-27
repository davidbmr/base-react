import { SelectField } from "@/components/SelectField/SelectField";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

import React from "react";
import style from "./ModalPacientes.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
export const AddModalPacientes = () => {
	return (
		<>
			<FilterGroupStructure onPostFilter={[]}>
				<div>
					<div className={style.containerInputs}>
						<SelectField
							textLabel="Tipo de Doc.:"
							options={[]}
							optionLabel="tipdocidenperdescor"
							optionValue="tipdocidenpercod"
							name="tipdocidenpercod"
							value={""}
							onChange={() => {}}
							containerWidth="140px"
						/>

						<TextBoxField
							textLabel="Nro. de Doc."
							name="perasisdocidennum"
							value={""}
							onChange={() => {}}
							maxLength={10}
							containerWidth="100px"
						/>
					</div>
					<div className={style.containerInputs}>
						<TextBoxField
							textLabel="Ap. Paterno:"
							name="perasisproapepat"
							value={""}
							onChange={() => {}}
							maxLength={35}
							containerWidth="180px"
						/>
						<TextBoxField
							textLabel="Ap. Materno:"
							name="perasisproapemat"
							value={""}
							onChange={() => {}}
							maxLength={35}
							containerWidth="180px"
						/>
						<TextBoxField
							textLabel="Nombres:"
							name="perasisproprinom"
							value={""}
							onChange={() => {}}
							maxLength={35}
							containerWidth="180px"
						/>
					</div>
				</div>
			</FilterGroupStructure>
			<DataTable columns={columns} data={[]} isHeaderActive={false} />
		</>
	);
};

const columns = [
	{ nombre: "Tipo Doc.", campo: "tipdocidenpernom" },
	{ nombre: "Nro. Doc.", campo: "perasisdocidennum" },
	{ nombre: "Apellido Paterno", campo: "perasisproapepat" },
	{ nombre: "Apellido Materno", campo: "perasisproapemat" },
	{ nombre: "Primer Nombre", campo: "perasisproprinom" },
];
