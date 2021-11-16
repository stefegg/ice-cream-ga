import { Wrapper } from "./styles";
import { DisplayCard } from "../../components";

const Home = ({ businesses }) => {
  return (
    <Wrapper>
      {businesses &&
        businesses.map((business, idx) => (
          <DisplayCard key={idx} business={business} />
        ))}
    </Wrapper>
  );
};

export default Home;
