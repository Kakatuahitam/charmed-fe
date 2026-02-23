import type { Route } from "./+types/home";
import { useFetcher } from "react-router";
import { useState } from "react";

// import { getSession, commitSession } from "~/libs/session";

import { Header } from "~/components/header";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tambah SKU | CharmedScout" }
  ];
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const res = await fetch("http://localhost:3000/v0/skus");
  const skus = await res.json();
  return skus;
}

export async function action({
  request,
}: Route.ActionArgs) {
  // const session = await getSession(
  //   request.headers.get("Cookie")
  // );

  // Basic validation

  // if (!username || !password) {
  //   session.flash("error", "Username and password are required");
  //   return redirect("/login", {
  //     headers: {
  //       "Set-Cookie": await commitSession(session),
  //     },
  //   });
  // }

  let formData = await request.formData();
  let classification = formData.get("classification");
  let tier = formData.get("tier");
  let number = formData.get("number");
  let skuField = formData.get("sku-field");
  let description = formData.get("description");

  const payload = {
    classification: classification,
    tier: tier,
    number: number,
    skuField: skuField,
    description: description
  }

  try {
    const response = await fetch("http://localhost:3000/v0/skus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // if (!response.ok) {
    //   session.flash("error", "something wrong");
    // }

    const data = await response.json();

    return redirect("/admin/sku");

    } catch (error) {
      // session.flash("error", "something wrong, contact me");
      console.log("error?", error)
  }
}

export default function Profile({loaderData}: Route.ComponentProps) {
  const skus = loaderData;
  return (
    <div>
      <Header />
      <Main data={skus} />
    </div>
  )
}

function Main({data}){
  const [selectedGolongan, setSelectedGolongan] = useState("");
  const [selectedTier, setSelectedTier] = useState("");

  const tierOptions = {
    "Siaga": ["s_mula", "s_bantu", "s_tata"],
    "Penggalang": ["g_ramu", "g_rakit", "g_terap"],
    "Penegak": ["t_bantara", "t_laksana"],
    "Pandega": ["d_pandega"],
  };

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

  const skus = data;
  let fetcher = useFetcher();
  return (
    <div class="m-8">
      {/* {data.map(datum => <p>{datum}</p>)} */}
      {/* <div role="alert" class="alert alert-success fixed z-10">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div> */}
      <div class="card text-xl font-bold">Masukkan poin SKU</div>
      <fetcher.Form class="fieldset" method="POST">
        {/* <legend class="fieldset-legend">SKU Number</legend> */}
        <label class="label font-bold">Golongan</label>
        <select class="select validator w-auto" required name="classification">
          <option disabled selected value="">pilih</option>
          <option value="siaga">🟢 Siaga</option>
          <option value="penggalang">🔴 Penggalang </option>
          <option value="penegak">🟡 Penegak</option>
          <option value="pandega">🟤 Pandega</option>
        </select>
        <p class="validator-hint hidden">
          Jangan lupa pilih dulu, siaga atau apa gitu
        </p>

        <label class="label font-bold">Tingkatan</label>
        <select class="select validator w-auto" required name="tier">
          <option disabled selected value="">pilih</option>
          <option value="s_mula">Siaga Mula</option>
          <option value="s_bantu">Siaga Bantu</option>
          <option value="s_tata">Siaga Tata</option>
          <option value="g_ramu">Penggalang Ramu</option>
          <option value="g_rakit">Penggalang Rakit</option>
          <option value="g_terap">Penggalang Terap</option>
          <option value="t_bantara">Penegak Bantara</option>
          <option value="t_laksana">Penegak Laksana</option>
          <option value="d_pandega">Pandega</option>
        </select>
        <p class="validator-hint hidden">
          Kalau ini tingkatannya
        </p>

        <label class="label font-bold">Nomor</label>
        <input type="number" name="number" class="input validator w-auto" placeholder="1" required/>
        <p class="validator-hint hidden">
          nomor sku-nya
        </p>

        <label class="label font-bold">Bidang SKU</label>
        <select class="select validator w-auto" required name="sku-field">
          <option disabled selected value="">pilih</option>
          <option value="spiritual">Spiritual</option>
          <option value="emosional">Emosional</option>
          <option value="sosial">Sosial</option>
          <option value="intelektual">Intelektual</option>
          <option value="fisik">Fisik</option>
        </select>
        <p class="validator-hint hidden">
          Masuk ke ranah apa dari sesosif ini?
        </p>

        <label class="label font-bold">Description</label>
        <textarea class="textarea validator w-auto" required name="description" placeholder="Selalu taat menjalankan ibadah ..."></textarea>
        <p class="validator-hint hidden">
          Deskripsi poin SKU
        </p>

        <button class="btn btn-neutral mt-4" type="submit">Tambah poin SKU</button>

      </fetcher.Form>
      <div class="divider"></div>
      <div class="card overflow-x-auto flex flex-col gap-y-2">
        <p class="divider divider-start text-lg font-bold">Siaga</p>
        <table class="table">
          <thead>
            <tr>
              <th class="w-4">No.</th>
              <th class="w-12">Tingkatan</th>
              <th class="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
            </tr>
          </thead>

          <tbody>
            {skus
              .filter(sku => sku.classification === "siaga")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td class="capitalize">{sku.skuField}</td>
                  <td>{sku.description}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <p class="divider divider-start text-lg font-bold">Penggalang</p>
        <table class="table">
          <thead>
            <tr>
              <th class="w-4">No.</th>
              <th class="w-12">Tingkatan</th>
              <th class="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
            </tr>
          </thead>

          <tbody>
            {skus
              .filter(sku => sku.classification === "penggalang")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td class="capitalize">{sku.skuField}</td>
                  <td>{sku.description}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <p class="divider divider-start text-lg font-bold">Penegak</p>
        <table class="table">
          <thead>
            <tr>
              <th class="w-4">No.</th>
              <th class="w-12">Tingkatan</th>
              <th class="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
            </tr>
          </thead>

          <tbody>
            {skus
              .filter(sku => sku.classification === "penegak")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td class="capitalize">{sku.skuField}</td>
                  <td>{sku.description}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <p class="divider divider-start text-lg font-bold">Pandega</p>
        <table class="table">
          <thead>
            <tr>
              <th class="w-4">No.</th>
              <th class="w-12">Tingkatan</th>
              <th class="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
            </tr>
          </thead>

          <tbody>
            {skus
              .filter(sku => sku.classification === "pandega")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td class="capitalize">{sku.skuField}</td>
                  <td>{sku.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
