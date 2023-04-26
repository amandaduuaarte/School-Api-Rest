import request from 'supertest';
import app from '../../app';

describe('Home router test', () => {
  it('Should return have any return in home router(get)', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
