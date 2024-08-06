import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_first_title_header.module.css"


const FirstTitleHeader = ({detail }:{detail:any}) => {
  
  return (
    <div className={styles.body}>

        <div className={styles.content}>

            <h1>{detail.header}</h1>
            <p>{detail.paragraph}</p>

        </div>

        
        
    </div>
  );
};

export default FirstTitleHeader;
