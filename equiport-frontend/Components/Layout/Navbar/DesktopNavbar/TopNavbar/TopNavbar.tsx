import Link from "next/link";
import { useTranslations } from "next-intl";

export interface ITopNavbarProps {}
export default function TopNavbar(props: ITopNavbarProps) {
  const t = useTranslations("Nav");
  return (
    <div className="top-navbar">
      <div>current location: Montreal</div>
      <div className="top-navbar__call-us">
        <p>{t("call-us")} at 1800-800-3450</p>
      </div>
      <div className="top-navbar__info-wrap">
        <Link href="/service" passHref>
          <p>{t("services")}</p>
        </Link>
        <Link href="/FAQ" passHref>
          <p>{t("FAQ")}</p>
        </Link>
        <Link href="/shipping" passHref>
          <p>{t("shipping")}</p>
        </Link>
        <Link href="/customer-care" passHref>
          <p>{t("customer-care")}</p>
        </Link>
      </div>
      {/* <div className="top-navbar__lang-switcher">
        <LanguageSwitcher />
      </div> */}
    </div>
  );
}
