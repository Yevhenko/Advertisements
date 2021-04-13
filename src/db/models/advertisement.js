module.exports = (sequelize, DataTypes) => {
  const Advertisement = sequelize.define(
    'Advertisement',
    {
      name: DataTypes.STRING(200),
      description: DataTypes.STRING(1000),
      price: DataTypes.DECIMAL,
      photo: DataTypes.STRING,
    },
    {},
  );
  Advertisement.associate = () => {
    // associations can be defined here
  };
  return Advertisement;
};
