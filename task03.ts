// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";
let passwordValue = password.length;
if(passwordValue < 6){
  console.log(`value:${passwordValue} :Too short`)
}else if(passwordValue >= 6 && passwordValue <= 10){
  console.log(`value:${passwordValue} :Moderate`)
}else if(passwordValue >= 11){
  console.log(`value:${passwordValue} :Strong`)
}