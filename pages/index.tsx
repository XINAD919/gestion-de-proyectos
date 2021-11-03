import React from "react";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gestion de proyectos</title>
      </Head>
      <div className="text-2xl text-gray-800 text-center">
        <h1>main page</h1>
        <Link href="/test">
          <a className="cursor-pointer">ir a test</a>
        </Link>
      </div>
    </>
  );
}
