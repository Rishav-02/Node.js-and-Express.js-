//The "events" module provides us the 'EventEmitter' class, which is key to working with events in Node.js.
/* The event listener has these in-built events:

1.newListener-- when a listener is added
2.removeListener-- when a listener is removed */

const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("Your name is Rishav");
});

event.on("sayMyName", () => {
  console.log("Your name is Raj");
});

event.on("sayMyName", () => {
  console.log("Your name is Alok");
});

//'emit' an event. It synchronously calls every event listener in the order they were registered.
event.emit("sayMyName"); //sayMyName event fire

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");

//Return an array of strings that represent the events registered on the current EventEmitter object:
event.eventNames();
event.listenerCount('open');
event.listeners();
event.setMaxListeners(30);

console.log(event);