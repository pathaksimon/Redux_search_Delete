import {configureStore} from '@reduxjs/toolkit'
import Userreducer from '../User/UserSlice'

const store = configureStore({
  reducer: {
    User: Userreducer,
  },
})

export default store
