import { useRouter } from 'next/router'
import Layout from '../../components/layout.js'
import Link from 'next/link'

const User = props => {
  return (
    <Layout>
      <div>
        <h1>{props.user.id}</h1>
        <p>{props.user.email}</p>
        <hr />
        <Link href="/users">
          <a>Back to users</a>
        </Link>
      </div>
    </Layout>
  )
}

User.getInitialProps = ({ query }) => {
  return {
    user: query.id
  }
}

export default User