import React, { useState } from 'react';

function BreedSelector({ breeds, selectedBreed, setSelectedBreed, getDogs, addBreed }) {
  const [newBreed, setNewBreed] = useState('');

  const handleAddBreed = () => {
    if (newBreed.trim()) {
      addBreed(newBreed.trim());
      setNewBreed('');
    }
  };

  return (
    <div className='down'>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value=''>Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <br/>
      <button className='btn' onClick={getDogs}>
        Generate Dog
      </button>
      <br/>
      <input
        type="text"
        value={newBreed}
        onChange={(e) => setNewBreed(e.target.value)}
        placeholder="Add new breed"
      />
      <button className='btn' onClick={handleAddBreed}>
        Add Breed
      </button>
    </div>
  );
}

export default BreedSelector;
