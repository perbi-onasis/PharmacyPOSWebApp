import { useEffect, useState } from "react";
import { ProductProp } from "@/types/productProp";

const useFetchData = (
  pathUrl: string,
  dependencies: any[],
): ProductProp[] | null => {
  // Initialize state to hold the fetched data
  const [packages, setPackages] = useState<ProductProp[] | null>(null);

  useEffect(() => {
    const baseApiUrl = "http://localhost:8053/";

    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(baseApiUrl + pathUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON response
        const data: ProductProp[] = await response.json();
        // Update state with the fetched data
        setPackages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts or refreshTrigger changes
    fetchData();

    // Cleanup function to cancel the fetch request if component unmounts
    return () => {
      // cleanup code here
    };
  }, [pathUrl, ...dependencies]); // Re-run effect if pathUrl or any additional dependencies change

  return packages;
};

export default useFetchData;
