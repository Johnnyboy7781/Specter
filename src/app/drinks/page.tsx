import { Metadata } from "next"

import getAllDrinks from "@/lib/getAllDrinks"

export const metadata: Metadata = {
    title: "Drinks"
}

export default async function Drinks() {
  const userDrinks = getAllDrinks(1);
  const drinks = await userDrinks;
    
  return (
    <div>{drinks.message}</div>
  )
}