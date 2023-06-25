import Area from './Area';
import Group from './Group';
import Member from './Member';

const area1Data = [
  [
    'Jordan Hansen',
    'Oisin Armstrong',
    'Franklin Rocha',
    'Adnan Harmon',
    'Mohammed Martin',
  ],
  [
    'Rachel Delacruz',
    'Sophie Burch',
    'Edna Pennington',
    'Rico Carver',
    'Arthur Roth',
  ],
  [
    'Iona Hansen',
    'Kieron Trujillo',
    'Angelo Mitchell',
    'Fiona Oconnor',
    'Nicholas Cook',
  ],
  [
    'Lily Hughes',
    'Damon Harrison',
    'Alexa Haas',
    'Zaynah Chavez',
    'Abdur Shepherd',
  ],
];

const area2Data = [
  [
    'Megan Copeland',
    'Daniel Morris',
    'Carmen Garner',
    'James Santana',
    'Liyana Downs',
    'Holly Mcknight',
    'Keane Hatfield',
    'Ivy Green',
    'Herbie Rich',
    'Ebony Daniels',
  ],
  [
    'Melvin Day',
    'Martha Soto',
    'Eugene Sutton',
    'Tina Ryan',
    'Kathleen Huffman',
    'Henry Fernandez',
    'Emilia Heath',
    'Aleesha Downs',
    'Byron Bonner',
    'Elouise Erickson',
  ],
  [
    'Meghan Duran',
    'Phoebe Sampson',
    'Fannie Nelson',
    'Saskia Jennings',
    'Paula Hendrix',
  ],
  ['Angus Suarez', 'Zaki Lucas', 'Leroy Cain', 'Josef Frye', 'Daisy Taylor'],
];

function areaFromData(index: number, areaData: string[][]): Area {
  const groups = areaData.map((groupData, index) => {
    const members = groupData.map((memberName) => new Member(memberName));
    return new Group(index + 1, members);
  });

  return new Area(index, groups);
}

const area1: Area = areaFromData(1, area1Data);
const area2: Area = areaFromData(2, area2Data);

export default [area1, area2];
