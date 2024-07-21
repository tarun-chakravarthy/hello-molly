import Header from "./components/layout/Header";
import HeroComponent from "./components/layout/HeroSection";
import ProductsComponent from "./components/layout/ProductsList";
import BestSellingProducts from "./components/layout/BestSellingProducts";
import SectionHeading from "./components/layout/SectionHeading";
import DesignerProducts from "./components/layout/DesignerProducts";
import ExclusiveOffer from "./components/layout/ExclusiveOffer";

export default function Home() {
  return (
    <>
      {/* Default page to display All atomic components */}
      <Header />
      <HeroComponent title="Discover and Find Your Own Fashion!" subtitle="Explore our curated collection of stylish clothing and accessories tailored to your unique taste." />
      <div className="bg-white">
        <SectionHeading title="Best selling" description="Get in on the trend with our curated selection of best-selling styles." />
        <BestSellingProducts />
        <SectionHeading title="Our Products" description="Get in on the trend with our curated selection of best-selling styles." />
        <ProductsComponent />
        <ExclusiveOffer title="Exclusive offer" subtitle="Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals" />
        <SectionHeading title="Designer Clothes For You" description="Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!" />
        <DesignerProducts />
      </div>
    </>
  );
}
