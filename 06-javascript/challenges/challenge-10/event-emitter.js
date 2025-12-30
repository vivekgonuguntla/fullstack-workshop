function createEventEmitter() {
  const events = {};

  return {
   
    on(event, callback) {
      if (!events[event]) events[event] = [];
      events[event].push(callback);

     
      return () => {
        events[event] = events[event].filter(fn => fn !== callback);
      };
    },

   
    once(event, callback) {
      const wrapper = (...args) => {
        callback(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    },

   
    emit(event, ...args) {
      if (!events[event]) return;
      events[event].forEach(fn => fn(...args));
    },

    
    off(event, callback) {
      if (!events[event]) return;
      if (callback) {
        events[event] = events[event].filter(fn => fn !== callback);
      } else {
        events[event] = [];
      }
    }
  };
}


const emitter = createEventEmitter();

const unsubscribe = emitter.on('userLogin', user => {
    console.log(`${user.name} logged in`);
});

emitter.on('userLogin', user => {
    console.log(`Send welcome email to ${user.email}`);
});

emitter.once('appStart', () => console.log('App started - this only runs once'));

emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });

emitter.emit('appStart'); 
emitter.emit('appStart'); 

unsubscribe(); 
emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });


emitter.off('userLogin'); 
