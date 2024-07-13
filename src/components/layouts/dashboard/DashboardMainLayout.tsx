import React from 'react'
import Footer from '../../fragments/dashboard/Footer'
import Aside from '../../fragments/dashboard/Aside'
import Navbar from '../../fragments/dashboard/Navbar'
import { DashboardMainLayoutProps } from '../../../types/dashboard/propsType'

export default function DashboardMainLayout({children} : DashboardMainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Aside />
      <div className="p-4 xl:ml-80">
        <Navbar />
        <div className="mt-12">
          {children}
        </div>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  )
}
