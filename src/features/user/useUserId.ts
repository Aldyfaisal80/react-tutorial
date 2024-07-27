import { useEffect, useState } from "react"
import { UserType } from "../../types/dashboard/propsType"

export const useUserId = (id: number) => {
    const [user, setUser] = useState<UserType>()
    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`)
            const data = await response.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { user }
}