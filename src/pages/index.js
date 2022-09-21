import HomePage from "../components/pages/HomePage";
import Head from "next/head";
import {CoursesContext} from "../contexts/coursesContext";
import Axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Online Courses - Learn Anything, On Your Schedule | Udemy</title>
      </Head>
      <HomePage />
    </>
  );
}

// export async function getStaticProps(){
//     const data = await Axios.get("http://localhost:4000/PythonData");
//     return {
//       props:{
//           serverData: data.data
//       }
//     }
// }