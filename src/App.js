import "./App.css";
import Card from "./components/Card";
import Category from "./components/Category";
import City from "./components/City";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Host from "./components/Host";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
import Quality from "./components/Quality";
import { data } from "./data";
import { category } from "./data";
import { hosts } from "./data";
import { cities } from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  const categories = category.map((obj) => {
    return <Category key={obj.id} {...obj} />;
  });

  const hostsList = hosts.map((el) => {
    return <Host key={el.id} {...el} />;
  });

  const citiesList = cities.map((city) => {
    return <City key={city.id} {...city} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Hero />
      <div className="categories">{categories}</div>
      <h3 className="container">Meet hosts around the world</h3>
      <div className="hosts">{hostsList}</div>
      <Quality />
      <h3 className="container">Experiences in other cities</h3>
      <div className="cities">{citiesList}</div>
      <div className="cards">{cards}</div>
      <Information />
      <Footer />
    </div> 
  );
}

