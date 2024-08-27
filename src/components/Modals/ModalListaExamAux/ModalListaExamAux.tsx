import React from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { DateField } from "@/components/DateField/DateField";

export const ModalListaExamAux = () => {
	return (
		<div>
			<FilterGroupStructure onPostFilter={[]}>
				<TextBoxField
					textLabel="Codigo: "
					name=""
					value=""
					containerWidth="70px"
					onChange={(e) => e}
				/>
				<TextBoxField
					textLabel="Descripción: "
					name=""
					value=""
					onChange={(e) => e}
					containerWidth="200px"
				/>
				<DateField textLabel="desde" containerWidth="130px"/>
				<DateField textLabel="Hasta" containerWidth="130px"/>
			</FilterGroupStructure>
			<DataTable columns={columns} data={[]} isHeaderActive={false} />
		</div>
	);
};
const columns = [
	{ nombre: "Código", campo: "" },
	{ nombre: "Descripción ", campo: "" },
	{ nombre: "Area ", campo: "" },
	{ nombre: "Servicio ", campo: "" },
	{ nombre: "Fec. Solicitud ", campo: "" },
	{ nombre: "Fec. Atención ", campo: "" },
	{ nombre: "Resultado", campo: "" },
];
