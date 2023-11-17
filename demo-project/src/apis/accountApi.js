export const login = async () => {
    const response = await axiosInstance({
        method: 'post',
        url: '/auth/login-jwt',
        data: {
            username: 'username',
            password: 'password'
        }
    })

    console.log('login: ', response)
}

export const register = async () => {
    const response = await axiosInstance({
        method: 'post',
        url: '/auth/register',
        data: {
            address: 'address',
            avatar: 'avatar',
            dateBirth: 'date',
            fullName: 'fullName',
            information: 'information',
            phoneNumber: '0123456789',
            username: 'username',
            password: 'password'
        }
    })

    console.log('register: ', response)

    // save access-token got from the response data into localStorage
    // save other data into redux
}