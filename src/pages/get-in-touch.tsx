import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import styles from "@/styles/get-in-touch.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Chat,
  HeadPhone,
  Location,
  PhoneCall,
  SpiralDesign,
} from "@/components/Icons";

const GetInTouch = () => {
  return (
    <>
      <Header />

      <main className="relative">
        <section className={styles.section_one}>
          <div>
            <h1>Contact Us</h1>

            <p>
              We work with the UK&apos;s award winning mobile network providers
              to bring you the best SIM Only deals. We offer flexible monthly
              plans which keep you in control so you&apos;re free to
              change,pause or cancel your plan anytime.Low costs,straightforward
              plans,transparent pricing and flexible deals.
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col ">
          <form className={styles.form}>
            <h1>Fill the form below let&apos;s discuss</h1>

            <ul className="flex flex-col items-start gap-[1.5rem]">
              <li className="flex gap-[0.63rem] w-full flex-col">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  className="mt-[0.37rem] rounded-[0.5rem] border py-[2rem] pl-[1.5rem] border-[#DFDFE0] w-full"
                  placeholder="e.g John Doe"
                  name="name"
                />
              </li>

              <li className="flex gap-[0.63rem] w-full flex-col">
                <label htmlFor="email">Email address</label>

                <input
                  type="email"
                  id="email"
                  className="mt-[0.37rem] rounded-[0.5rem] border py-[2rem] pl-[1.5rem] border-[#DFDFE0] w-full"
                  placeholder="e.g swiftcreations@gmail.com"
                  name="email"
                />
              </li>

              <li className="flex gap-[0.63rem] w-full flex-col">
                <label htmlFor="phone">Phone number</label>

                <input
                  type="tel"
                  id="phone"
                  className="mt-[0.37rem] rounded-[0.5rem] border py-[2rem] pl-[1.5rem] border-[#DFDFE0] w-full"
                  placeholder="+234(815)434-7342"
                  name="phone"
                />
              </li>

              <li className="flex gap-[0.63rem] w-full flex-col">
                <label htmlFor="message">Message</label>

                <textarea
                  cols={20}
                  rows={10}
                  className="mt-[0.37rem] rounded-[0.5rem] border py-[2rem] pl-[1.5rem] border-[#DFDFE0] w-full"
                  id="message"
                  placeholder="Leave us a message"
                  name="message"
                />

                <button
                  type="submit"
                  className="bg-[#1cafcf] self-start"
                  data-btn="primary"
                >
                  Submit
                </button>
              </li>
            </ul>
          </form>
        </section>

        <section className={styles.section_three}>
          <div className="inline-flex flex-col   items-start gap-[7px] pt-[2.5rem] px-[10.5%] ">
            <h2>
              Get in touch today to discuss your Telecoms, Connectivity and IT
              needs today
            </h2>
          </div>

          <ul className="inline-flex   mx-[10.5%] w-[85%] mb-[3.6rem] z-10 mt-[2.5rem]  gap-[1.25rem] justify-between sm:flex-wrap flex-col sm:flex-row">
            <li>
              <Chat />
              <div className="flex flex-col gap-[.75rem] items-start">
                <h3>Chat to sales</h3>

                <p>Speak to our friendly team.</p>
              </div>

              <Link href={"mailto:zaddytomany@swiftcreations.com.ng"}>zaddytomany@swiftcreations.com.ng</Link>
            </li>

            <li>
              <HeadPhone />
              <div className="flex flex-col gap-[.75rem] items-start">
                <h3>Chat to support</h3>

                <p>We are here to help.</p>
              </div>
              <Link href={"mailto:zaddytomany@swiftcreations.com.ng"}>zaddytomany@swiftcreations.com.ng</Link>
            </li>

            <li>
              <PhoneCall />
              <div className="flex flex-col gap-[.75rem] items-start">
                <h3>Call us</h3>

                <p>Mon-Fri from 8am to 5pm.</p>
              </div>

              <Link href={"tel:2348154347342"}>234 (0) 815 434 7342</Link>
            </li>

            <li>
              <Location />
              <div className="flex flex-col gap-[.75rem] ">
                <h3>Location</h3>

                <p>
            2, Albert Macualay, Ikeja, Lagos Nigeria
            </p>
              </div>
            </li>
          </ul>

          <div className="w-[43.81rem] h-[18.13rem] rotate-[-106deg] absolute right-[-21rem] top-[-17rem] ">
            <SpiralDesign />
          </div>

          <div className="w-[43.81rem] h-[18.13rem] rotate-[0deg] absolute left[-4rem] top-[18rem] ">
            <SpiralDesign />
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default GetInTouch;
