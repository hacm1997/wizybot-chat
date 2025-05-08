import { useState, useEffect } from "react";
import type { Product } from "../types/product";

{
  /* Custom hook for user in any component */
}
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.wizybot.com/products/demo-product-list"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(
          data.map((item: Product) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            url: item.url,
          }))
        );
      } catch (error) {
        setError("Error fetching products from the API");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
