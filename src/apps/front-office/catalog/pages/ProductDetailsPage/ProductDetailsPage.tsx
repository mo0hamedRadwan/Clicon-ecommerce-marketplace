import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Product } from "apps/front-office/design-system/types";
import { getProduct } from "apps/front-office/home/services/home-service";
import Loader1 from "components/loaders/Loader1";
import ProductDetails from "components/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductInfoTabs from "./sections/ProductInfoTabs";
import RelatedProducts from "./sections/RelatedProducts";

type ProductDetailsPagePropsType = {
  params: {
    id: string;
    slug: string;
  };
};

export default function ProductDetailsPage({
  params,
}: ProductDetailsPagePropsType) {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    setLoading(true);
    getProduct(params.id)
      .then(response => {
        setProduct(response.data.product);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product:", error);
        toast.error("Error fetching product");
        setLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <Helmet title={trans(product?.name || trans("product"))} />
      {loading ? (
        <div className="w-full h-screen flex-center">
          <Loader1 />
        </div>
      ) : (
        product && (
          <div className="container py-10 sm:py-20 flex flex-col gap-y-5 sm:gap-y-10">
            <ProductDetails product={product} />
            <ProductInfoTabs product={product} />
            <RelatedProducts />
          </div>
        )
      )}
    </>
  );
}
