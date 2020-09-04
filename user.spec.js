import User from './user';

describe('User', () => {
  test('name return full name', () => {
    const user = new User({ firstName: 'Jan', lastName: 'Nowak' });
    expect(user.name).toBe('Jan Nowak');
  });
});
