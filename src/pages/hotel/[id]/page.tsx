import { useParams } from "next/navigation";

export default function HotelPage() {
  const { id } = useParams();
  return <div>Hotel Page</div>;
}
