import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function HotelPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  useEffect(() => {
    console.log("Location from query params:", location);
    const url = "http://localhost:8080/getHotelById";
    const fetchHotelById = async () => {
      if (!id) {
        console.error("id is undefined");
        return;
      }
      try {
        const response = await fetch(
          `${url}?location=${encodeURIComponent(id)}`
        );
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
      } catch (error: any) {
        console.error(error.message);
      }
    };
    fetchHotelById();
  }, [id]);

  useEffect(() => {
    console.log(id);
  }, []);

  return <div>Hotel Page</div>;
}
