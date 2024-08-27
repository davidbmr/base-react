import React, { useState } from "react";

import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { useGetFetch } from "@/hooks/useGetFetch";
import { urlCitas } from "@/connections/mainApi";
import { getFetch } from "@/helpers/getFetch";
import { handleChangeInput } from "@/helpers/handleTextBox";

interface Props {
	getRow?: any;
	onHideModal?: any;
}

export const AddModalProducto = ({ getRow, onHideModal }: Props) => {
	const getFetchProduct = useGetFetch(
		"/caja-y-citas/cita-ambulatoria-paciente/productos/A21/002/00001/00001",
		"citas"
	);

	const handleGetRow = (rowData: any) => {
		getRow({ ...rowData, cantidad: 1 });
		onHideModal();
	};

	const [filterOpts, setFilterOpts] = useState<any>({
		tarservhoscod: "",
	});

	// const onPostFilter = async () => {
	// 	let queryParams = `?tarservhoscod=${filterOpts.tarservhoscod}`;
	// 	let result = await getFetch("/productser", queryParams, urlCitas);
	// getFetchProduct.setFilterData(result);
	// };

	return (
		<div>
			<FilterGroupStructure onPostFilter={() => {}}>
				{/* <TextBoxField
					textLabel="Código:"
					name="Numero"
					value={filterOpts.tarservhoscod}
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					direction="row"
					maxLength={15}
					containerWidth="120px"
				/> */}
				<TextBoxField
					textLabel="Producto:"
					name="Numero"
					value={filterOpts.perdocidennum}
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					direction="row"
					maxLength={45}
					containerWidth="250px"
				/>
			</FilterGroupStructure>

			<div>
				<DataTable
					columns={data}
					data={getFetchProduct?.data || []}
					isHeaderActive={false}
					onEye={handleGetRow}
				/>
			</div>
		</div>
	);
};

const data = [
	{ nombre: "Tipo", widthColumn: "150px", campo: "tiptardes" },
	{ nombre: "Código", widthColumn: "50px", campo: "tarprodcod" },
	{
		nombre: "Producto",
		campo: "tarproddes",
		widthColumn: "260px",
	},
	{
		nombre: "Tarifa",
		widthColumn: "40px",
		campo: "tarcatvalor",
	},
	// {
	// 	nombre: "Afectación",
	// 	widthColumn: "80px",
	// 	body: (rowData: any) => {
	// 		return <p>{rowData.estcitestregcod == "1" ? "Activo" : "Inactivo"}</p>;
	// 	},
	// },
];
