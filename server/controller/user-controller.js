
// import user from '../model/user-schema.js';
const User = require('../model/user-schema.js');


// export const userLogIn = async (request, response) => {
//     try {
//         let user = await User.findOne({ username: request.body.username, password: request.body.password });
//         if(user) {
//             return response.status(200).json(`${request.body.username} login successfull`);
//         } else {
//             return response.status(401).json('Invalid Login');
//         }

//     } catch (error) {
//         response.json('Error: ', error.message);        
//     }
// }

 const userLogin = async (request, response) => {
    try{
        const username = request.body.username;
        const password = request.body.password;

        let user = await User.findOne({username: username, password: password})

        if(user){
            return response.status(200).json({data: user})
        } else {
            return response.status(401).json('Invalid login')
        }
    }catch(error){
        response.status(500).json('Error', error.message)
    }
}

// module.exports = userLogin;


const userSignUp = async (request, response) => {
    try {
        console.log(request.body);
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        console.log(user);
        debugger
        const newUser = new User(user);
        console.log(newUser);
        debugger
        await newUser.save();
        //1 obj ko save karna h db toh save() use kar sakte h
        response.status(200).json({ mesage: user });
        //return likhna jaruri nahi hai, uske jagah response
        //500 internal server error
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

// module.exports = userSignUp;
module.exports = { userLogin, userSignUp };

// const userSignup = (request, response) => {
//     try{
//         console.log(request.body);
//     }catch (error){
//         console.log(error);
//     }
// }

