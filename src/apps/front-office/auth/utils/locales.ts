import { groupedTranslations } from "@mongez/localization";

// locales.ts file
export const validationTranslation = {
  required: {
    en: "This input is required",
    ar: "هذا الحقل مطلوب",
  },
  invalidEmailAddress: {
    en: "Invalid Email Address",
    ar: "بريد الكتروني خاطئ",
  },
  url: {
    en: "Invalid URL",
    ar: "رابط غير صحيح",
  },
  min: {
    en: "Value can not be lower than :min",
    ar: "القيمة يجب أن لا تقل عن :min",
  },
  max: {
    en: "Value can not be greater than :max",
    ar: "القيمة يجب أن لا تزيد عن :max",
  },
  matchElement: {
    en: "This input is not matching with :matchingInput",
    ar: "هذا الحقل غير متطابق مع :matchingInput",
  },
  length: {
    en: "This input should have :length characters",
    ar: "حروف الحقل يجب ان تساوي :length",
  },
  minLength: {
    en: "This input can not be less than :length characters",
    ar: "هذا الحقل يجب ألا يقل عن :length حرف",
  },
  maxLength: {
    en: "This input can not be greater than :length characters",
    ar: "هذا الحقل يجب ألا يزيد عن :length حرف",
  },
  pattern: {
    en: "This input is not matching with the :pattern",
    ar: "هذا الحقل غير مطابق :pattern",
  },
  number: {
    en: "This input accepts only numbers",
    ar: "هذا الحقل لا يقبل غير أرقام فقط",
  },
  integer: {
    en: "This input accepts only integer digits",
    ar: "هذا الحقل لا يقبل غير أرقام صحيحة",
  },
  float: {
    en: "This input accepts only integer or float digits",
    ar: "هذا الحقل لا يقبل غير أرقام صحيحة او عشرية",
  },
  alphabet: {
    en: "This input accepts only alphabets",
    ar: "هذا الحقل لا يقبل غير أحرف فقط",
  },
};

groupedTranslations("validation", validationTranslation);
