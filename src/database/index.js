import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/student';
import User from '../models/user';
import Profile from '../models/profile';
import File from '../models/file';
import StudentFile from '../models/studentFile';

const models = [Student, User, Profile, File, StudentFile];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
