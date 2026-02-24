import type { Route } from "./+types/home";
import { useFetcher } from "react-router";
import { useState } from "react";

import { redirect } from "react-router";

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
  let details = {}

  for (let [key, value] of formData.entries()) {
  if (key.startsWith("detail_")) {
    // Extract the number part after "detail_"
    let number = key.split('_')[1];
    details[number] = value;
  }
}

  const payload = {
    classification: classification,
    tier: tier,
    number: number,
    skuField: skuField,
    description: description,
    details: details
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

    return redirect("/admin/skus");

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

  const [detailNum, setDetailNum] = useState(1);
  function updateDetailNum(newCount){
    setDetailNum(Math.max(1, newCount));
  }

  const skus = data;
  let fetcher = useFetcher();

  const religionMap = {
    a: "Islam",
    b: "Katolik",
    c: "Protestan",
    d: "Hindu",
    e: "Buddha"
  };

  return (
    <div className="m-8">
      {/* {data.map(datum => <p>{datum}</p>)} */}
      {/* <div role="alert" className="alert alert-success fixed z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div> */}
      <div className="card text-xl font-bold">Masukkan poin SKU</div>
      <fetcher.Form className="fieldset" method="POST">
        {/* <legend className="fieldset-legend">SKU Number</legend> */}
        <label className="label font-bold">Golongan</label>
        <select className="select validator w-auto" required name="classification">
          <option disabled selected value="">pilih</option>
          <option value="siaga">🟢 Siaga</option>
          <option value="penggalang">🔴 Penggalang </option>
          <option value="penegak">🟡 Penegak</option>
          <option value="pandega">🟤 Pandega</option>
        </select>
        <p className="validator-hint hidden">
          Jangan lupa pilih dulu, siaga atau apa gitu
        </p>

        <label className="label font-bold">Tingkatan</label>
        <select className="select validator w-auto" required name="tier">
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
        <p className="validator-hint hidden">
          Kalau ini tingkatannya
        </p>

        <label className="label font-bold">Nomor</label>
        <input type="text" name="number" className="input validator w-auto" pattern="^\d+([a-zA-Z]\d{2})?$" placeholder="1" required/>
        <p className="validator-hint hidden">
          nomor sku-nya
        </p>

        <label className="label font-bold">Bidang SKU</label>
        <select className="select validator w-auto" required name="sku-field">
          <option disabled selected value="">pilih</option>
          <option value="spiritual">Spiritual</option>
          <option value="emosional">Emosional</option>
          <option value="sosial">Sosial</option>
          <option value="intelektual">Intelektual</option>
          <option value="fisik">Fisik</option>
        </select>
        <p className="validator-hint hidden">
          Masuk ke ranah apa dari sesosif ini?
        </p>

        <label className="label font-bold">Description</label>
        <textarea className="textarea validator w-auto" required name="description" placeholder="Selalu taat menjalankan ibadah ..."></textarea>
        <p className="validator-hint hidden">
          Deskripsi SKU
        </p>

        <label className="label font-bold">Details</label>
        <div className="join">
          <button className="btn btn-circle text-xl" type="button" onClick={() => updateDetailNum(detailNum + 1)}>+</button>
          <button className="btn btn-circle text-xl" type="button" onClick={() => updateDetailNum(detailNum - 1)}>-</button>
        </div>
        {Array(detailNum).fill(0).map((_, index) => (
          <div className="join" key={index} id={index + 1}>
            <input className="input w-10" disabled type="text" placeholder={index + 1}/>
            <input className="input w-full" type="text" name={`detail_${index + 1}`} placeholder="Pemberian penugasan pengamatan kepada Orang Tua, ..."/>
          </div>
        ))}

        <p className="validator-hint hidden">
          Uraian SKU
        </p>

        <button className="btn btn-neutral mt-4" type="submit">Tambah poin SKU</button>

      </fetcher.Form>
      <div className="divider"></div>
      <div className="card overflow-x-auto flex flex-col gap-y-2">
        <p className="divider divider-start text-lg font-bold">Siaga</p>
        <table className="table">
          <thead>
            <tr>
              <th className="w-4">No.</th>
              <th className="w-12">Tingkatan</th>
              <th className="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
              <th>Pencapaian Pengisian SKU</th>
            </tr>
          </thead>

          <tbody className="text-justify">
            {skus
              .filter(sku => sku.classification === "siaga")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number.toString().split(/[a-zA-Z]/)[0]}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td className="capitalize">{sku.skuField}</td>
                  <td>
                    {sku.number.match(/[a-z]/i)?.map(letter => (
                      <span className="text-sm text-gray-500 block">
                        (Untuk agama {religionMap[letter]})
                      </span>
                    ))}
                    {sku.description}
                  </td>
                  <td>
                    {sku.details && (
                      <ul className="details-list">
                        {Object.entries(sku.details).map(([key, value]) => {
                          const hasMultipleDetails = Object.keys(sku.details).length > 1;
                          return (
                            <li key={key}>
                              {hasMultipleDetails && (
                                <span className="detail-number">{key}:</span>
                              )} {value}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <p className="divider divider-start text-lg font-bold">Penggalang</p>
        <table className="table">
          <thead>
            <tr>
              <th className="w-4">No.</th>
              <th className="w-12">Tingkatan</th>
              <th className="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
              <th>Pencapaian Pengisian SKU</th>
            </tr>
          </thead>

          <tbody className="text-justify">
            {skus
              .filter(sku => sku.classification === "penggalang")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number.toString().split(/[a-zA-Z]/)[0]}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td className="capitalize">{sku.skuField}</td>
                  <td>
                    {sku.number.match(/[a-z]/i)?.map(letter => (
                      <span className="text-sm text-gray-500 block">
                        (Untuk agama {religionMap[letter]})
                      </span>
                    ))}
                    {sku.description}
                  </td>
                  <td>
                    {sku.details && (
                      <ul className="details-list">
                        {Object.entries(sku.details).map(([key, value]) => {
                          const hasMultipleDetails = Object.keys(sku.details).length > 1;
                          return (
                            <li key={key}>
                              {hasMultipleDetails && (
                                <span className="detail-number">{key}:</span>
                              )} {value}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <p className="divider divider-start text-lg font-bold">Penegak</p>
        <table className="table">
          <thead>
            <tr>
              <th className="w-4">No.</th>
              <th className="w-12">Tingkatan</th>
              <th className="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
              <th>Pencapaian Pengisian SKU</th>
            </tr>
          </thead>

          <tbody className="text-justify">
            {skus
              .filter(sku => sku.classification === "penegak")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number.toString().split(/[a-zA-Z]/)[0]}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td className="capitalize">{sku.skuField}</td>
                  <td>
                    {sku.number.match(/[a-z]/i)?.map(letter => (
                      <span className="text-sm text-gray-500 block">
                        (Untuk agama {religionMap[letter]})
                      </span>
                    ))}
                    {sku.description}
                  </td>
                  <td>
                    {sku.details && (
                      <ul className="details-list">
                        {Object.entries(sku.details).map(([key, value]) => {
                          const hasMultipleDetails = Object.keys(sku.details).length > 1;
                          return (
                            <li key={key}>
                              {hasMultipleDetails && (
                                <span className="detail-number">{key}:</span>
                              )} {value}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <p className="divider divider-start text-lg font-bold">Pandega</p>
        <table className="table">
          <thead>
            <tr>
              <th className="w-4">No.</th>
              <th className="w-12">Tingkatan</th>
              <th className="w-8">Bidang SKU</th>
              <th>Deskripsi</th>
              <th>Pencapaian Pengisian SKU</th>
            </tr>
          </thead>

          <tbody className="text-justify">
            {skus
              .filter(sku => sku.classification === "pandega")
              .sort((a, b) => a.number - b.number)
              .map(sku => (
                <tr key={sku.number}>
                  <td>{sku.number.toString().split(/[a-zA-Z]/)[0]}</td>
                  <td>{formatTier(sku.tier)}</td>
                  <td className="capitalize">{sku.skuField}</td>
                  <td>
                    {sku.number.match(/[a-z]/i)?.map(letter => (
                      <span className="text-sm text-gray-500 block">
                        (Untuk agama {religionMap[letter]})
                      </span>
                    ))}
                    {sku.description}
                  </td>
                  <td>
                    {sku.details && (
                      <ul className="details-list">
                        {Object.entries(sku.details).map(([key, value]) => {
                          const hasMultipleDetails = Object.keys(sku.details).length > 1;
                          return (
                            <li key={key}>
                              {hasMultipleDetails && (
                                <span className="detail-number">{key}:</span>
                              )} {value}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
