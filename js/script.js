// Copyright (c) 2022 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 04/05/2023
// This file contains the JS functions for index.html

"use strict"

// Function
function temperatureCalculate() {
  let temp = parseFloat(document.getElementById("fahrenheit").value);
  
 // Calculation
  let celsius = 5 / 9 * (temp - 32);
  let celsiusRounded = celsius.toFixed(1)

// Display results
  document.getElementById("display-results").innerHTML = "The temperature in Celsius is " + celsiusRounded + " C°."
}