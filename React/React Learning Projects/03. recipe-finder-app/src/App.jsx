/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import RecipesDetails from "./components/RecipesDetails";
import recipeData from "./recipes.json";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);


  // useEffect for loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const spinner = document.getElementById("spinner");
      if (spinner) {
        spinner.style.display = "none";
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/recipe/:id"
            element={<RecipesDetails recipes={recipes} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

// Install "react-router-dom" for routing. : npm install react-router-dom
