import Layout from "../../components/Layout";

export async function getServerSideProps(context) {
  const { userId } = context.params;
  const res = await fetch(`https://dummyjson.com/users/${userId}`);
  const userData = await res.json();

  return { props: { userData } };
}

const User = ({ userData }) => {
  console.log(userData);
  return (
    <Layout pageTitle={`Profile ${userData.username} | Monogram`}>
      <main
        style={{
          margin: "100px auto",
          maxWidth: "1024px",
          padding: "0.5rem",
          border: "1px solid black",
        }}
      >
        <p>username: {userData.username}</p>
        <p>name: {userData.firstName}</p>
      </main>
    </Layout>
  );
};

export default User;
