const { Advertisement } = require('../db/models');

function errorHandler(err, req, res) {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}

async function createAdvertisement(body) {
  try {
    if (body.photo.length > 3) throw new Error('too many photos'); // Column "photo" is of type "jsonB", so client should send an array of links like strings
    const advertisement = await Advertisement.create({
      name: body.name,
      description: body.description,
      price: body.price,
      photo: body.photo,
    });

    return `advertisement id is ${advertisement.id}`;
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

    return {
      name: advertisement.name,
      price: advertisement.price,
      photo: advertisement.photo[0],
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllAdvertisements(order) {
  try {
    let advertisements = [];

    if (order === 'asc') {
      advertisements = await Advertisement.findAll({
        order: [
          ['price', 'ASC'],
          ['createdAt', 'ASC'],
        ],
        limit: 10,
      });
    } else if (order === 'desc') {
      advertisements = await Advertisement.findAll({
        order: [
          ['price', 'DESC'],
          ['createdAt', 'DESC'],
        ],
        limit: 10,
      });
    } else {
      advertisements = await Advertisement.findAll({
        limit: 10,
      });
    }

    return advertisements.map((a) => ({
      name: a.name,
      price: a.price,
      photo: a.photo[0],
    }));
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
