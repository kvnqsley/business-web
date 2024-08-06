import Header from "@/components/Header";
import {MouseEventHandler, useEffect, useState} from "react";
import styles from "../../styles/service/service_header.module.css";
import Connectivity from "@/components/Service-Pages/Connectivity";
import Mobile from "@/components/Service-Pages/Mobile";
import Telephony from "@/components/Service-Pages/Telephony";
import Cloud from "@/components/Service-Pages/Cloud";
import ManagedIT from "@/components/Service-Pages/Managed-It-Services";
import {useRouter} from "next/router";

export default function ServiceIndex() {
  const router = useRouter();

  const query = router.query;

  const [selectedService, setSelectedService] = useState(
    query.page || ""
  );

  const handleButtonClick: MouseEventHandler = (e) => {
    const target = e.target as HTMLButtonElement;

    const targetName = target.id;

    setSelectedService(targetName);
  };

  useEffect(() => {
    //console.log(selectedService)
  }, [selectedService]);

  const renderContent = () => {
    //
    switch (selectedService) {
      case "telemedicine":
        return <Telephony />;
      case "pharmacy":
        return <Connectivity />;
      case "physical_service":
        return <Mobile />;
      case "nutrition_and_wellness":
        return <Cloud />;
   
      default:
        return <div>Default Content Here</div>;
    }
  };

  return (
    <>
      <Header />

      <div className={styles.header}>
        <div className={styles.nav}>
          <ul className={styles.nav_links}>
            <button
              className={
                selectedService == ""
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id=""
            >
TELEMEDICINE            </button>
            <button
              className={
                selectedService == "pharmacy"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="pharmacy"
            >
              PHAMRMACY
            </button>
            <button
              className={
                selectedService == "physical_service"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="physical_service"
            >
              PHYSICAL SERVICES
            </button>
            <button
              className={
                selectedService == "nutrition_and_wellness"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="nutrition_and_wellness"
            >
              NUTRITION AND WELLNESS
            </button>
          
          </ul>
        </div>
      </div>

      {renderContent()}
    </>
  );
}
