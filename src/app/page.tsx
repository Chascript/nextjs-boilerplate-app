'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Greetings from '../components/greetings';
import getData, { addPet } from '../actions/pets';
import { Pet } from '../types';

export default function Page() {
  const [pets, setPets] = useState<Pet[]>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const loadData = async () => {
    const initialPets = await getData();
    setPets(initialPets);
  };

  const savePet = async () => {
    const petName = `pet-${Math.random()}`;
    const ownerName = `owner-${Math.random()}`;
    await addPet(petName, ownerName);
    loadData();
  };

  useEffect(() => {
    loadData();
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Link href="/about" className="text-blue-500 hover:underline mb-4 inline-block">
        About
      </Link>
      <div>
        <button
          type="button"
          onClick={savePet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Random Pet
        </button>
      </div>
      {pets && (
        <div>
          <ul className="list-disc ml-4">
            {pets.map((pet) => (
              <li key={pet.name} className="mb-2">{`Pet name: ${pet.name}`}</li>
            ))}
          </ul>
        </div>
      )}
      <Greetings firstName="world" />
    </div>
  );
}
