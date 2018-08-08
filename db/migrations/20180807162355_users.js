// 'users' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.string('profile_img').notNullable().defaultTo('');
    table.string('title').notNullable();
    table.string('short_description').notNullable();
    table.string('long_description').notNullable();
    table.string('linkedin_url').notNullable().defaultTo('N/A');
    table.string('website_url').notNullable().defaultTo('N/A');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};