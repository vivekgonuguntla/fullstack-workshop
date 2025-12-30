function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj; 

    if (hash.has(obj)) return hash.get(obj); 

    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Set) return new Set([...obj].map(v => deepClone(v, hash)));
    if (obj instanceof Map) return new Map([...obj].map(([k,v]) => [deepClone(k, hash), deepClone(v, hash)]));

    if (Array.isArray(obj)) {
        const arr = [];
        hash.set(obj, arr);
        obj.forEach((item, i) => arr[i] = deepClone(item, hash));
        return arr;
    }

    
    const clonedObj = {};
    hash.set(obj, clonedObj);
    Object.keys(obj).forEach(key => {
        clonedObj[key] = deepClone(obj[key], hash);
    });
    return clonedObj;
}


const original = {
    name: 'John',
    address: { city: 'New York', zip: '10001' },
    hobbies: ['reading', 'gaming'],
    metadata: { created: new Date(), tags: new Set(['user', 'admin']) }
};

const cloned = deepClone(original);
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(original.address.city);  
console.log(original.hobbies);       
