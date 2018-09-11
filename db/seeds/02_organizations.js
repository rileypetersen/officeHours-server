exports.seed = (knex, Promise) => {
  return knex('organizations').del()
    .then(() => {
      return knex('organizations').insert([
        {
          id: 1,
          organizer_id: 1,
          name: 'WTIA',
          short_description: 'Washington Technology Industry Association is a trade association unifying the voice of the technology community in Washington state.',
          long_description: 'WTIA is an influential co-op of 800 tech companies large and small. We are pragmatic partners with education and government leaders building a better world.',
          logo_img_url: 'https://i1.wp.com/www.dkparker.com/wp-content/uploads/2018/04/wtia-startupclub-logo-800px.png?fit=800%2C274',
          website_url: 'http://www.washingtontechnology.org',
          hosts_can_create_sessions: true,
        },
        {
          id: 2,
          organizer_id: 2,
          name: 'Alliance of Angels',
          short_description: 'Largest and most active group of angel investors in the Pacific Northwest.',
          long_description: 'We are the largest and most active angel group in the Pacific Northwest. Each year, we invest $10M+ into 20+ companies. Since 1997, we have invested $100M+ into 200+ companies and celebrated 40+ exits generating more than a billion dollars of returns. Our network of 140+ active angel investors is further augmented by a $6.6M seed fund.',
          logo_img_url: 'https://www.allianceofangels.com/wp-content/uploads/2015/12/logo-2.svg',
          website_url: 'https://www.allianceofangels.com/',
          hosts_can_create_sessions: true,
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('organizations_id_seq', (SELECT MAX(id) FROM organizations));`
      );
    });
};
