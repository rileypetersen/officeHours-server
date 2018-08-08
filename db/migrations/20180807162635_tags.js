// 'tags' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments.id('id');
    table.integer('user_id');
    table.foreign('user_id').references('users.id').onDelete('CASCADE');
    table.integer('organization_id');
    table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
    table.string('name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
