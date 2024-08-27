import React, { useState } from "react";
import style from "./AddModalPersonal.module.css";

import { DataTable } from "@/components/DataTable/DataTable";
import { SelectField } from "@/components/SelectField/SelectField";
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { useGetFetch } from "@/hooks/useGetFetch";
import { handleChangeInput } from "@/helpers/handleTextBox";
import { usePostFetch } from "@/hooks/usePostFetch";

interface PropsAddModal {
	updateData?: any;
	onHideModal?: any;
	handleSearchPerson?: any;
	documentType?: any;
}

export const AddModalPersonal = ({
	onHideModal,
	handleSearchPerson,
	documentType,
}: PropsAddModal) => {
	const [personalList, setPersonalList] = useState<any>([]);

	const getFetchDataTipoDoc = useGetFetch(
		"/security/security-configuration/system-users/select/tipo-documento",
		"seguridad"
	);

	const getFetchData = useGetFetch(
		"/security/security-configuration/system-users/persona-asistencial",
		"seguridad"
	);

	const postFilterFetchData = usePostFetch(
		"/security/security-configuration/system-users/persona-asistencial/search",
		"",
		getFetchData.reloadFetchData,
		"",
		"seguridad"
	);

	const [filterOpts, setFilterOpts] = useState<any>({
		tipdocidenpercod: documentType || "",
		perasisdocidennum: "",
		perasisproprinom: "",
		perasisproapepat: "",
		perasisproapemat: "",
	});

	const onPostFilter = async () => {
		const respData = await postFilterFetchData.postFetchData(filterOpts);
		setPersonalList(respData);
	};

	const onSearchPerson = (rowData: any) => {
		let number = rowData?.perasisdocidennum;
		let fullname = `${rowData.perasisproapepat} ${rowData.perasisproapemat}, ${rowData.perasisproprinom} ${rowData.perasisprosegnom}`;
		let documentType = rowData?.tipdocidenpercod;
		handleSearchPerson(number, fullname, documentType);
		onHideModal();
	};
	console.log(getFetchData?.data)
	return (
		<div>
			<FilterGroupStructure onPostFilter={onPostFilter}>
				<div>
					<div className={style.containerInputs}>
						<SelectField
							textLabel="Tipo de Doc.:"
							options={getFetchDataTipoDoc?.data || []}
							optionLabel="tipdocidenperdescor"
							optionValue="tipdocidenpercod"
							name="tipdocidenpercod"
							value={filterOpts.tipdocidenpercod}
							onChange={(e) => handleChangeInput(e, setFilterOpts)}
							containerWidth="140px"
						/>

						<TextBoxField
							textLabel="Nro. de Doc."
							name="perasisdocidennum"
							value={filterOpts.perasisdocidennum}
							onChange={(e) => handleChangeInput(e, setFilterOpts)}
							maxLength={10}
							containerWidth="100px"
						/>
					</div>
					<div className={style.containerInputs}>
						<TextBoxField
							textLabel="Ap. Paterno:"
							name="perasisproapepat"
							value={filterOpts.perasisproapepat}
							onChange={(e) => handleChangeInput(e, setFilterOpts)}
							maxLength={35}
							containerWidth="180px"
						/>
						<TextBoxField
							textLabel="Ap. Materno:"
							name="perasisproapemat"
							value={filterOpts.perasisproapemat}
							onChange={(e) => handleChangeInput(e, setFilterOpts)}
							maxLength={35}
							containerWidth="180px"
						/>
						<TextBoxField
							textLabel="Nombres:"
							name="perasisproprinom"
							value={filterOpts.perasisproprinom}
							onChange={(e) => handleChangeInput(e, setFilterOpts)}
							maxLength={35}
							containerWidth="180px"
						/>
					</div>
				</div>
			</FilterGroupStructure>
			<DataTable
				columns={columns}
				data={personalList || []}
				isHeaderActive={false}
				onEye={onSearchPerson}
			/>
		</div>
	);
};

const columns = [
	{ nombre: "Tipo Doc.", campo: "tipdocidenpernom" },
	{ nombre: "Nro. Doc.", campo: "perasisdocidennum" },
	{ nombre: "Apellido Paterno", campo: "perasisproapepat" },
	{ nombre: "Apellido Materno", campo: "perasisproapemat" },
	{ nombre: "Primer Nombre", campo: "perasisproprinom" },
	{ nombre: "Segundo Nombre", campo: "perasisprosegnom" },
	{ nombre: "Grupo Ocupacional", campo: "grupocupnomcor" },
];
