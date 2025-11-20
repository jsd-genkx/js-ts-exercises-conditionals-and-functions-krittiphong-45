// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short" (pass)
// 6–10 chars → "Moderate" (pass123)
// 11+ chars → "Strong" (pass1234567)

const password = "pass123";
let passwordValue = password.length;
if(passwordValue < 6){
  console.log(`value:${passwordValue} :Too short`)
}else if(passwordValue <= 10){
  console.log(`value:${passwordValue} :Moderate`)
}else{
  console.log(`value:${passwordValue} :Strong`)
}