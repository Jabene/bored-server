exports.up = async knex => {
  await knex.schema.createTable('join', table => {
    table.increments().primary()
    tabe.integer('user').notNullable()
    table.integer('activity').notNullable()
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('join')
};
