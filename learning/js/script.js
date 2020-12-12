let max = prompt("Введите число");

let num = (Math.random() * max).toFixed(0);

//alert(num);

let counter = 1;

for(;;) {
    let guess = prompt("Угадайте");
    if(guess == num) {
        alert("Угадали c " + counter + " попытки! Число: " + num);
        break;
    }
    else if(guess < num) {
        alert("Мало");
        counter++;
    }
    else if(guess > num) {
        alert("Много");
        counter++;
    }
}