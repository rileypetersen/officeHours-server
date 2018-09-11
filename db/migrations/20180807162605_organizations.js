exports.up = function(knex, Promise) {
  return knex.schema.createTable('organizations', table => {
    table.increments();
    table.integer('organizer_id').notNullable();
    table.foreign('organizer_id').references('users.id').onDelete('CASCADE');
    table.string('name').notNullable();
    table.string('short_description').notNullable();
    table.text('long_description').notNullable();
    table.text('website_url').notNullable().defaultTo('N/A');
    table.text('logo_img_url').notNullable();
    table.boolean('hosts_can_create_sessions').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('organizations');
};
