exports.seed = (knex, Promise) => {
  return knex('meetings').del()
    .then(() => {
      return knex('meetings').insert([
        {
          id: 1,
          organization_id: 1,
          session_id: 1,
          member_id: null,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 2,
          organization_id: 2,
          session_id: 2,
          member_id: null,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 3,
          organization_id: 2,
          session_id: 3,
          member_id: 8,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 4,
          organization_id: 2,
          session_id: 4,
          member_id: 9,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 5,
          organization_id: 1,
          session_id: 5,
          member_id: 6,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 6,
          organization_id: 1,
          session_id: 6,
          member_id: null,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 7,
          organization_id: 1,
          session_id: 7,
          member_id: 8,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 8,
          organization_id: 1,
          session_id: 8,
          member_id: 9,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        },
        {
          id: 9,
          organization_id: 1,
          session_id: 9,
          member_id: null,
          location: 'Room 4A',
          duration: '1:00',
          delay: '0:15',
          topic_1: 'Lorem ipsum dolor sit amet .',
          topic_2: 'Consectetur adipisicing elit.',
          topic_3: 'Sed do eiusmod tempor incididunt.'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('meetings_id_seq', (SELECT MAX(id) FROM meetings));`
      );
    });
};
