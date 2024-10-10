import User from "../models/UserModel.js";

export const getUser = async(req, res) =>{
    try {const response = await User.findAll();
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);}} 

export const getUserById = async(req, res) =>{
    try {const response = await User.findOne({
        where :{id: req.params.id}});
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }};

    export const createUser = async (req, res) => {
        try {
            console.log(req.body);  // Lihat data yang diterima dari request body
            const user = await User.create(req.body);
    
           
    
            res.status(201).json(user);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ msg: "Internal Server Error" });
        }
    };

    export const updateUser = async(req, res) =>{
        try {
            await User.update(req.body, {
                where:{id: req.params.id}});
                res.status(200).json({msg: "User Updated"});
            }catch (error) {
                console.log(error.message);
            }
        };

        export const deleteUser = async(req, res) =>{
            try {
                await User.destroy({
                    where:{ id: req.params.id}});
                    res.status(200).json({msg: "User Deleted"});
                }catch (error) {console.log(error.message);}
            };
    