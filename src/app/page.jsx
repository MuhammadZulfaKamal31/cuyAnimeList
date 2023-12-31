// "use client"

import Link from "next/link";
import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs"

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topanime = await response.json();

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  //membatasi tapilan card bisa pakai .slice(0, 8)
  // recommendedAnime = { data: recommendedAnime.slice(0, 4) }
  recommendedAnime = reproduce(recommendedAnime, 4)
  // const test = reproduce(recommendedAnime, 10)
  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle=" Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title=" Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page
