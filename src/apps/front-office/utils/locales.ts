import { groupedTranslations, trans } from "@mongez/localization";
import accountTranslation from "shared/localization/account.json";
import dictionaryTranslation from "shared/localization/dictionary.json";
import errorsTranslation from "shared/localization/errors.json";
import footerTranslation from "shared/localization/footer.json";
import headerTranslation from "shared/localization/header.json";
import homeTranslation from "shared/localization/home.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
// groupedTranslations(mainTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here
  ...headerTranslation,
  ...footerTranslation,
  ...errorsTranslation,
  ...homeTranslation,
  ...dictionaryTranslation,
  ...accountTranslation,
});
