class Database {
  data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "Alice", age: 28 },
    { id: 5, name: "Mike", age: 32 },
    { id: 6, name: "Sarah", age: 27 },
    { id: 7, name: "David", age: 33 },
    { id: 8, name: "Emily", age: 29 },
    { id: 9, name: "Michael", age: 31 },
    { id: 10, name: "Sophia", age: 26 },
  ];

  async findAll(ids) {
    return new Promise((resolve, reject) => {
      console.log(`Querying ids: ${ids}`);
      const result = this.data.filter((item) => ids.includes(item.id));
      resolve(result);
    });
  }
}

module.exports = new Database();
