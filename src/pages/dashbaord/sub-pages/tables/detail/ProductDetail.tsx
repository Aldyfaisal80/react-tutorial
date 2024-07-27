import { useParams } from "react-router-dom"
import DetailProductSkaleton from "../../../../../components/elements/DetailProductSkaleton"
import { useProductId } from "../../../../../features/product"
export default function ProductDetail() {
    const { id } = useParams<{ id: string }>()
    const { data: product, loading } = useProductId(id ? id : "")
    const renderElement = () => {
        return (
            <div className="flex flex-col items-center bg-white rounded-lg md:flex-row p-5">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-[300px] md:rounded-none md:rounded-l-lg" src={product?.image} alt={product?.title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{product?.title}</h5>
                    <div className="flex flex-col">
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Category</div>
                            <div className="font-normal text-gray-700 capitalize">: {product?.category}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Price</div>
                            <div className="font-normal text-gray-700 capitalize">: {product?.price}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Cust</div>
                            <div className="font-normal text-gray-700">: {product?.rating.count}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Rate</div>
                            <div className="font-normal text-gray-700">: {product?.rating.rate}</div>
                        </div>
                        <div className="flex mb-3">
                            <div className="w-24 font-medium text-gray-700">Description</div>
                            <div className="font-normal text-gray-700">: {product?.description}</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <>
            {!loading ? renderElement() : <DetailProductSkaleton />}
        </>
    )
}
