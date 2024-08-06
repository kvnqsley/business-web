import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrivacyPolicy from "@/components/Privacy-policy";
import TermsAndConditions from "@/components/TermsAndConditions";
import styles from "@/styles/contact.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import {MouseEventHandler, useEffect, useState} from "react";

const ContactUs = () => {
  const router = useRouter();

  const [selectedTerms, setSelectedTerms] = useState("Broadband & Fibre");

  const [selectedMenu, setSelectedMenu] = useState(
    router.query.state || "Terms And Conditions"
  );

  useEffect(() => {
    router.query.state && setSelectedMenu(router.query.state);
  }, [router.query.state]);

  const selectTerms: MouseEventHandler = (e) => {
    const target = e.target as HTMLButtonElement;

    const targetName = target.innerText;
    setSelectedTerms(targetName);
  };

  const selectMenu: MouseEventHandler = (e) => {
    router.replace("/support-center");
    const target = e.target as HTMLButtonElement;

    const targetName = target.innerText;

    setSelectedMenu(targetName);
  };

  return (
    <>
      <Header />

      <main className="w-full">
        <section className={styles.section_one}>
          <div>
            <h1>We&apos;re here to help</h1>

            <h2>Have question? We&apos; here to help</h2>

            <button className="py-0 px-[2.5rem] flex flex-col justify-center items-center h-[3.1rem] rounded-[0.53rem] bg-[#fff]">
              <Link href={"/get-in-touch"}>Get started</Link>
            </button>
          </div>
        </section>

        <section className={styles.section_two}>
          <div className="self-start flex-row sm:flex-col mt-[2.31rem] ">
            <button
              onClick={selectMenu}
              className={`${
                selectedMenu == "Terms And Conditions" ||
                router.query.state === "Terms And Conditions"
                  ? "lg:border-r-[0.38rem]  lg:border-r-[#1c68f5]  text-[#1c68f5]"
                  : ""
              } `}
            >
              Terms and Conditions
            </button>

            <button
              onClick={selectMenu}
              className={`${
                selectedMenu == "Privacy Policy" ||
                router.query.state === "privacy"
                  ? "lg:border-r-[0.38rem]  lg:border-r-[#1c68f5]  text-[#1c68f5]"
                  : ""
              }`}
            >
              Privacy Policy
            </button>

            <button
              onClick={selectMenu}
              className={`${
                selectedMenu == "Frequently Asked Questions"
                  ? "lg:border-r-[0.38rem]  lg:border-r-[#1c68f5]  text-[#1c68f5]"
                  : ""
              }`}
            >
              Frequently Asked Questions
            </button>
          </div>

          {selectedMenu === "Terms And Conditions" && (
            <TermsAndConditions
              selectTerms={selectTerms}
              selectedTerms={selectedTerms}
            />
          )}

          {selectedMenu == "Frequently Asked Questions" && (
            <ul className={styles.faq}>
              <li>
                <h3>How Do i Setup My VoIP?</h3>

                <p>
                  You need Broadband internet connection. The more call volume
                  you have the higher the bandwidth you will need. We have low
                  call volume and are using a 7Mbps/700Kbps connection, this has
                  been plenty of bandwidth for us. Wired Ethernet router. You
                  have a ton of options here but your budget will likely decide
                  this one
                </p>
              </li>

              <li>
                <h3>How Secure Is VoIP?</h3>

                <p>
                  Security for VoIP uses industry standard encryption technology
                  such as SSL and VPN.
                </p>
              </li>

              <li>
                <h3>Can VoIP receive calls from PSTN?</h3>

                <p>VoIP is fully compatible with calls to/from PSTN lines.</p>
              </li>

              <li>
                <h3>What is SIP Trunking?</h3>

                <p>
                  It is quickly becoming a universal standard to adopt SIP
                  (Session Initiation Protocol) for business communication
                  purposes. This standard is used by SIP Trunking to enable
                  businesses to make calls and receive calls through traditional
                  telephone lines by means of VoIP (Voice Over Internet
                  Protocol). This is done through data networks. In addition,
                  SIP trunking enables you to combine both voice and data over a
                  single network connection. This benefit will almost certainly
                  save you a significant amount of money and time. We offer both
                  managed and unmanaged IPVPN services, allowing you to make the
                  most out of your existing network. We can also connect you to
                  a wide range of other devices and PBX systems.
                </p>
              </li>

              <li>
                <h3>What Is ADSL?</h3>

                <p>
                  The acronym stands for Asymmetric Digital Subscriber Line. It
                  is technology that allows you to connect to the internet by
                  using existing telephone networks. It is connected at all
                  times and it provides very fast access due to the fact that it
                  is extremely efficient when converting data. It also use a
                  much wider frequency range than ordinary modems.
                </p>
              </li>
            </ul>
          )}

          {selectedMenu == "Frequently Asked Questions" && <PrivacyPolicy />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
