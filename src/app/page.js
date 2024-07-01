import Navigation from "./components/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  console.log(process.env.DATABASE_URL)
  return (
    <>
      <Navigation />
      <Header />
      <Footer />
    </>
  );
}
