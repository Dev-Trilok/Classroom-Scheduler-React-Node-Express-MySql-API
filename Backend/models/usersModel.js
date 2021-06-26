module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
      teacherName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return users../;
  };