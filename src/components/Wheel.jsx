import React, { useState } from 'react';

const killers = [
  'The Trapper',
  'The Wraith',
  'The Hillbilly',
  'The Nurse',
  'The Shape',
  'The Hag',
  'The Doctor',
  'The Huntress',
  'The Clown',
  'The Spirit',
  'The Legion',
  'The Plague',
  'The Ghost Face',
  'The Demogorgon',
  'The Oni',
  'The Deathslinger',
  'The Blight',
  'The Twins',
  'The Trickster',
  'The Nemesis',
  'The Cenobite',
  'The Artist',
  'The Onryō',
  'The Dredge',
  'The Mastermind',
  'The Knight',
  'The Skull Merchant',
  'The Singularity',
  'The Xenomorph',
  'The Good Guy',
  'The Unknown',
  'The Lich',
  'The Dark Lord',
  'The Houndmaster',
  'The Ghoul',
];

export default function Wheel() {
  const [selectedKiller, setSelectedKiller] = useState(null);

  const spin = () => {
    const randomIndex = Math.floor(Math.random() * killers.length);
    setSelectedKiller(killers[randomIndex]);
  };

  return (
    <div className="container">
      <button onClick={spin}>Spin the Wheel</button>
      {selectedKiller && <h2>The Killer is: {selectedKiller}</h2>}
    </div>
  );
}
