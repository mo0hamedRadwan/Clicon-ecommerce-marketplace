import Helmet from "@mongez/react-helmet";
import { Row } from "apps/front-office/design-system/types";
import Loader1 from "components/loaders/Loader1";
import SubscribeSection from "components/sections/SubscribeSection";
import TopProducts from "components/sections/TopProducts";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getHome } from "../../services/home-service";
import Banners from "./sections/Banners";
import BestDeals from "./sections/BestDeals";
import ComputerAccessories from "./sections/ComputerAccessories";
import Features from "./sections/Features";
import FeaturesProducts from "./sections/FeaturesProducts";
import HeroSection from "./sections/HeroSection";
import LargeBanner from "./sections/LargeBanner";
import LatestNews from "./sections/LatestNews";
import ShopCategories from "./sections/ShopCategories";

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    setLoading(true);
    getHome()
      .then(response => {
        setRows(response.data.rows);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        const errorMessage = error;
        console.error("Error fetching home data:", errorMessage);
        toast.error("Failed to fetch home data.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex-center">
          <Loader1 />
        </div>
      ) : (
        <>
          <Helmet title="Clicon" />
          <HeroSection
            slider={rows[0].columns[0].module.slider!}
            banners={[
              rows[0].columns[1].module.banner!,
              rows[0].columns[2].module.banner!,
            ]}
          />
          <Features />
          <BestDeals products={rows[1].columns[0].module.products!} />
          <ShopCategories categories={rows[2].columns[0].module.categories!} />
          <FeaturesProducts
            title={rows[3].columns[0].module.title}
            categories={rows[3].columns[0].module.categories!}
          />
          <Banners
            banners={[
              rows[4].columns[0].module.banner!,
              rows[4].columns[1].module.banner!,
            ]}
          />
          <ComputerAccessories
            title={rows[2].columns[0].module.title}
            categories={rows[2].columns[0].module.categories!}
          />
          <LargeBanner banner={rows[6].columns[0].module.banner} />
          <TopProducts row={rows[7]} />
          <LatestNews news={rows[8].columns[0].module.posts!} />
          <SubscribeSection />
        </>
      )}
    </>
  );
}
