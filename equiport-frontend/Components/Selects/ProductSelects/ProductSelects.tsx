import * as React from "react";

export interface IProductSelectProps {}

export default function ProductSelect(props: IProductSelectProps) {
  const sectionGenerationCode = [
    {
      title: "Width",
      data_type: "slider",
      min_value: 0,
      max_value: 5,
    },
    {
      title: "Height",
      data_type: "slices",
      values: [
        { data_name: "6 inches", data_value: "6" },
        { data_name: "7 inches", data_value: "7" },
        { data_name: "8 inches", data_value: "8" },
        { data_name: "9 inches", data_value: "9" },
      ],
    },
  ];

  const GenerateSections = (currentSlice: any) => {
    switch (currentSlice) {
      case currentSlice.data_type === "slices":
        return (
          <div>
            <h1>currentSlice.title</h1>
            {currentSlice.map((item: any) => {
              return (
                <div
                  onClick={() => console.log(item.data_value)}
                  key={item.data_value}
                  className="section-slice"
                >
                  {item.data_name}
                </div>
              );
            })}
          </div>
        );
        break;
      case "slider":
        // code block
        break;
      default:
      // code block
    }
  };

  return (
    <div className="selection-panel">
      {sectionGenerationCode.map(section => {
        return GenerateSections(section);
      })}
    </div>
  );
}

// type can either be radio, slices, slider
