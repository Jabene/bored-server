
exports.up = async knex => {
  await knex.schema.createTable('users', table => {
    table.increments().primary()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('users')
};
