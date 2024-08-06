import styles from "@/styles/home.module.css";
import Image from "next/image";

const Partners = () => {
  return (
    <section className={styles.hero_section_two}>
      <div className="flex flex-col items-center w-full gap-[1.89rem]">
        <h1>Talk4 Telecoms is trusted by</h1>

        <div className="flex flex-col justify-center w-full items-start gap-[.9rem]">
          <ul className="flex items-center gap-[.62rem] w-full md:flex-nowrap flex-wrap">
            <li>
              <Image
                src={"/assets/daisy-communications.png"}
                alt=""
                width={52}
                height={83}
              />
            </li>

            <li>
              <Image
                src={"/assets/nimans-logo.png"}
                alt=""
                width={125}
                height={38}
              />
            </li>

            <li>
              <Image
                src={"/assets/talk-talk-logo.png"}
                alt=""
                width={125}
                height={72}
              />
            </li>

            <li>
              <Image
                src={"/assets/microsoft.png"}
                alt=""
                width={128}
                height={33}
              />
            </li>
          </ul>

          <ul className="flex items-center w-full gap-[.62rem]  md:flex-nowrap flex-wrap">
            <li>
              <Image src={"/assets/3cx.png"} alt="" width={122} height={44} />
            </li>

            <li>
              <Image
                src={"/assets/grand-stream logo.png"}
                alt=""
                width={173}
                height={28}
              />
            </li>

            <li>
              <Image
                src={"/assets/ovh-logo.png"}
                alt=""
                width={113}
                height={70}
              />
            </li>

            <li>
              <Image
                src={"/assets/virgin-logo.png"}
                alt=""
                width={115}
                height={71}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
