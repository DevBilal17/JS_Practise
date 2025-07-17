// Funtion to find out whether the number is prime or not
function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) return false;
  }

  return true;
}

// console.log(isPrime(9))

//Funtion to find out in range like starting from 2 to limit you enter
function primeNumberInRange(limit) {
  let primes = [];
  if (limit < 2) {
    return primes;
  }
  for(let i=2;i<=limit;i++){
    if(isPrime(i)){
        primes.push(i)
    }
  }

  return primes
}

console.log(primeNumberInRange(100))
