import type { Route } from "./+types/home";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SKU No. 3 Penggalang Ramu | CharmedScout" },
    { name: "article description", content: "Article headline" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const payload = {
    ID: "yCyk"
  }

  const res = await fetch("http://localhost:3000/v0/skus/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const sku = await res.json();
  return sku;
}

export default function SKU({loaderData}: Route.ComponentProps) {
  const sku = loaderData;
  return (
    <div>
      <Header />
      <Main data={ sku }/>
      <Footer />
    </div>
  );
}

function Main({ data }){
  const formatTier = (tier) => {
    const tierMap = {
      "s_mula": "Siaga Mula",
      "s_bantu": "Siaga Bantu",
      "s_tata": "Siaga Tata",
      "g_ramu": "Penggalang Ramu",
      "g_rakit": "Penggalang Rakit",
      "g_terap": "Penggalang Terap",
      "t_bantara": "Penegak Bantara",
      "t_laksana": "Penegak Laksana",
      "d_pandega": "Pandega"
    };
    return tierMap[tier] || tier;
  };

  const sku = data;

  return (
    <div class="m-8">
      <p class="divider divider-start text-xl font-bold">SKU No. {sku.number}</p>
      <div class="card shadow-md py-4 px-2">
        <p class="text font-medium">{formatTier(sku.tier)}</p>
        <br/>
        <p class="font-medium">Materi:</p>
        <p>{sku.description}</p>
        <br/>
        <p class="font-medium">Uraian:</p>
        <p>1. Dapat menyebutkan minimal 5 manfaat penghijauan</p>
        <p>2. Dapat menyebutkan fungsi dan manfaat pohon dan tetumbuhan</p>

        <div class="join ml-auto mr-2">
          <button class="btn btn-neutral join-item">Suka</button>
          <button class="btn btn-primary join-item">Bagikan</button>
        </div>
      </div>

      <p class="divider divider-start text-xl font-bold mt-8">Local Achievement</p>
      <div class="card shadow-md py-4 px-2 overflow-x-auto">
        Done
        <progress class="progress progress-primary" value="99" max="100"></progress>
      </div>
    </div>
  )
}
