exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table => {
    table.increments();
    table.string('tag_name').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags');
};
