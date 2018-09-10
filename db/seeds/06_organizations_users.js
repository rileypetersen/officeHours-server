exports.seed = function(knex, Promise) {
  return knex('organizations_users').del()
    .then(function () {
      return knex('organizations_users').insert([
        {
          id: 1,
          organization_id: 1,
          user_id: 1
        },
        {
          id: 2,
          organization_id: 2,
          user_id: 2
        },
        {
          id: 3,
          organization_id: 1,
          user_id: 3
        },
        {
          id: 4,
          organization_id: 2,
          user_id: 4
        },
        {
          id: 5,
          organization_id: 1,
          user_id: 5
        },
        {
          id: 6,
          organization_id: 2,
          user_id: 6
        },
        {
          id: 7,
          organization_id: 1,
          user_id: 7
        },
        {
          id: 8,
          organization_id: 2,
          user_id: 8
        },
        {
          id: 9,
          organization_id: 1,
          user_id: 9
        },
        {
          id: 10,
          organization_id: 2,
          user_id: 1
        },
        {
          id: 11,
          organization_id: 1,
          user_id: 2
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('organizations_users_id_seq', (SELECT MAX(id) FROM organizations_users));`
      );
    });
};
