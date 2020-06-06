const pool = require('../modules/pool');
const table = "likes";
const likes = {
    isLike: async(userIdx,concertIdx) =>{
        const query = `select COUNT(*) as cnt from ${table} where userIdx = ${userIdx} and concertIdx = ${concertIdx}`;
        try{
            const result = await pool.queryParam(query);
            if(result[0].cnt === 0){
                return false;
            } else return true;
        }catch(err){
            console.log('isLike err'+ err);
            throw err;
        }
    },
    addLike: async(userIdx, concertIdx) =>{
        const fields = `userIdx, concertIdx`;
        const question = `?,?`;
        const values = [userIdx, concertIdx];
        const query = `INSERT INTO ${table}(${fields}) VALUES(${question})`;
        try{
            const result = await pool.queryParamArr(query,values);
            console.log(result.insertId);
            const insertId = result.insertId;
            return insertId;
        }catch(err){
            console.log("addLike err"+ err);
            throw err;
        }

    },
    deleteLike: async(userIdx, concertIdx) =>{
        const query = `DELETE FROM ${table} WHERE userIdx = "${userIdx}" and concertIdx = "${concertIdx}"`;
        try{
            const result = await pool.queryParam(query);
            console.log(result.insertId);
            return result;
        }catch(err){
            console.log('delete Like error'+ err);
            throw err;
        }
    }
}

module.exports = likes;