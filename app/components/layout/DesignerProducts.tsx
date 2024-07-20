import React from "react";
import Image from "next/image";
import { Product } from "../../types/productTypes";
import productsData from "../../data/productsData.json";



const DesignerProducts: React.FC = () => {

  const designerProducts: Product[] = productsData.DesignerProducts;

  return (
    <>
    <div className="container mx-auto">
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{designerProducts.map((product) => (
		  <div key={product.id} className="card border-none rounded-none">
            <Image className="mx-auto" src={product.productImage} alt="product-image" width={430} height={300} />
			<div className="card-body items-center text-center text-textDark ">
			  <p className="normal-case">{product.productTitle}</p>
              <p className="normal-case">{product.productDescription}</p>
			</div>
		  </div>
		))}
	  </div>
	</div>
    </>
  );
};

export default DesignerProducts;