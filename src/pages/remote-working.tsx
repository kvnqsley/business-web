import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Arrow,
  AutoMessage,
  BlueCurvedArrow,
  CallRecording,
  CallRecords,
  CallTransfer,
  Clerk,
  Clock,
  ConferenceCall,
  Desk,
  Graph,
  HomePhone,
  Idea,
  IncomingCall,
  LandLine,
  Laptop,
  MobilePhone,
  OpenEmail,
  RedCurvedArrow,
  SoftPhone,
  Storage,
  ZigZagArrow,
} from "@/components/Icons";
import Newsletter from "@/components/Newsletter";
import ServiceUsedBy from "@/components/Service/Service-Used-By";
import styles from "@/styles/remote-working.module.css";
import {Rcvector, Vector227, Vector336} from "@/components/Icons";
import Image from "next/image";

const RemoteWorking = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.section_one}>
          <h1>Remote Working</h1>

          <p>
            Remote Cloud Phone System . Works With Existing Supplier . Quick
            Setup
          </p>
        </section>

        <section className="flex flex-col text-center  items-center sm:mt-[4.8rem]  sm:mb-[6.1rem] sm:scale-[1.4] scale-[0.75] w-full">
          <div className="px-[0.34613rem]  flex flex-col gap-[0.22rem] items-center border-[0.7px] border-[#1c68f5] rounded-[0.13rem] h-[1.5rem]">
            <b className="text-[0.43rem]  font-medium leading-[0.78rem]">
              Your number
            </b>
          </div>
          <Arrow />
          <div className="px-[0.34613rem] text-center  flex flex-col gap-[0.22rem] items-center border-[0.7px] border-[#1c68f5] rounded-[0.13rem] h-[1.5rem]">
            <b className="text-[0.43rem]  font-medium leading-[0.78rem]">
              Divert
            </b>
          </div>{" "}
          <Arrow />
          <div className="flex">
            <RedCurvedArrow />

            <div className=" px-[0.75719rem] py-[0.34613rem] flex flex-col gap-[0.22rem] items-center border-[0.7px] border-[#1c68f5] h-[2.6rem] rounded-[0.13rem]">
              <b className="text-[0.43rem]  font-medium leading-[0.78rem]">
                Hosted phone System
              </b>

              <Image
                src={"/assets/logo.png"}
                alt="talk4businesses logo"
                width={48}
                height={14}
              />
            </div>

            {/* <ZigZagArrow /> */}
            <BlueCurvedArrow />
          </div>
          <div className="flex mt-[1rem] gap-[0.56rem]">
            <div className=" shadow-[0_2.1px_16.62px_0px_rgba(48,48,48,0.03)] rounded-[0.26rem] border-[0.35px] w-[7.79rem] px-[0.48rem]  py-[0.73rem] border-[#FFECF6] bg-[#FFF8FA]">
              <div className="text-center">
                <h1 className="text-[0.52rem] font-medium leading-[0.78rem]">
                  Home worker&apos;s
                </h1>

                <h2 className="text-[0.3rem] font-[400] leading-[147%] text-[#667085]">
                  Make &amp; Receive Calls
                </h2>
              </div>

              <h3 className="mt-[0.44rem] font-medium leading-[0.78rem] text-[0.48rem] ">
                Inbound
              </h3>

              <ul className="flex items-end gap-[0.37rem] w-full">
                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <HomePhone />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Home phone
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <MobilePhone />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Mobile phone
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <Laptop />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Laptop
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <SoftPhone />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Soft phone
                  </small>
                </li>
              </ul>

              <h3 className="mt-[0.44rem] font-medium leading-[0.78rem] text-[0.48rem] ">
                Outbound
              </h3>

              <ul className="flex items-end gap-[0.37rem] w-full">
                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <MobilePhone />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Mobile phone
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <Laptop />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Laptop
                  </small>
                </li>
              </ul>
            </div>

            <div className=" shadow-[0_2.1px_16.62px_0px_rgba(48,48,48,0.03)] rounded-[0.26rem] border-[0.35px] w-[7.79rem] px-[0.48rem]  py-[0.73rem] border-[#F3F6FD] bg-[#FFF]">
              <h1 className="text-[0.52rem] font-medium text-center leading-[0.78rem]">
                Presence Panel
              </h1>

              <ul className="flex items-end justify-between  w-full ">
                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <IncomingCall />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Who is on the call
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <CallRecords />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Call Records
                  </small>
                </li>
              </ul>

              <div className="flex  flex-col gap-[0.26rem] items-center ">
                <Graph />

                <small className=" font-[400]  sm:text-[0.88rem]leading-[147%] text-[#667085] text-[0.25rem]">
                  Performance Graphs
                </small>
              </div>
            </div>

            <div className=" shadow-[0_2.1px_16.62px_0px_rgba(48,48,48,0.03)] rounded-[0.26rem] border-[0.35px] w-[7.79rem] px-[0.48rem]  py-[0.73rem] border-[#E9EEF9] bg-[#f5f8ff]">
              <h1 className="text-[0.52rem] font-medium text-center leading-[0.78rem]">
                Functions
              </h1>

              <ul className="flex items-end justify-between  w-full ">
                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <CallRecording />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Call recording
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <CallTransfer />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Call Transfer
                  </small>
                </li>

                <li className="flex  flex-col gap-[0.26rem] items-center ">
                  <ConferenceCall />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Conference
                  </small>
                </li>
              </ul>

              <ul className="flex items-end justify-between  w-full ">
                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <OpenEmail />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Voice to Email
                  </small>
                </li>

                <li className="flex flex-col gap-[0.26rem] items-center ">
                  <Clock />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Time conditions
                  </small>
                </li>

                <li className="flex  flex-col gap-[0.26rem] items-center ">
                  <AutoMessage />

                  <small className=" font-[400] leading-[147%] text-[#667085] text-[0.25rem]">
                    Auto Message
                  </small>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section_three}>
          <ul>
            <li>
              <Clerk />
              <div>
                <h1>Unleash your reception</h1>

                <p>
                  With our presence panel, your receptionist can get a complete
                  overview of your business, without being in the office.
                </p>
              </div>
            </li>

            <li>
              <Desk />
              <div>
                <h1>Work as if you are in the office</h1>

                <p>
                  Receive a fully functioning system, transfer, record and see
                  who&apos;s on the phone. Receive calls like you&apos;re in the
                  office
                </p>
              </div>
            </li>

            <li>
              <Idea />
              <div>
                <h1>Unleash your reception</h1>

                <p>
                  Our solution enables you team to use any device such as
                  mobile, desktops/laptops and browsers.
                </p>
              </div>
            </li>

            <li>
              <Storage />
              <div>
                <h1>Keep your data</h1>

                <p>
                  Call records and recordings are easily assessable to remotely
                  manage how your team are dealing with customers.
                </p>
              </div>
            </li>

            <li>
              <LandLine />
              <div>
                <h1>Full office phone functionality</h1>

                <p>
                  Keep your voicemail, IVR, opening times announcements and all
                  other features you can imagine.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className={styles.section_four}>
          <div>
            <h1>Remote Working Solutions</h1>

            <ul className="flex flex-col mt-[3rem] gap-[2.4rem]">
              <li>
                <h2>Divert in place</h2>

                <p>
                  Your current phone numbers are diverted to a Talk4 Telecoms
                  phone number which we will create for you
                </p>
              </li>

              <li>
                <h2>Calls will flow to remote workers</h2>

                <p>
                  Calls will ring any group of devices that you specify, in any
                  sequence you specify. Staff will then receive calls via any
                  device they have at home such as mobile, landline and
                  computer.
                </p>
              </li>

              <li>
                <h2>Access to all features</h2>

                <p>
                  Your team can access all the features you&apos;d expect.
                  Seamlessly transfer calls, see who&apos;s available with
                  presence, access voicemail and much more
                </p>
              </li>
            </ul>
          </div>

          <Image
            alt="remote link diagram"
            width={382}
            height={355}
            className="w-full"
            src={"/assets/remote-diagram-1.png"}
          />
        </section>

        <div className={styles.contact}>
          <div className={styles.content}>
            <div className={styles.vector1}>
              <Rcvector />
            </div>

            <div className={styles.vector2}>
              <Vector336 />
            </div>

            <div className={styles.vector3}>
              <Vector227 />
            </div>
            <div className={styles.first}>
              <h1 className={styles.second}>
                Get Remote Working Services for your business
              </h1>
            </div>

            <div className={styles.third}>
              <div className={styles.fourth}>
                <p>
                  Flexible Remote Working Service . Quick &amp; Easy Setup . No
                  Contracts . Any Device Anywhere.
                </p>
              </div>
              <div className={styles.fifth}>
                <button className={styles.button_first}>Contact Sales</button>
                <button className={styles.button_second}>About Talk 4</button>
              </div>
            </div>
          </div>
        </div>

        <ServiceUsedBy />

        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default RemoteWorking;
