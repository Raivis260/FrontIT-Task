export const sortName = (itemsArray, sorted) => {
  if (sorted) {
    itemsArray.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      return 0;
    });
  } else {
    itemsArray.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  return itemsArray;
};
