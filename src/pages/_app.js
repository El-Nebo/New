import '../../styles/globals.css'
import Axios from "axios";
import { useEffect, useState } from "react";
import {CoursesContext,CoursesProvider} from '../contexts/coursesContext';
import LoadingPage from "../components/pages/LoadingPage";
import ErrorPage from "../components/pages/ErrorPage";
import Layout from '../components/widgets/Layout';
import Head from 'next/head';
// import React from "react";
// const CoursesContext = React.createContext();

function MyApp({ Component, pageProps}) {
  const [appState,setAppState] = useState({
    data: "",
    isLoading: false,
    error: "",
  });


  useEffect(()=>{
    setAppState({isLoading:true})
    const data = Axios.get("http://localhost:4000/PythonData")
    .then(data=> setAppState({data:data.data,isLoading:false,error:""}))
    .catch(err=> setAppState({data:"",isLoading:false,error:err}));
  },[])

  if(appState.isLoading) return <LoadingPage/>;
  else if (appState.error) return <ErrorPage err={"Error :" + appState.error}/>;
  else return (
    <>
    <Head>
        <link rel="icon" type="image/png" href="https://www.udemy.com/staticx/udemy/images/v8/favicon-32x32.png"/>
    </Head>
    <CoursesProvider value={{ Data: appState.data }}>
      {console.log("_app")}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CoursesProvider>
    </>
  );
}


export default MyApp;

// MyApp.getInitialProps = async () => {
//   const data = await Axios.get("http://localhost:4000/PythonData");
//     return {
//           serverData: data.data
//     }
// }