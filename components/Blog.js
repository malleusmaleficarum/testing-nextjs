import Link from "next/link";

const Blog = ({ title, text, id }) => {
  return (
    <div
      style={{
        width: "70%",
        padding: "1.5rem",
        marginBottom: "1rem",
        border: "1px solid blue",
      }}
    >
      <h3 style={{ textTransform: "uppercase" }}>
        <Link href={`/blog/${id}`}>{title}</Link>
      </h3>
      <p
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Blog;
