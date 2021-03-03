const transformData = (data) => {
  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
};

export { transformData };
