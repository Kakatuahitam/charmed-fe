import type { Route } from "./+types/home";
import { useFetcher } from "react-router";
import { useState } from "react";

import { redirect } from "react-router";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Setup | CharmedScout" }
  ];
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export async function action({
  request,
}: Route.ActionArgs) {
  let formData = await request.formData();
  let command = formData.get("command");

  const payload = {
    command: command
  }

  try {
    const response = await fetch("http://localhost:3000/v0/setup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    // return redirect("/admin/skus");

    } catch (error) {
      // session.flash("error", "something wrong, contact me");
      console.log("error?", error)
  }
}


export default function Profile({loaderData}: Route.ComponentProps) {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

function Main({}){
  let fetcher = useFetcher();
  return (
    <div className="m-8">
      <fetcher.Form className="fieldset" method="POST">
        <div className="divider divider-start text-xl font-bold">Setup</div>
        <button className="btn btn-neutral" type="submit" name="command" value="setupSKUData">Migrate SKU data</button>
        <p className="mt-2">Last run: date</p>
        <progress className="progress my-2" value="0" max="100"></progress>
      </fetcher.Form>
    </div>
  )
}
