import type { Route } from "./+types/home";
import { redirect } from "react-router";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SKU No. 3 Penggalang Ramu | CharmedScout" },
    { name: "article description", content: "Article headline" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  if(!(params.tier in tierMap)){
    return redirect('/')
  }

  const payload = {
    tier: params.tier,
    number: params.number
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

export function HydrateFallback() {
  return <p>Loading Game...</p>;
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
    return tierMap[tier] || tier;
  };

  const sku = data;

  return (
    <div className="m-8">
      <p className="divider divider-start text-xl font-bold">SKU No. {sku.number}</p>
      <div className="card shadow-md py-4 px-2">
        <p className="text font-medium">{formatTier(sku.tier)}</p>
        <br/>
        <p className="font-medium">Materi:</p>
        <p>{sku.description}</p>
        <br/>
        <p className="font-medium">Pencapaian Pengisian SKU:</p>
        {sku.details && Object.entries(sku.details).map(([key, value]) => (
          <p key={key}>{key}. {value}</p>
        ))}
        <div className="join mt-4 ml-auto mr-2">
          <button className="btn btn-neutral join-item">Suka</button>
          <button className="btn btn-primary join-item">Bagikan</button>
        </div>

        <div className="divider mb-0"></div>
        <p className="text-sm">Sesuai isi Keputusan Kwartir Nasional Gerakan Pramuka No. 119 Tahun 2011</p>
        <p className="text-sm">Tentang Panduan Penyelesaian Syarat Kecakapan Umum</p>
      </div>

      {/* local achievement set later */}
      {/* <p className="divider divider-start text-xl font-bold mt-8">Local Achievement</p>
      <div className="card shadow-md py-4 px-2 overflow-x-auto">
        Done
        <progress className="progress progress-primary" value="99" max="100"></progress>
      </div> */}
    </div>
  )
}
