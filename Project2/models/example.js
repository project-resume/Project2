module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Example", {
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    appliedDate: DataTypes.DATE,
    contactInfo: DataTypes.TEXT,
    resume: DataTypes.STRING
  });
  return Jobs;
};
