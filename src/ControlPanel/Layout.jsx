import React from 'react'
import { Outlet } from 'react-router-dom'
import ControlPanel from '../Components/ControlPanel'

const Layout = () => {
  return (
    <>
      <ControlPanel/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
