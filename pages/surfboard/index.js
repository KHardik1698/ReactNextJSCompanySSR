import Head from "next/head";
import Link from "next/link";

function Surfboard() {
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

export default Surfboard;
