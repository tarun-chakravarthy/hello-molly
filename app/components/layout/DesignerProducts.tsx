import React from "react";
import Image from "next/image";
import { Product } from "../../types/productTypes";
import productsData from "../../data/productsData.json";



const DesignerProducts: React.FC = () => {

  const designerProducts: Product[] = productsData.DesignerProducts;

  return (
    <>
    <div className="container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{designerProducts.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
			<figure className="bg-transparent">
				<Image className="mx-auto bg-rectangleColor4" src={product.productImage} alt="product-image" width={430} height={300} />
			</figure>
			<div className="card-body items-center text-center text-textDark md:max-w-[350px] gap-0 mx-auto">
			  <p className="normal-case font-bold text-xl">{product.productTitle}</p>
              <p className="normal-case custom-line-height pt-0 mt-0">{product.productDescription}</p>
			</div>
		  </div>
		))}
	  </div>
	</div>
    </>
  );
};

export default DesignerProducts;