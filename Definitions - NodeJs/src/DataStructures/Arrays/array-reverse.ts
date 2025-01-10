// Create a function that reverses a string:
// 'Hi My name is Peter' should be 'reteP si eman yM iH'
function reverse(str: string) {
    if (!str || str.length < 2 || typeof(str) !== "string") {
        return 'invalid string';
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; --i) {
        backwards.push(str[i]);
    }
    console.log(backwards.join(""));
    return backwards.join('');
}

const reverse2 = (str: string) => str.split('').reverse().join('');
const reverse3 = (str: string) => [...str].reverse().join('');

reverse('Hi My name is Peter');