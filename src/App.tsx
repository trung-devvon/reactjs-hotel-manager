import { useAppDispatch, useAppSelector } from '@hooks/useApp'
import NotFound from '@pages/NotFound'
import { AdminLayout, Dashboard } from '@pages/admin'
import { ManageDestination, CreateDestination } from '@pages/admin/destination'
import { CreateHotel, ManageHotel } from '@pages/admin/hotel'
import { ManageUser } from '@pages/admin/user'
import { MemberLayout, Personal } from '@pages/member'
import { Auth, Home, Layout } from '@pages/public'
import { getCurrentThunk, getDestinationsThunk, getRolesThunk } from '@redux/actions'
import { pathAdmin, pathMember, pathUser } from '@utils/path'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { message, current, token } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getRolesThunk())
    dispatch(getDestinationsThunk())
  }, [])
  useEffect(() => {
    let clearTime: any
    if (token)
      clearTime = setTimeout(() => {
        dispatch(getCurrentThunk())
      }, 10)
    return () => clearTimeout(clearTime)
  }, [token])
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path={pathUser.PUBLIC} element={<Layout />}>
          <Route path={pathUser.HOME} element={<Home />} />
        </Route>
        {/* page not found */}
        <Route path={pathUser.ALL} element={<NotFound />} />
        {/* login/register page */}
        <Route path={pathUser.AUTH} element={<Auth />} />
        {/* admin route */}
        <Route path={pathAdmin.ADMIN} element={<AdminLayout />}>
          <Route path={pathAdmin.DASHBOARD} element={<Dashboard />} />
          <Route path={pathAdmin.CREATE_DESTINATION} element={<CreateDestination />} />
          <Route path={pathAdmin.MANAGE_DESTINATION} element={<ManageDestination />} />
          <Route path={pathAdmin.MANAGE_HOTEL} element={<ManageHotel />} />
          <Route path={pathAdmin.CREATE_HOTEL} element={<CreateHotel />} />
          <Route path={pathAdmin.MANAGE_MEMBER} element={<ManageUser />} />
        </Route>
        {/* member route */}
        <Route path={pathMember.MEMBER} element={<MemberLayout />}>
          <Route path={pathMember.PERSONAL} element={<Personal />} />
        </Route>
      </Routes>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          duration: 4000
        }}
      />
    </>
  )
}

export default App
