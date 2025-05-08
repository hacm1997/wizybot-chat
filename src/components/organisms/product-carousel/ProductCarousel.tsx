import React from "react";
import ProductCard from "../../molecules/product-card/ProductCard";
import type { ProductCarouselProps } from "./product-carousel.model";

// Memoizes ProductCarousel to avoid unnecessary rendering
const ProductCarousel = React.memo(function ProductCarousel({ products }: ProductCarouselProps) {
    return (
        <div className="flex space-x-4 overflow-x-scroll p-2 scrollChatContainer">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
});

export default ProductCarousel;