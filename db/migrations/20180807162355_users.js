// 'users' table

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('user_type');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.text('profile_img_url').notNullable().defaultTo('');
    table.string('title').notNullable();
    table.string('short_description').notNullable();
    table.text('long_description').notNullable();
    table.text('linkedin_url').notNullable().defaultTo('N/A');
    table.text('website_url').notNullable().defaultTo('N/A');
    table.boolean('can_create_session').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
