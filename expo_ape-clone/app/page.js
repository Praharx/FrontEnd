import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import PlayReel from "./components/PlayReel";
import Work from "./components/Work";
import ImagesSection from "./components/ImagesSection";
import Spread from "./components/Spread";

export default function Home() {
  return (
   <div className="w-full h-screen">
    <Navbar />
    <Landing />
    <Work />
    <PlayReel />
    <ImagesSection />
    <Spread />
   </div>
  );
}
