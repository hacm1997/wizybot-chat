import type { ProductCardProps } from "./product-card.model";
import styles from '../../../utils/styles.module.css';

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <div className={styles.customBoxShadow + " border border-transparent rounded-lg p-4 shadow w-full bg-amber-50"}>
            <div className="flex gap-4 w-[250px]">
                <img src={product.image} alt={product.name} className="w-[80px] h-[100px] object-cover rounded" />
                <div className="text-left">
                    <h4 className="mt-2 font-semibold">
                        {/* Minumun 14 characteres to display for the product name */}
                        {product.name.length > 14 ? product.name.slice(0, 14) + '...' : product.name}
                    </h4>
                    <p className="text-sm text-black font-semibold">$25.00</p>
                    <p className="text-sm text-gray-600">Type: {product.type}</p>
                    <a href={product.url} target="_blank" className="text-black underline text-sm mt-1 block">
                        View Page
                    </a>
                </div>
            </div>
        </div>
    );
}
