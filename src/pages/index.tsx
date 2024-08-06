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
              Transforming Lives, One Patient at a Time
              </b>

              <div className={styles.hero_section_one_header_sub_text}>
                <h6>Experience personalized care, tailored to your unique needs</h6>

                <p>
                At Swift Creations, we&apos;ve been dedicated to enhancing the well-being of our valued patients by crafting personalized and affordable healthcare solutions, and providing unparalleled access to our team of compassionate and expert medical professionals who deliver exceptional care and support, going above and beyond for every individual.
                </p>
              </div>
            </div>
            <Link href="/get-in-touch">
              <button data-btn="primary" className="bg-[#1cafcf]">
              Learn More
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


        <section className={styles.hero_section_three}>
          <div className="flex flex-col items-center gap-[4.31rem]">
            <div className="flex flex-col items-center gap-[0.5rem]">
              <h1>Health Services</h1>

              <h2>Expert solutions and services for businesses.</h2>
            </div>

            <ul className="flex flex-col lg:flex-row   gap-[1.63rem]">
              <li>
                <Telephone />

                <div>
                  <h3>Primary care</h3>

                  <p>
                  Comprehensive routine check-ups, preventive care, and treatment for common illnesses, helping you stay healthy and thrive.

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
                  <h3>Specialized care</h3>

                  <p>
                  Expert medical attention for specific conditions, from diagnosis to treatment and management, with a focus on achieving optimal outcomes.

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
                  <h3>Urgent Care</h3>

                  <p>
                  Prompt and effective treatment for non-life-threatening emergencies, getting you back on your feet quickly and safely.

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
                  <h3>Pharmacy Services</h3>

                  <p>
                  Convenient access to medications, expert advice, and personalized support, ensuring you get the most from your treatment.

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
          <h1>Supportive service</h1>

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
                <h2>Telemedicine</h2>

                <p>
                Flexible virtual consultations and remote monitoring, bringing healthcare to your doorstep and streamlining care.

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
                  <h2>Physical Therapy</h2>

                  <p>
                  Compassionate counseling, therapy, and support for mental wellness, helping you navigate life&apos;s challenges.

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
                    <h2>Nutrition and Wellness</h2>

                    <p>
                    Guidance on healthy eating, fitness, and lifestyle choices, supporting your journey to wellness and optimal health.

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
