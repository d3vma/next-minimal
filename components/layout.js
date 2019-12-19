import Head from 'next/head'
import Nav from './nav.js'

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" />
    </Head>
    <Nav />
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout