import { sql } from '@vercel/postgres';

export default class PetsRepository {
  static async getPetNames() {
    const pets = await sql`SELECT name FROM Pets;`;
    return pets.rows;
  }

  static async insertPets(
    petName: string,
    ownerName: string,
  ) {
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  }
}
