import { GetStaticProps } from "next";
import fetch from "node-fetch";

type Props = {
  stars: any;
};

const WithStaticProps = ({ stars }: Props) => {
  console.log("stars", stars);
  return <h1>Users List</h1>;
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json(); // better use it inside try .. catch
  console.log("FOOO");
  return {
    props: {
      stars: json.stargazers_count,
    },
  };
};
/*
export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}
*/

export default WithStaticProps;
