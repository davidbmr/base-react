import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { MdBlock, MdModeEditOutline } from "react-icons/md";
import style from "./PrimeDataTable.module.css";

const IconButton = ({ icon, onClick, className, style }) => {
	return <Button className={className} style={style} type="button" icon={icon} onClick={onClick} />;
};

export const PrimeDataTable = ({
	columns,
	data,
	onUpdate,
	onDelete,
	onEye,
	dataKey,
	customIcon,
	customAction,
	paginator = true,
}) => {
	const [dataTable, setDataTable] = useState(data);

	useEffect(() => {
		setDataTable(data);
	}, [data]);

	const buttonSuccess = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-info p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon={<MdModeEditOutline size={10} />}
				onClick={() => onUpdate(rowData)}
			/>
		</div>
	);

	const buttonDecline = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-danger p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon={<MdBlock size={16} />}
				onClick={() => onDelete(rowData)}
			/>
		</div>
	);

	const buttonEye = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-help p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon="pi pi-eye"
				onClick={() => onEye(rowData)}
			/>
		</div>
	);

	const customButton = (rowData) => (
		<div style={{ display: "flex", justifyContent: "center", padding: "0", margin: "0" }}>
			<IconButton
				className="p-button-rounded"
				style={{ width: "20px", height: "20px", padding: "0", margin: "5px" }}
				icon={customIcon}
				onClick={() => customAction(rowData)}
			/>
		</div>
	);

	return (
		<>
			<DataTable
				value={dataTable}
				paginator={paginator}
				rows={10}
				dataKey={dataKey}
				size="small"
				showGridlines
				emptyMessage="No se han encontrado resultados."
			>
				{columns &&
					columns.map((column, index) => (
						<Column
							key={`${column.campo}-${index}`}
							field={column.campo}
							body={column.body}
							header={column.nombre}
							headerStyle={{
								background: "var(--primary-color-app)",
								color: "#fff",
								fontSize: "13px",
								padding: "2px 5px"
							}}
							bodyStyle={{
								fontSize: "14px",
								fontWeight: "600",
								padding: "0 10px",
								margin: "0",
								textTransform: "uppercase",
							}}
							style={{
								width: column.widthColumn && column.widthColumn,
								minWidth: "25px",
								fontSize: "13px",
							}}
							className={style.column__primeDataTable}
						/>
					))}

				{onUpdate && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						body={buttonSuccess}
					/>
				)}
				{onEye && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						body={buttonEye}
					/>
				)}
				{customIcon && customAction && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						body={customButton}
					/>
				)}
				{onDelete && (
					<Column
						style={{ width: "40px", margin: "0", padding: "0" }}
						headerStyle={{
							background: "var(--primary-color-app)",
							color: "#fff",
						}}
						body={buttonDecline}
					/>
				)}
			</DataTable>
		</>
	);
};
