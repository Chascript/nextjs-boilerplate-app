'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Text from '../components/common/text';
import getData, { addPet } from '../actions/pets';
import { Pet } from '../types';
import Button from '../components/common/button';

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
        <Button
          label="Add Random pet"
          onClick={savePet}
          primary
        />
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
      <Text
        element="h1"
        position="center"
      >
        Hello, world!
      </Text>
    </div>
  );
}
