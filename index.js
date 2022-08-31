require('dotenv').config()
const axios = require('axios')

//chave
const appid = process.env.appid
const q = 'Itu'
const units = 'metric'
const lang = 'pt_BR'
const cnt = '10'
const base_url = 'https://api.openweathermap.org/data/2.5/forecast'

const url = `${base_url}?appid=${appid}&q=${q}&units=${units}&lang=${lang}&cnt=${cnt}`

const result = axios.get(url)

result
.then(res => {
  //console.log(res)
  return res.data
})
.then(res => {
  //console.log(res.data)
  return res['list']
})
.then(res => {
  for (previsao of res){
    const dt = previsao.dt
    const temp_min = previsao.main.temp_min
    const temp_max = previsao.main.temp_max
    const humidity = previsao.main.humidity
    const description = previsao.weather[0].description
    console.log(`${new Date(+dt * 1000).toLocaleTimeString()}`)
    console.log(`Temp min: ${temp_min}\u00B0C`)
    console.log(`Temp max: ${temp_max}\u00B0C`)
    console.log(`Humidity: ${humidity}%`)
    console.log(`Description: ${description}`)
  }
  return res
})
.then (res => {
  //mostre quantas previsões têm percepção humana de calor acima de 15 celsius
})