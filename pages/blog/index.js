import styles from "../../styles/BlogList.module.css";
import Blog from "../../components/Blog";
import Layout from "../../components/Layout";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const dataBlogs = await res.json();

  return {
    props: {
      posts: dataBlogs.posts,
    },
  };
}

const BlogList = ({ posts }) => {
  return (
    <>
      <Layout pageTitle='Blog - Monogram'>
        <main className={styles.container}>
          <div className={styles.wrapper}>
            <h3 className={styles.title}>ALL BLOG POSTS</h3>
            {posts.map((post) => (
              <Blog
                key={post.id}
                title={post.title}
                text={post.body}
                id={post.id}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default BlogList;
