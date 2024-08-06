import Link from "next/link";
import styles from "@/styles/home.module.css";
import {Chat, HeadPhone, Location, PhoneCall, SpiralDesign} from "./Icons";

const Contact = () => {
  return (
    <section className={styles.hero_section_five}>
      <div className="inline-flex flex-col justify-center m-auto mx-[10.5%] items-center gap-[7px] p-x[3rem] mt-[5rem] md:p-auto">
        <h1>We&apos;d love to hear from you</h1>

        <h2>Our friendly teams is always here to chat</h2>
      </div>

      <ul className="inline-flex   w-[85%] mx-[10.5%] mb-[3.6rem] z-10 mt-[2.5rem]  gap-[1.25rem] sm:flex-wrap flex-col sm:flex-row">
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
            <h3>Registered Office</h3>

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
  );
};

export default Contact;
