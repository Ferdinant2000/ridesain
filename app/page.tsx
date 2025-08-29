import News from "@/components/news/News"
import Info from "@/components/some-info/someInfo"
import Collection from "@/components/collection/Collection"
import Decorate from "@/components/decorate/Decorate"
import Assortment from "@/components/assortment/Assortment"
import Works from "@/components/works/Works"
import Join from "@/components/join/Join"

export default function HomePage() {
  return (
    <>
      <News />
      <Info />
      <Collection />
      <Decorate />
      <Assortment />
      <hr />
      <Works />
      <Join />
    </>
  )
}
