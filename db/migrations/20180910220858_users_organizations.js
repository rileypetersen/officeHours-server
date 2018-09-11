exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_organizations', table => {
      table.increments();
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
      table.integer('organization_id').notNullable();
      table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_organizations');
  };
  