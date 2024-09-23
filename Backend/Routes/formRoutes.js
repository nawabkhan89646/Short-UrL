import express from 'express';
import logger from '../Logger/logger.js';
import { getOriginalUrl, shortTheUrl } from '../Controllers/formController.js';

const router = express.Router();

// Middleware to log all incoming requests
router.use((req, res, next) => {
    const { method, url, ip } = req;
    const logMessage = `Method: ${method}, URL: ${url}, IP: ${ip}`;
    logger.info(logMessage); 
    next();
});
router.post('/',
    shortTheUrl
);

router.get('/:shortUrl',
    getOriginalUrl
);

export default router;