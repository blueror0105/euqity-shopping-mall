import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function LayoutWrap(props: any) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrap;
