
import FirstTitleHeader from '@/components/Service/Service-First-Title-Header'
import MainService from "@/components/Service/Service-Main-Services";
import SecondTitleHeader from "@/components/Service/Service-Second-Title-Header"
import ServiceExplanations from "@/components/Service/Service-Explanations"
import ServiceContactUs from "@/components/Service/Service-Contact-Us"
import ServiceUsedBy from "@/components/Service/Service-Used-By"
import Footer from "@/components/Footer"

const Connectivity = () => {

    const telephony_data = {

        first_title_header: {
          header: "Bespoke connectivity solutions",
          paragraph: "Our connectivity solutions are reliable, designed to meet your business needs and fit your budget.",
        },
  
        main_service: {
  
          first: {
              image: "fibre",
              heading: "Fibre Connection",
              paragraph: "Fibre Broadband is an ideal solution for businesses who rely on a fast, high performing internet connection"
          },
  
          second: {
              image: "ethernet",
              heading: "Ethernet Connection",
              paragraph: "A dedicated, business-grade internet connection with extremely reliable speeds, ranging from 10Mbps to 10Gps."
          },
  
          third: {
              image: "broadband",
              heading: "Broadband Connection",
              paragraph: "Providing a step up from traditional home broadband solutions, ADSL Broadband offers your business more resilience and speed."
          }
  
        },
  
        service_explanation: {
  
          first: {
              image: "superfast_rocket",
              heading: "Superfast connections",
              paragraph: "Never miss a call again. When you are out of the office, calls will be routed to your mobile."
          },
  
          second: {
              image: "reliable1",
              heading: "Reliable",
              paragraph: "We offer a range of call recording services to support your business for training and quality"
          },
  
          third: {
              image: "4gassured",
              heading: "4G Assured",
              paragraph: "Our voice packages are designed to reduce your telecoms costs compared to other providers."
          },
  
          fourth: {
              image: "rapid_installation",
              heading: "Rapid installation times",
              paragraph: "We manage your phone system with ease and flexibility to suit your business needs."
          }
  
        }
  
      }
  
  return (

    <>

        <FirstTitleHeader telephony_data={telephony_data.first_title_header} />

        <MainService main_service_data={telephony_data.main_service} />

        <SecondTitleHeader />

        <ServiceExplanations service_explanation_data={telephony_data.service_explanation} />

        <ServiceContactUs />

        <ServiceUsedBy />

        <Footer />
      </>
    
  );
};

export default Connectivity;
