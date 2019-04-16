module.exports = {
  succeed,
  fail,
  repair,
  // get
};

function repair(item) {
  return { ...item, durability: 100 };
}

function succeed(item) {
  // keep item at 20 if already 20
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return {
      ...item,
      // +1 if not 20
      enhancement: item.enhancement + 1
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item,
      // -5 if less than 15
      durability: item.durability - 5
    };
  } else {
    if (item.enhancement === 15) {
      return {
        ...item,
        // -10 if 15
        durability: item.durability - 10
      };
    } else {
      return {
        ...item,
        // > 16 means -10
        durability: item.durability - 10,
        // > 15 means -1
        enhancement: item.enhancement - 1
      };
    }
  }
}

// function get(item) {
//   return { ...item };
// }