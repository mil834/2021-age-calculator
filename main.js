function age_calculator(member, name, age) {
	return `My ${member}, ${name} is ${age} years old (${age * 12} months)`;
}

console.log(age_calculator("mom", "Minette", 54));
console.log(age_calculator("dad", "Phillip", 57));
console.log(age_calculator("sister", "Myrnette", 17));
console.log(age_calculator("brother", "Matthew", 19));
console.log(age_calculator("cousin", "Shanel", 23));