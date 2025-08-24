import Navbar from "@/components/navbar/Navbar"
import News from "@/components/news/News"
import Info from "@/components/some-info/someInfo"
import Collection from "@/components/collection/Collection"
import Decorate from "@/components/decorate/Decorate"
import Assortment from "@/components/assortment/Assortment"
import Works from "@/components/works/Works"
import Join from "@/components/join/Join"
import Footer from "@/components/footer/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <News />
      <Info />
      <Collection />
      <Decorate />
      <Assortment />
      <hr />
      <Works />
      <Join />
      <Footer />
    </>
  )
}
