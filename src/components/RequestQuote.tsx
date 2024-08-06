import styles from "@/styles/request-quote.module.css";
import Link from "next/link";

const RequestQuote = () => {
  return (
    <section className={styles.section}>
      <div className="inline-flex flex-col w-[80%] justify-center gap-[1.2rem] m-auto">
        <h1>Request Quote?</h1>

        <p>
          We&apos;re here to drive your business success, click the button below
          to request a quote
        </p>
        <Link href="/get-in-touch">
        <button>Request Quote</button>
        </Link>
      </div>
    </section>
  );
};

export default RequestQuote;
