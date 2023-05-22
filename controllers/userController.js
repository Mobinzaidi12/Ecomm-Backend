const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm'
const Users = require("../models/User");

const registerUser = async (req,res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    jwt.sign({result},jwtKey,{expiresIn: '2h'}, (erro,token)=>{

        if(erro){
            res.json({status:false,message:'user not found'});
        }else{
            res.send({result,auth: token})
        }

    }) 

}


const loginUser = async (req,res)=>{

    if(req.body.password && req.body.email){
        let user = await Users.findOne(req.body).select('-password');
    if(user){
    
        jwt.sign({user},jwtKey,{expiresIn: '2h'},(erro,token)=>{

            if(erro){
                
                res.json({status:false,message:'user not found'});
            }else{

                res.json({status:true, user,auth: token})
            }

        }) 
    }
    else{
        res.json({status:false,message:'user not found'});
    }
    }else{
        res.json({status:false,message:'not found'})
    }
}



module.exports = {registerUser, loginUser};