
exports.up = async knex => {
  await knex.schema
    .table('activities', table => {
      table.integer('user_id').notNullable()
    })
};

exports.down = async knex => {
  await knex.schema
    .table('activities', table => {
      table.dropColumn('user-id')
    })
};
