import SubscribeSection from "apps/front-office/design-system/components/sections/SubscribeSection";
import TopProducts from "apps/front-office/design-system/components/sections/TopProducts";
import { Row } from "apps/front-office/design-system/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { categories } from "shared/data/testData";
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
  const [loading, setLoading] = useState(true);
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
        <div>loading</div>
      ) : (
        <>
          <HeroSection
            slider={rows[0].columns[0].module.slider!}
            banners={[
              rows[0].columns[1].module.banner!,
              rows[0].columns[2].module.banner!,
            ]}
          />
          <Features />
          <BestDeals products={rows[1].columns[0].module.products!} />
          <ShopCategories categories={categories} />
          {/* <div className="h-[2000px]">Home Page</div> */}
          <FeaturesProducts
            title={rows[2].columns[0].module.title}
            categories={rows[2].columns[0].module.categories!}
          />
          <Banners
            banners={[
              rows[3].columns[0].module.banner!,
              rows[3].columns[1].module.banner!,
            ]}
          />
          <ComputerAccessories
            title={rows[2].columns[0].module.title}
            categories={rows[2].columns[0].module.categories!}
          />
          <LargeBanner banner={rows[5].columns[0].module.banner} />
          <TopProducts row={rows[6]} />
          <LatestNews news={rows[7].columns[0].module.posts!} />
          <SubscribeSection />
        </>
      )}
    </>
  );
}
