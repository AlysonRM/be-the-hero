const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const { page = 1} = request.query;
        const ongs_id = request.headers.authorization;
        
        const incidents = await connection('incidents')
            .limit(5)
            .offset((page - 1) * 5)
            .where('ongs_id', ongs_id)
            .select();

        return response.json({incidents});
    }
};