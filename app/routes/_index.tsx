import type { Route } from "./+types/home";
import { getSession } from "~/libs/session";
import { data, redirect } from "react-router";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(
    request.headers.get("Cookie")
  );

  const token = session.get("token");

  console.log(token);
  return {
    token: token,
  };
}

export default function Home({loaderData}: Route.ComponentProps) {
  console.log(loaderData);

  return (
    <HomeContent loaderData={loaderData}/>
  );
}

function HomeContent({loaderData}){
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center pt-16 pb-4">
        <p>{loaderData.token}</p>
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row">
            {/* <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              class="max-w-sm rounded-lg shadow-2xl"
            /> */}
            <div>
              <h1 class="text-5xl font-bold">Welcome to Charmed Scout Portal!</h1>
              <p class="py-6">
                A platform to boost our charming kindness to everyone!
              </p>
              {/* <button class="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
        <div class="divider"></div>

        <div class="text-4xl font-bold">Next Agendas</div>
        <div class="divider"></div>
        <NextAgendas />

        <div class="divider"></div>
        <div class="text-4xl font-bold">Ours in Number</div>
        <div class="divider"></div>
        <Stats />

      </main>
      <Footer />
    </div>
  );
}

function NextAgendas(){
  return (
    <ul class="timeline overflow-x-auto">
      <li>
        <div class="timeline-start">1 Nov 2025</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="text-primary h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box">New Term Opening</div>
        <hr class="bg-primary" />
      </li>
      <li>
        <hr class="bg-primary" />
        <div class="timeline-start">7-8 Feb 2026</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Charmed Scout Camp 2026</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">Feb 2026</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Ramadhan</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">and beyond...</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div class="timeline-end timeline-box">Coming soon!</div>
        <hr />
      </li>
    </ul>
  );
}

function Stats(){
  return (
    <div class="stats stats-vertical lg:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title">Total Members</div>
        <div class="stat-value">239</div>
        <div class="stat-desc">Anggota Muda dan Dewasa</div>
      </div>

      <div class="stat">
        <div class="stat-title">Anggota Muda</div>
        <div class="stat-value">89</div>
        <div class="stat-desc">↗︎ 29 (70%)</div>
      </div>

      <div class="stat">
        <div class="stat-title">Anggota Dewasa</div>
        <div class="stat-value">59</div>
        <div class="stat-desc">Pembina and Parents</div>
      </div>

      <div class="stat">
        <div class="stat-title">Donations</div>
        <div class="stat-value">Rp38.445.634,-</div>
        <div class="stat-desc">worth donated around the world</div>
      </div>
    </div>
  );
}
