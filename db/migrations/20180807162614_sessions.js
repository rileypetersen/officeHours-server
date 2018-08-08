// 'sessions' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', table => {
    table.increments.id('session_id');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.user_id').onDelete('CASCADE');
    table.integer('organization_id').notNullable();
    table.foreign('organization_id').references('organizations.organization_id').onDelete('CASCADE');
    table.date('date').notNullable();
    table.text('location').notNullable();
    table.time('duration').notNullable();
    table.time('delay').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions');
};
