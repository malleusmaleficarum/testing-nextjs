import Link from "next/link";
import Layout from "../../components/Layout";

const Blog = ({ blog }) => {
  return (
    <>
      <Layout pageTitle='Blog | Monogram'>
        <main style={{ margin: "100px" }}>
          <h3>BLOG DETAIL</h3>
          <h4>Title: {blog.title}</h4>
          <p>{blog.body}</p>
          <Link href={"/blog"}>Back</Link>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();

  const paths = data.posts.map((blog) => ({
    params: {
      blogId: blog.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { blogId } = context.params;
  const res = await fetch(`https://dummyjson.com/posts/${blogId}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}

export default Blog;
