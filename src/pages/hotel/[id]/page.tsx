import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function HotelPage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);
  
  return <div>Hotel Page</div>;
}
