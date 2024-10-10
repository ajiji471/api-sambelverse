import Invoice from "../models/InvoiceModel.js";

export const getInvoice = async(req, res) =>{
    try {const response = await Invoice.findAll();
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);}} 

export const getInvoiceById = async(req, res) =>{
    try {const response = await Invoice.findOne({
        where :{id: req.params.id}});
        res.status(200).json(response);
    }catch (error) {
        console.log(error.message);
    }};

    export const createInvoice = async (req, res) => {
        try {
            console.log(req.body);  // Lihat data yang diterima dari request body
            const invoice = await Invoice.create(req.body);
    
           
    
            res.status(201).json(invoice);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ msg: "Internal Server Error" });
        }
    };

    export const updateInvoice = async(req, res) =>{
        try {
            await Invoice.update(req.body, {
                where:{id: req.params.id}});
                res.status(200).json({msg: "Invoice Updated"});
            }catch (error) {
                console.log(error.message);
            }
        };

        export const deleteInvoice = async(req, res) =>{
            try {
                await Invoice.destroy({
                    where:{ id: req.params.id}});
                    res.status(200).json({msg: "Invoice Deleted"});
                }catch (error) {console.log(error.message);}
            };
    