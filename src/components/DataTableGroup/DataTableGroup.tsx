import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { sign } from "crypto";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

interface Props {
	columns: any;
	data: any;
	onUpdate?: any;
	onDelete?: any;
	onEye?: any;
}

export const DataTableGroup = ({ columns, data, onUpdate, onDelete, onEye }: Props) => {
	const buttonSuccess = (rowData: any) => {
		return (
			<Button
				className="p-button-info p-button-rounded"
				style={{ width: "40px", height: "40px" }}
				type="button"
				icon="pi pi-pencil"
				onClick={() => onUpdate(rowData)}
			/>
		);
	};

	const buttonDecline = (rowData: any) => {
		return (
			<Button
				className="p-button-danger p-button-rounded"
				style={{ width: "40px", height: "40px" }}
				type="button"
				icon="pi pi-ban"
				onClick={() => {
					onDelete(rowData.id);
				}}
			/>
		);
	};

	const buttonEye = (rowData: any) => {
		return (
			<Button
				className="p-button-help p-button-rounded"
				style={{ width: "40px", height: "40px" }}
				type="button"
				icon="pi pi-eye"
				onClick={() => {
					onEye(rowData.id);
				}}
			/>
		);
	};

	const headerGroup = (
		<ColumnGroup>
			<Row>
				<Column
					header="Area Hosp."
					rowSpan={3}
					style={{ background: "var(--primary-color-app)", color: "#fff" }}
				/>
			</Row>
			<Row>
				<Column
					header="Horas normales"
					colSpan={3}
					style={{ background: "var(--primary-color-app)", color: "#fff" }}
				/>
				<Column
					header="Horas extras"
					colSpan={3}
					style={{ background: "var(--primary-color-app)", color: "#fff" }}
				/>
			</Row>
			<Row>
				<Column
					header="En prog."
					field="lastYearSale"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
				<Column
					header="Aprob."
					field="thisYearSale"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
				<Column
					header="Susp."
					field="lastYearProfit"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
				<Column
					header="En prog."
					field="lastYearSale"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
				<Column
					header="Aprob."
					field="thisYearSale"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
				<Column
					header="Susp."
					field="lastYearProfit"
					style={{
						background: "var(--primary-color-app)",
						color: "#fff",
						minWidth: "40px",
						maxWidth: "40px",
						fontSize: "14px",
					}}
				/>
			</Row>
		</ColumnGroup>
	);

	return (
		<>
			{/* Tabla */}
			<DataTable
				value={data}
				// paginator
				headerColumnGroup={headerGroup}
				rows={5}
				dataKey="id"
				emptyMessage="No se han encontrado resultados."
				showGridlines
				size={"small"}
			>
				{columnsData &&
					columnsData?.map((column: any) => (
						<Column
							key={`${column.campo}`}
							field={column.campo}
							body={column.body}
							headerStyle={{
								background: "var(--primary-color-app)",
								color: "#fff",
								// border: "inset 1px var(--primary-color-app)",
							}}
							header={column.nombre}
							style={
								column.tipo == "calendar"
									? {
											width: "30px",
											minWidth: "25px",
											maxWidth: "25px",
											padding: "5px",
											fontSize: "12px",
									  }
									: { minWidth: "40px", maxWidth: "40px", fontSize: "14px", padding: "5px" }
							}
						/>
					))}

				{/* Botones para verificar transacciones */}
				{onUpdate && <Column style={{ width: "5rem" }} body={buttonSuccess} />}
				{onEye && <Column style={{ width: "5rem" }} body={buttonEye} />}
				{onDelete && <Column style={{ width: "5rem" }} body={buttonDecline} />}
			</DataTable>
		</>
	);
};

const columnsData = [
	{ nombre: "areaHosp", field: "areaHosp", campo: "area_hosp" },
	{ nombre: "areaHosp", field: "areaHosp", campo: "hnp" },
	{ nombre: "areaHosp", field: "areaHosp", campo: "hna" },
	{ nombre: "normalSusp", field: "normalSusp", campo: "hns" },
	{ nombre: "extraProg", field: "extraProg", campo: "hep" },
	{ nombre: "extraAprob", field: "extraAprob", campo: "hea" },
	{ nombre: "extraSusp", field: "extraSusp", campo: "hes" },
];

