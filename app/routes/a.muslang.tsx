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
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Main(){
  return (
    <div className="m-8">
      <p className="text-xl font-bold">Menuju Musyawarah Penggalang I</p>
      <div className="join">
        <p className="text-sm font-thin">Senin, 16 Maret 2026</p>
        <div class="badge badge-sm mx-2 bg-red-400 text-white">Penggalang</div>
      </div>
      <p className="text-sm">Article Author: Kakatuahitam</p>

      <div className="text-justify">
        <div className="divider divider-start text font-bold">Apa itu Musyawarah Penggalang?</div>
        <p className="text">
          Musyawarah Penggalang adalah wujud forum tertinggi di tingkatan
          Penggalang (<a class="link link-primary" href="https://pramukadiy.or.id/files/document/Salinan-SK-231-2007-Jukran-Gugusdepan.pdf">Kep. Kwarnas No. 231 Tahun 2007</a> tentang Petunjuk
          Penyelenggaraan Gugusdepan Gerakan Pramuka, BAB IV tentang Pimpinan)
          disebut juga dengan Pertemuan Majelis Pengggalang yang dihadiri oleh
          seluruh anggota Penggalang sebagai individu (bukan per regu) bersama
          Pembina Penggalang.
        </p>
        <br/>
        <p className="text">
          Pada Musyawarah Penggalang periode Rintisan ini, salah satu agenda
          khusus yang akan dilaksanakan adalah pemilihan Pemimpin Regu Utama
          (Pratama) secara luber jurdil yang akan didahului dengan beberapa hari
          kampanye mini oleh tiap regu untuk mempromosikan Pimpinan Regunya.
        </p>
        <br/>

        <p className="text">
          Berikut timeline menuju Musyawarah Penggalang
        </p>
      </div>

      <div className="divider divider-start text font-bold">Timeline</div>
      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start text-xs">1 - 7 Maret 2026</div>
          <div class="timeline-middle">
            <p>🟢</p>
          </div>
          <div class="timeline-end timeline-box">Rapat Regu</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start text-xs">Setelah Lebaran</div>
          <div class="timeline-middle">
            <p>🔵</p>
          </div>
          <div class="timeline-end timeline-box">Rapat Dewan Penggalang</div>
          <hr />
        </li>
        <li>
          <div class="timeline-start text-xs"></div>
          <div class="timeline-middle">
            <p>⚫</p>
          </div>
          <div class="timeline-end timeline-box">Kampanye Mini Calon Pratama</div>
          <hr />
        </li>
        <li>
          <div class="timeline-start text-xs">Sabtu, 4 April 2026</div>
          <div class="timeline-middle">
            <p>⚫</p>
          </div>
          <div class="timeline-end timeline-box">Musyawarah Penggalang I</div>
          <hr />
        </li>
      </ul>

    </div>


  )
}
