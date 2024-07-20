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
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{bestSelling.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
            <Image className="mx-auto" src={product.productImage} alt="product-image" width={430} height={300} />
			<div className="card-body items-center text-center text-textDark">
			  <p className="normal-case">{product.productTitle}</p>
			  <div className="flex justify-between gap-6 max-w-[235px]">
				<span className="text-lg font-bold">${product.price}</span>
                <span> | </span>
                <span className="flex gap-1">{product.starRating} <Image src="/icons/star.svg" alt="icons" width={20} height={20} /></span>
			  </div>
			</div>
		  </div>
		))}
	  </div>
      <div className="flex pb-8 justify-center">
        <Button buttonText="See All" outline showArrow/>
    </div>
	</div>
    </>
  );
};

export default BestSellingProducts;