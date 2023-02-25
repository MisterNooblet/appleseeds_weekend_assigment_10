import axios from "axios"

const invAPI = {
    inv: axios.create({
        baseURL: 'https://63f8b5006978b1f9105f4236.mockapi.io/inventory'
    }),

    async addItem(content) {
        const response = await this.inv.post('/', content)
        return response
    },

    async getBrands() {
        try {
            const response = await this.inv.get('/1')
            const result = Object.values(response.data).filter(el => isNaN(el * 1))
            return result
        } catch (error) {

        }

    },

    async getModels() {
        try {
            const response = await this.inv.get('/2')
            return response.data
        } catch (error) {

        }
    },

    async getByBrand(brand) {
        try {
            const response = await this.inv.get('', {
                params: { 'brand': brand },
                transformResponse: [
                    (data) => {
                        const parsedData = JSON.parse(data)
                        console.log(parsedData);
                        console.log(brand);
                        const result = parsedData.filter(brandname => {
                            return brandname.brand === brand
                        })
                        return result
                    }
                ]

            })
            return response.data
        } catch (error) {

        }
    },

    async getModel(id) {
        try {
            const response = await this.inv.get(id)
            return response.data
        } catch (error) {

        }
    },


    //////////////
    async deletePosts() {
        const allPosts = await this.getPosts()
        allPosts.forEach(element => {
            this.posts.delete(`/${element.id}`)

        })
    },

    async getPosts() {
        try {
            const response = await this.posts.get('/')
            return response.data
        } catch (error) {

        }
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

export default invAPI