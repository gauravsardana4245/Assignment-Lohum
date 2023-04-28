import express from "express";
import cors from 'cors'
import axios from 'axios'
import cheerio from 'cheerio'
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.get('/price', async (req, res) => {
    try {
        const page = await axios.get('https://www.metal.com/Lithium-ion-Battery/202303240001')
        const $ = cheerio.load(page.data);
        const element = $('.block___2RfAT .priceDown___2TbRQ').eq(0);
        const price = element.text(); // get the text inside the element
        res.json({ price: price });
    } catch (error) {
        console.log(error)
    }
});

app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
})