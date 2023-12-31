import { IDestinationsSelect } from '@interfaces/destination.interface'
import { getRolesThunk } from '@redux/actions'
import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  roles: any
  isLoading: boolean
  destinations: IDestinationsSelect[]
  isShowModal: boolean
  modalContent: string | null
  hotelTypes: string[]
}
const initialState = {
  roles: [],
  isLoading: false,
  destinations: [],
  isShowModal: false,
  modalContent: null,
  hotelTypes: []
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRolesThunk.fulfilled, (state, action) => {
      state.roles = action.payload
    })
  }
})
export const { toggleLoading } = appSlice.actions
export default appSlice.reducer
