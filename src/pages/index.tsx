import Header from "@/components/Header";
import Image from "next/image";
import styles from "@/styles/home.module.css";
import {
  ArcDesign,
  ArrowRight,
  Chat,
  Cloud,
  Connectivity,
  HeadPhone,
  Location,
  Mobiles,
  PhoneCall,
  SpiralDesign,
  Telephone,
} from "@/components/Icons";
import Link from "next/link";
import RequestQuote from "@/components/RequestQuote";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full overflow-hidden">
        <section className={styles.hero_section_one}>
          <div className={styles.hero_section_one_header}>
            <div className="flex flex-col gap-[1.06rem]">
              <b className={styles.hero_section_one_header_main_text}>
                TRANSFORMING TELECOMS FOR
              </b>

              <div className={styles.hero_section_one_header_sub_text}>
                <h6>SMALL AND MEDIUM BUSINESES</h6>

                <p>
                  At Talk4 Telecoms has been empowering its ever growing and
                  fiercely loyal clientele by creating cost-effective and
                  bespoke packages and providing unlimited access to highly
                  trained and dedicated service and support teams who go the
                  extra mile for any customer
                </p>
              </div>
            </div>
            <Link href="/get-in-touch">
              <button data-btn="primary" className="bg-[#1c68f5]">
                Talk to sale person
              </button>
            </Link>
          </div>

          <div className={styles.hero_section_one_body}>
            <div className={`${styles.hero_section_one_body_image_group} `}>
              <Image
                src={"/assets/tower.png"}
                width={201}
                height={116}
                alt="tower"
                className="rounded-[.5rem] max-h-[31%] max-w-[51%] ml-auto "
              />

              <Image
                src={"/assets/engineer-taking-a-picture.png"}
                width={417}
                height={240}
                alt="engineer"
                className="rounded-[1rem] flex-1"
              />
            </div>

            <Image
              src={"/assets/phone-on-finger.png"}
              width={369}
              height={265}
              alt="man-with-phone"
              className="rounded-[1.1rem]  md:w-auto w-[25%] h-[9rem]  sm:h-[90%]"
            />

            <div className={`${styles.hero_section_one_body_image_group} `}>
              <Image
                src={"/assets/friends-admiring-content.png"}
                width={417}
                height={240}
                alt="friends"
                className="rounded-[1rem]"
              />

              <Image
                src={"/assets/three-on-a-call.png"}
                width={201}
                height={116}
                alt="people over a call"
                className="rounded-[.5rem]"
              />
            </div>
          </div>

          <div className="w-[34.19rem] h-[35.3rem] absolute left-0 top-0 rotate-[-13deg]">
            <ArcDesign />
          </div>

          <div className="w-[34.19rem] h-[35.3rem] absolute right-[-8%] top-0 rotate-[-133deg]">
            <ArcDesign />
          </div>
        </section>

        <Partners />

        <section className={styles.hero_section_three}>
          <div className="flex flex-col items-center gap-[4.31rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <h1>Telecoms Services</h1>

              <h2>Expert solutions and services for businesses.</h2>
            </div>

            <ul className="flex flex-col lg:flex-row   gap-[1.63rem]">
              <li>
                <Telephone />

                <div>
                  <h3>Business Telephony</h3>

                  <p>
                    With Talk4 Telecoms, you can achieve a level of flexibility
                    and efficiency that traditional on-site telephony services
                    do not offer.
                  </p>
                </div>

                <Link href={"/service?page=business-telephony"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </li>

              <li>
                <Connectivity />

                <div>
                  <h3>Connectivity</h3>

                  <p>
                    With our business connectivity services, you business can
                    communicate with customers and employees.
                  </p>
                </div>

                <Link href={"/service?page=business-connectivity"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </li>

              <li>
                <Mobiles />

                <div>
                  <h3>Mobiles</h3>

                  <p>
                    As a leading independent telecoms provider in the UK, Talk4
                    Telecoms can help you find the right mobile solution for
                    your business.
                  </p>
                </div>

                <Link href={"/service?page=business-mobile"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </li>

              <li>
                <Cloud />

                <div>
                  <h3>Cloud</h3>

                  <p>
                    Revolutionise your business with the cloud and enjoy a
                    smooth, uninterrupted journey to the cloud with our range of
                    services.
                  </p>
                </div>

                <Link href={"/service?page=cloud-services"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.hero_section_four}>
          <h1>Business services</h1>

          <ul className="inline-flex m-auto w-[83%]  gap-[2.38rem] flex-col xl:flex-row  justify-center">
            <li className="bg-[#ffffff]  ">
              <Image
                width={481}
                height={388}
                alt="managed services"
                src={"/assets/man-global.png"}
                className="rounded-t-lg  w-full"
              />

              <div className="inline-flex flex-col  gap-[.5rem] p-[1.2rem]">
                <h2>Managed Services</h2>

                <p>
                  In a fast-changing, digital-first business world, IT
                  innovation is key for SMEs to compete more effectively.
                </p>

                <Link href={"/service?page=managed-it-services"}>
                  Learn More
                  <ArrowRight />
                </Link>
              </div>
            </li>

            <li className="flex h-full gap-[1.88rem] flex-col ">
              <div className={styles.card}>
                <div className="flex order-2 sm:order-1 flex-col items-start gap-[0.5rem] pl-[1.2rem]">
                  <h2>Unified Communications</h2>

                  <p>
                    We offer you a choice of simple and sophisticated business
                    phone lines and voice services to suit your business needs.
                  </p>

                  <Link href={"/service?page=business-telephony"}>
                    Learn More
                    <ArrowRight />
                  </Link>
                </div>

                <Image
                  src={"/assets/thumbstacks.png"}
                  width={268}
                  height={302}
                  alt="thumbstacks"
                  className="rounded-t-lg sm:rounded-e-lg w-full lg:w-auto order-1 sm:order-2 h-full"
                />
              </div>

              <div className={styles.card}>
                <div className="flex flex-col items-start gap-[0.5rem] order-2 sm:order-1 pl-[1.2rem]">
                  <div>
                    <h2>Digital Transformation</h2>

                    <p>
                      Revolutionaries your business with the cloud and enjoy a
                      smooth, uninterrupted journey to the cloud with our range
                      of services
                    </p>
                  </div>

                  <Link href={"/support-center"}>
                    Interested? Contact us
                    <ArrowRight />
                  </Link>
                </div>

                <Image
                  src={"/assets/woman-ai.png"}
                  width={268}
                  height={302}
                  alt="thumbstacks"
                  className="rounded-t-lg lg:rounded-e-lg order-1 sm:order-2  w-full lg:w-auto h-full"
                />
              </div>
            </li>
          </ul>
        </section>

        <Contact />

        <RequestQuote />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
