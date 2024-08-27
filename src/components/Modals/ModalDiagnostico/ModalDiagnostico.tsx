import React from 'react';
import { DataTable } from '@/components/DataTable/DataTable';
import { FilterGroupStructure } from "@/components/FilterGroupStructure/FilterGroupStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

interface PropsAddModal {
    //postFetchData?: any;
    //updateFetchData?: any;
    updateData?: any;
    onHideModal?: any;
}

export const ModalDiagnostico = ({updateData, onHideModal}:PropsAddModal) => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-around", padding: "0px 0px 15px"}}>
            <FilterGroupStructure onPostFilter={[]}>
                <div style={{width: "60px"}}>
                    <TextBoxField
                        textLabel='Codigo: '
                        name=''
                        value=''
                        onChange={(e) => e}
                    />
                </div>    
                <div style={{width: "300px"}}>
                    <TextBoxField
                        textLabel='Descripción: '
                        name=''
                        value=''
                        onChange={(e) => e}
                    />
                </div> 
            </FilterGroupStructure>
            </div>
            <DataTable 
                columns={columns}
                data={[]}
                isHeaderActive={false}
            />
        </div>
    )
}
const columns = [
    {nombre: "Código", campo: "codigo"},
    {nombre: "Descripción Diagnóstico", campo: "descDiagnostico"},
]