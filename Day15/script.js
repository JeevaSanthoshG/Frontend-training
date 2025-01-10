// Task-1 Array sort in basis of age 

const input1 = [
    { name: "John", age: 28 },
    { name: "Anna", age: 22 },
    { name: "Mike", age: 32 },
];

const arraysSort = (e) => {
    e.sort((a, b) => a.age - b.age);
    console.log(e);
}

arraysSort(input1);


// Task-2 Odd or Even

const input2 = [1, 2, 3, 4, 5, 6];

const oddOrEven = (input2) => {
    const res2 = { even: [], odd: [] };
    input2.map((e) => {
        (e % 2 == 0) ? res2.even.push(e) : res2.odd.push(e);
    })
    return res2;
}

console.log(oddOrEven(input2));

// Task-3 Remove duplicate

const input3 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "C" },
];

const removeDuplicate = (input3) => {
    let occ = [];
    return input3.filter((e) => {
        if (!occ.includes(e.id)) {
            occ.push(e.id);
            return true;
        }
        return false;
    })
}

console.log(removeDuplicate(input3));

// Task-4 Most frequency

const input4 = [1, 2, 2, 3, 3, 3];

const mostFrequency = (input4) => {
    let occ = {};
    input4.forEach((entry) => {
        occ.hasOwnProperty(entry) ? occ[entry]++ : (occ[entry] = 1);
    });

    let maxCount = 0;
    let mostFrequent = null;

    Object.keys(occ).forEach((key) => {
        key = parseInt(key);
        if (occ[key] > maxCount) {
            maxCount = occ[key];
            mostFrequent = key;
        }
    });

    return mostFrequent;
};

console.log(mostFrequency(input4));

// Task-5 Return the same elements

const input5_1 = [1, 2, 3];
const input5_2 = [2, 3, 4];

const sameElement = (input5_1, input5_2) => {
    let res5 = [];
    for (let i = 0; i < input5_1.length; i++) {
        for (let j = 0; j < input5_2.length; j++) {
            if (input5_1[i] == input5_2[j]) {
                res5.push(input5_1[i])
            }
        }
    }
    return res5;
}

console.log(sameElement(input5_1, input5_2));

// Task-6 Array to object

const input6 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const arrayToObject = (input6) => {
    let res6 = {};
    input6.map((e) => {
        res6[Number(e.id)] = e.name;
    })
    return res6;
}

console.log(arrayToObject(input6));

// Task-7 Only once appears

const input7 = [1, 2, 2, 3, 4, 4, 5];

const onceAppear = (input7) => {
    let res7 = [];
    input7.map((e) => {
        if(input7.indexOf(e) == input7.lastIndexOf(e)){
            res7.push(e);
        }
    })
    return res7;
}

console.log(onceAppear(input7));

// Task-8 Object to array

const input8 = { a: 1, b: 2 };

const objectToArray = (input8) => {
    let res8 = [];
    Object.keys(input8).map((e) => {
        let temp = [];
        temp.push(e);
        temp.push(input8[e]);
        res8.push(temp);
    })
    return res8;
}

console.log(objectToArray(input8));

// Task-9 Filter keys

const input9 = { a: 1, b: 2, c: 3 };

const filterKeys = (input9) => {
    let res9 = {};
    Object.keys(input8).filter((e) => {
        if(input9[e] < 3) {
            res9[e] = input9[e];
        }
    })
    return res9;
}

console.log(filterKeys(input9));

// Task-10 Merge array without duplicate


const input10_1 = [1, 2, 3, 5];
const input10_2 = [4, 7];
const input10_3 = 6;

const mergeArrays = (input10_1, input10_2, input10_3) => {
  let merged = [...input10_1, ...input10_2, input10_3];
  let res10 = [];

  for (let i = 0; i < merged.length; i++) {
    if (!res10.includes(merged[i])) {
      res10.push(merged[i]);
    }
  }

  return res10;
};

console.log(mergeArrays(input10_1, input10_2, input10_3));