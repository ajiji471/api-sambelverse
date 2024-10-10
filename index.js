import express from "express";
import cors from "cors";

//import route
import MenuRoute from "./routes/MenuRoute.js";
import UserRoute from "./routes/UserRoute.js";
import InvoiceRoute from  "./routes/InvoiceRoute.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use(MenuRoute);
app.use(UserRoute);
app.use(InvoiceRoute);

// app.use((err, req, res, next) => {
    //     console.error(err.stack);
    //     res.status(500).send('Something broke!');
    // });
    
    app.listen(5000, ()=> console.log('Server Up and running..'));