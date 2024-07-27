import { useParams } from 'react-router-dom'
import { useUserId } from '../../../../../features/user'
export default function CustomerDetail() {
    const { id } = useParams()
    const { user } = useUserId(id)
    const renderElement = () => {
        return (
            <div className="flex flex-col items-center bg-white rounded-lg md:flex-row p-5">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">{`${user?.name.firstname} ${user?.name.lastname}`}</h5>
                    <div className="flex flex-col">
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Email</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.email}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Phone</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.phone}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">City</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.address?.city}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Street</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.address?.street}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Number</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.address?.number}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Zipcode</div>
                            <div className="font-normal text-gray-700 capitalize">: {user?.address?.zipcode}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Geolocation</div>
                            <div className="font-normal text-gray-700 capitalize">: Lat : {user?.address?.geolocation?.lat}, Long : {user?.address?.geolocation?.long}</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div>
            {renderElement()}
        </div>
    )
}
