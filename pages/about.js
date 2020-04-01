import Layout from "../components/MyLayout.js";

/** styled-jsx */
export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
      <style jsx>{`
        p {
          color: red;
          font-size: 30px;
        }
      `}</style>
    </Layout>
  );
}
