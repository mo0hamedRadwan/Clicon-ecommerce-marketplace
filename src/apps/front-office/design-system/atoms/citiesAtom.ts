import { getCurrentLocaleCode } from "@mongez/localization";
import { atom } from "@mongez/react-atom";
import { getShippingCities } from "apps/front-office/catalog/services/catalog-service";
import { CityType } from "../types";

type CitiesDataType = {
  loading: boolean;
  cities: CityType[];
  error: string;
};

type CitiesActionType = {
  loadCities: () => void;
};

export const citiesAtom = atom<CitiesDataType, CitiesActionType>({
  key: "cities",
  default: {
    loading: false,
    cities: [],
    error: "",
  },
  actions: {
    loadCities: () => {
      citiesAtom.change("loading", true);
      getShippingCities()
        .then(response => {
          const cities = response.data.cities.map(city => ({
            ...city,
            name: city.name.find(
              code => code.localeCode === getCurrentLocaleCode(),
            ).value,
          }));

          console.log(cities);

          citiesAtom.merge({
            cities: cities,
            loading: false,
          });
        })
        .catch(error => {
          citiesAtom.change("error", error.message);
          citiesAtom.change("loading", false);
        });
    },
  },
});
