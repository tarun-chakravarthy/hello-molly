import React from "react";
import Image from "next/image";
import { Product } from "../../types/productTypes";

import productsData from "../../data/productsData.json";


const ProductsComponent: React.FC = () => {

  const allProducts: Product[] = productsData.AllProducts;

  return (
	<div className="container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
		{allProducts.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
            <Image className="mx-auto" src={product.productImage} alt="product-image" width={318} height={300} />
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
	</div>
  );
};

export default ProductsComponent;