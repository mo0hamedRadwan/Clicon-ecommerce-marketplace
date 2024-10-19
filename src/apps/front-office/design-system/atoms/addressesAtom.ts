import { atom } from "@mongez/react-atom";
import { getAddresses } from "apps/front-office/catalog/services/catalog-service";

type AddressesDataType = {
  loading: boolean;
  addresses: string[];
  error: string;
};

type AddressesActionType = {
  loadAddresses: () => void;
};

export const addressesAtom = atom<AddressesDataType, AddressesActionType>({
  key: "addresses",
  default: {
    loading: false,
    addresses: [],
    error: "",
  },
  actions: {
    loadAddresses: async () => {
      // Implement your logic to load addresses from the server here
      addressesAtom.change("loading", true);
      getAddresses()
        .then(response => {
          const addresses = response.data.addresses;
          addressesAtom.merge({
            addresses,
            loading: false,
          });
        })
        .catch(error => {
          console.error(error);
          addressesAtom.merge({
            error: error,
            loading: false,
          });
        });
    },
  },
});
