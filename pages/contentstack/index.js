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
