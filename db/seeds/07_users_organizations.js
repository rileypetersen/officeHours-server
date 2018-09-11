exports.seed = (knex, Promise) => {
  return knex('users_organizations').del()
    .then(() => {
      return knex('users_organizations').insert([
        {
          id: 1,
          user_id: 1,
          organization_id: 1
        },
        {
          id: 2,
          user_id: 2,
          organization_id: 2
        },
        {
          id: 3,
          user_id: 3,
          organization_id: 1
        },
        {
          id: 4,
          user_id: 4,
          organization_id: 2
        },
        {
          id: 5,
          user_id: 5,
          organization_id: 1
        },
        {
          id: 6,
          user_id: 6,
          organization_id: 2
        },
        {
          id: 7,
          user_id: 7,
          organization_id: 1
        },
        {
          id: 8,
          user_id: 8,
          organization_id: 2
        },
        {
          id: 9,
          user_id: 9,
          organization_id: 1
        },
        {
          id: 10,
          user_id: 1,
          organization_id: 2
        },
        {
          id: 11,
          user_id: 2,
          organization_id: 1
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_organizations_id_seq', (SELECT MAX(id) FROM users_organizations));`
      );
    });
};
