import { nanoid } from 'nanoid';
import UrlModel from '../Models/urlModel.js';

export const shortTheUrl = async (req, res) => {
    const url = req.body.url;
    const uniqueId = nanoid(10);

    const isUrlExists = await UrlModel.findOne({ originalUrl: url }); 

    if (isUrlExists) {
        res.status(409).json({ message: 'Url already exists' });
    } else {
        const urlObj = await new UrlModel({ originalUrl: url, shortedUrl: uniqueId }).save();
        res.status(200).json({
            message: "shorted link is generated",
            link: `https://short-url-u8hf.onrender.com/api/${uniqueId}`
        });
    }
}

export const getOriginalUrl = async (req, res) => {
    const shortUrl = req.params.shortUrl;

    const urlObj = await UrlModel.findOne({ shortedUrl: shortUrl }); 
    console.log(urlObj)
    if (urlObj) {
        console.log(urlObj.originalUrl);
        
        res.redirect(urlObj.originalUrl);
    } else {
        res.status(404).json({ message: "Shortened URL not found" });
    }
}