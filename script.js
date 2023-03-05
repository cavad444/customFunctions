//Custom function of foreach()

function customForEach(arr, operation) {
    for (let i = 0; i < arr.length; i++) {
      operation(arr[i], i, arr);
    }
  }
  
  function square(item, index, array) {
    array[index] = Math.pow(array[index], 2);
  }

  const arrForEach = [1, 2, 3, 4];
  customForEach(arrForEach, square);
  
  console.log(arrForEach); 


  //Custom function of find

  function customFind(arr, condition) {
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i])) {
        return "Founded item in array is " + arr[i];
      }
    }
    return undefined;
  }
  
  const arrFind = [1, 2, 3, 4];
  
  function isEqualFind(item) {
    return item % 2 == 0;
  }
  
  const foundItem = customFind(arrFind, isEqualFind);
  
  console.log(foundItem); 

  
  //Custom function of filter

  function customFilter(arr, condition) {
    const filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (condition(arr[i], i, arr)) {
        filteredArr.push(arr[i]);
      }
    }
  
    return "Filtered array is " + filteredArr;
  }
  
  const arrFilter = [1, 2, 3, 4];
  
  function isEqualFilter(item) {
    return item % 2 == 0;
  }
  
  const filteredArr = customFilter(arrFilter, isEqualFilter);
  
  console.log(filteredArr); 

  // Custom function of map()

  function customMap(arr) {
    const mappedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      mappedArr.push(arr[i] * arr[i]);
    }
  
    return "Mapped array is " + mappedArr;
  }
  
  const arrMap = [1, 2, 3, 4];
  

  
  const mappedArr = customMap(arrMap);
  
  console.log(mappedArr); 
  
  