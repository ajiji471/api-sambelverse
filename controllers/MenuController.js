import Menu from "../models/MenuModel.js";

export const getMenu = async(req, res) =>{
    try {const response = await Menu.findAll();
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);}} 

export const getMenuById = async(req, res) =>{
    try {const response = await Menu.findOne({
        where :{id: req.params.id}});
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }};

    export const createMenu = async (req, res) => {
        try {
            console.log(req.body);  
            const menu = await Menu.create(req.body);
    
            // const menu = await Menu.create({
                
            //     nama_menu: req.body.nama_menu,
            //     harga: req.body.harga,
            //     rating: req.body.rating
            // });
    
            res.status(201).json(menu);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ msg: "Internal Server Error" });
        }
    };

    export const updateMenu = async(req, res) =>{
        try {
            await Menu.update(req.body, {
                where:{id: req.params.id}});
                res.status(200).json({msg: "Menu Updated"});
            }catch (error) {
                console.log(error.message);
            }
        };

        export const deleteMenu = async(req, res) =>{
            try {
                await Menu.destroy({
                    where:{ id: req.params.id}});
                    res.status(200).json({msg: "Menu Deleted"});
                }catch (error) {console.log(error.message);}
            };
    