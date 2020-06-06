const pool = require('../modules/pool');
const table = "concert";
const likeTable = "likes";
const concerts = {
    getBanner : async() =>{
        const query = `SELECT concertIdx,concert_title,concert_date,concert_image,concert_tag FROM ${table} where concertIdx = 1`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getBanner err'+err);
            throw err;
        }
    },
    getManyLikesConcert: async() =>{
        const manyLikeQuery = `select concertIdx ,COUNT(concertIdx) as cnt from ${table} natural join ${likeTable} group by concertIdx order by cnt desc;`
        const query2 = ``
        try{
            const result = await pool.queryParam(query);
            console.log(result);
            return result;
        }catch(err){
            console.log('getManyLikesConcert err'+ err);
            throw err;
        }
    },
    isConcertIdx: async (concertIdx) =>{
        const query = `select concertIdx from ${table} where concertIdx ="${concertIdx}"`;
        try{
            const result = await pool.queryParam(query);
            if(result.length >0){
                return true;
            }else return false;
        }catch(err){
            console.log('isConcertIdx err'+err);
            throw err;
        }
    },
    getConcertOne : async(concertIdx) =>{
        const query = `select * from ${table} where concertIdx = "${concertIdx}"`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getConcertOne err'+ err);
            throw err;
        }
    },
    getConcertAll: async()=>{
        const query = `select concertIdx,concert_title,concert_date,concert_image,concert_tag from ${table}`;
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getConcertAll err'+ err);
            throw err;
        }
    },
    getCategory: async(category) =>{
        const query =`select concertIdx,concert_title,concert_date,concert_image,concert_tag from ${table} where concert_category = "${category}"`
        try{
            const result = await pool.queryParam(query);
            return result;
        }catch(err){
            console.log('getCategory err'+ err);
            throw err;
        }
    }
}

module.exports = concerts;