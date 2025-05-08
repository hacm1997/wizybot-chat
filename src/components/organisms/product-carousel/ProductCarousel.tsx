import ProductCard from "../../molecules/product-card/ProductCard";
import type { ProductCarouselProps } from "./product-carousel.model";

export default function ProductCarousel({ products }: ProductCarouselProps) {
    return (
        // Dynamic Product Card Slider
        <div className="flex space-x-4 overflow-x-scroll p-2">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>)
}