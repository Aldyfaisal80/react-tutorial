import React from 'react'
import DashboardMainLayout from '../components/layouts/dashboard/DashboardMainLayout'
import TableLayout from '../components/layouts/dashboard/DashboardTableLayout'

export default function DashboardTables() {
  return (
    <DashboardMainLayout>
      DashboardTables
      <TableLayout>
        <h1>KONTEN</h1>
      </TableLayout>
    </DashboardMainLayout>
  )
}
