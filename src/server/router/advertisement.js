const express = require('express');

const { createAdvertisement, getAllAdvertisements, getOneAdvertisement } = require('../handlers');

const advertisement = express.Router();

advertisement.post('/advertisement', async (req, res, next) => {
  try {
    const { body } = req;

    if (!body) res.status(404).send('Not found!');
    const response = await createAdvertisement(body);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

advertisement.get('/advertisement/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const noteId = Number(params.id);

    if (!noteId) res.status(404).send('Not found!');
    const response = await getOneAdvertisement(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

advertisement.get('/advertisements', async (req, res, next) => {
  try {
    const response = await getAllAdvertisements();

    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = advertisement;
