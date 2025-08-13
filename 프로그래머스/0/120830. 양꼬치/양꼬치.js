function solution(n, k) {
    const freeDrink = 2000 * Math.floor(n / 10)
    
    return n * 12000 + k * 2000 - freeDrink;
}