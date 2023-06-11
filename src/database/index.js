import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/student';
import User from '../models/user';
import Photo from '../models/photo';

const models = [Student, User, Photo];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
