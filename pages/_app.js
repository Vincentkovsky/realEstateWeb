import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import Layout from '../components/Layout'
import {ChakraProvider, chakraProvider} from '@chakra-ui/react'
import nprogress from 'nprogress'


function MyApp({ Component, pageProps }) {  
  NProgress.configure({showSpinner: false})
  Router.events.on('routeChangeStart',() => {
    NProgress.start();
  } );
  Router.events.on('routeChangeComplete',() =>{
    NProgress.done();
  } );
    return(
      <>
        <Head>

        </Head>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </>
    )
}

export default MyApp
