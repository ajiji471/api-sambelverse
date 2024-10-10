import Invoice from './models/InvoiceModel.js';
import User from './models/UserModel.js';

// Fetch invoices with the associated user
app.get('/invoices', async (req, res) => {
    try {
        const invoices = await Invoice.findAll({
            include: {
                model: User,
                attributes: ['name'] // Fetch only the 'name' field from the user
            }
        });
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});