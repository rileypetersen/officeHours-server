exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {
          id: 1,
          user_id: 4,
          organization_id: 1,
          date: '10/11/2018',
          start_time: '7:00am',
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        },
        {
          id: 2,
          user_id: 3,
          organization_id: 2,
          date: '10/15/2018',
          start_time: '11:00am',
          location: 'Comotion Labs',
          duration: '4:00',
          delay: '0:30'
        },
        {
          id: 3,
          user_id: 3,
          organization_id: 2,
          date: '10/16/2018',
          start_time: '1:00pm',
          location: 'WeWork Holyoke',
          duration: '6:00',
          delay: '1:30'
        },
        {
          id: 4,
          user_id: 3,
          organization_id: 2,
          date: '10/17/2018',
          start_time: '2:00pm',
          location: 'Caffe Umbria',
          duration: '3:00',
          delay: '0:45'
        },
        {
          id: 5,
          user_id: 5,
          organization_id: 1,
          date: '10/18/2018',
          start_time: '11:00am',
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        },
        {
          id: 6,
          user_id: 5,
          organization_id: 1,
          date: '10/23/2018',
          start_time: '1:00pm',
          location: 'Starbucks Reserve',
          duration: '4:00',
          delay: '0:30'
        },
        {
          id: 7,
          user_id: 4,
          organization_id: 1,
          date: '10/25/2018',
          start_time: '2:00pm',
          location: 'Starbucks Reserve',
          duration: '6:00',
          delay: '1:00'
        },
        {
          id: 8,
          user_id: 4,
          organization_id: 1,
          date: '10/24/2018',
          start_time: '11:00am',
          location: 'Starbucks Reserve',
          duration: '3:00',
          delay: '0:30'
        },
        {
          id: 9,
          user_id: 5,
          organization_id: 1,
          date: '10/31/2018',
          start_time: '1:00pm',
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('sessions_id_seq', (SELECT MAX(id) FROM sessions));`
      );
    });
};
