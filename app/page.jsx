
import Footer from "@/components/Footer/Footer";
import Content from "@/components/HomePage/Content";
import Navbar from "@/components/navbar/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col h-[100%]">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}
