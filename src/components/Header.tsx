import Image from "next/image";
import Link from "next/link";
import {Hamburger, Search, ThreeUser, Work, Cancel} from "./Icons";
import styles from "../styles/header.module.css";
import {useState} from "react";
import {useRouter} from "next/router";

const Header = () => {
  const [isSideBarActive, setIsSidebarActive] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarActive((state) => !state);
  };

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <header className={styles.header}>
    

      <nav className={styles.nav_bar}>
        <ul className={styles.nav_bar_list}>
          <li>
            <Link href={"/"}>
              <Image
                src="/assets/logo.png"
                width={196}
                height={52}
                alt="talk4businesses logo"
                className="sm:scale-[1.3]"
              />
            </Link>
          </li>

          <li className="self-start">
            <button onClick={toggleSideBar} className={styles.menu_btn}>
              <Hamburger />
            </button>
          </li>

          <ul>
            <li>
              <Link
                className={pathname == "/service" ? "text-[#1cafcf] " : ""}
                href="/service"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className={pathname == "/about" ? "text-[#1cafcf] " : ""}
                href="/about"
              >
                Why choose SwiftCreations
              </Link>
            </li>

     

            <li>
              <Link
                className={pathname == "/get-in-touch" ? "text-[#1cafcf] " : ""}
                href="/get-in-touch"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </ul>

        <div className={styles.nav_bar_buttons}>
          <button className={styles.nav_icon_wrapper}>
            <Search />
          </button>

          {/* <button className="bg-[#1cafcf]" data-btn="primary">
            Register
          </button>  //i removed padding-inline style from this buttons

          */}

          <button data-btn="secondary">Login</button>
        </div>

        {isSideBarActive && (
          <div className="z-10 block xl:hidden absolute top-0 left-0 bg-transparent w-full h-full">
            <div className={styles.sideBar}>
              <button
                aria-label="close"
                className="ml-auto"
                onClick={toggleSideBar}
              >
                <Cancel />
              </button>

              <ul className="flex flex-col justify-center items-center gap-[1.94rem]">
                <li>
                  <Link
                    className={pathname == "/service" ? "text-[#1cafcf] " : ""}
                    href="/service"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className={pathname == "/about" ? "text-[#1cafcf] " : ""}
                    href="/about"
                  >
                    Why choose Talk4
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      pathname == "/remote-working" ? "text-[#1cafcf] " : ""
                    }
                    href="/remote-working"
                  >
                    Remote Working
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      pathname == "/support-center" ? "text-[#1cafcf] " : ""
                    }
                    href="/support-center"
                  >
                    Support Center
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      pathname == "/get-in-touch" ? "text-[#1cafcf] " : ""
                    }
                    href="/get-in-touch"
                  >
                    Get in Touch
                  </Link>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-start gap-[0.88rem] mt-[1.44rem]">
                {/* <button data-btn="primary" className="bg-[#1cafcf] w-full">
                  Register
                </button> */}

                <button data-btn="secondary" className="w-full">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
