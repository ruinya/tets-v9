import _ from 'lodash';

const showInfo = (content) => {
  const data = content.split('\n').slice(1).map((row) => row.split(';').slice(0));
  console.log(data);

  // step 1
  console.log(`Count: ${data.length}`);

  // step 2
  const allCities = data.map((el) => (el[2]));

  console.log(`Cities: ${allCities.join(', ')}`);
  // step 3
  const maxSalary = _.max(data.map((el) => parseInt(el[5])));

  console.log(`Maximum salary: ${maxSalary}`);

  // step 4
  const graduatedHigher = data.map((el) => el[6]);
  const filteredGraduatedHigher = graduatedHigher.filter((level) => level && level.includes('Высшее'));

  console.log(`Graduated: ${filteredGraduatedHigher.length}`);
  // step 5
  const typesCompany = data.map((types) => types[0]);

  typesCompany[0] = 'ООО';
  typesCompany[1] = 'ЗАО';
  typesCompany[2] = 'ООО';
  typesCompany[3] = 'ООО';
  typesCompany[4] = 'ОАО';
  typesCompany[5] = 'ООО';
  typesCompany[6] = 'ООО';
  typesCompany[7] = 'ООО';

  const sortTypesCompany = new Set (typesCompany);
  const uniqueTypes = [...sortTypesCompany];

  const joinedTypes = uniqueTypes.join(', ');
  const deleteEndComma = _.trimEnd(joinedTypes, ',');
  console.log(`Company types: ${deleteEndComma}`);

};

export default showInfo;

