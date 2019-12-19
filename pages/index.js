import Fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/layout.js'
import Prices from '../components/prices.js'

const Home = (props) => (
  <Layout>
    <div>
      <Head>
        <title>BitNext</title>
      </Head>
      <h1>Home</h1>
      <p>Please select your prefered currency rate:</p>
      <Prices bpi={props.bpi}/>
    </div> 
  </Layout>
)

Home.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}

export default Home