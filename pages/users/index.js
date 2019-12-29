import Fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout.js'

function Users({ users }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Users</title>
        </Head>
        <h1 className="font-bold text-gray-800 text-3xl antialiased font-sans mb-2">Users</h1>
        <div className="w-full rounded overflow-hidden shadow p-5">
          <div className="px-2">
            <div className="flex flex-wrap -mx-2">
              {users.map(user => (
                <div className="w-1/2 px-2 mb-5" key={user.id}>
                  <Link href='/users/[id]' as={`/users/${user.id}`}>
                    <div className="bg-transparent hover:bg-teal-500 text-teal-700 hover:text-white border border-teal-500 p-3 rounded text-center cursor-pointer visited:bg-teal-500">
                      <a>{user.name}</a>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

async function getInitialProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { users };
}

Users.getInitialProps = getInitialProps;

export default Users