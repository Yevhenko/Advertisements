const { Advertisement } = require('../db/models');

function errorHandler(err, req, res) {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}

async function createAdvertisement(body) {
  try {
    const advertisement = await Advertisement.create({
      name: body.name,
    });

    return advertisement;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getOneAdvertisement(params) {
  try {
    const advertisement = await Advertisement.findOne({
      where: { id: params.id },
    });

    return advertisement;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllAdvertisements() {
  try {
    const advertisements = await Advertisement.findAll();

    return advertisements;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  errorHandler,
  createAdvertisement,
  getAllAdvertisements,
  getOneAdvertisement,
};
