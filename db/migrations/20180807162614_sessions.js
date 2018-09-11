exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', table => {
    table.increments();
    table.integer('organization_id').notNullable();
    table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
    table.integer('organizer_id').notNullable();
    table.foreign('organizer_id').references('organizations.organizer_id').onDelete('CASCADE');
    table.integer('host_id').unsigned();
    table.foreign('host_id').references('users.id').onDelete('CASCADE');
    table.string('date').notNullable();
    table.text('location').notNullable();
    table.string('start_time').notNullable();
    table.string('duration').notNullable();
    table.string('delay').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions');
};
