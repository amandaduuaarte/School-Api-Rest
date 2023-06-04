import UserController from '../../src/controllers/UserController';

describe('User Controller test', () => {
  it('Should create user and send 200 for successful response', async () => {
    const createUser = await UserController.store();

    expect(createUser).to.have.status(200);
  });
});
