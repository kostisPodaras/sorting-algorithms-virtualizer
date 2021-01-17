const randomArray = (length) =>
  [...Array(length)].map(() => Math.floor(Math.random() * 100));

export default randomArray;
