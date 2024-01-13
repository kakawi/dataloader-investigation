const DataLoader = require("dataloader");
const db = require("./database");

// Create a batch loading function
async function batchLoadFunction(ids) {
  const results = await db.findAll(ids);

  // Return the results in the same order as the keys
  return ids.map((key) => results.find((result) => result.id === key));
}

// Create a new DataLoader instance
const dataLoader = new DataLoader(batchLoadFunction);

// Use the DataLoader to load data
(async () => {
  const p1 = dataLoader.load(1);
  const p2 = dataLoader.load(2);
  Promise.all([p1, p2]).then((results) => {
    console.log(results);
  });

  process.nextTick(() => {
    console.log("next tick");
    const p3 = dataLoader.load(3);
    const p4 = dataLoader.load(4);
    Promise.all([p3, p4]).then((results) => {
      console.log(results);
    });
  });
  Promise.resolve().then(() => {
    console.log("promise");
    const p5 = dataLoader.load(5);
    const p6 = dataLoader.load(6);
    Promise.all([p5, p6]).then((results) => {
      console.log(results);
    });
    process.nextTick(() => {
      console.log("next tick inside promise resolve handle");
      const p7 = dataLoader.load(7);
      const p8 = dataLoader.load(8);
      Promise.all([p7, p8]).then((results) => {
        console.log(results);
      });
    });
    Promise.resolve().then(() => {
      console.log("promise inside promise resolve handle");
      const p9 = dataLoader.load(9);
      const p10 = dataLoader.load(10);
      Promise.all([p9, p10]).then((results) => {
        console.log(results);
      });
    });
  });
})();
