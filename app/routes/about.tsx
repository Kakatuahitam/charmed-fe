import type { Route } from "./+types/home";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | CharmedScout" },
    { name: "About us page", content: "About us headline" },
  ];
}

export default function About() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Main(){

  return (
    <div className="m-8">
      <p className="text-xl font-bold">About Us</p>
      <p className="text text-justify">
        A platform developed by Gugusdepan Jayasingawarman - Nyi Mas Melati.
        Developed for creating insightful scouting platform that inspire and
        encourages scouts to learn and share their experiences together.
      </p>

      <div className="divider divider-start text font-bold">Changelog</div>

      <p className="font-bold">v0.1.0 </p>
      <ul>
        <li>⚫ About us page</li>
        <li>⚫ Article page</li>
        <li>⚫ SKU page</li>
      </ul>
      <br/>

      <p className="font-bold">v0.1.1 (Upcoming)</p>
      <ul>
        <li>⚫ Login system</li>
      </ul>

    </div>
  )
}
