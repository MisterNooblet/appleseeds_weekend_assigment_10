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

    async updateItem(data, id) {
        try {
            const request = await this.inv.put(id, data)
            return request.data
        } catch (error) {

        }
    },

    async deleteItem(id) {
        try {
            this.inv.delete(id)
        } catch (error) {

        }
    },

}

export default invAPI