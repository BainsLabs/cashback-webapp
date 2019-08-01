/* eslint-disable import/prefer-default-export */
/* eslint-disable radix */
export const totalTeam = (referred) => {
  const basenumber = parseInt(referred);
  return new Promise((res) => {
    let powerValue = 0;
    for (let i = 1; i <= 6; i++) {
      powerValue += basenumber ** i;
    }
    res(powerValue);
  });
};

export const teamByDegree = (referred) => {
  const basenumber = parseInt(referred);
  return new Promise((res) => {
    const powerValue = [];
    for (let i = 1; i <= 6; i++) {
      powerValue.push(basenumber ** i);
    }
    res(powerValue);
  });
};
