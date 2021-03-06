'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lesson = sequelize.define('Lesson', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    number: DataTypes.INTEGER,
    lessonType: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    externalLinks: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Lesson.associate = function(models) {
    // associations can be defined here
    Lesson.belongsTo(models.Module, {
      foreignKey: 'moduleId',
      onDelete: 'CASCADE',
    });
  };
  return Lesson;
};
