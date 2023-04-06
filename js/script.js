// Copyright (c) 2022 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 04/05/2023
// This file contains the JS functions for index.html

"use strict"

// Input
function AreaandPerimeterCalculate() {
  let radiusOfSemicircle = parseFloat(document.getElementById("radius").value);
  
  // Area calculation
  let area = 1 / 2 * Math.PI * radiusOfSemicircle ** 2;
  let areaRounded = area.toFixed(2)

  // Perimeter calculation
  let diameter = radiusOfSemicircle * 2
  let perimeter = Math.PI * radiusOfSemicircle + diameter
  let perimeterRounded = perimeter.toFixed(2)
  
  // Output
  document.getElementById("display-results").innerHTML = "The area of the semicircle is " + areaRounded + " cm <sup>2</sup>" + " and the perimeter is " + perimeterRounded + " cm."
}

function textfield () {
  document.getElementById("textfield").innerHTML = "Thank you for your input and participation! I hope you found this webpage helpful :)"
}