import express from 'express';
import { createCryptoVillageSol, getCryptoVillageSol, getCryptoVillageSols, updateCryptoVillageSol } from '../controllers/cryptoVillageSol.js';

const router = express.Router();

//CREATE
router.post('/', createCryptoVillageSol);

//UPDATE
router.put('/:id', updateCryptoVillageSol);

//GET
router.get('/:id', getCryptoVillageSol);

//GET ALL
router.get('/', getCryptoVillageSols);


export default router