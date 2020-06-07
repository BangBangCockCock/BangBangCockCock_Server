const concert = require('../models/concert');
const util = require('../modules/util');
const resMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const moment = require('moment');

module.exports ={
    getBanner : async (req,res) =>{
        const data = await concert.getBanner();
        return await res.status(200).send(util.success(200,"배너 가져오기 성공",data));
    },
    readOneConcert : async(req,res)=>{
        const {concertIdx} = req.params;
        const validConcertIdx = await concert.isConcertIdx(concertIdx);
        // 유효한 콘서트 인덱스가 아니라면
        if(!validConcertIdx){
            return await res.status(400).send(util.fail(400,"유효하지 않은 concertIdx"));
        }
        const result = await concert.getConcertOne(concertIdx);
        return await res.status(200).send(util.success(200,"콘서트정보 가져오기 성공",result));
    },
    readeAllConcert : async(req,res)=>{
        const result = await concert.getConcertAll();
        return await res.status(200).send(util.success(200,"모든 콘서트 정보 가져오기 성공", result));
    },
    getCategory : async (req,res) =>{
        const {category} = req.params;

        const result = await concert.getCategory(category);
        return await res.status(200).send(util.success(200,"카테고리별 조회성공", result));

    },
    readMostLike : async (req,res) =>{
        const result = await concert.getMostLike();
        return await res.status(200).send(util.success(200,"좋아요순 조회 성공", result));
    },
    readTodayConcert : async (req, res)=>{
        const today = moment().format('YYYY-MM-DD');
        const result = await concert.getTodayConcert(today);
        return await res.status(200).send(util.success(200,"오늘 영화 조회 성공", result));
    }
}