import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../Features/studentsSlice';


const store = configureStore({
  reducer: {
    student: studentReducer
  }
})

export default store; 