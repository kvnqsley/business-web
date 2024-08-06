import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_header.module.css"

import { MouseEventHandler, useState } from "react";


const SubHeader = () => {

  const [selectedService, setSelectedService] = useState("TELEMEDICINE");

  const handleButtonClick: MouseEventHandler = (e) => {
    const target = e.target as HTMLButtonElement;

    const targetName = target.innerText;

    setSelectedService(targetName);


  };

  return (

    
    <div className={styles.header}>
        <div className={styles.nav}>
            <ul className={styles.nav_links}>
                <button
                onClick={handleButtonClick}>
                  TELEMEDICINE
                </button>
                <button
                onClick={handleButtonClick}>
                  PHARMACY
                </button>
                <button
                onClick={handleButtonClick}>
                PHYSICAL SERVICE
                </button>
                <button
                onClick={handleButtonClick}>
                  NUTRITION AND WELLNESS
                </button>
            
            </ul>
        </div>
    </div>


  );
};

export default SubHeader;
