import type { Route } from "./+types/home";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Article Title | CharmedScout" },
    { name: "article description", content: "Article headline" },
  ];
}

export default function Profile() {
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
    <div class="m-8">
      <div class="card">
        <div class="avatar">
          <div class="w-24 rounded">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </div>
        <div class="divider divider-start text-xl font-bold">Know Me</div>
        <div class="badge badge-warning">Superadmin</div>

        <div class="flex flex-col mt-4 ml-0 gap-y-2">
          <div class="flex flex-row gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <p class="font-bold">Yuda Kurnia Nurul Fikri</p>
          </div>

          <div class="flex flex-row gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>

            <p>07.075 - Calon Penggalang</p>
          </div>

          <div class="flex flex-row gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <p>12y 3m y.o.</p>
          </div>

          <div class="divider divider-start text-xl font-bold">Achievements</div>
          <div class="flex flex-auto flex-wrap gap-2">
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
            <div class="badge">Badges</div>
          </div>

          <div class="divider divider-start text-xl font-bold">Scouting Progress</div>

          <div>
            <p class="font-medium">SKU Penggalang Ramu (21/30)</p>
            <progress class="progress progress-primary" value="21" max="30"></progress>
          </div>

          <div>
            <p class="font-medium my-2">TKK Wajib</p>
            <div class="flex flex-auto flex-wrap gap-2">
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
            </div>
          </div>

          <div>
            <p class="font-medium my-2">TKK Lainnya</p>
            <div class="flex flex-auto flex-wrap gap-2">
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
              <div class="badge">Badges</div>
            </div>
          </div>

          <div class="divider divider-start text-xl font-bold">Articles Published</div>
          <div class="flex flex-col gap-y-2">
            <div>
              <p class="text-md font-bold">Article title</p>
              <p class="text-xs">Jakarta - 22 February 2026</p>
              <p class="text-sm line-clamp-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
            </div>
            <div>
              <p class="text-md font-bold">Article title</p>
              <p class="text-xs">Jakarta - 22 February 2026</p>
              <p class="text-sm line-clamp-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
            </div>
            <div>
              <p class="text-md font-bold">Article title</p>
              <p class="text-xs">Jakarta - 22 February 2026</p>
              <p class="text-sm line-clamp-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
            </div>
          </div>


        </div>


      </div>
    </div>
  )
}
