
import { useState, useEffect } from 'react';
import { ProductType } from '../../types/dashboard/propsType';
import { axiosInstance } from '../../lib/axios';

export const useProducts = (limit: number) => {
    const [data, setData] = useState<ProductType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance(`/products?limit=${limit}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch Products');
                }
                setData(response.data);
            } catch (error) {
                if (error) {
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [limit]);

    return { data, loading, error };
};
