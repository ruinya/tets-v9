import _ from 'lodash';

export default function solution(content) {
  // BEGIN

  // step1
  const formatting = content.trim().split('\n').slice(1);
  // console.log(formatting);
  console.log(`Count: ${formatting.length}`);

  // step2
  const result1 = formatting.map((el) => el.slice(0, -1).split(';'));
  // console.log(result1);

  const citiesForLocation = result1.map((n) => n[2]);
  console.log(`Cities: ${(citiesForLocation).join(', ')}`);

  // step3
  const salary = result1.map((n) => n[5].slice(0, 6));
  const max = Math.max(...salary);
  console.log(`Maximum salary: ${max}`);

  // step4
  const graduated = result1.map((n) => n[6].slice(0, 6));
  const filtered = graduated.filter((m) => m === 'Высшее');
  console.log(`Graduated: ${filtered.length}`);
  // step5
  const company = result1.map((n) => n[0].slice(0, 3));
  const uniq = _.uniq(company);
  console.log(`Company types: ${(uniq).join(', ')}`);
}
