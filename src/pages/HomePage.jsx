import Legend from "../components/homePageComps/Legend";
import MyPhotoSection from "../components/homePageComps/MyPhotoSection";
import Row from "../ui/Row";

function HomePage() {
  return (
    <Row type="horizontal" className="flex-wrap justify-between text-white">
      <Legend />
      <MyPhotoSection />
    </Row>
  );
}

export default HomePage;
