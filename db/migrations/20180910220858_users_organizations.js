exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_organizations', table => {
        table.increments();
        table.integer('user_id').notNullable();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.integer('organization_id').notNullable();
        table.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
        table.string('user_type').notNullable().defaultTo('member');
        table.string('user_title').defaultTo('...');
        table.boolean('can_create_session').notNullable().defaultTo(false);        
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_organizations');
  };
  