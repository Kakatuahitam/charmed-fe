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
  const grouped = rawData.reduce((acc, item) => {
    const regu = item["Regu dan Nama"].split(" - ")[0];

    if (!acc[regu]) {
      acc[regu] = {
        total: 0,
        entries: 0
      };
    }

    acc[regu].total += item.score;
    acc[regu].entries += 1;

    return acc;
  }, {});

  const leaderboard = Object.entries(grouped)
    .map(([regu, data]) => ({
      regu,
      total: data.total,
      entries: data.entries
    }))
    .sort((a, b) => b.total - a.total);



  return (
    <div className="m-8">
      <p className="text-xl font-bold">Charmed Scout Biweekly Leaderboard</p>
      <div className="join">
        <p className="text-sm font-thin">Senin, 16 Maret 2026</p>
        <div class="badge badge-sm mx-2 bg-red-400 text-white">Penggalang</div>
      </div>
      <p className="text-sm">Article Author: Kakatuahitam</p>

      <div>
        <div className="divider divider-start text font-bold">Leaderboard of Biweekly 1</div>
        <p className="text">21 February - 7 March 2026</p>

        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Patrol</th>
                <th>Submissions</th>
                <th>Total Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((item, index) => {
                let rowClass = "hover:bg-base-300";
                if (index === 0) rowClass += " bg-yellow-200 text-lg font-bold";
                if (index === 1) rowClass += " bg-gray-200 font-semibold";
                if (index === 2) rowClass += " bg-orange-200 font-semibold";

                return (
                  <tr key={item.regu} className={rowClass}>
                    <th>
                      {index === 0 ? "1🥇" :
                       index === 1 ? "2🥈" :
                       index === 2 ? "3🥉" :
                       index + 1}
                    </th>
                    <td>{item.regu}</td>
                    <td>{item.entries}</td>
                    <td>{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
