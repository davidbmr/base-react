import React, { useState } from "react"
import defaultUser from '@/assets/user-icon.svg'
import style from './SelectImage.module.css'
import { TextBoxField } from "../TextBoxField/TextBoxField"
import { handleChangeImage } from "@/helpers/handleChangeImage"

interface Props {
    defaultImg?: string
    altMsg: string
    width?: number
    height?: number
    TexBoxWidth?: string
    additionalClassName?: string
    paddingImage?: string

}
export const SelectImage = (
{defaultImg = defaultUser, altMsg, width = 100, height, TexBoxWidth = "100px", additionalClassName,  paddingImage}: Props
) => {
    const [ selectedImg, setSelectedImg ] = useState<any>(defaultImg);
    const combinedClassNames = `${style.contentBox__container} ${additionalClassName}`;
    return (
        <div className={combinedClassNames}>
        <div style={{padding: `${ paddingImage }`}} >
            {selectedImg && (
                <img src={selectedImg} alt={altMsg} width={width} height={height} style={{borderRadius: '25px'}} />
            )}
        </div>
        <div style={{width: `${TexBoxWidth}`}}>
            <TextBoxField
                value= ""
                name=""
                type="file"
                onChange={(e) => handleChangeImage({e, setSelectedImg, defaultUser})}
            />
        </div>
    </div>
    )
}