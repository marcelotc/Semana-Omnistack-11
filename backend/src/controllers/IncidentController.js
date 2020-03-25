const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        await connection("incidents").insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({"message": 'salvo'});
    },

    async index(request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    }
};
