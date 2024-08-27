import React from "react";
import { PrimeDataTable } from "@/primeComponents/PrimeDataTable/PrimeDataTable";
import { HeaderDataTable } from "@/components/HeaderDataTable/HeaderDataTable";

interface DataTableProps {
	isHeaderActive?: any;
	columns: any;
	data: any;
	onCreate?: any;
	onUpdate?: any;
	onDelete?: any;
	onEye?: any;
	onExport?: any;
	customIcon?: React.ReactNode;
	customAction?: (rowData: any) => void;
	children?: React.ReactNode;
	dataKey?: any;
	customButton?: any;
	onCustomButton?: any;
	customButtonDisabled?: any;
	paginator?: any;
}

export const DataTable = ({
	isHeaderActive = true,
	columns,
	data,
	onCreate,
	onUpdate,
	onDelete,
	onEye,
	onExport,
	customIcon,
	customAction,
	children,
	dataKey,
	customButton,
	onCustomButton,
	customButtonDisabled,
	paginator,
}: DataTableProps) => {
	return (
		<>
			{isHeaderActive ? (
				<HeaderDataTable
					onExport={onExport}
					onCreate={onCreate}
					customButton={customButton}
					onCustomButton={onCustomButton}
					customButtonDisabled={customButtonDisabled}
				/>
			) : null}
			{/* Tabla */}
			<PrimeDataTable
				columns={columns}
				data={data}
				onUpdate={onUpdate}
				onDelete={onDelete}
				onEye={onEye}
				customIcon={customIcon}
				customAction={customAction}
				dataKey={dataKey}
				paginator={paginator}
			/>

			{children ? <div>{children}</div> : null}
		</>
	);
};
