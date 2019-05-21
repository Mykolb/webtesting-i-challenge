module.exports = {
  succeed,
  fail,
  repair,
  get,
};



function succeed(item) {
  const enhancement = item.enhancement;
  const level = item.level;
  if(level === 20) {
   return {...item};
  } else {
return {...item, enhancement: enhancement + 1}
  }
}

function fail(item) {
  const enhancement = item.enhancement;
  const level = item.level;
  const durability = item.durability;
  if(enhancement < 15) {
    return {...item, durability: durability - 5}
  } else if (enhancement >= 15)        {
    return {...item, durability: durability - 10}
  } else {
    (level > 16) 
      return {...item, level: level - 1}
    }
  }

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
