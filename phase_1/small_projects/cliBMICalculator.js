const input = require("prompt-sync")();

function BMI() {

  this.Metric = () => {
    let heightInCM = Number(input("Enter your height cm: "));
    let weightInKG = Number(input("Enter your weight in kg: "));

    let heightInMeters, final_height;

    heightInMeters = heightInCM / 100;
    final_height = heightInMeters * heightInMeters;

    let bmi = weightInKG / final_height;

    console.log(`your bmi: ${bmi.toFixed(1)}`);

    if (bmi < 18.5) {
      console.log("Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log("normal weight ");
    } else {
      console.log("overweight");
    }
  };
}

const person = new BMI();

person.Metric()