// SINGLE PATTI → all digits different
export const getSinglePatti = (): string[] => {
  const result: string[] = [];

  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      for (let c = 0; c <= 9; c++) {
        if (a !== b && b !== c && a !== c) {
          result.push(`${a}${b}${c}`);
        }
      }
    }
  }

  return result;
};

// DOUBLE PATTI → exactly two digits same
export const getDoublePatti = (): string[] => {
  const set = new Set<string>();

  for (let same = 0; same <= 9; same++) {
    for (let diff = 0; diff <= 9; diff++) {
      if (same !== diff) {
        set.add(`${same}${same}${diff}`);
        set.add(`${same}${diff}${same}`);
        set.add(`${diff}${same}${same}`);
      }
    }
  }

  return Array.from(set);
};

// TRIPLE PATTI → all digits same
export const getTriplePatti = (): string[] => {
  const result: string[] = [];
  for (let i = 0; i <= 9; i++) {
    result.push(`${i}${i}${i}`);
  }
  return result;
};
