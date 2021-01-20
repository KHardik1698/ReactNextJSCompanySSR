import Head from "next/head";
import axios from "axios";
import companyUrl from "../../constants";
import styles from "./index.module.css";

function Contentstack(props) {
  let contentstack = props.contentstack[0];
  return (
    <div>
      <Head>
        <title>Contentstack</title>
      </Head>
      <div className={styles["banner"]}>
        <nav className={styles["nav"]}>
          <img className={styles["banner-logo"]} src={contentstack.contentstackLogo} alt="Logo" />
          <div className={styles["options"]}>
            {contentstack.navigationLinks.map((link, i) => {
              return (
                <p className={styles["lists"]} key={i}>
                  {link}
                </p>
              );
            })}
          </div>
        </nav>
        <div>
          <h1 className={styles["heading"]}>{contentstack.heading}</h1>
          <h3 className={styles["sub-heading"]}>{contentstack.subHeading}</h3>
          <button className={styles["button"]}>TRY FOR FREE</button>
          <p className={styles["link-text"]}>Request a Demo</p>
        </div>
      </div>
      <div className={styles["why-banner"]}>
        <h1>Why Choose Contentstack?</h1>
        <div className={styles["why-box"]}>
          {contentstack.whyChooseContentstack.map((whyChoose, i) => {
            return (
              <div className={styles["why-box-content"]} key={i}>
                <h3>{whyChoose.title}</h3>
                <p>{whyChoose.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["believe-box"]}>
        <h1>{contentstack.bottomBanner.title}</h1>
        <button className={styles["button"]}>REQUEST A DEMO</button>
        <button className={styles["button2"]}>TRY FOR FREE</button>
      </div>
      <hr />
      <footer className={styles["footer-section"]}>
        {contentstack.footer.map((footerLinks, i) => {
          return (
            <p className={styles["lists"]} key={i}>
              {footerLinks}
            </p>
          );
        })}
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios.get(companyUrl + "contentstack.json");
  return {
    props: {
      contentstack: [...data],
    },
  };
};

export default Contentstack;
