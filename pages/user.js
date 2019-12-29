import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/layout.js'
import Link from 'next/link'

function User({ user }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>Next Minimal - {user.name}</title>
        </Head>
        <h1 className="font-bold text-gray-800 text-3xl antialiased font-sans mb-2">User details</h1>
        <div className="w-full rounded overflow-hidden shadow p-5 mb-5">
          <div className="table w-full rounded">
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Name</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm font-bold">{user.name}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Username</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">@{user.username}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Email</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">{user.email}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Address</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">{Object.values(user.address).slice(0, 3).join(', ').toString()}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Phone</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">{user.phone}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Company</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">{user.company.name}</div>
            </div>
            <div className="table-row">
              <div className="table-cell bg-gray-200 text-gray-700 border px-4 py-2 text-sm font-bold">Reach me?</div>
              <div className="table-cell bg-gray-300 text-gray-700 border px-4 py-2 text-sm">
                <Link href="{user.website}">
                  <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                    <span>Visit website</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="/users">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 25" width="18" height="18"><path className="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/></svg>
            <span>Back to users</span>
          </button>
        </Link>
      </div>
    </Layout>
  )
}

async function getInitialProps({ query }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.userId}`
  );
  const user = await response.json();
  return { user };
}

User.getInitialProps = getInitialProps;

export default User