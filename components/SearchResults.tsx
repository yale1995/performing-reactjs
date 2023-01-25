import { ProductItem } from "./ProductItem"

interface searchResultsProps {
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
    totalPrice: number;
}

export function SearchResults({ results, onAddToWishList, totalPrice }: searchResultsProps) {
 
    return (
        <div>
            <h2>{totalPrice}</h2>
            {results.map(product => {
                return (
                    <ProductItem
                        onAddToWishList={onAddToWishList}
                        product={product} key={product.id} />
                )
            })}
        </div>
    )
}