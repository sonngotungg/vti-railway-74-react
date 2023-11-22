import axiosInstance from "./axios";
export const loginApi = async (data) => {
    const response = await axiosInstance({
        method: "post",
        url: "/auth/login-jwt",
        params: {
            username: data.username,
            password: data.password,
        },
    });
    return response.data;

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             id: 2,
    //             username: 'username 1',
    //             fullName: 'full name',
    //             avatar: 'avatar 1',
    //             address: 'address 1',
    //             role: 'CUSTOMER',
    //             token: 'token 1'
    //         })
    //     }, 2000)
    // })
};

// export const register = async () => {
//     const response = await axiosInstance({
//         method: 'post',
//         url: '/auth/register',
//         data: {
//             address: 'address',
//             avatar: 'avatar',
//             dateBirth: 'date',
//             fullName: 'fullName',
//             information: 'information',
//             phoneNumber: '0123456789',
//             username: 'username',
//             password: 'password'
//         }
//     })

//     console.log('register: ', response)

//     // save access-token got from the response data into localStorage
//     // save other data into redux
// }
