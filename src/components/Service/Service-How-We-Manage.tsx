import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_how_we_manage.module.css"


const ChooseNetwork = () => {

  return (
    <div className={styles.body}>

        <div className={styles.content}>

            <div className={styles.first}>
                <h4>How we manage your IT Services</h4>
                <p>We understand the requirements of every business are different, which is why we tailor our services to suit you – whether you’re looking to fully outsource your IT, or want someone to work with in a co-source capacity alongside your existing teams and suppliers.</p>
                <p>We deliver IT service solutions that are tailored to the precise needs of your organisation and which are communicated in clear and straightforward language</p>
                <p>Our range of comprehensive range of Managed IT Services to help you get the best possible advantage from your IT. Delivered by a highly skilled and experienced team, we offer enterprise-ready services to satisfy the scale of any business, while always maintaining an intimate, user-focused approach. We’ll work within your budget to enhance service quality by delivering measurable performance improvements.</p>
            </div>

            <div className={styles.second}>

                <Image src='/assets/mis_image.png' alt="Website Logo" width={713} height={464} />

            </div> 

        </div>  
        
    </div>
  );
};

export default ChooseNetwork;
