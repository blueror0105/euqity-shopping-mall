import { useState } from "react";
import EnglandFlag from "../../../Assets/Base64/EnglandFlag";
import FrenchFlag from "../../../Assets/Base64/FrenchFlag";

export interface ILanguageButtonProps {}

export default function LanguageButton(props: ILanguageButtonProps) {
  const [currentFlag, setCurrentFlag] = useState(EnglandFlag);

  const changeLanguage = () => {
    if (currentFlag !== FrenchFlag) {
      setCurrentFlag(FrenchFlag);
    }
    if (currentFlag !== EnglandFlag) {
      setCurrentFlag(EnglandFlag);
    }
  };
  return (
    <button
      className="language-button"
      style={{ backgroundImage: `url(${currentFlag})` }}
      onClick={() => {
        changeLanguage();
      }}
    />
  );
}
