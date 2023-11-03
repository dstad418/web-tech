// utility.js

export const sanitizeHouseName = (name) => {
    switch (name) {
        case 'Mormont':
          return 'House Mormont';
        case 'Baratheon':
          return 'House Baratheon';
        case 'Bolton':
          return 'House Bolton';
        case 'Stark':
          return 'House Stark';
        case 'Targaryan':
        case 'Targaryen':
          return 'House Targaryen';
        case 'House Lannister':
        case 'Lannister':
        case 'Lanister':
        case 'House Lanister':
          return 'House Lannister';
        case 'Tarth':
          return 'House Tarth';
        case 'Greyjoy':
          return 'House Greyjoy';
        case '':
        case 'None':
        case 'Unkown':
        case undefined:
          return 'Unknown';
        default:
          return name;
    }
};

export const countByHouse = (characters) => {
    const counts = {};

    characters.forEach((character) => {
      const house = sanitizeHouseName(character.family);
      if (house) {
        counts[house] = (counts[house] || 0) + 1;
      }
    });
    return counts;
};