const like = require('../models/like');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

module.exports ={
    getLike : async (req,res) =>{
        const userIdx = "1";
        const {concertIdx} = req.params;
        if(!concertIdx){
            return await res.status(400).send(util.fail(400,resMessage.NULL_VALUE));
        }

        const result = await like.isLike(userIdx,concertIdx);
        return await res.status(200).send(util.success(200,"좋아요 조회 성공",{isLike:result}));
    }
}