import Legend from "../components/homePageComps/Legend";
import MyPhotoSection from "../components/homePageComps/MyPhotoSection";

function HomePage() {
  return (
    <main className="my-auto flex w-full max-w-[1000px] flex-col gap-12 text-white md:flex-row md:justify-between md:gap-0">
      <Legend />
      <MyPhotoSection />
    </main>
  );
}

export default HomePage;
