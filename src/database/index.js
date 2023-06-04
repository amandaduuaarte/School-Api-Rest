import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/student';
import User from '../models/user';

const models = [Student, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
