import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import studentRoutes from './routes/student';
import profileRoutes from './routes/profile';
import fileRoutes from './routes/file';
import studentFile from './routes/studentFile';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/profile/', profileRoutes);
    this.app.use('/files/', fileRoutes);
    this.app.use('/student_file/', studentFile);
  }
}

export default new App().app;
