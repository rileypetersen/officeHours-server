exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          id: 1,
          user_id: null,
          organization_id: null,
          name: 'Management'
        },
        {
          id: 2,
          user_id: null,
          organization_id: null,
          name: 'Leadership'
        },
        {
          id: 3,
          user_id: null,
          organization_id: null,
          name: 'Innovation'
        },
        {
          id: 4,
          user_id: null,
          organization_id: null,
          name: 'Marketing'
        },
        {
          id: 5,
          user_id: null,
          organization_id: null,
          name: 'Entrepreneurship'
        },
        {
          id: 6,
          user_id: null,
          organization_id: null,
          name: 'Sales'
        },
        {
          id: 7,
          user_id: null,
          organization_id: null,
          name: 'Finance'
        },
        {
          id: 8,
          user_id: null,
          organization_id: null,
          name: 'Software Development'
        },
        {
          id: 9,
          user_id: null,
          organization_id: null,
          name: 'Accounting'
        },
        {
          id: 10,
          user_id: null,
          organization_id: null,
          name: 'Legal'
        },
        {
          id: 11,
          user_id: null,
          organization_id: null,
          name: 'Design'
        },
        {
          id: 12,
          user_id: null,
          organization_id: null,
          name: 'Customer Development'
        },
        {
          id: 13,
          user_id: null,
          organization_id: null,
          name: 'Education'
        },
        {
          id: 14,
          user_id: null,
          organization_id: null,
          name: 'Pricing'
        },
        {
          id: 15,
          user_id: null,
          organization_id: null,
          name: 'Branding'
        },
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('tags_id_seq', (SELECT MAX(id) FROM tags));`
      );
    });
};
