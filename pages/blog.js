import Link from 'next/link'
import Head from 'next/head'
import posts from '../posts.json'
import Layout from '../components/layout.js'

const Blog = () => (
  <Layout>
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className="font-bold text-gray-800 text-3xl antialiased font-sans mb-2">Blog</h1>
      <div className="w-full rounded overflow-hidden shadow p-5">
        <div className="px-2">
          <div className="flex flex-wrap -mx-2">
            {Object.entries(posts).map((value, index) => {
              return (
                <div className="w-1/3 px-2 mb-5" key={index}>
                  <Link href='/blog/[id]' as={'/blog/' + value[0]}>
                    <div className="bg-transparent hover:bg-teal-500 text-teal-700 hover:text-white border border-teal-500 p-3 rounded text-center cursor-pointer visited:bg-teal-500">
                      <Link href='/blog/[id]' as={'/blog/' + value[0]}><a>{value[1].title}</a></Link>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog