import PetsRepository from '@/src/providers/repository/pets';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const petNames = await PetsRepository.getPetNames();
    return NextResponse.json(petNames, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
