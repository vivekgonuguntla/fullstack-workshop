const typeOf = (value) => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (Number.isNaN(value)) return 'nan';

  const typeRules = [
    { check: Array.isArray, name: 'array' },
    { check: v => v instanceof Date, name: 'date' },
    { check: v => v instanceof Map, name: 'map' },
    { check: v => v instanceof Set, name: 'set' },
    { check: v => v instanceof RegExp, name: 'regexp' },
    { check: v => v instanceof Error, name: 'error' },
    { check: v => v instanceof Promise, name: 'promise' }
  ];

  const matchedRule = typeRules.find(rule => rule.check(value));
  if (matchedRule) return `${matchedRule.name}`;

  const t = typeof value;
  if (t === 'object') return 'object';
  return t;
};


console.log(typeOf(null));         
console.log(typeOf(undefined));      
console.log(typeOf(42));            
console.log(typeOf(NaN));           
console.log(typeOf('hello'));        
console.log(typeOf(true));           
console.log(typeOf(Symbol()));       
console.log(typeOf([]));            
console.log(typeOf({}));             
console.log(typeOf(() => {}));      
console.log(typeOf(new Date()));     
console.log(typeOf(new Map()));      
console.log(typeOf(new Set()));      
console.log(typeOf(/regex/));       
console.log(typeOf(new Error()));   
console.log(typeOf(Promise.resolve()));  
