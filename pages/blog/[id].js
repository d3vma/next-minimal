import { useRouter } from 'next/router'
import posts from '../../posts.json'
import Layout from '../../components/layout.js'
import Link from 'next/link'

const Post = props => {
  return (
    <Layout>
      <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
        <hr />
        <Link href="/blog">
          <a>Back to blog</a>
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