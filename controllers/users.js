const { v4:uuid } = require('uuid');

let users = [
    {
        id:1,
        userid : "gildong",
        userpwd : "Park", 
    },
    {
        id:2,
        userid : "gildong",
        userpwd : "Lee", 
    }
];

const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

const createUser = (req, res) => {   
    const user = req.body;
    console.log( user )

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.userid}] added to the database.`);
};

const getUser = (req, res) => {
    const user = users.find((user) => user.id !== req.params.id);
    res.send(user);
};

const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
    res.send(users)
};

const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.userid = req.body.userid;
    user.userpwd = req.body.userpwd; 

    console.log(`userid has been updated to ${req.body.userid}.userpwd has been updated to ${req.body.userpwd}`)
    res.send( users);
};

module.exports = { getUsers, createUser, getUser, deleteUser, updateUser }