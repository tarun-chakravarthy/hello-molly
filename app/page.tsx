import Header from "./components/layout/Header";
import HeroComponent from "./components/layout/HeroSection";
import ProductsComponent from "./components/layout/ProductsList";
import BestSellingProducts from "./components/layout/BestSellingProducts";
import SectionHeading from "./components/layout/SectionHeading";
import DesignerProducts from "./components/layout/DesignerProducts";

export default function Home() {
  return (
    <>
      <Header />
      <HeroComponent title="Discover and Find Your Own Fashion!" subtitle="Explore our curated collection of stylish clothing and accessories tailored to your unique taste." />
      <div className="bg-white py-16">
        <SectionHeading title="Best selling" description="Get in on the trend with our curated selection of best-selling styles." />
        <BestSellingProducts />
        <SectionHeading title="Our Products" description="Get in on the trend with our curated selection of best-selling styles." />
        <ProductsComponent />
        <SectionHeading title="Designer Clothes For You" description="Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!" />
        <DesignerProducts />
      </div>
    </>
  );
}
