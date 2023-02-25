import axios from "axios"

const userAPI = {
    users: axios.create({
        baseURL: 'https://63f8b5006978b1f9105f4236.mockapi.io/users'
    }),

    register(user) {
        this.users.post('/', user)
    },

    async userUnique(user) {
        try {
            const response = await this.users.get('/', {
                transformResponse: [
                    (data) => {
                        const parsedData = JSON.parse(data)
                        const result = parsedData.find(users => {
                            return users.username.toLowerCase() === user.toLowerCase()
                        })
                        return result
                    }
                ]
            })
            return response.data
        } catch (error) {

        }
    },

    async userCanlog(user, password) {
        try {
            const response = await this.users.get('/', {
                transformResponse: [
                    (data) => {
                        const parsedData = JSON.parse(data)
                        const result = parsedData.find(users => {
                            return users.username.toLowerCase() === user.toLowerCase() && users.password === password
                        })
                        return result
                    }
                ]
            })
            return response.data
        } catch (error) {

        }
    }

}

export default userAPI