// Create a Pattern like This :
//!   *
//!   * *
//!   * * *
//!   * * * *
//!   * * * * *
// <- ============================ ->

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}

