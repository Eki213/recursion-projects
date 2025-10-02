const fibs = (n) => {
  if (n == 1) return [0];
  const res = [0, 1];

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }

  return res;
};

const fibsRec = (n) => {
  if (n == 2) return [0, 1];
  if (n == 1) return [0];

  const res = fibsRec(n - 1);
  res.push(res.at(-1) + res.at(-2));
  return res;
};
