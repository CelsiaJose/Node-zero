/*import { createServer } from 'node:http'

const server=createServer((request,response)=>{
    console.log("Servidor escutando")
    response.write("oiee")
    return response.end()
})
server.listen(3000)
*/

import {fastify} from "fastify";
//import Database from './database.js'
import DatabasePostgres from "./database_postgres.js";
const server=fastify()

//criando rotas das classes criadas 
//requeste body. do corpo do site

//const database=new Database()
const database=new DatabasePostgres()


server.post('/video',async(request,reply)=>{
    
    const { title,description,duration}=request.body
    //const body= request.body
   // console.log(body)
    await database.create({
        title,
        description,
        duration,

    })
    
    //console.log(database.list())
    return reply.status(201).send()
})
server.get('/video',async(request)=>
    {
        const search=request.query.search
        
        const video=await database.list(search)
        return video
    
    })

server.put('/video/:id',async(request,reply)=>{
        
    const videoId=request.params.id
    const {title,description,duration}=request.body
    
    await database.update(videoId,{
        title,
        description,
        duration,
    })
    return reply.send()
    
})
    server.delete('/video/:id',async(request,reply)=>
        {
            const videoId=request.params.id
            database.delete(videoId)
            return reply.status(204).send()
        
        })

server.listen({

    host:'0.0.0.0',
    port:process.env.PORT ??333,})
