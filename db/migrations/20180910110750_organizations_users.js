// 'organizations_users' table

exports.up = function(knex, Promise) {
    return knex.schema.createTable('organizations_users', table => {
      table.increments();
      table.integer('organization_id').notNullable();
      table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('organizations_users');
  };
  