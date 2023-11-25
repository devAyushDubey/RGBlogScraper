import express from "express"
import { json2csv } from 'json-2-csv';
import Blog from "../models/blog.js";

const router = express.Router();

const ref = ["id","title","date","body","urls","likes","labels","tags"];

router.get('/', (req,res) => {
    console.log(`'/' called by ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)

    try{
        res.send("ScraperAPI for RateGain CodeRangers 2023 ⚙")
    }
    catch(e) {console.log(e)}
    
})

router.get('/blogs/download', (req,res) => fieldValidation(req,res, async (req,res) => {

    console.log(`'/blogs/download' called by ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`)

    const fields = req.query.fields?req.query.fields.replace(/,/g,' '):ref.join(' ');

    const query = Blog.find({});
    query.select(fields)

    const blogs = await query.exec();
    
    res.send(blogs);

}));


router.get('/blogs/download/csv', (req,res) => fieldValidation(req,res, async (req,res) => {

    console.log(`'/blogs/download/csv' called by ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`);

    const fields = req.query.fields?req.query.fields.replace(/,/g,' '):ref.join(' ');

    const query = Blog.find({}).lean();
    query.select(fields)

    const blogs = await query.exec();

    const d = new Date().toLocaleString('en-IN',{timeZone:'Asia/Kolkata'}).split(',');
    const date = d[0].replaceAll('/','-');
    const time = d[1].split(' ');
    const filename = `RateGain_Blogs_${date}_${time[1].replaceAll(':','-')}_${time[2]}.csv`;

    const csv = json2csv(blogs, { expandArrayObjects: true });
    res.attachment(`${filename}.csv`).send(csv);

}));


function fieldValidation(req,res,next) {

    let refFields = new Set(["id","title","date","body","urls","likes","labels","tags"]);

    if(req.query.fields){
        const fields = req.query.fields.split(',');

        fields.forEach((field) => { 
            if(!refFields.has(field)){
                res.send(`Invalid Query Field Params! \n ${field} is not recognised`);
                return;
            }
        })
    }

    next(req,res);
}

export default router