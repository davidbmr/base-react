import React, { useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { handleChangeInput } from "@/helpers/handleTextBox";
import { useGetFetch } from "@/hooks/useGetFetch";
import { usePostFetch } from "@/hooks/usePostFetch";

interface PropsAddModal {
	onHideModal?: any;
	handleSearchCPT: any;
}

export const ModalTipoAtencioCpt = ({ onHideModal, handleSearchCPT }: PropsAddModal) => {
	const getFetchData = useGetFetch(
		"/setting/master-tables/master-tables-cas/vaccines/attention-type"
	);

	const postFilterFetchData = usePostFetch(
		"/setting/master-tables/master-tables-cas/vaccines/attention-type/search"
	);

	const [filterOpts, setFilterOpts] = useState<any>({
		cpscod: "",
		cpsdes: "",
	});

	const onSearchCPT = (rowData: any) => {
		let cpscod = rowData?.cpscod;
		let cpsdes = rowData?.cpsdes;
		handleSearchCPT(cpscod, cpsdes);
		onHideModal();
	};

	const onPostFilter = async () => {
		const res = await postFilterFetchData.postFetchData(filterOpts);
		getFetchData.setFilterData(res);
	};
	return (
		<>
			<FilterGroupStructure onPostFilter={onPostFilter}>
				<TextBoxField
					name="cpscod"
					value={filterOpts.cpscod}
					textLabel="Código:"
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					containerWidth="80px"
				/>
				<TextBoxField
					name="cpsdes"
					value={filterOpts.cpsdes}
					textLabel="Descripción:"
					onChange={(e) => handleChangeInput(e, setFilterOpts)}
					containerWidth="400px"
				/>
			</FilterGroupStructure>
			<DataTable
				columns={columns}
				data={getFetchData?.data || []}
				isHeaderActive={false}
				onEye={onSearchCPT}
			/>
			{/*Integrar Funcion para seleccion rapida */}
		</>
	);
};

const columns = [
	{ nombre: "Código", campo: "cpscod" },
	{ nombre: "Descripción", campo: "cpsdes" },
];
