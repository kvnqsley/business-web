import Header from "@/components/Header";
import {HandShake, Support, Talk4Design, Tech} from "@/components/Icons";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import RequestQuote from "@/components/RequestQuote";
import Footer from "@/components/Footer";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import {MouseEventHandler, useState} from "react";

const About = () => {
  const [active, setActive] = useState(1);

  const selectPage: MouseEventHandler = (e) => {
    const target = e.target as HTMLButtonElement;
    setActive(parseInt(target.id));
  };

  return (
    <>
      <Header />

      <main>
        <section className={styles.section_one}>
          <div>
            <h1>ABOUT TALK4BUSINESS</h1>

            <h2>Our Mission</h2>

            <p>
              We currently provide Telecoms, Network and Managed IT services to
              over 500 businesses in the UK. Our fusion of complementary
              technologies and strategic partnerships means we can deliver
              bespoke solutions for our clients.
            </p>
          </div>
        </section>

        <Partners />

        <section className={styles.section_two}>
          <div className="md:w-[40%] flex-col justify-center  w-auto flex w-[">
            <h1>What is Talk 4?</h1>

            <div className="mt-[5rem]  text-center">
              <Talk4Design />
            </div>
          </div>

          <p>
            Talk4 Telecom is a UK independent business telecommunications
            provider delivering fixed line, mobile, unified communications,
            connectivity and cloud solutions. Our service capability also
            includes world-class Managed IT Services.
            <br />
            <br />
            We have achieved substantial growth through investment in our
            people, technology and processes &dash; our priority is always to
            deliver unparalleled customer service at every level.
            <br />
            <br />
            We have partnered with the best technology and communications
            partners globally to offer our customers the pick of the best
            solutions on the market. No two businesses are the same so we pride
            ourselves on understanding our customers and tailoring solutions
            that meet their specific needs.
            <br />
            But as our customers will tell you, it&apos;s not just the
            innovation and the brilliant customer support they value. They also
            value our ethos as their trusted partner working with them to design
            and deliver their solution on time and on budget.
            <br />
            <br />
            Based in Hertfordshire, we operate a UK-wide network and we are
            trusted by over 1,000 customers across the UK.
          </p>
        </section>

        <section className={styles.section_three}>
          <ul>
            <li>
              <Tech />
            </li>

            <li>
              <h1>Our Technology</h1>

              <p>
                The foundation of our business is underpinned by cloud
                technology solutions. It is this the technology which underpins
                the services we deliver &dash; providing bespoke, flexible and
                cost effective technology solutions
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <HandShake />
            </li>

            <li>
              <h1>Our Partners</h1>

              <p>
                We have established strategic partnerships with Tier-1 telecom,
                internet and cloud serivces companies in the UK to ensure that
                we are able to provide our clients with innovative bespoke
                solutions tailore-made for their businesses{" "}
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <Support />
            </li>

            <li>
              <h1>Customer Service</h1>

              <p>
                Our focus is providing our customers with guaranteed, industry
                leading SLAs. We understand the serious impact that any
                communication issues or downtime can have on your business and
                for that reason we have a dedicated team to support you{" "}
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.section_four}>
          <ul>
            <li>
              <div className="flex items-start gap-[1.23rem]">
                <Image
                  width={64}
                  height={64}
                  alt="author image"
                  className="rounded-[12.5rem] object-contain"
                  src={"/assets/elena.png"}
                />

                <div>
                  <h1>Elena</h1>

                  <h2>Manager at Bergamo Solutions</h2>
                </div>
              </div>

              <p>
                Since the move to Talk4 Telecoms, all of Talk4&apos;s assurances
                on cost and service have in fact exceeded our expectations.
              </p>
            </li>

            <li>
              <div className="flex items-start gap-[1.23rem]">
                <Image
                  width={64}
                  height={64}
                  alt="author image"
                  className="rounded-[12.5rem] object-contain"
                  src={"/assets/sarah.png"}
                />

                <div>
                  <h1>Preet</h1>

                  <h2>Care Manager , Trends Healthcare</h2>
                </div>
              </div>

              <p>
                Talk4 Telecoms were able to provide us with a fully integrated
                telecoms system which allows us to provide a better service to
                our customers
              </p>
            </li>

            <li>
              <div className="flex items-start gap-[1.23rem]">
                <Image
                  width={64}
                  height={64}
                  alt="author image"
                  className="rounded-[12.5rem] object-contain"
                  src={"/assets/preet.png"}
                />

                <div>
                  <h1>Sarah</h1>

                  <h2>Manager at Bergamo Solutions</h2>
                </div>
              </div>

              <p>
                The support we get from Talk4 Telecoms is prompt and ! Talk4
                provide our connectivity, telecoms and managed services.
              </p>
            </li>
          </ul>

          <ul className="flex m-auto items-center gap-[0.63rem] ">
            {Array(5)
              .fill("a")
              .map((el, index) => (
                <li key={el} className="rounded w-[0.75rem] h-[0.75rem]">
                  <button
                    onClick={selectPage}
                    id={String(index)}
                    className={`${
                      active === index
                        ? "bg-[#1C55CE]"
                        : "border-[#8E8EA1] border-[0.08rem] "
                    }  rounded-[50%] h-full w-full `}
                  ></button>
                </li>
              ))}
          </ul>
        </section>
        {/* --------some sections in between -------------- */}

        <RequestQuote />
        <Newsletter />

        <Footer />
      </main>
    </>
  );
};

export default About;
