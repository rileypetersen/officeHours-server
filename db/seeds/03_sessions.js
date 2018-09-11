const moment = require('moment')
const dateFormat = 'MM-DD-YYYY'
const timeFormat = '+-HH:mm a'

exports.seed = (knex, Promise) => {
  return knex('sessions').del()
    .then(() => {
      return knex('sessions').insert([
        {
          id: 1,
          organization_id: 1,
          organizer_id: 1,
          host_id: 3,
          date: moment('10/11/2018', dateFormat).format(),
          start_time: moment('7:00am', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        },
        {
          id: 2,
          organization_id: 2,
          organizer_id: 2,
          host_id: 4,
          date: moment('10/15/2018', dateFormat).format(),
          start_time: moment('11:00am', timeFormat).format(),
          location: 'Comotion Labs',
          duration: '4:00',
          delay: '0:30'
        },
        {
          id: 3,
          organization_id: 2,
          organizer_id: 2,
          host_id: 3,
          date: moment('10/16/2018', dateFormat).format(),
          start_time: moment('1:00pm', timeFormat).format(),
          location: 'WeWork Holyoke',
          duration: '6:00',
          delay: '1:30'
        },
        {
          id: 4,
          organization_id: 2,
          organizer_id: 2,
          host_id: null,
          date: moment('10/17/2018', dateFormat).format(),
          start_time: moment('2:00pm', timeFormat).format(),
          location: 'Caffe Umbria',
          duration: '3:00',
          delay: '0:45'
        },
        {
          id: 5,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/18/2018', dateFormat).format(),
          start_time: moment('11:00am', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        },
        {
          id: 6,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/23/2018', dateFormat).format(),
          start_time: moment('1:00pm', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '4:00',
          delay: '0:30'
        },
        {
          id: 7,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/25/2018', dateFormat).format(),
          start_time: moment('2:00pm', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '6:00',
          delay: '1:00'
        },
        {
          id: 8,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/24/2018', dateFormat).format(),
          start_time: moment('11:00am', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '3:00',
          delay: '0:30'
        },
        {
          id: 9,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/31/2018', dateFormat).format(),
          start_time: moment('1:00pm', timeFormat).format(),
          location: 'Starbucks Reserve',
          duration: '2:00',
          delay: '0:15'
        },
        {
          id: 10,
          organization_id: 1,
          organizer_id: 1,
          host_id: null,
          date: moment('10/31/2018', dateFormat).format(),
          start_time: moment('1:00pm', timeFormat).format(),
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
