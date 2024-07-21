import React from "react";
import Image from "next/image";
import { Product } from "../../types/productTypes";
import productsData from "../../data/productsData.json";
import Button from "../UI/Button";



const BestSellingProducts: React.FC = () => {

  const bestSelling: Product[] = productsData.BestSelling;

  return (
    <>
    <div className="container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{bestSelling.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
            <div className={`rounded-sm ${product.id === 1 ? "bg-rectangleColor" : product.id === 2 ? "bg-rectangleColor2" : "bg-rectangleColor3"}`}>
                <Image className="mx-auto rounded-sm" src={product.productImage} alt="product-image" width={430} height={566} />
            </div>
			<div className="card-body items-center text-center text-cardText">
			  <p className="normal-case font-bold">{product.productTitle}</p>
			  <div className="flex justify-between items-center gap-6 max-w-[235px]">
				<span className="text-lg">${product.price}</span>
                <span> | </span>
                <span className="flex gap-1">{product.starRating} <Image src="/icons/star.svg" alt="icons" width={20} height={20} /></span>
			  </div>
			</div>
		  </div>
		))}
	  </div>
      <div className="flex pb-8 justify-center">
        <Button buttonText="See all" outline showArrow/>
    </div>
	</div>
    </>
  );
};

export default BestSellingProducts;