import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("picture"); // Adiciona a coluna 'picture'
    table.integer("status"); // Adiciona a coluna 'status'
    table.timestamps(true, true); // Adiciona colunas 'created_at' e 'updated_at' automaticamente
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}