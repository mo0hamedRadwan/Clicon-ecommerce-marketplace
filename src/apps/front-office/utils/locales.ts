import { groupedTranslations, trans } from "@mongez/localization";
import errorsTranslation from "shared/localization/errors.json";
import footerTranslation from "shared/localization/footer.json";
import headerTranslation from "shared/localization/header.json";
import mainTranslation from "shared/localization/index.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

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
});
