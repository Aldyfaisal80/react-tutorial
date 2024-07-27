import { useState, useEffect } from 'react';
import { ProductType } from '../../types/dashboard/propsType';


export const useProducts = () => {
    const [products, setProducts] = useState<ProductType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>()
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            if (error) {
                // console.log(error)
                setError(error);
            }
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
};
