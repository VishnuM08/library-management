import { Carousel } from "./Components/Carousel";
import { DiscoverPopularBooks } from "./Components/DiscoverPopularBooks";

export const Homepage = (props) => {
  return (
    <>
      <DiscoverPopularBooks />
      <Carousel />
    </>
  );
};
