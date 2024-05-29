import "@/components/styles/ProductDeliveryInfoCard.css";

interface ProductDeliveryInfoCardProps {
  children: React.ReactNode;
  heading: string;
  description: string;
}

export default function ProductDeliveryInfoCard({
  children,
  heading,
  description,
}: ProductDeliveryInfoCardProps) {
  return (
    <div className="card">
      <div className="icon-blk">{children}</div>
      <div>
        <p>{heading}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
