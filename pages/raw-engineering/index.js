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
