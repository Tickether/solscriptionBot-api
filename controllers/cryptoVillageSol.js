import CryptoVillageSol from "../models/CryptoVillageSol.js";

export const createCryptoVillageSol = async (req, res, next) => {
    const bookerId = req.params.bookerid;
    const newCryptoVillageSol = new CryptoVillageSol(req.body);

    try{
        const savedCryptoVillageSol = await newCryptoVillageSol.save();
        res.status(200).json(savedCryptoVillageSol);
    } catch(err) {
        next(err);
    }
}

export const updateCryptoVillageSol = async (req, res, next) => {
    try{
        const updateCryptoVillageSol = await CryptoVillageSol.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            {new: true}
        );
        res.status(200).json(updateCryptoVillageSol);
    } catch(err) {
        next(err);
    }
}



export const getCryptoVillageSol = async (req, res, next) => {
    try{
        const cryptoVillageSol = await CryptoVillageSol.findOne({
            discordID: req.params.id
        }); 
        res.status(200).json(cryptoVillageSol);
    } catch(err) {
        next(err);
    }
}

export const getCryptoVillageSols = async (req, res, next) => {
    const {min, max, ...others} = req.query;
    try{
        const cryptoVillageSols = await CryptoVillageSol.find({...others, cheapestPrice: {$gt:min | 1, $lt:max || 1000000}}).limit(req.query.limit);
        res.status(200).json(cryptoVillageSols);
    } catch(err) {
        next(err);
    }
};

