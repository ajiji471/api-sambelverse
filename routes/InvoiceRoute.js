import express from "express";
import { getInvoice,
        getInvoiceById,
        createInvoice,
        updateInvoice,
        deleteInvoice
} from "../controllers/InvoiceController.js"; 

const router = express.Router();
router.get('/invoices', getInvoice);
router.get('/invoices/:id', getInvoiceById);
router.post('/invoices', createInvoice);
router.patch('/invoices/:id', updateInvoice);
router.delete('/invoices/:id', deleteInvoice)

export default router;