const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page } = request.query;

        const ongs = await connection('ongs')
            .limit(5)
            .offset((page -1 )*5)
            .select('*');
    
        return response.json(ongs);
    },
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
};