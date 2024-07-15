db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('bulletins');

db.bulletins.insert({ title: 'Bulletin 3', content: 'this is the third bulletin content text' });
db.bulletins.insert({ title: 'Bulletin 2', content: 'this is the second bulletin content text' });
db.bulletins.insert({ title: 'Bulletin 1', content: 'this is the first bulletin content text' });