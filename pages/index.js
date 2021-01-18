import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Company</title>
        <link rel="icon" href="/logo-white.png" />
      </Head>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <nav>
          <Link href="/surfboard">
            <a>Surfboard</a>
          </Link>
          <Link href="/raw-engineering">
            <a>Raw Engineering</a>
          </Link>
          <Link href="/contentstack">
            <a>Contentstack</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
