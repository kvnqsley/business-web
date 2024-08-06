import styles from "../../styles/service/service_contact_us.module.css";
import Link from "next/link";
import { Rcvector, Vector336, Vector227 } from "../Icons";

const SubHeader = () => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        
        <div className={styles.vector1}>
          < Rcvector />
        </div>

        <div className={styles.vector2}>
          < Vector336 />
        </div>

        <div className={styles.vector3}>
          < Vector227 />
        </div>
        
        <div className={styles.first}>
          <h1 className={styles.second}>
            Reliable and cost-effective voice solutions for your business
          </h1>
        </div>

        <div className={styles.third}>
          <div className={styles.fourth}>
            <p>
              We work with you to provide you with the best voice solution to
              suit your business.
            </p>
          </div>
          <div className={styles.fifth}>
            <Link href="/get-in-touch">
              <button className={styles.button_first}>Contact Sales</button>
            </Link>
            <Link href="/about">
              <button className={styles.button_second}>About Talk 4</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
