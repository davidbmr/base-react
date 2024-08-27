import React from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface PropsAddModal {
	//postFetchData?: any;
	//updateFetchData?: any;
	updateData?: any;
	onHideModal?: any;
}

export const ModalListaEstable = ({ updateData, onHideModal }: PropsAddModal) => {
	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-around", padding: "0px 0px 15px" }}>
				<FilterGroupStructure onPostFilter={[]}>
					<TextBoxField
						textLabel="Código: "
						name=""
						value=""
						onChange={(e) => e}
						containerWidth="70px"
					/>

					<TextBoxField
						textLabel="	Establecimiento: "
						name=""
						value=""
						onChange={(e) => e}
						containerWidth="300px"
					/>
				</FilterGroupStructure>
			</div>
			<DataTable columns={columns} data={[]} isHeaderActive={false} />
		</div>
	);
};
const columns = [
	{ nombre: "Código", campo: "" },
	{ nombre: "Establecimiento", campo: "" },
	{ nombre: "Distrito/Provincia/Departamento", campo: "" },
];
