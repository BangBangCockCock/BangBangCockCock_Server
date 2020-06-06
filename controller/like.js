const like = require('../models/like');
const concert = require('../models/concert');
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
        
        const validConcertIdx = await concert.isConcertIdx(concertIdx);
        
        if(!validConcertIdx){
            return await res.status(400).send(util.fail(400,"유효하지 않은 concertIdx"));
        }

        const result = await like.isLike(userIdx,concertIdx);
        return await res.status(200).send(util.success(200,"좋아요 조회 성공",{isLike:result}));
    },
    updateLike : async(req,res) =>{
        const userIdx = "1";
        const {concertIdx} = req.body;
        if(!concertIdx){
            return await res.status(400).send(util.fail(400,resMessage.NULL_VALUE));
        }
        const validConcertIdx = await concert.isConcertIdx(concertIdx);

        if(!validConcertIdx){
            return await res.status(400).send(util.fail(400,"유효하지 않은 concertIdx"));
        }

        const isLike = await like.isLike(userIdx,concertIdx);
     
        let result;
        if(isLike){
            result = await like.deleteLike(userIdx,concertIdx);
        }else{
            result = await like.addLike(userIdx,concertIdx);
        }

        return await res.status(200).send(util.success(200,"좋아요 토글 성공",{concertIdx:concertIdx}))
        
    }
}