exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {
          id: 1,
          member_id: 6,
          host_id: 4,
          organization_id: 1,
          session_id: 1,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        }
        // {
        //   id: 2,
        //   member_id: 7,
        //   host_id: 3,
        //   organization_id: 2,
        //   session_id: 2,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 3,
        //   member_id: 8,
        //   host_id: 3,
        //   organization_id: 2,
        //   session_id: 3,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 4,
        //   member_id: 9,
        //   host_id: 3,
        //   organization_id: 2,
        //   session_id: 4,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 5,
        //   member_id: 6,
        //   host_id: 5,
        //   organization_id: 1,
        //   session_id: 5,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 6,
        //   member_id: 7,
        //   host_id: 5,
        //   organization_id: 1,
        //   session_id: 6,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 7,
        //   member_id: 8,
        //   host_id: 4,
        //   organization_id: 1,
        //   session_id: 7,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 8,
        //   member_id: 9,
        //   host_id: 4,
        //   organization_id: 1,
        //   session_id: 8,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // },
        // {
        //   id: 9,
        //   member_id: 6,
        //   host_id: 5,
        //   organization_id: 1,
        //   session_id: 9,
        //   location: 'Room 4A',
        //   duration: '1:00',
        //   delay: '0:15',
        //   topic_1: 'Lorem ipsum dolor sit amet .',
        //   topic_2: 'Consectetur adipisicing elit.',
        //   topic_3: 'Sed do eiusmod tempor incididunt.'
        // }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('meetings_id_seq', (SELECT MAX(id) FROM meetings));`
      );
    });
};
