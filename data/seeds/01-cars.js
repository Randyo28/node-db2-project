exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '11111111111111111',
          make: 'Bmw',
          model: 'x5',
          mileage: 30000,
          title: 'clean',
          transmission: 'automatic',
        },
        {
          vin: '22222222222222222',
          make: 'Honda',
          model: 'civic',
          mileage: 40000,
          title: 'clean',
          transmission: 'automatic',
        },
      ])
    })
}
