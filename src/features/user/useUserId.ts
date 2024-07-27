import { useEffect, useState } from "react"
import { UserType } from "../../types/dashboard/propsType"
import { axiosInstance } from "../../lib/axios"

export const useUserId = (id: string) => {
    const [data, setData] = useState<UserType>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>()
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axiosInstance(`/users/${id}`)
                if (response.status !== 200) {
                    throw new Error('Failed to fetch User');
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
        fetchData()
    }, [id])

    return { data, loading, error }
}
