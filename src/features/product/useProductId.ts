import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { ProductType } from "../../types/dashboard/propsType";

export const useProductId = (id: number) => {
    const [data, setData] = useState<ProductType>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(true)   
    useEffect(() => {
        const fetchProductId = async () => {
            try {
                const response = await axiosInstance(`/products/${id}`)
                if (response.status !== 200) {
                    throw new Error('Failed to fetch Product');
                }
                setData(response.data)
            } catch (error) {
                if (error) {
                    setError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchProductId()
    }, [id]);
    return { data, loading, error }
}