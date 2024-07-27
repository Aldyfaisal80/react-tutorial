import { useState, useEffect } from 'react';
import { UserType } from '../../types/dashboard/propsType';
import { axiosInstance } from '../../lib/axios';

export const useUsers = (limit: number) => {
    const [data, setData] = useState<UserType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosInstance(`/users?limit=${limit}`);
                if (response.status !== 200) {
                    throw new Error('Failed to fetch Users');
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
        fetchUsers();
    }, [limit]);

    return { data, loading, error };
};
