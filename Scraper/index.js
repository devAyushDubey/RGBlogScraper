import mongoose from 'mongoose';
import {Builder, By } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { parse } from 'node-html-parser';
import Blog from './models/blog.js';
import stringToHash from './uils/StringHelper.js';
import 'dotenv/config'

await mongoose.connect(process.env.MONGO_URL);
console.log("MongoDB ✅");

const options = new Options()
options.headless()

let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
let driverSec = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

try {
    for(let key of Array(1).keys()){

        await driver.get(`https://rategain.com/blog/page/${key+1}/`);
        let root = parse(await driver.getPageSource());
        const blogs = root.querySelectorAll('.blog-item .wrap');

        for(let blog of blogs){

            let thumb = blog.childNodes[0];
            let content = blog.childNodes[1];

            //Blog Page Scrap
            await driverSec.get(content.childNodes[0].childNodes[0].getAttribute('href'));
            let blogRoot = parse(await driverSec.getPageSource());

            //Blog Body
            let body = '';
            let bodyContainer = blogRoot.querySelector('.post-content .clearfix').querySelectorAll('p, h1, h2, h3, h4, h5, h6');
            bodyContainer.forEach((elem) => body += elem.textContent);

            //Blog Images
            let imagesUrl = [thumb.childNodes[0].getAttribute('data-bg')];
            let imageContainer  = await driverSec.findElements(By.css('.post-content .clearfix img'));
            for(let image of imageContainer){
                imagesUrl.push(await image.getAttribute('data-lazy-src'));
            }
            
            //Blog Tags
            let tags = [];
            let tagsContainer = blogRoot.querySelectorAll('.s-sidebar .w>a');
            tagsContainer.forEach(tag => tags.push(tag.textContent));


            //Blog Labels
            let labels = content.querySelectorAll('.blog-detail .bd-item')[1].textContent.split(', ');
            if(labels.length>1){
                let resolve = labels[labels.length-1];
                labels[labels.length-1] = resolve.split(' and ')[0];
                labels.push(resolve.split(' and ')[1]);
            }
            
            //Blog Date
            let date = content.querySelectorAll('.blog-detail .bd-item')[0].textContent;

            //MongoDB Insertion
            await Blog.create({
                id: stringToHash(content.childNodes[0].textContent),
                title: content.childNodes[0].textContent,
                date: date,
                body: body,
                urls: {
                    blogUrl: content.childNodes[0].childNodes[0].getAttribute('href'),
                    thumbUrl: thumb.childNodes[0].getAttribute('data-bg'),
                    imagesUrl: [...imagesUrl],
                },
                likes:Number(content.childNodes[4].textContent.split(' ')[1]),
                labels:[...labels],
                tags:[...tags]
            })
            console.log('Added');
        }

    }
    
} 
finally {
    await driver.quit();
    await driverSec.quit();
    await mongoose.disconnect();
}