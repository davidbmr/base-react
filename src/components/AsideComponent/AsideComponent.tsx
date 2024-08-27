import React, { useState } from "react";
import style from  "./AsideComponent.module.css"
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { FaFolderOpen } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import iconReturn from "@/assets/returnDownBack.png"

interface AsideProps {
  label: string;
  icon?: any;
  onClick?: () => void;
  sublist?: AsideProps[];
}

interface AsideContentProps {
  list: AsideProps[];
  CustomBtn?: string;
  CustomBtnIcon?: any;
  CustomFunc?: () => void;
  onReturn?: () => void;
  AdditionalContentClassName?: string;
}

const AsideComponent: React.FC<AsideContentProps> = ({  
  list,
  CustomBtn,
  CustomFunc,
  CustomBtnIcon,
  onReturn,
  AdditionalContentClassName,
}
) => {
  const [displayedSublists, setDisplayedSublists] = useState(
    list.reduce((acc: any, item) => {
      acc[item.label] = false;
      return acc;
    }, {}) 
  );

  const toggleSublistDisplay = (label: any) => {
    setDisplayedSublists((prevDisplayedSublists: any) => ({
      ...prevDisplayedSublists,
      [label]: !prevDisplayedSublists[label],
    }));
  };

  const combinedContentClassName = `${style.AsideContent} ${AdditionalContentClassName}`
  return (
    <>
    <aside className={combinedContentClassName}>
      <div  style={{padding: "10px"}}>
        <ul>
            {list.map((item, index) => (
              <li key={index} className={style.list}>
                  <a
                    key={index}
                    className={style.list}
                    onClick={() => (item.sublist ? toggleSublistDisplay(item.label) : item.onClick?.())}
                  >
                    {item.icon}
                    {displayedSublists[item.label] && item.sublist && <FaFolderOpen size={20} />}
                    {!displayedSublists[item.label] && item.sublist && <FaFolder size={20} />}
                    {item.label}
                  </a>
                {displayedSublists[item.label] && item.sublist && (
                  <ul>
                    {item.sublist.map((subItem, subIndex) => (
                      <li key={`${index}-${subIndex}`} className={style.sublist}>
                        <a
                          key={subIndex}
                          className={style.sublistElements}
                          onClick={subItem.onClick} 
                        >
                          {subItem.icon}
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
      </div>

      {onReturn && 
      <div style={{padding: "110px 0px"}}>
       
        <CustomButton
        text="Regresar"
        onClick={onReturn}
        icon={iconReturn}
        iconWidth={15}
        >
          
        </CustomButton>
      </div>
      }
      
      {CustomBtn && CustomFunc && 
      <div style={{display: "flex", justifyContent: "center", padding: "10px 0px 0px"}}>
        <CustomButton
          text={CustomBtn}
          icon={CustomBtnIcon}
          backgroundButton=""
        />
      </div>
      }
      
    </aside>
     
    </>
  );
}

export default AsideComponent

