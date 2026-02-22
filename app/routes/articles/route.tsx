import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Article Title | CharmedScout" },
    { name: "article description", content: "Article headline" },
  ];
}

export default function Article() {
  return <p>This is article page</p>;
}
