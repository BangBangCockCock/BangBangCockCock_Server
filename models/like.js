const pool = require('../modules/pool');
const table = "likes";
const likes = {
    isLike: async(userIdx,concertIdx) =>{
        const query = `select COUNT(*) as cnt from ${table} where userIdx = ${userIdx} and concertIdx = ${concertIdx}`;
        try{
            const result = await pool.queryParam(query);
            console.log(result[0].cnt);
            if(result[0].cnt === 0){
                return false;
            } else return true;
        }catch(err){
            console.log('isLike err'+ err);
            throw err;
        }
    }
}

module.exports = likes;