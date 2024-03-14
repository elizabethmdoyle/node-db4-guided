/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        .createTable('zoos', table => {
            table.increments()
        })
        .createTable('species', table => {
            table.increments()
        })
        .createTable('animals', table => {
            table.increments()
        })
        .createTable('zoo_animals', table => {
            table.increments()
        })


};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('')
};
