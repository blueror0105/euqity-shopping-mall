import * as React from "react";

export interface IWorkWithUsSectionProps {}

export default function WorkWithUsSection(props: IWorkWithUsSectionProps) {
  const cardContents = [
    { title: "", subtitle: "", backgroundImage: "" },
    { title: "", subtitle: "", backgroundImage: "" },
    { title: "", subtitle: "", backgroundImage: "" },
  ];
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const WorkWithUsCard = (props: any) => {
    const { title, subtitle, backgroundImage } = props;
    return (
      <div className="work-with-us-card">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    );
  };
  return (
    <section className="work-with-us">
      {cardContents.map(item => {
        return (
          <WorkWithUsCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
          />
        );
      })}
    </section>
  );
}
