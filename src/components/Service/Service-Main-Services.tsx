import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "../Icons";
import styles from "../../styles/service/service_main_services.module.css"


const MainService = ({main_service_data }:{main_service_data:any}) => {

    return (

        <div className={styles.body}>

            <div className={styles.content}>

                <div className={styles.first} >

                    <div className={styles.second}>
                        <Image src={`/assets/${main_service_data.first.image}.png`} alt={main_service_data.first.image} width={98} height={95} />
                        <div className={styles.third}>
                            <p className={styles.fourth}>
                                {main_service_data.first.heading}
                            </p>
                            <p className={styles.fifth}>
                                {main_service_data.first.paragraph}
                            </p>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <Image src={`/assets/${main_service_data.second.image}.png`} alt={main_service_data.second.image} width={98} height={95} />
                        <div className={styles.third}>
                            <p className={styles.fourth}>
                                {main_service_data.second.heading}
                            </p>
                            <p className={styles.fifth}>
                                {main_service_data.second.paragraph}
                            </p>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <Image src={`/assets/${main_service_data.third.image}.png`} alt={main_service_data.third.image} width={98} height={95} />
                        <div className={styles.third}>
                            <p className={styles.fourth}> 
                                {main_service_data.third.heading}
                            </p>
                            <p className={styles.fifth}>
                            {main_service_data.third.paragraph}
                            </p>
                        </div>
                    </div>

                </div>

                {main_service_data.fifth != undefined && (
                    <div className={styles.first_second}>
                        <div className={styles.second}>
                        <Image src={`/assets/${main_service_data.fourth.image}.png`} alt={main_service_data.first.image} width={98} height={95} />
                        <div className={styles.third}>
                            <p className={styles.fourth}>
                            {main_service_data.first.heading}
                            </p>
                            <p className={styles.fifth}>
                            {main_service_data.first.paragraph}
                            </p>
                        </div>
                        </div>
                        <div className={styles.second}>
                        <Image src={`/assets/${main_service_data.fifth.image}.png`} alt={main_service_data.second.image} width={98} height={95} />
                        <div className={styles.third}>
                            <p className={styles.fourth}>
                            {main_service_data.second.heading}
                            </p>
                            <p className={styles.fifth}>
                            {main_service_data.second.paragraph}
                            </p>
                        </div>
                        </div>
                    </div>
                )}

                {main_service_data.fifth == undefined && (
                    <div>
                        <Link href="/get-in-touch">
                        <button className="bg-[#1c68f5]" data-btn="primary"> 
                            Talk to sale person
                        </button>
                        </Link>
                    </div>
                )}

                

            </div>
            

        </div>

    );
};

export default MainService;
