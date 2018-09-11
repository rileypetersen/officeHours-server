exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetings', table => {
    table.increments();
    table.integer('organization_id').notNullable();
    table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
    table.integer('session_id').notNullable();
    table.foreign('session_id').references('sessions.id').onDelete('CASCADE');
    table.integer('host_id').unsigned();
    table.foreign('host_id').references('users.id').onDelete('CASCADE');
    table.integer('member_id').unsigned();
    table.foreign('member_id').references('users.id').onDelete('CASCADE');
    table.text('location').notNullable();
    table.time('duration').notNullable();
    table.time('delay').notNullable();
    table.text('topic_1').notNullable().defaultTo('...');
    table.text('topic_2').notNullable().defaultTo('...');
    table.text('topic_3').notNullable().defaultTo('...');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meetings');
};
