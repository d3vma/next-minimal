import Head from 'next/head'
import Nav from './nav.js'
import '../styles/main.css'
import { motion } from 'framer-motion';

const config = {
  type: "tween",
  damping: 20,
  stiffness: 100
};

const Layout = (props) => (
  <div className="bg-gray-100 h-screen">
    <Head></Head>
    <Nav />
    <div className="container mx-auto">
      <motion.div
        transition= {{ duration: 0.5 }}
        initial= {{ opacity: 0, y: 20 }}
        animate= {{ opacity: 1, y: 0 }}
        exit= {{ opacity: 0, y: -20 }}
      >
        {props.children}
      </motion.div>
    </div>
  </div>
)

export default Layout