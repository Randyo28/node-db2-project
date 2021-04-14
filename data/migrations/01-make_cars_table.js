exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('car_id')
    table.text('vin', 17).unique().notNullable()
    table.text('make', 30).notNullable()
    table.text('model', 30).notNullable()
    table.integer('mileage').notNullable()
    table.text('title', 50)
    table.text('transmission', 50)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
}
