import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_choose_network.module.css"


const ChooseNetwork = ({ choose_network }: { choose_network:any }) => {

  return (
    <div className={styles.body}>

        <div className={styles.content}>

            <div className={styles.first}>
                <h4>Choose a suitable network</h4>
                <p>We work with partners and directly with mobile service providers to provide you with the best mobile service for your business. We have access to a wide range of networks and devices so we find the right mobile plans for your business.</p>
                <p>We can check the coverage of the networks in all your main business locations and provide the best recommendations for your usage. We’re positioned to provide discounts and other network-specific benefits to meet your business mobile needs.</p>
                <p>We stock entry level, mid-level or high-level models to fit your specific needs across your business.</p>
            </div>

            <div className={styles.second}>

                <div className={styles.third}>
                    <div className={styles.fourth}>
                        <Image src={`/assets/${choose_network.first.first_image}.png`} alt="Website Logo" width={52} height={83} />
                    </div>

                    <div className={styles.fourth}>
                        <Image src={`/assets/${choose_network.first.second_image}.png`} alt="Website Logo" width={125} height={38} />
                    </div>

                </div>

                <div className={styles.third}>

                    <div className={styles.fourth}>
                        <Image src={`/assets/${choose_network.second.first_image}.png`} alt="Website Logo" width={50} height={50} />
                    </div>

                    <div className={styles.fourth}>
                        <Image src={`/assets/${choose_network.second.second_image}.png`} alt="Website Logo" width={30} height={63} />
                    </div>

                </div>

                <div className={styles.fourth}>
                    <Image src={`/assets/${choose_network.third.image}.png`} alt="Website Logo" width={100} height={82} /> 
                </div>

            </div> 

        </div>  
        
    </div>
  );
};

export default ChooseNetwork;
