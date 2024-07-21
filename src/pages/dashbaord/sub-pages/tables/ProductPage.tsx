import TableLayout from "../../../../components/fragments/dashboard/TableLayout"
import { useState, useEffect } from 'react'
import TableProductSkaleton from "../../../../components/elements/TableProductSkaleton"
import { ProductType } from "../../../../types/dashboard/propsType"
import { Link } from "react-router-dom"

export default function ProductPage() {
  const [products, setProducts] = useState<ProductType[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  const renderElement = () => {
    return products?.map((product: ProductType, index: number) => {
      return <tr key={index}>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <div className="flex items-center gap-4">
            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 capitalize">{product.title}</p>
          </div>
        </td>
        <td className="py-3 px-5 border-b border-blue-gray-50">
          <Link to={`/dashboard/tables/products/${product.id}`}>
            Detail
          </Link>
        </td>
      </tr>
    })
  }

  return (
    <TableLayout title="products" count={products?.length}>
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">name</p>
            </th>
            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
              <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {!isLoading ? renderElement() : <TableProductSkaleton />}
        </tbody>
      </table>
    </TableLayout>
  )
}