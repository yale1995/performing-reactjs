import { memo, useState } from "react";
import {AddProductToWishListProps} from './AddProductToWishlist'
import dynamic from "next/dynamic";
import loadash from 'lodash'

const AddProductToWishlist = dynamic<AddProductToWishListProps>(() => {
    return import('./AddProductToWishlist').then(module => module.AddProductToWishlist)
}, {
    loading: () => (<span>Carregando...</span>)
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>Add to wishlist</button>
            {isAddingToWishlist && <AddProductToWishlist
                onAddToWishlist={() => onAddToWishList(product.id)}
                onRequestClose={() => setIsAddingToWishlist(false)} />}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return loadash.isEqual(prevProps.product, nextProps.product)
})