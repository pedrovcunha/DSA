function reverseString(str: string) {
    let arrayStr = str.split("");
    let reversedArray: string[] = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array: string[]) {
      if (array.length > 0) {
        const pop = array.pop()!;
        reversedArray.push(pop);
        addToArray(array);
      }
      return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
  }
  
  reverseString("yoyo master");
  
  function reverseStringRecursive(str: string): string {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }
  
  reverseStringRecursive("yoyo master");