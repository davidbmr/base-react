import React, { useState } from "react";
import style from "./UbigeoModal.module.css";

import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";
import { handleChangeInput } from "@/helpers/handleTextBox";

import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface Props {
	updateData?: any;
	onHideModal?: any;
	handleChangeubigeo?: any;
	setFunction?: any;
	nameProp?: any;
}

export const UbigeoModal = ({
	onHideModal,
	handleChangeubigeo,
	setFunction,
	nameProp,
}: Props) => {
	const getFetchData = useGetFetch(
		"/admision-module/filiation-and-registration/affiliation-maintenance/ubigeo",
		"admision"
	);

	// Filter module
	const [filterOpts, setFilterOpts] = useState<any>({
		ubidis: "",
		ubipro: "",
		ubidep: "",
	});

	const postFilterFetchData = usePostFetch(
		"/admision-module/filiation-and-registration/affiliation-maintenance/search/ubigeo",
		undefined,
		undefined,
		undefined,
		"admision"
	);

	const onPostFilter = async () => {
		const respData = await postFilterFetchData.postFetchData(filterOpts);
		getFetchData.setFilterData(respData);
	};

	const handleCaptureData = (rowData: any) => {
		handleChangeubigeo(rowData, setFunction, nameProp);
		onHideModal();
	};

	return (
		<div className={style.container__modal}>
			<FilterGroupStructure onPostFilter={onPostFilter}>
				<TextBoxField
					textLabel="Departamento"
					name="ubidep"
					value={filterOpts.ubidep}
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					maxLength={15}
				/>
				<TextBoxField
					textLabel="Provincia"
					name="ubipro"
					value={filterOpts.ubipro}
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					maxLength={15}
				/>
				<TextBoxField
					textLabel="Distrito"
					name="ubidis"
					value={filterOpts.ubidis}
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					maxLength={15}
				/>
			</FilterGroupStructure>

			<DataTable
				columns={columns}
				data={getFetchData?.data || []}
				isHeaderActive={false}
				onEye={handleCaptureData}
			/>
		</div>
	);
};

const columns = [
	{ nombre: "Ubigeo", campo: "codubi", widthColumn: "50px" },
	{ nombre: "Departamento", campo: "ubidep", widthColumn: "120px" },
	{ nombre: "Provincia", campo: "ubipro", widthColumn: "120px" },
	{ nombre: "Distrito", campo: "ubidis", widthColumn: "120px" },
	{
		nombre: "Estado",
		body: (rowData: any) => {
			return <p>{rowData.ubiestreg == "1" ? "Activo" : "Inactivo"}</p>;
		},
		widthColumn: "80px",
	},
];
