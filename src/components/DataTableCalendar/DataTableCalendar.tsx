import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Tooltip } from "primereact/tooltip";
import { RiInformationLine } from "react-icons/ri";


interface Props {
  columns: any;
  data: any;
  onUpdate?: any;
  onDelete?: any;
  onEye?: any;
  onCheckboxChange?: any;
  multipleSelection?: boolean;
  selection: any[] | any; // Prop para recibir la selección desde el padre
  showActionHeader?: boolean;
  checkState?: boolean; // Nueva prop para controlar si se muestra el checkbox
  tooltipMessage?: string; // Mensaje que se muestra en el tooltip, si está presente muestra el icono y el tooltip
}

export const DataTableCalendar = ({
  columns,
  data,
  onUpdate,
  onDelete,
  onEye,
  onCheckboxChange,
  multipleSelection = false,
  selection, // Recibimos el estado de selección controlado desde el componente padre
  showActionHeader = false,
  checkState = true, // Checkbox visible por defecto
  tooltipMessage, // Si está presente, muestra el tooltip
}: Props) => {

  const handleCheckboxChange = (rowData: any) => {
    let newSelectedRows;

    if (multipleSelection) {
      const isSelected = selection?.some((row: any) => row.id === rowData.id);
      if (isSelected) {
        newSelectedRows = selection.filter((row: any) => row.id !== rowData.id);
      } else {
        newSelectedRows = [...selection, rowData];
      }
    } else {
      newSelectedRows = selection?.id === rowData.id ? null : rowData;
    }

    onCheckboxChange && onCheckboxChange(newSelectedRows);
  };

  const checkboxBodyTemplate = (rowData: any) => {
    const isSelected = multipleSelection
      ? selection?.some((row: any) => row.id === rowData.id)
      : selection?.id === rowData.id;

    return (
      <Checkbox
        checked={isSelected}
        onChange={() => handleCheckboxChange(rowData)}
      />
    );
  };

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

  const getColumnStyle = (column: any) => {
    if (column.tipo === "calendar") {
      return {
        width: "30px",
        minWidth: "25px",
        maxWidth: "25px",
        padding: "5px",
        fontSize: "12px",
      };
    } else if (column.tipo === "number") {
      return {
        width: "45px",
        minWidth: "45px",
        maxWidth: "45px",
        padding: "5px",
        fontSize: "13px",
      };
    } else if (column.tipo === "title") {
      return {
        width: "85px",
        minWidth: "85px",
        maxWidth: "85px",
        padding: "5px",
        fontSize: "12px",
      };
    } else if (column.tipo === "hour") {
      return {
        width: "60px",
        minWidth: "60px",
        maxWidth: "60px",
        padding: "5px",
        fontSize: "13px",
      };
    } else {
      return {
        minWidth: "40px",
        maxWidth: "40px",
        fontSize: "14px",
        padding: "5px",
      };
    }
  };

  const dataWithIds = data
    ? data?.map((item: any, index: number) => ({
        ...item,
        id: index,
      }))
    : "";

  return (
    <>
   
      <DataTable
      
        value={dataWithIds}
        paginator
        rows={5}
        dataKey="id"
        emptyMessage="No se han encontrado resultados."
        showGridlines
        size={"small"}
        
      >
        {tooltipMessage && (
          <Column
            body={(rowData: any) => (
              <>
                <RiInformationLine
                  className="info-icon"
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  data-pr-tooltip={rowData[tooltipMessage]}
                  data-pr-position="top"
                />
                <Tooltip target=".info-icon" /> 
              </>
            )}
            style={{ width: "40px" }}
          />
        )}
        {checkState && (
          <Column
            headerStyle={{
              background: "var(--primary-color-app)",
              color: "#fff",
            }}
            body={checkboxBodyTemplate}
            style={{ width: "20px" }}
          />
        )}

        {columns &&
          columns.map((column: any) => (
            <Column
              key={`${column.campo}`}
              field={column.campo}
              body={column.body}
              headerStyle={{
                background: "var(--primary-color-app)",
                color: "#fff",
              }}
              header={column.nombre}
              style={getColumnStyle(column)}
            />
          ))}

        {onUpdate && <Column style={{ width: "5rem" }} body={buttonSuccess} />}
        {onEye && showActionHeader && (
          <Column
            header="Acción"  // Solo se muestra si showActionHeader es true
            style={{ width: "5rem" }}
            headerStyle={{background: "var(--primary-color-app)", color: "#fff",}}
            body={buttonEye}
          />
        )}
        {onDelete && <Column style={{ width: "5rem" }} body={buttonDecline} />}

       
      </DataTable>
    </>
  );
};
