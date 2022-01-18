import * as React from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export interface ICartProps {}

export default function Cart(props: ICartProps) {
  const t = useTranslations("Nav");
  return (
    <div>
      <p>{t("FAQ")}</p>
    </div>
  );
}

// export function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: require(`../Locales/${locale}.json`),
//     },
//   };
// }
