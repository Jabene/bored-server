
exports.up = async knex => {
  await knex.schema.createTable('activities', table => {
    table.increments().primary()
    table.string('activity').notNullable()
    table.integer('participants').notNullable()
    table.string('link')
    table.string('type').notNullable()
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('activities')
};
