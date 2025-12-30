const original = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'gaming']
};

const deepClone = (obj) => structuredClone(obj);

const cloned = deepClone(original);

cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(`Original city: ${original.address.city}`); 
console.log(`Original hobbies: ${original.hobbies.join(', ')}`);
