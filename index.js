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

console.log(appid)