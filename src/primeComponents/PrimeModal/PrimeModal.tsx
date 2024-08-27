import React from "react";
import { Dialog } from "primereact/dialog";

interface PrimeModalProps {
	modalStatus: boolean;
	onHideModal: () => void;
	children: React.ReactNode;
	header: string;
	width?: number | string;
}

export const PrimeModal: React.FC<PrimeModalProps> = ({ modalStatus, onHideModal, children, header, width = 600 }) => {
	return (
		<Dialog
			header={header}
			visible={modalStatus}
			modal
			draggable={false}
			style={{ width: `${width}px` }}
			onHide={onHideModal}
			dismissableMask={true}
		>
			{children}
		</Dialog>
	);
};
