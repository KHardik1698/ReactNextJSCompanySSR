import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import companyUrl from "../../constants";
import styles from "./index.module.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Surfboard(props) {
  let surfboard = props.surfboard[0];
  return (
    <div>
      <Head>
        <title>Surfboard</title>
      </Head>
      <div className={styles["header"]}>
        <nav className={styles["navigation"]}>
          <img className={styles["company-logo"]} src={surfboard.surfboardLogo} alt="Logo" />
          <div className={styles["nav-links"]}>
            <Link href="/">
              <p className={styles["nav-item"]}>Home</p>
            </Link>
            <Link href="/raw-engineering">
              <p className={styles["nav-item"]}>Raw Engineering</p>
            </Link>
            <Link href="/contentstack">
              <p className={styles["nav-item"]}>Contentstack</p>
            </Link>
          </div>
          <div className={styles["nav-links"]}>
            {surfboard.navigationLinks.map((link, i) => {
              return (
                <p className={styles["nav-item"]} key={i}>
                  {link}
                </p>
              );
            })}
          </div>
        </nav>
        <div className={styles["banner"]}>
          <div className={styles["banner-text"]}>
            <p className={styles["banner-title"]}>{surfboard.bannerHeading}</p>
            <p className={styles["banner-subtitle"]}>{surfboard.bannerSubHeading}</p>
          </div>
        </div>
        <div>
          <p className={styles["section-heading"]}>Our Portfolio Companies</p>
          <div className={styles["portfolio-container"]}>
            <img className={styles["portfolio-image"]} src={surfboard.portfolioImage} alt="" />
            <div>
              {surfboard.companies.map((company, i) => {
                return (
                  <div key={i}>
                    <Link href={company.siteLink}>
                      <p className={styles["company-name"]}>{company.companyName}</p>
                    </Link>
                    <p className={styles["company-description"]}>{company.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <p className={styles["section-heading"]}>Team</p>
          {surfboard.team.map((team, i) => {
            return (
              <div className={styles["team-container"]} key={i}>
                <img className={styles["team-image"]} src={team.image} alt="" />
                <div className={styles["team-text"]}>
                  <p className={styles["team-name"]}>{team.name}</p>
                  <p className={styles["team-message"]}>{team.message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className={styles["section-heading"]}>Our Philosophy</p>
          <div className={styles["philosophy-container"]}>
            {surfboard.philosophy.map((philosophy, i) => {
              return (
                <div className={styles["philosophy-content"]} key={i}>
                  <img className={styles["philosophy-image"]} src={philosophy.image} alt="" />
                  <p className={styles["philosophy-title"]}>{philosophy.title}</p>
                  <p>{philosophy.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <footer className={styles["footer-container"]}>
          <div className={styles["footer-content"]}>
            <img className={styles["company-logo"]} src={surfboard.surfboardLogo} alt="Logo" />
            <div>
              <p>Portfolio</p>
              <p>Academy</p>
              <p>Events</p>
            </div>
            <div>
              <p>Gallery</p>
              <p>e-Certificates</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p>info@surfboardventures.com</p>
            </div>
            <div>
              <FaFacebookSquare size="5vh" color="black" />
              <FaLinkedin size="5vh" color="black" />
              <FaTwitterSquare size="5vh" color="black" />
              <FaYoutubeSquare size="5vh" color="black" />
              <FaInstagramSquare size="5vh" color="black" />
            </div>
          </div>
          <p className={styles["copyright"]}>
            Copyright © 2021 Surfboard Ventures. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios.get(companyUrl + "surfboard.json");
  return {
    props: {
      surfboard: [...data],
    },
  };
};

export default Surfboard;
