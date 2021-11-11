exports.up = async knex => {
  await knex.schema.createTable('join', table => {
    table.increments().primary()
    table.integer('user').notNullable()
    table.integer('activity').notNullable()
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('join')
};
