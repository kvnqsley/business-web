import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_header.module.css"

import { MouseEventHandler, useState } from "react";


const SubHeader = () => {

  const [selectedService, setSelectedService] = useState("BUSINESS TELEPHONY");

  const handleButtonClick: MouseEventHandler = (e) => {
    const target = e.target as HTMLButtonElement;

    const targetName = target.innerText;

    setSelectedService(targetName);

    console.log(selectedService)

  };

  return (

    
    <div className={styles.header}>
        <div className={styles.nav}>
            <ul className={styles.nav_links}>
                <button
                onClick={handleButtonClick}>
                  BUSINESS TELEPHONY
                </button>
                <button
                onClick={handleButtonClick}>
                  BUSINESS CONNECTIVITY
                </button>
                <button
                onClick={handleButtonClick}>
                  BUSINESS MOBILES
                </button>
                <button
                onClick={handleButtonClick}>
                  CLOUD SERVICES
                </button>
                <button
                onClick={handleButtonClick}>
                  MANAGED IT SERVICES
                </button>
            </ul>
        </div>
    </div>


  );
};

export default SubHeader;
