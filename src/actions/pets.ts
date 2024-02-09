export const getPets = async () => {
  const response = await fetch('/api/pets');
  return response.json();
};

export const addPet = async (petName: string, ownerName: string) => {
  const response = await fetch('/api/add-pet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ petName, ownerName }),
  });
  return response.json();
};

export default getPets;
