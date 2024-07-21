import React from "react";
import Image from "next/image";
import { Product } from "../../types/productTypes";

import productsData from "../../data/productsData.json";


// Product grids
const ProductsComponent: React.FC = () => {

  const allProducts: Product[] = productsData.AllProducts;

  return (
	<div className="container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
		{allProducts.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
            <figure className="max-width-[318px]">
                <Image className="mx-auto" src={product.productImage} alt="product-image" width={318} height={300} />
            </figure>
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
	</div>
  );
};

export default ProductsComponent;