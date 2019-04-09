const { succeed, fail, repair } = require('./enhancer.js');
// test away!

const knife = {
  name: 'Knife',
  durability: 1,
  enhancement: 2
};

const handgun = {
  name: 'Handgun',
  durability: 10,
  enhancement: 20
};

const gatlingGun = {
  name: 'Gatling Gun',
  durability: 50,
  enhancement: 18
};

const rocketLauncher = {
  name: 'Rocket Launcher',
  durability: 70,
  enhancement: 14
};

// repair()
it('return item durability to 100', () => {
  expect(repair(knife)).toEqual({ ...knife, durability: 100 });
  expect(repair(gatlingGun)).toEqual({ ...gatlingGun, durability: 100 });
});

// succeed()
it('enhancement +1, return as 20 if >= 20 already', () => {
  expect(succeed(knife)).toEqual({ ...knife, enhancement: 6 });
  expect(succeed(gatlingGun)).toEqual({ ...gatlingGun, enhancement: 20 });
});

// fail()
it('durability -5 if enhancement lower than 15, -10 if = 15, -10 and -1 if >= 16', () => {
  expect(fail(handgun)).toEqual({ ...handGun, durability: 10, enhancement: 12 });
  expect(fail(gatlingGun)).toEqual({ ...gatlingGun, durability: 30, enhancement: 13 });
  expect(fail(rustySword)).toEqual({ ...rocketLauncher, durability: 15, enhancement: 16 });
});
