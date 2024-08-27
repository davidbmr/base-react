import React, { useState } from 'react'
import style from "./Acordeon.module.css"
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

interface TitleSectionProps {
	titleText?: string;
  children: React.ReactNode;

}

export const Acordeon = ({ titleText, children }: TitleSectionProps) => {
  const [isDisplayed, setDisplay] = useState<any>(false)
  const handleChange = () => {
    setDisplay(!isDisplayed)
  }

  
  return (
    <div className={style.titleSection__container}>
        <div className={style.titleSection__title} onClick={handleChange} style={{display: "flex", justifyContent: "space-between"}}>
            <p>{titleText}</p>
            
            <div >
                {isDisplayed ? 
                <button onClick={handleChange} className={style.button__action}><FaMinus /></button>:
                <button onClick={handleChange} className={style.button__action}><FaPlus /></button>
                }
            </div>
        </div>
        {isDisplayed && <div className={style.contentAnimated}>{children}</div>}
    </div>
  )
}
