/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import FrenchFlag from "../../../Assets/Base64/FrenchFlag";
import EnglandFlag from "../../../Assets/Base64/EnglandFlag";
import Link from "next/link";

export interface ILanguageSwitcherProps {}

export default function LanguageSwitcher(props: ILanguageSwitcherProps) {
  const { locale, route } = useRouter();

  return (
    <div className="language-switcher">
      <select name="languages" id="languages">
        <option selected={locale === "en" ? true : false}>
          <Link href={route} locale="en" passHref>
            <div className="flag-select">
              dsf
              <img className="flag" src={FrenchFlag} alt="french-flag" />
            </div>
          </Link>
        </option>
        <option selected={locale === "fr" ? true : false}>
          <Link href={route} locale="fr" passHref>
            <div className="flag-select">
              adsfs
              <img className="flag" src={EnglandFlag} alt="england-flag" />
            </div>
          </Link>
        </option>
      </select>
    </div>
  );
}
