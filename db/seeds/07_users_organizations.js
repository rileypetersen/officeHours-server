exports.seed = (knex, Promise) => {
  return knex('users_organizations').del()
    .then(() => {
      return knex('users_organizations').insert([
        {
          id: 1,
          user_id: 1,
          organization_id: 1,
          user_type: 'organizer',
          user_title: 'Startup Ambassador',
          can_create_sessions: true
        },
        {
          id: 2,
          user_id: 2,
          organization_id: 2,
          user_type: 'organizer',
          user_title: 'Membership Manager',
          can_create_sessions: true
        },
        {
          id: 3,
          user_id: 3,
          organization_id: 1,
          user_type: 'host',
          user_title: 'Investor',
          can_create_sessions: false
        },
        {
          id: 4,
          user_id: 4,
          organization_id: 2,
          user_type: 'host',
          user_title: 'CFO',
          can_create_sessions: false
        },
        {
          id: 5,
          user_id: 5,
          organization_id: 1,
          user_type: 'host',
          user_title: 'Executive',
          can_create_sessions: false
        },
        {
          id: 6,
          user_id: 6,
          organization_id: 2,
          user_type: 'member',
          user_title: 'Founder',
          can_create_sessions: false
        },
        {
          id: 7,
          user_id: 7,
          organization_id: 1,
          user_type: 'member',
          user_title: 'New Grad',
          can_create_sessions: false
        },
        {
          id: 8,
          user_id: 8,
          organization_id: 2,
          user_type: 'member',
          user_title: 'Marketing Coordinator',
          can_create_sessions: false
        },
        {
          id: 9,
          user_id: 9,
          organization_id: 1,
          user_type: 'member',
          user_title: 'Salesperson',
          can_create_sessions: false
        },
        {
          id: 10,
          user_id: 1,
          organization_id: 2,
          user_type: 'member',
          user_title: 'Salesperson',
          can_create_sessions: true
        },
        {
          id: 11,
          user_id: 2,
          organization_id: 1,
          user_type: 'member',
          user_title: 'Salesperson',
          can_create_sessions: true
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_organizations_id_seq', (SELECT MAX(id) FROM users_organizations));`
      );
    });
};
