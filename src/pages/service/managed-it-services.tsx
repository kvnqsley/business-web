import SubHeader from "@/components/Service/Service-Header";
import FirstTitleHeader from "@/components/Service/Service-First-Title-Header"
import MainService from "@/components/Service/Service-Main-Services";
import SecondTitleHeader from "@/components/Service/Service-Second-Title-Header"
import ServiceExplanations from "@/components/Service/Service-Explanations"
import ServiceContactUs from "@/components/Service/Service-Contact-Us"
import ServiceUsedBy from "@/components/Service/Service-Used-By"
import Footer from "@/components/Footer"
import ServiceHowWeManage from "@/components/Service/Service-How-We-Manage"
import Header from "@/components/Header";

export default function Home() {

    const telephony_data = {

      first_title_header: {
        header: "The Managed IT Services we provide",
        paragraph: null,
      },

      main_service: {

        first: {
            image: "cloudpbx",
            heading: "End User Computing Support",
            paragraph: "We provide day to day support and management of your End User Computer environments"
        },

        second: {
            image: "3cx",
            heading: "Infrastructure Support",
            paragraph: "Our Infrastructure team work to monitor and manage your infrastructure’s availability, performance and health"
        },

        third: {
            image: "sip",
            heading: "Managed Print Service",
            paragraph: "We offer a range of call recording services to support your business for training and quality"
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

        <Header />

        <SubHeader />

        <FirstTitleHeader telephony_data={telephony_data.first_title_header} />

        <MainService main_service_data={telephony_data.main_service} />

        <ServiceHowWeManage />

        <ServiceContactUs />

        <ServiceUsedBy />

        <Footer />
      </>
    );
}