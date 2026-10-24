
const jsonServer= require('json-server')
const rbServer= jsonServer.create()
const router = jsonServer.router('db.json')
const middileware=jsonServer.defaults()

const PORT =3000

rbServer.use(middileware)
rbServer.use(router)

rbServer.listen(PORT,()=>{
    console.log(`RB-server started running at PORT:${PORT}...and waiting for client request!!`);
    
})