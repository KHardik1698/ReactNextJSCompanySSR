import Head from "next/head";
import axios from "axios";
import companyUrl from "../../constants";

function Contentstack(props) {
  let contentstack = props.contentstack[0];
  return (
    <div>
      <Head>
        <title>Contentstack</title>
      </Head>
      <div>
        <h1>Contentstack</h1>
      </div>
      <nav>
        <img src={contentstack.contentstackLogo} alt="" />
        <div>
          {contentstack.navigationLinks.map((link, i) => {
            return <p key={i}>{link}</p>;
          })}
        </div>
      </nav>
      {/* banner */}
      <div>
        <h1>{contentstack.heading}</h1>
        <h3>{contentstack.subHeading}</h3>
        <button>TRY FOR FREE</button>
        <p>Request a Demo</p>
      </div>
      <div>
        <h1>Why Choose Contentstack?</h1>
        {contentstack.whyChooseContentstack.map((whyChoose, i) => {
          return (
            <div key={i}>
              <h3>{whyChoose.title}</h3>
              <p>{whyChoose.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1>{contentstack.bottomBanner.title}</h1>
        <button>REQUEST A DEMO</button>
        <button>TRY FOR FREE</button>
      </div>
      <hr />
      <div>
        {contentstack.footer.map((footerLinks, i) => {
          return <li key={i}>{footerLinks}</li>;
        })}
      </div>
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
