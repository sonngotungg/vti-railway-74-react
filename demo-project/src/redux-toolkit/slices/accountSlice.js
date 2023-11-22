// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../apis/accountApi';

export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const data = await loginApi(credentials);

    return data;
  } catch (error) {
    console.log(error)
  }

});

// export const registerAsync = createAsyncThunk('auth/register', async (user) => {
//   const response = await fetch(`${API_URL}/register`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Registration failed');
//   }

//   return data;
// });

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    user: null, // username, id, role
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('access-token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        localStorage.setItem('access-token', action.payload.token)
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    //   .addCase(registerAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(registerAsync.fulfilled, (state, action) => {
    //     state.status = 'succeeded';
    //     state.user = action.payload;
    //   })
    //   .addCase(registerAsync.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message;
    //   });
  },
});

export const { setUser, logout } = accountSlice.actions;
export default accountSlice.reducer;
