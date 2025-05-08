import type { Product } from "../types/product";

{
  /* Fuction to get produtc */
}
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_WIZYBOT_API_URL}/products/demo-product-list`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data = await response.json();
    // Return Product Array Promise
    return data.map(
      (item: {
        id: string;
        displayTitle: string;
        imageUrl: string;
        price: string;
        url: string;
        productType: string;
      }) => ({
        id: item.id,
        name: item.displayTitle,
        image: item.imageUrl,
        price: item.price,
        url: item.url,
        type: item.productType,
      })
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products from the API");
  }
};
