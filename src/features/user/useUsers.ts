import { useState, useEffect } from 'react';
import { UserType } from '../../types/dashboard/propsType';


export const useUsers = () => {
    const [users, setUsers] = useState<UserType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<ErrorType>();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch Users');
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                if (error) {
                    console.log(error)
                    // setError(error);
                }
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return { users, loading };
};
