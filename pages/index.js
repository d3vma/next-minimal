import Fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/layout.js'
import Prices from '../components/prices.js'

const Home = (props) => (
  <Layout>
    <div>
      <Head>
        <title>Next Minimal - Home</title>
      </Head>
      <h1 className="font-bold text-gray-800 text-3xl antialiased font-sans mb-2">Home</h1>
      <div className="w-full rounded overflow-hidden shadow p-5">
        <div className="font-bold text-base mb-2 text-gray-700">Please select your prefered currency rate:</div>
        <Prices bpi={props.bpi}/>
      </div>
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