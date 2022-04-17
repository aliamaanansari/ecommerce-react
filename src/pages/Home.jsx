import { useContext, useEffect } from "react";
import { MainContext } from "../Context";
import AllProducts from "../components/AllProducts";
import { Category } from "../components/Category";
import { Nav } from "../components/Nav";
import { Slide } from "../components/Slide";

export default function Home() {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories", { method: "GET" });
        const data = await response.json();
        dispatch({ type: "SET_CATEGORIES", payload: data.categories });
      } catch (e) {
        console.log(e);
      }
    }
    fetchCategories();
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <AllProducts />
      <Slide />
      <Category />
    </div>
  );
}
