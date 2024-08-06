import Image from "next/image";
import styles from "../../styles/service/service_used_by.module.css";

const ServiceUsedBy = () => {
  const data = {
    main_service: {
      first: {
        image: "image",
        heading: "heading",
        paragraph: "paragraph",
      },

      second: {
        image: "image",
        heading: "heading",
        paragraph: "paragraph",
      },

      third: {
        image: "image",
        heading: "heading",
        paragraph: "paragraph",
      },
    },
  };

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.first}>
          <h2>Used by UK Businesses</h2>
        </div>

        <div className={styles.second}>
          <div className={styles.third}>
            <Image
              src="/assets/legal_service.png"
              alt="Legal Service"
              width={293}
              height={202}
            />
            <h4>Legal Service</h4>
            <p>
              We offer you a choice of simple and sophisticated business phone
              lines and voice services to suit your business needs.
            </p>
          </div>
          <div className={styles.third}>
            <Image
              src="/assets/adult_social.png"
              alt="Legal Service"
              width={293}
              height={202}
            />
            <h4>Adult Social Healthcare</h4>
            <p>
              Our flexibily and simple phone systems, enable clients in the
              Social care sector to provide a person-centered care service.
            </p>
          </div>
          <div className={styles.third}>
            <Image
              src="/assets/property_management.png"
              alt="Legal Service"
              width={293}
              height={202}
            />
            <h4>Property Management Services</h4>
            <p>
              Our flexibily and simple phone systems, enable clients in the
              Social care sector to provide a person-centered care service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceUsedBy;
