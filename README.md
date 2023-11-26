# RGBlogScraper
RGBlogScraper is a web scraping tool based on Selenium built for RateGain CodeRangers 2023.

> A .csv and .json file of the last scrape can be fould in the repoisitory with the name `rateGain.blogs`

## Architecture
RGBlogScraper is built on the microservices architecture keeping in mind the dynamic scaling requirements of the tool. The project has following three sub-parts:
- **Frontend:** 
  Responsible for providing a GUI for making use-case specific queries to the ScraperAPI.
- **Scraper:** 
  A Selenium and NodeJS based web scraper that scrapes and saves the results to a MongoDB collection.
- **ScraperAPI:** 
  ScraperAPI is the interface for quering scraping data saved in MongoDB.

## Setup
### 1. Frontend
Stack:
- NextJS (ReactJS)
- NodeJS
- HTML/ CSS

1. Install dependencies
```
npm i
```
2. Run in dev environment
```
npm run dev
```

### 2. Scraper
Stack:
- Selenium
- NodeJS
- MongoDB (mongoose ORM)

1. Setup Selenium on your device following [this official guide](https://www.npmjs.com/package/selenium-webdriver).

2. Create a `.env` file and add the following
```
MONGO_URL=<YOUR_MONGODB_URL"
```
3. Install dependencies
```
npm i
```
4. Run the script
```
node index.js
```

### 3. ScrapperAPI
Stack:
- ExpressJS
- MongoDB (mongoose ORM)
- NodeJS

1. Create a `.env` file and add the following
```
PORT=<YOU_DESIRED_PORT>
```
2. Install dependencies
```
npm i
```
3. Run express server
```
node index.js
```

