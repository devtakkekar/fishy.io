// Fish rarity definitions and fish list
export const fishRarities = [
  { name: 'Common', color: '#b0c4b1', chance: 0.60, baseCurrency: 10, xp: 1 },
  { name: 'Rare', color: '#4299e1', chance: 0.20, baseCurrency: 50, xp: 3 },
  { name: 'Unique', color: '#8e44ad', chance: 0.08, baseCurrency: 100, xp: 5 },
  { name: 'Epic', color: '#e67e22', chance: 0.06, baseCurrency: 250, xp: 10 },
  { name: 'Legendary', color: '#ffd700', chance: 0.04, baseCurrency: 1000, xp: 15 },
  { name: 'Mythical', color: '#e84393', chance: 0.015, baseCurrency: 5000, xp: 20 },
  { name: 'Secret', color: '#00bcd4', chance: 0.005, baseCurrency: 10000, xp: 30 }
];

export const fishList = {
  Common: [
    'Minnow', 'Carp', 'Perch', 'Trout', 'Bass', 'Catfish', 'Shad', 'Goby', 'Smelt', 'Darter'],
  Rare: [
    'Bluegill', 'Silver Carp', 'Golden Shad', 'Emerald Darter', 'Crimson Smelt', 'Opal Flounder', 'Dusky Mackerel'],
  Unique: [
    'Jade Minnow', 'Ruby Snapper', 'Shadow Catfish', 'Pearl Perch', 'Sunset Goby'],
  Epic: [
    'Thunder Eel', 'Starlight Trout', 'Blaze Bass', 'Frostfin Tuna'],
  Legendary: [
    'Dragon Pike', 'Aurora Salmon', 'Phoenix Carp'],
  Mythical: [
    'Celestial Koi', 'Nebula Angelfish'],
  Secret: [
    'Eclipse Leviathan']
};
