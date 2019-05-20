module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = ({
  "name": "",
  "durability": "",
  "enahncement": ""
})


function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
