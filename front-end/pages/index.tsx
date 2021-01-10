import Head from "next/head";
import NavBar from "../components/NavBar/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>El Artesano.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar title="El Artesano" />
    </>
  );
}
