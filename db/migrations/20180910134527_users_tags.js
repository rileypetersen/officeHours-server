exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_tags', table => {
      table.increments();
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
      table.integer('tag_id').notNullable();
      table.foreign('tag_id').references('tags.id').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_tags');
  };
  