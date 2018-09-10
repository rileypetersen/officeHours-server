exports.seed = function(knex, Promise) {
  return knex('users_tags').del()
    .then(function () {
      return knex('users_tags').insert([
        {
          id: 1,
          user_id: 1,
          tag_id: 1
        },
        {
          id: 2,
          user_id: 2,
          tag_id: 2
        },
        {
          id: 3,
          user_id: 3,
          tag_id: 3
        },
        {
          id: 4,
          user_id: 4,
          tag_id: 4
        },
        {
          id: 5,
          user_id: 5,
          tag_id: 5
        },
        {
          id: 6,
          user_id: 6,
          tag_id: 6
        },
        {
          id: 7,
          user_id: 7,
          tag_id: 7
        },
        {
          id: 8,
          user_id: 8,
          tag_id: 8
        },
        {
          id: 9,
          user_id: 9,
          tag_id: 9
        },
        {
          id: 10,
          user_id: 1,
          tag_id: 10
        },
        {
          id: 11,
          user_id: 2,
          tag_id: 11
        },
        {
          id: 12,
          user_id: 2,
          tag_id: 12
        },
        {
          id: 13,
          user_id: 3,
          tag_id: 13
        },
        {
          id: 14,
          user_id: 4,
          tag_id: 14
        },
        {
          id: 15,
          user_id: 5,
          tag_id: 15
        },
        {
          id: 16,
          user_id: 6,
          tag_id: 16
        },
        {
          id: 17,
          user_id: 7,
          tag_id: 17
        },
        {
          id: 18,
          user_id: 8,
          tag_id: 18
        },
        {
          id: 19,
          user_id: 9,
          tag_id: 19
        },
        {
          id: 20,
          user_id: 1,
          tag_id: 110
        },
        {
          id: 21,
          user_id: 2,
          tag_id: 111
        },
        {
          id: 22,
          user_id: 2,
          tag_id: 22
        },
        {
          id: 23,
          user_id: 3,
          tag_id: 23
        },
        {
          id: 24,
          user_id: 4,
          tag_id: 24
        },
        {
          id: 25,
          user_id: 5,
          tag_id: 25
        },
        {
          id: 26,
          user_id: 6,
          tag_id: 26
        },
        {
          id: 27,
          user_id: 7,
          tag_id: 27
        },
        {
          id: 28,
          user_id: 8,
          tag_id: 28
        },
        {
          id: 29,
          user_id: 9,
          tag_id: 29
        },
        {
          id: 20,
          user_id: 2,
          tag_id: 210
        },
        {
          id: 21,
          user_id: 2,
          tag_id: 411
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_tags_id_seq', (SELECT MAX(id) FROM users_tags));`
      );
    });
};
