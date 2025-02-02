import Legend from "../components/homePageComps/Legend";
import MyPhotoSection from "../components/homePageComps/MyPhotoSection";

function HomePage() {
  return (
    <main className="my-auto flex flex-col gap-12 text-white md:flex-row md:justify-between">
      <Legend />
      <MyPhotoSection />
    </main>
  );
}

export default HomePage;
