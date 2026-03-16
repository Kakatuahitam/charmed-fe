import type { Route } from "./+types/home";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { rawData } from "./data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Article Title | CharmedScout" },
    { name: "article description", content: "Article headline" },
  ];
}

export default function Article() {
  return (
    <div>
      <Main />
    </div>
  )
}

function Main(){
  return (
    <div classNameName="m-8">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md max-h-md">
            <div className="text-5xl mb-2">🚧</div>
            <h2 className="card-title text-xl">Page Under Development</h2>
            <p className="text-base-content/70">
              This feature is currently being built and will be available soon.
            </p>

            <p className="text-sm">- Kakatuahitam</p>
          </div>
        </div>
      </div>
    </div>
  )
}
