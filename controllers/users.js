import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) =>{
    res.send(users);
}

export const postUser = (req,res)=> {
    
    const user = req.body;
    users.push({...user,id:uuidv4()});
    
    res.send(`User ${user.firstName} is added Successfully!`);
}

export const getUser = (req,res)=>{
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);

}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id !==id);
    res.send(`User with id ${id} deleted!`);
}

export const updateUser = (req,res) =>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;
    const userWantToUpdate = users.find((user) => user.id === id);
    if(firstName){
        userWantToUpdate.firstName=firstName;
    }
    if(lastName){
        userWantToUpdate.lastName=lastName;
    }
    if(age){
        userWantToUpdate.age=age;
    }
    res.send(`User with id ${id} has benn updated`);
}


