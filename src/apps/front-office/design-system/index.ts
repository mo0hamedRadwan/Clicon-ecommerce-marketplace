import { googleFont } from "@mongez/dom";
import { current } from "@mongez/react";

if (current("localeCode") === "ar") {
  // load Cairo font from google for Arabic language
  googleFont(
    "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap",
  );
} else {
  googleFont(
    "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap",
  );
}
