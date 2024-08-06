
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
          header: "Bespoke mobile solutions for your business",
          paragraph: "Our mobile solutions are reliable, designed to meet your business needs and fit your budget.",
        },
  
        main_service: {
  
          first: {
              image: "small_business",
              heading: "Small Business",
              paragraph: "Looking for 1 or up to 9 mobiles, we have mobiles solutions for your business"
          },
  
          second: {
              image: "enterprise",
              heading: "Enterprise",
              paragraph: "Our mobile packages are bespoke to your requirements, offering you the ability to collaborate"
          },
  
          third: {
              image: "sim",
              heading: "SIM Only",
              paragraph: "We are able to offer the best SIM only deals for businesses. We work closely with all our partners so that we can help you choose the right SIM only solutions"
          }
  
        },
  
        service_explanation: {
  
          first: {
              image: "choose_right_handset",
              heading: "Choose the right handset",
              paragraph: "Never miss a call again. When you are out of the office, calls will be routed to your mobile."
          },
  
          second: {
              image: "reliable2",
              heading: "Reliable",
              paragraph: "We offer a range of call recording services to support your business for training and quality"
          },
  
          third: {
              image: "choose_the_best_network",
              heading: "Choose the best network",
              paragraph: "Our voice packages are designed to reduce your telecoms costs compared to other providers."
          },
  
          fourth: {
              image: "competitive_rates",
              heading: "Competitive rates",
              paragraph: "We manage your phone system with ease and flexibility to suit your business needs."
          }
  
        },
  
        choose_network: {
  
          first: {
              first_image: "daisy",
              second_image: "nimans",
          },
  
          second: {
              first_image: "o2",
              second_image: "ee",
          },
  
          third: {
              image: "vodafone",
          }
         
        }
  
    }
  
  return (

    <>

        <FirstTitleHeader telephony_data={telephony_data.first_title_header} />

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
