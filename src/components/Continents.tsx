import { useQuery } from "@apollo/client";
import { getContinents } from "../graphql/server";

const Continents = () => {
  const { loading, error, data } = useQuery(getContinents);

  return (
    <div className="main">
      <h1>Continents</h1>
      {data.continents.map((continent: any) => {
        return <div>{continent.name}</div>;
      })}
    </div>
  );
};

export default Continents;
