// import { teste, abc } from './controller/Connection.js'

// (async function startCode () {
//     console.log("teste2121")
//     await teste();
// }())

import express from 'express'
import cors from 'cors'
import { getAuthorizationCode } from './controller/Authorization.js'


const server = express()
server.use(cors())
server.use(express.json())

server.get("/", (req, res) => { 
    const { code } = req.query
    console.log(code)
    const authorizationCode = getAuthorizationCode(code)
    console.log(authorizationCode)
})

server.listen(process.env.PORT, () => { console.log(`API ${process.env.PORT} Conected!`)})