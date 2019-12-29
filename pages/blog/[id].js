import { useRouter } from 'next/router'
import Head from 'next/head'
import posts from '../../posts.json'
import Layout from '../../components/layout.js'
import Link from 'next/link'

const Post = props => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Next Minimal - {props.post.title}</title>
        </Head>
        <div className="w-full rounded overflow-hidden shadow p-5 mb-5">
          <h1 className="font-bold text-gray-800 text-3xl antialiased font-sans mb-2">{props.post.title}</h1>
          <p className="text-base mb-2 text-gray-700">{props.post.content}</p>
        </div>
        <Link href="/blog">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 25" width="18" height="18"><path className="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
            <span>Back to blog</span>
          </button>
        </Link>
      </div>
    </Layout>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post