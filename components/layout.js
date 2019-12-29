import Head from 'next/head'
import Nav from './nav.js'
import '../styles/main.css'

const Layout = (props) => (
  <div className="bg-gray-100 h-screen">
    <Head></Head>
    <Nav />
    <div className="container mx-auto">
      {props.children}
    </div>
  </div>
)

export default Layout