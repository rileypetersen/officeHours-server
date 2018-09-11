exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('user_type').defaultTo('member');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('user_name').notNullable();
    table.string('email').notNullable();
    table.string('hashed_password').notNullable();
    table.text('profile_img_url').notNullable().defaultTo('https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg');
    table.string('title').notNullable();
    table.string('short_description').notNullable().defaultTo('...');
    table.text('long_description').notNullable().defaultTo('...');
    table.text('linkedin_url').notNullable().defaultTo('N/A');
    table.text('website_url').notNullable().defaultTo('N/A');
    table.boolean('can_create_session').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
