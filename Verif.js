let day = new Date().getDay()
let hours = new Date().getHours()



function verif1 (req,res,next){
    if(day>0 && day<6 && hours>8 && hours<17)
    next()
    else (res.send(`<h1> Welcome servise close now -- , service open in 8h -->17h / monday --> friday <h1/>`))
}
module.exports=verif1;