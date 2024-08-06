
import FirstTitleHeader from '@/components/Service/Service-First-Title-Header'
import MainService from "@/components/Service/Service-Main-Services";
import SecondTitleHeader from "@/components/Service/Service-Second-Title-Header"
import ServiceExplanations from "@/components/Service/Service-Explanations"
import ServiceContactUs from "@/components/Service/Service-Contact-Us"
import ServiceUsedBy from "@/components/Service/Service-Used-By"
import ChooseNetwork from "@/components/Service/Service-Choose-Network";
import Footer from "@/components/Footer"

const Mobile = () => {

    const telephony_data = {

        first_title_header: {
          header: "Software as a service",
          paragraph: "Cloud enables higher productivity as an always-on solution that scales with the needs of your business.",
        },
  
        main_service: {
  
          first: {
              image: "sas",
              heading: "Software as a service",
              paragraph: "Our Software as a service (SaaS) allows your business users to connect to and use cloud-based apps over the Internet. Our SaaS provides complete software solutions."
          },
  
          second: {
              image: "pas",
              heading: "Platform as serivice",
              paragraph: "Our platform as a Service or PaaS is a set of cloud-based services that enables your business users and developers to build applications at a speed that on-premise solutions cannot match."
          },
  
          third: {
              image: "ias",
              heading: "Infrastructure as a service",
              paragraph: "We offer Infrastructure as a service (IaaS) which is a form of cloud computing that provides virtual computing resources over the internet. This is an instant computing infrastructure, provisioned and managed over the internet."
          }
  
        },
  
        service_explanation: {
  
          first: {
              image: "secured",
              heading: "Secured",
              paragraph: "Cloud security is a top priority hence why we have partnered with platform owners who understand this."
          },
  
          second: {
              image: "reliable3",
              heading: "Reliable",
              paragraph: "Our cloud partners continuously monitor, improve and support their platform."
          },
  
          third: {
              image: "scalable",
              heading: "Scalable",
              paragraph: "The cloud platforms are flexible and scalable to meet your business requirements"
          },
  
          fourth: {
              image: "expertise",
              heading: "Expertise",
              paragraph: "Our team members are qualified and certified on the platforms of our cloud service partners."
          }
  
        },
  
        choose_network: {
  
          first: {
              first_image: "microsoft_azure",
              second_image: "dropbox",
          },
  
          second: {
              first_image: "office365",
              second_image: "ovh",
          },
  
          third: {
              image: "google",
          }
         
        }
  
    }
  
  return (

    <>
        <FirstTitleHeader detail={telephony_data.first_title_header} />

        <MainService main_service_data={telephony_data.main_service} />

        <SecondTitleHeader />

        <ServiceExplanations service_explanation_data={telephony_data.service_explanation} />

        <ChooseNetwork choose_network={telephony_data.choose_network} />

        <ServiceContactUs />

        <ServiceUsedBy />

        <Footer />
      </>
    
  );
};

export default Mobile;
