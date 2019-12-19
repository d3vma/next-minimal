import Fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout.js'

const Users = (props) => {
  console.log("data", props)
  return (
    <Layout>
      <div>
        <h1>Users</h1>
        <ul className="list-group">
          {Object.entries(props.data).map((value, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link href='/users/[id]' as={'/users/' + value[0]}>
                  <a>{value[1].name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

Users.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    data
  }
}

export default Users