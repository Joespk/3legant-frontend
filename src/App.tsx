import "./App.css";
import Bannergrid from "./components/Bannergrid";
import Shopblog from "./components/Contentcard/Shopblog";
import Imageplaceholder from "./components/Imageplaceholder";
import Navbar from "./components/Navbar";
import Notificationbar from "./components/Notificationbar";
import Shopbycategories from "./components/Shopbycategories";
import Trendingbrands from "./components/Trendingbrands";

function App() {
  return (
    <>
      <Notificationbar />
      <Navbar />
      <Imageplaceholder />
      <Trendingbrands />
      <Shopbycategories />
      <Bannergrid />
      <Shopblog />
    </>
  );
}

export default App;
