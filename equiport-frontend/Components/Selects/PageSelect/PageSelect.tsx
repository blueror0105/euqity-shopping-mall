import * as React from "react";

export interface IPageSelectProps {}

export default function PageSelect(props: IPageSelectProps) {
  const pageCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="page-select">
      {pageCount.map(count => {
        return (
          <div className="page-select__key-count" key={count}>
            {count}
          </div>
        );
      })}
    </div>
  );
}
