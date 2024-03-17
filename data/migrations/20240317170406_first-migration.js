/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('zoos', table => {
            table.increments('zoo_id')
            table.string('zoo_name', 128).notNullable()
            table.string('address', 128).unique()
        })
        .createTable('species', table => {
            table.increments('species_id')
            table.string('species_name', 256)
        })
        .createTable('animals', table => {
            table.increments('animal_id')
            table.string('animal_name', 128).notNullable()
            table.string('species_id')
                .unsigned()
                .notNullable()
                .references('species_id')
                .inTable('species')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('zoo_animals', table => {
            table.increments('zoo_animal_id')
            table.integer('zoo_id')
                .unsigned()
                .notNullable()
                .references('zoo_id')
                .inTable('zoos')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('animal_id')
                .unsigned()
                .notNullable()
                .references('animal_id')
                .inTable('animals')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('species')
    .dropTableIfExists('animals')
    .dropTableIfExists('zoos')

};
