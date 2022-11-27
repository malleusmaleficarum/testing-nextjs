import Layout from "../../components/Layout";
import Link from "next/link";

const Users = ({ usersData }) => {
  return (
    <Layout pageTitle='Users | Monogram'>
      <main style={{ margin: "100px auto", maxWidth: "1024px" }}>
        {usersData.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <p>User Id: {user.id}</p>
          </Link>
        ))}
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const usersData = await res.json();

  return {
    props: {
      usersData: usersData.users,
    },
  };
}

export default Users;
