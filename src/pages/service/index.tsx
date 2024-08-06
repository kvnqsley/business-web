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
    query.page || "business-telephony"
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
      case "business-telephony":
        return <Telephony />;
      case "business-connectivity":
        return <Connectivity />;
      case "business-mobile":
        return <Mobile />;
      case "cloud-services":
        return <Cloud />;
      case "managed-it-services":
        return <ManagedIT />;
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
                selectedService == "business-telephony"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="business-telephony"
            >
              BUSINESS TELEPHONY
            </button>
            <button
              className={
                selectedService == "business-connectivity"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="business-connectivity"
            >
              BUSINESS CONNECTIVITY
            </button>
            <button
              className={
                selectedService == "business-mobile"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="business-mobile"
            >
              BUSINESS MOBILES
            </button>
            <button
              className={
                selectedService == "cloud-services"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="cloud-services"
            >
              CLOUD SERVICES
            </button>
            <button
              className={
                selectedService == "managed-it-services"
                  ? styles.nav_links_button
                  : styles.nav_links_li
              }
              onClick={handleButtonClick}
              id="managed-it-services"
            >
              MANAGED IT SERVICES
            </button>
          </ul>
        </div>
      </div>

      {renderContent()}
    </>
  );
}
