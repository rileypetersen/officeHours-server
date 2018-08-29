exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          tag_id: 1,
          user_id: null,
          organization_id: null,
          name: 'Management'
        },
        {
          tag_id: 2,
          user_id: null,
          organization_id: null,
          name: 'Leadership'
        },
        {
          tag_id: 3,
          user_id: null,
          organization_id: null,
          name: 'Innovation'
        },
        {
          tag_id: 4,
          user_id: null,
          organization_id: null,
          name: 'Marketing'
        },
        {
          tag_id: 5,
          user_id: null,
          organization_id: null,
          name: 'Entrepreneurship'
        },
        {
          tag_id: 6,
          user_id: null,
          organization_id: null,
          name: 'Sales'
        },
        {
          tag_id: 7,
          user_id: null,
          organization_id: null,
          name: 'Finance'
        },
        {
          tag_id: 8,
          user_id: null,
          organization_id: null,
          name: 'Software Development'
        },
        {
          tag_id: 9,
          user_id: null,
          organization_id: null,
          name: 'Accounting'
        },
        {
          tag_id: 10,
          user_id: null,
          organization_id: null,
          name: 'Legal'
        },
        {
          tag_id: 11,
          user_id: null,
          organization_id: null,
          name: 'Design'
        },
        {
          tag_id: 12,
          user_id: null,
          organization_id: null,
          name: 'Customer Development'
        },
        {
          tag_id: 13,
          user_id: null,
          organization_id: null,
          name: 'Education'
        },
        {
          tag_id: 14,
          user_id: null,
          organization_id: null,
          name: 'Pricing'
        },
        {
          tag_id: 15,
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
