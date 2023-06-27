import { Metadata } from "next"

import getAllDrinks from "@/lib/getAllDrinks"
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
    title: "Drinks"
}

export default async function Drinks() {
  const userDrinks = getAllDrinks(1);
  const drinks = await userDrinks;
    
  return (
    <div>
        {drinks.message}
        <footer>
          <NavBar />
        </footer>
    </div>
  )
}