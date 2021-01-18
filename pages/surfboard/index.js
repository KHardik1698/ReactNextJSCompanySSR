import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import companyUrl from "../../constants";

function Surfboard(props) {
  let surfboard = props.surfboard[0];
  return (
    <div>
      <Head>
        <title>Surfboard</title>
      </Head>
      <div>
        <h1>Surfboard</h1>
      </div>
      <div>
        <Link href="/raw-engineering">
          <a>Raw Engineering</a>
        </Link>
        <Link href="/contentstack">
          <a>Contentstack</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // await axios
  //   .get(companyUrl + "surfboard.json")
  //   .then((response) => {
  //     return response;
  //   })
  //   .then((data) => {
  //     console.log(data.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  let { data } = await axios.get(companyUrl + "surfboard.json");
  return {
    props: {
      surfboard: [...data],
    },
  };
};

export default Surfboard;
