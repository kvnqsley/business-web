import Image from "next/image";
import Link from "next/link";
import {Search, ThreeUser, Work} from "./Icons";
import styles from "../styles/footer.module.css";
import {useRouter} from "next/router";

const Footer = () => {
  const router = useRouter();

  const goToPrivacy = () => router.push("/support-center/?state=privacy");
  const goToTerms = () =>
    router.push("/support-center/?state=Terms And Conditions");

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.first}>
          <div className={styles.second}>
            <Image
              src="/assets/logo_alt.png"
              alt="Website Logo"
              width={280}
              height={110}
            />
            <div className={styles.fourth}>
              <p>
              At Swift Creations, we&apos;re dedicated to providing exceptional healthcare experiences that transform lives. Our team of compassionate professionals is committed to delivering personalized care, expert guidance, and supportive resources to empower healthier communities. With a focus on empathy, innovation, and excellence, we strive to make a meaningful difference in the lives of our patients and their families.


              </p>
              <p>
              Dedicated to delivering personalized healthcare solutions with empathy and excellence. Discover how we can support your well-being.
              </p>
            </div>
          </div>

          <div className={styles.third}>
            <div className={styles.fourth + " " + styles.hovereffect}>
              <h4>Talk4</h4>
              <Link href="/about">
                <p>Why SwiftCreations</p>
              </Link>
              <p>Telemedicine</p>
              <p>Urgent care</p>
              <p>Physical care</p>
            </div>

            <div className={styles.fourth + " " + styles.hovereffect}>
              <h4>Quick Links</h4>
              <button onClick={goToTerms}>
                <p>Terms & Conditions</p>
              </button>

              <button onClick={goToPrivacy}>
                <p>Privacy Policy</p>
              </button>

              <Link href="/support-center">
                <p>Site Security</p>
              </Link>
              <Link href="/get-in-touch">
                <p>Contact Us</p>
              </Link>
            </div>

            <div className={styles.fourth}>
              <h4>Contact Information</h4>
              <p>Call Us on: 03333 445 456</p>
              <p>Email us at: zaddytomany@swiftcreations.com.ng</p>
              <div className={styles.fifth}>
                <button>
                  <Image
                    src="/assets/facebook.svg"
                    alt="Website Logo"
                    width={55}
                    height={55}
                  />
                </button>
                <button>
                  <Image
                    src="/assets/youtube.svg"
                    alt="Website Logo"
                    width={55}
                    height={55}
                  />
                </button>
                <button>
                  <Image
                    src="/assets/internet.svg"
                    alt="Website Logo"
                    width={55}
                    height={55}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.six}>
          <p>© 2024, All Rights Reserved</p>
          <p>-</p>
          <p>Swiftcreations.com.ng</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
