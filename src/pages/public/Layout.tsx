import { UserHeader } from '@components/Header'
import { SearchBar } from '@components/Search'
import { Navigation } from '@components/common'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='relative'>
      <Navigation />
      <UserHeader />
      <SearchBar />
      <div className='w-full bg-white'>
        <Outlet />
      </div>
    </div>
  )
}
