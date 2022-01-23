import * as React from "react";

export interface IGeneralPurposeButtonProps {
  children: any;
}

export default function GeneralPurposeButton(
  props: IGeneralPurposeButtonProps,
) {
  const { children } = props;
  return <button className="">{children}</button>;
}
