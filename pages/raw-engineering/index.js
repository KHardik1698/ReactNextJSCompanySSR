import Head from "next/head";
import axios from "axios";
import companyUrl from "../../constants";

function RawEngineering(props) {
  let rawEngineering = props.rawEngineering[0];
  return (
    <div>
      <Head>
        <title>Raw Engineering</title>
      </Head>
      <div>
        <h1>Raw Engineering</h1>
      </div>
      <div>
        <img src={rawEngineering.rawEngineeringLogo} alt="" />
        {rawEngineering.navigationLinks.map((link, i) => {
          return (
            <div key={i}>
              <p>{link}</p>
            </div>
          );
        })}
        <p>{rawEngineering.title}</p>
        <p>{rawEngineering.subtitle}</p>
        <p>{rawEngineering.shortIntro}</p>
      </div>
      <div>
        {rawEngineering.whatWeDo.map((task, i) => {
          return (
            <div key={i}>
              <img src={task.imageUrl} alt="" />
              <p>{task.heading}</p>
              <p>{task.subHeading}</p>
            </div>
          );
        })}
      </div>
      <div>
        {rawEngineering.latestWork.map((work, i) => {
          return (
            <div key={i}>
              <img src={work.imageUrl} alt="" />
              <p>{work.caseStudyHeading}</p>
              <p>{work.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        {rawEngineering.testimonials.map((testimony, i) => {
          return (
            <div key={i}>
              <img src={testimony.imageUrl} alt="" />
              <p>{testimony.name}</p>
              <p>{testimony.companyName}</p>
              <p>{testimony.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios.get(companyUrl + "raw-engineering.json");
  return {
    props: {
      rawEngineering: [...data],
    },
  };
};

export default RawEngineering;
