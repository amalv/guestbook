import fetch from "node-fetch";
import App from "../components/App";
import { GetStaticProps } from "next";
import { listComments } from "../src/graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";

type ItemProps = {
  id: string;
  name: string;
  comment: string;
};
type Props = {
  comments?: Array<ItemProps>;
};

const Index: React.FC<Props> = ({ comments }: Props) => {
  console.log("INDEX: ");
  return <App initialComments={comments} />;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  console.log("STATIC PROPS");
  const results: any = await API.graphql(graphqlOperation(listComments));
  return {
    props: {
      comments: results.data.listComments.items,
    },
  };
};
