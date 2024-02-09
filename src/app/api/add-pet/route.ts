import { NextResponse, NextRequest } from 'next/server';
import PetsRepository from '@/src/providers/repository/pets';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { petName, ownerName } = body;
  try {
    if (!petName || !ownerName) throw new Error('Pet and owner names required');
    await PetsRepository.insertPets(petName, ownerName);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
