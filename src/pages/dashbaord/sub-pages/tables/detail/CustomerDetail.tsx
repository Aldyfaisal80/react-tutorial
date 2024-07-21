import { useParams } from 'react-router-dom'
export default function CustomerDetail() {
    const customerId = useParams()
    console.log(customerId)
    return (
        <div>CustomerDetail</div>
    )
}
