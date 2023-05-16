import React, { useState } from "react";
import PizzaList from "./components/Pizza/PizzaList";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/footer/Footer";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

function App() {
  const [pizzaMenu, setPizzaMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const pizzaData = [
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/45.jpg",
      title: "Cheese Pizza",
      summary:
        "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
      price: 15.95,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/7777.jpg",
      title: "Pepperoni Pizza",
      summary:
        "Get our classic Pepperoni pizza with your choice of sauce and crust.",
      price: 16.35,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/p1.jpg",
      title: "Vegetarian Pizza",
      summary:
        "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
      price: 19.95,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/09.jpg",
      title: "Mozzarella Pizza",
      summary:
        "Secret homemade spicy sauce, with curly cuts pepperoni and fresh mozzarella",
      price: 22.55,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/46.jpg",
      title: "Sicilian Pizza",
      summary: "Salami, pepperoni, Italian sausage, green peppers & onions",
      price: 19.15,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/68.jpg",
      title: "Grilled Pizza",
      summary: "Tomato, onions, green peppers & grilled or fried chicken",
      price: 14.25,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/53.jpg",
      title: "Veggie Pizza",
      summary: "Black olives, green pepper, onion, mushroom & tomato",
      price: 12.45,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/22.jpg",
      title: "Farm House Pizza",
      summary: "Alfredo sauce, grilled chicken, mushrooms & black olives",
      price: 13.55,
    },
    {
      image: "https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/43.jpg",
      title: "Hot Brown Pizza",
      summary: "Roasted turkey, bacon, tomato overcreamy cheddar alfredo sauce",
      price: 18.0,
    },
  ];
  const burgerData = [
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Cheese Burger",
      summary:
        "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
      price: 15.95,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Pepperoni Burger",
      summary:
        "Get our classic Pepperoni pizza with your choice of sauce and crust.",
      price: 16.35,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Vegetarian Burger",
      summary:
        "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives.",
      price: 19.95,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Mozzarella Burger",
      summary:
        "Secret homemade spicy sauce, with curly cuts pepperoni and fresh mozzarella",
      price: 22.55,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60https://assets.nicepagecdn.com/d2cc3eaa/3955079/images/46.jpg",
      title: "Sicilian Burger",
      summary: "Salami, pepperoni, Italian sausage, green peppers & onions",
      price: 19.15,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Grilled Burger",
      summary: "Tomato, onions, green peppers & grilled or fried chicken",
      price: 14.25,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Veggie Burger",
      summary: "Black olives, green pepper, onion, mushroom & tomato",
      price: 12.45,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Farm House Burger",
      summary: "Alfredo sauce, grilled chicken, mushrooms & black olives",
      price: 13.55,
    },
    {
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Hot Brown Burger",
      summary: "Roasted turkey, bacon, tomato overcreamy cheddar alfredo sauce",
      price: 18.0,
    },
  ];
  const footerData = [
    {
      icon: () => <MdEmail />,
      name: "CHART TO US",
      greeting: "Our friendly team is here to help.",
      endText: "hi@ourcompany.com",
    },
    {
      icon: () => <MdLocationOn />,
      name: "OFFICE",
      greeting: "Come say hello at our office HQ.",
      endText: "121 Rock Street, 21 Avenue, New York, NY",
    },
    {
      icon: () => <MdPhone />,
      name: "PHONE",
      greeting: "Mon-Fri from 8am to 5am",
      endText: "+1(555) 000-000",
    },
  ];
  function closeAll() {
    setPizzaMenu(false);
    setBurgerMenu(false);
    setShowTitle(false);
  }
  function handlePizzaClick() {
    closeAll();
    if (pizzaMenu) setShowTitle(true);
    else setPizzaMenu(true);
  }
  function handleBurgerClick() {
    closeAll();
    if (burgerMenu) setShowTitle(true);
    else setBurgerMenu(true);
  }
  function handleHomeClick() {
    closeAll();
    setShowTitle(true);
  }
  return (
    <>
      <MainPage
        pizzaHandler={handlePizzaClick}
        pizzaMenu={pizzaMenu}
        showTitle={showTitle}
        burgerHandler={handleBurgerClick}
        burgerMenu={burgerMenu}
        homeClick={handleHomeClick}
      />
      {pizzaMenu && (
        <div className="container">
          <PizzaList data={pizzaData} />
        </div>
      )}
      {burgerMenu && (
        <div className="container">
          <PizzaList data={burgerData} />
        </div>
      )}
      <Footer data={footerData} />
    </>
  );
}

export default App;
