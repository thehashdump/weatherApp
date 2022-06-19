const http = require('http')
const fs =require('fs')
homeData = fs.readFileSync('home.html','utf-8')

const replaceValue = (tmpVal,orgVal)=>{
    let temp = tmpVal.replace("{%temp%}",orgVal.main.temp)
    temp = temp.replace("{%temp_min%}",orgVal.main.temp_min)
    temp = temp.replace("{%temp_max%}",orgVal.main.temp_max)
    temp = temp.replace("{%country%}",orgVal.sys.country)
    temp = temp.replace("{%city%}",orgVal.name)  
    temp = temp.replace("{%status%}",orgVal.weather[0].main)  
    return temp
}


const server = http.createServer()
const requests = require('requests')
// const homeFileData = fs.readFileSync('home.html','utf-8')
// const utilityData = fs.readFileSync('utility.js','utf-8')
server.on("request",(req,res)=>{
    if(req.url == '/')
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=multan&appid=f7948beca8c567faf90214f6df6deefe&units=metric")
        .on('data', (data) => {
            const parsedData = JSON.parse(data)
            const arr = [parsedData]
            const realTimeData = arr.map((val)=> replaceValue(homeData,val)).join("")
            res.write(realTimeData)
        })
        .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        });
    }
})

server.listen(8000,"127.0.0.1")