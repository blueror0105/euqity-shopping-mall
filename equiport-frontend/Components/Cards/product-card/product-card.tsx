// import Image from 'next/image';
export interface IProductCardProps {
  title: string;
  // productType: string;
}

export default function ProductCard(props: IProductCardProps) {
  const { title } = props;
  return (
    <div className="product-card">
      {/* <img src={} /> */}
      <div>{title}</div>
    </div>
  );
}
