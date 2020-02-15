const cats = [
  {
    _id: "5de0e0dd022bc004e0d7138f",
    name: "Horror",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de0e1acf6b51a148cf3b53b",
    name: "Apparel",
    parentId: null,
    child: null
  },
  {
    _id: "5de0e1b4f6b51a148cf3b53c",
    name: "General",
    parentId: null,
    child: null
  },
  {
    _id: "5de0e1d9f6b51a148cf3b53d",
    name: "Movie",
    parentId: null,
    child: null
  },
  {
    _id: "5de0e1eaf6b51a148cf3b53e",
    name: "Action",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de0e265f6b51a148cf3b53f",
    name: "Sci-Fi",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de0e26df6b51a148cf3b540",
    name: "Fiction",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de0e277f6b51a148cf3b541",
    name: "Romance",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de0e27cf6b51a148cf3b542",
    name: "Tragedy",
    parentId: "5de0e1d9f6b51a148cf3b53d",
    child: null
  },
  {
    _id: "5de10718529e260444126479",
    name: "Dark",
    parentId: "5de0e0dd022bc004e0d7138f",
    child: null
  },
  {
    _id: "5e46b4ba1c9d440000772dfd",
    name: "South",
    parentId: "5de0e1eaf6b51a148cf3b53e",
    child: null
  }
];

function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem._id] = arrElem;
    mappedArr[arrElem._id]["children"] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parentId) {
        mappedArr[mappedElem["parentId"]]["children"].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

var tree = unflatten(cats);
console.log(tree);
