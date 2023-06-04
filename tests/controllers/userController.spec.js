import UserController from '../../src/controllers/UserController';
import UserModel from '../../src/models/user';

describe('User Controller test', () => {
  test('Should create user with 200 status.', async () => {
    const req = { body: { name: 'Exemplo', password: '123456', email: 'exemplo@example.com' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await UserController.store(req, res);

    // Verifique se o status foi definido corretamente
    expect(res.status).toHaveBeenCalledWith(200);

    // Verifique se o método json foi chamado com os dados do novo usuário
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
