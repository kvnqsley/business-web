
import FirstTitleHeader from '@/components/Service/Service-First-Title-Header'
import MainService from "@/components/Service/Service-Main-Services";
import SecondTitleHeader from "@/components/Service/Service-Second-Title-Header"
import ServiceExplanations from "@/components/Service/Service-Explanations"
import ServiceContactUs from "@/components/Service/Service-Contact-Us"
import ServiceUsedBy from "@/components/Service/Service-Used-By"
import Footer from "@/components/Footer"

const Mobile = () => {

    const telephony_data = {

        first_title_header: {
          header: "Business Telephony tailor-made for you",
          paragraph: "Our voice services ensures that your customers can reach you when they need, all the time!",
        },
  
        main_service: {
  
          first: {
              image: "cloudpbx",
              heading: "Flexible Communication",
              paragraph: "Our Cloud PBX is simple and effective for single-site, multi-site and distributed workforce"
          },
  
          second: {
              image: "3cx",
              heading: "Unified Communication",
              paragraph: "Enterprise-grade unified communication system deployed by certified engineers"
          },
  
          third: {
              image: "sip",
              heading: "Resilient Communication",
              paragraph: "Transform your PBX with resilient and reliable SIP Trunks to communicate with your clients more effectively"
          }
  
        },
  
        service_explanation: {
  
          first: {
              image: "emailicon",
              heading: "Voicemail-2-Email",
              paragraph: "Never miss a call again. When you are out of the office, calls will be routed to your mobile."
          },
  
          second: {
              image: "portraiticon",
              heading: "Call Recording",
              paragraph: "We offer a range of call recording services to support your business for training and quality"
          },
  
          third: {
              image: "barchart",
              heading: "Reduce your costs",
              paragraph: "Our voice packages are designed to reduce your telecoms costs compared to other providers."
          },
  
          fourth: {
              image: "dartdot",
              heading: "Support and Maintenance",
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

export default Mobile;
