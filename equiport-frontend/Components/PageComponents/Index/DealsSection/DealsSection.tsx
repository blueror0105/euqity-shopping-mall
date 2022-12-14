import * as React from "react";
import Image from "next/image";

export interface IAlertsSectionProps {}

export default function AlertsSection(props: IAlertsSectionProps) {
  React.useEffect(() => {}, []);
  return (
    <section className="deals-section">
      <div className="deals-section__deals-wrap">
        <div className="image-wrapper">
          <Image
            src="http://via.placeholder.com/150x250"
            alt="first-image"
            width={450}
            height={320}
          />
        </div>
        <div className="image-wrapper">
          <Image
            src="http://via.placeholder.com/150x250"
            alt="second-image"
            width={450}
            height={320}
          />
        </div>
        <div className="image-wrapper">
          <Image
            src="http://via.placeholder.com/150x250"
            alt="third-image"
            width={450}
            height={320}
          />
        </div>
      </div>
      <div className="deals-section__membership-section">
        <div className="testing12">
          {/* <Image
            src="http://via.placeholder.com/200x600"
            alt="fourth-image"
            width={600}
            height={200}
          /> */}
        </div>
      </div>
    </section>
  );
}
