export const filterLogic = (name, author, value) => {
  const includesAuthor = author.toLowerCase().includes(value);
  const includesName = name.toLowerCase().includes(value);
  if (value === null) return true;
  if (includesName || includesAuthor) return true;
  return false;
};
