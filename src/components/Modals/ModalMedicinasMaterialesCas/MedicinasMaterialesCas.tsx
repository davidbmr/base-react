import React from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

interface PropsAddModal {
	//postFetchData?: any;
	//updateFetchData?: any;
	updateData?: any;
	onHideModal?: any;
}

export const MedicinasMaterialesCas = ({ updateData, onHideModal }: PropsAddModal) => {
	return (
		<div>
			<FilterGroupStructure onPostFilter={[]}>
				<TextBoxField
					textLabel="Codigo: "
					name=""
					value=""
					onChange={(e) => e}
					containerWidth="70px"
				/>
				<SelectField
					textLabel="Tipo Tratamiento: "
					name=""
					options={[]}
					value=""
					onChange={(e) => e}
					containerWidth="120px"
				/>
				<TextBoxField
					textLabel="Descripción: "
					name=""
					value=""
					onChange={(e) => e}
					containerWidth="170px"
				/>
			</FilterGroupStructure>

			<DataTable columns={columns} data={[]} isHeaderActive={false} />
		</div>
	);
};
const columns = [
	{ nombre: "Código", campo: "" },
	{ nombre: "Descripción", campo: "" },
	{ nombre: "Unidad", campo: "" },
	{ nombre: "Via Adm.", campo: "" },
	{ nombre: "Disponible", campo: "" },
];
