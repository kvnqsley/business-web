
import FirstTitleHeader from '@/components/Service/Service-First-Title-Header'
import MainService from "@/components/Service/Service-Main-Services";
import ServiceHowWeManage from "@/components/Service/Service-How-We-Manage"
import ServiceContactUs from "@/components/Service/Service-Contact-Us"
import ServiceUsedBy from "@/components/Service/Service-Used-By"
import Footer from "@/components/Footer"

const Mobile = () => {

    const telephony_data = {

        first_title_header: {
          header: "The Managed IT Services we provide",
          paragraph: null,
        },
  
        main_service: {
  
          first: {
              image: "eucs",
              heading: "End User Computing Support",
              paragraph: "We provide day to day support and management of your End User Computer environments"
          },
  
          second: {
              image: "is",
              heading: "Infrastructure Support",
              paragraph: "Our Infrastructure team work to monitor and manage your infrastructure’s availability, performance and health"
          },
  
          third: {
              image: "mps",
              heading: "Managed Print Service",
              paragraph: "We offer a range of call recording services to support your business for training and quality"
          },

          fourth: {
              image: "hds",
              heading: "24/7 Help Desk Support",
              paragraph: "Our UK-based Managed IT Service Desk, ready to assist your organisation 24/7/365"
          },

          fifth: {
              image: "das",
              heading: "Data & Analytics Services",
              paragraph: "Our team will work with you to design and implement Data and Analytics services."
          }
  
        },
  
        service_explanation: {
  
          first: {
              image: "emailicon",
              heading: "Secured",
              paragraph: "Cloud security is a top priority hence why we have partnered with platform owners who understand this."
          },
  
          second: {
              image: "portraiticon",
              heading: "Reliable",
              paragraph: "Our cloud partners continuously monitor, improve and support their platform."
          },
  
          third: {
              image: "barchart",
              heading: "Scalable",
              paragraph: "The cloud platforms are flexible and scalable to meet your business requirements"
          },
  
          fourth: {
              image: "dartdot",
              heading: "Expertise",
              paragraph: "Our team members are qualified and certified on the platforms of our cloud service partners."
          }
  
        }
  
    }
  
  return (

    <>
        <FirstTitleHeader telephony_data={telephony_data.first_title_header} />

        <MainService main_service_data={telephony_data.main_service} />

        <ServiceHowWeManage />

        <ServiceContactUs />

        <ServiceUsedBy />

        <Footer />
      </>
    
  );
};

export default Mobile;
