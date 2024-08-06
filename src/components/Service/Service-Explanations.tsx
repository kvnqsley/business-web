import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_explanations.module.css"


const ServiceExplanation = ({service_explanation_data} : {service_explanation_data: any}) => {

  return (
    <div className={styles.body}>

        <div className={styles.content}>

            <div className={styles.first}>
                <Image src={`/assets/${service_explanation_data.first.image}.png`} alt={service_explanation_data.first.image} width={48} height={48} />
                <h4 className={styles.second}>{service_explanation_data.first.heading}</h4>
                <p className={styles.third}>{service_explanation_data.first.paragraph}</p>
            </div>
            <div className={styles.first}>
                <Image src={`/assets/${service_explanation_data.second.image}.png`} alt={service_explanation_data.second.image} width={48} height={48} />
                <h4 className={styles.second}>{service_explanation_data.second.heading}</h4>
                <p className={styles.third}>{service_explanation_data.second.paragraph}</p>
            </div>
            <div className={styles.first}>
                <Image src={`/assets/${service_explanation_data.third.image}.png`} alt={service_explanation_data.third.image} width={48} height={48} />
                <h4 className={styles.second}>{service_explanation_data.third.heading}</h4>
                <p className={styles.third}>{service_explanation_data.third.paragraph}</p>
            </div>
            <div className={styles.first}>
                <Image src={`/assets/${service_explanation_data.fourth.image}.png`} alt={service_explanation_data.fourth.image} width={48} height={48} />
                <h4 className={styles.second}>{service_explanation_data.fourth.heading}</h4>
                <p className={styles.third}>{service_explanation_data.fourth.paragraph}</p>
            </div>

        </div>

        
        
    </div>
  );
};

export default ServiceExplanation;
