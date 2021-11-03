import Link from "next/link";
import React from "react";

const test = () => {
  return (
    <div className=" flex h-screen bg-gray-700">
      <div className="flex flex-col w-full items-center justify-center ">
        <h1>Hola este es la pagina test</h1>
        <Link href="/">
          <a className="cursor-pointer">Volver al Home</a>
        </Link>
      </div>
    </div>
  );
};

export default test;
