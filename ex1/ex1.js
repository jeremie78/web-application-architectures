'use strict'
var rental=
{
  "cars": [
    {
      "id": "p306",
      "vehicule": "peugeot 306",
      "pricePerDay": 20,
      "pricePerKm": 0.10
    },
    {
      "id": "rr-sport",
      "pricePerDay": 60,
      "pricePerKm": 0.30
    },
    {
      "id": "p-boxster",
      "pricePerDay": 100,
      "pricePerKm": 0.45
    }
  ],
  "rentals": [
    {
      "id": "1-pb-92",
      "driver": {
        "firstName": "Paul",
        "lastName": "Bismuth"
      },
      "carId": "p306",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 150
    },
    {
      "id": "2-rs-92",
      "driver": {
        "firstName": "Rebecca",
        "lastName": "Solanas"
      },
      "carId": "rr-sport",
      "pickupDate": "2015-09-09",
      "returnDate": "2015-09-13",
      "distance": 550
    },
    {
      "id": "3-sa-92",
      "driver": {
        "firstName": " Sami",
        "lastName": "Ameziane"
      },
      "carId": "p-boxster",
      "pickupDate": "2015-09-12",
      "returnDate": "2015-09-14",
      "distance": 100
    }
  ]
}
var cars = rental.cars;
var rentals = rental.rentals

function getNDays(start,end){
  var diff = Date.parse(end)- Date.parse(start);
  return diff/(24*60*60*1000)+1;
}

    function rentalPrice(rentals, cars){
      var timeComponent = getNDays(rentals.pickupDate,rentals.returnDate) * cars.pricePerDay;
      var distanceComponent = rentals.distance * cars.pricePerKm;
      var prixdelocation = timeComponent + distanceComponent;
      //document.write(getNDays(rentals.pickupDate,rentals.returnDate)) ;
      document.write(rentals.driver.firstName + " va payer " + prixdelocation + " euros<br\>");

    }
    document.write(" Exercice 1 : <br>")
    for(var i = 0; i < cars.length;i++)
   {
     rentalPrice(rentals[i],cars[i]);
   }
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   document.write( "<br> Exercice 2  : <br>")

   function rentalPrice2(rentals, cars){
     var nbjour = getNDays(rentals.pickupDate,rentals.returnDate);
     var timeComponent = getNDays(rentals.pickupDate,rentals.returnDate) * cars.pricePerDay;
     var distanceComponent = rentals.distance * cars.pricePerKm;
     var prixdelocation = (timeComponent + distanceComponent);

       if(nbjour == 1){
         var prixdelocation = (timeComponent + distanceComponent) ;
         document.write(nbjour);
         document.write(rentals.driver.firstName + " va payer " + prixdelocation + " euros<br\>");}

       if(nbjour > 1 && nbjour <=4){
         var prixdelocation = (timeComponent + distanceComponent)* 0.90;
         document.write(rentals.driver.firstName + " va payer " + prixdelocation + " euros<br\>");}

       if(nbjour >4 && nbjour <=10){
         var prixdelocation = (timeComponent + distanceComponent)* 0.70;
         document.write(rentals.driver.firstName + " va payer " + prixdelocation + " euros<br\>");}

       if(nbjour >=10){
          var prixdelocation = (timeComponent + distanceComponent)*0.50;
          document.write(rentals.driver.firstName + " va payer " + prixdelocation + " euros<br\>");}
        }

     for(var i = 0; i < cars.length;i++)
    {
      rentalPrice2(rentals[i],cars[i]);
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write(" <br> Exercice 3  <br><br>");

function CommissionPrice(rentals, cars){
  var timeComponent = getNDays(rentals.pickupDate,rentals.returnDate) * cars.pricePerDay;
  var distanceComponent = rentals.distance * cars.pricePerKm;
  var prixdelocation = timeComponent + distanceComponent;
  var roadsideAssitance = getNDays(rentals.pickupDate,rentals.returnDate);
  var newRentalprice = prixdelocation*  0.30;
  var insurance = newRentalprice*.85;
  var drivy = newRentalprice- insurance - roadsideAssitance;
  document.write("id : " + rentals.driver.firstName + "-"+ rentals.driver.lastName + "<br>" + "Price : " + prixdelocation +
   "<br>  commision : <br> insurance : " + insurance + "<br>  assistance : " + roadsideAssitance + "<br>  drivy : " + drivy + "<br>");

}

for(var i = 0; i < cars.length;i++)
{
 CommissionPrice(rentals[i],cars[i]);
 document.write("<br><br>");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write(" <br> Exercice 4  <br><br>");

function CommissionPriceAndDeductibleReduction(rentals, cars){
  var timeComponent = getNDays(rentals.pickupDate,rentals.returnDate) * cars.pricePerDay;
  var distanceComponent = rentals.distance * cars.pricePerKm;
  var prixdelocation = timeComponent + distanceComponent;
  var roadsideAssitance = getNDays(rentals.pickupDate,rentals.returnDate);
  var newRentalprice = prixdelocation*  0.30;
  var insurance = newRentalprice*.85;
  var drivy = newRentalprice- insurance - roadsideAssitance;
  var newPrice = prixdelocation + roadsideAssitance*5;
  document.write("id : " + rentals.driver.firstName + "-"+ rentals.driver.lastName + "<br>" + "Price : " + newPrice +
   "<br>  commision : <br> insurance : " + insurance + "<br>  assistance : " + roadsideAssitance + "<br>  drivy : " + drivy+(roadsideAssitance*5) +
    "<br>  Option  : <br> deductionReduction : " + roadsideAssitance*4);
    }
    for(var i = 0; i < cars.length;i++)
    {
     CommissionPriceAndDeductibleReduction(rentals[i],cars[i]);
     document.write("<br><br>");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.write(" <br> Exercice 5  <br><br>");

    function PayTheActor(rentals, cars){
      var timeComponent = getNDays(rentals.pickupDate,rentals.returnDate) * cars.pricePerDay;
      var distanceComponent = rentals.distance * cars.pricePerKm;
      var prixdelocation = timeComponent + distanceComponent;
      var roadsideAssitance = getNDays(rentals.pickupDate,rentals.returnDate);
      var deductiblereduction = roadsideAssitance*4
      var driverMoneyToPay = prixdelocation + deductiblereduction;
      var newRentalprice = prixdelocation*  0.30;
      var insurance = newRentalprice*.85;
      var drivy = newRentalprice- insurance - roadsideAssitance;
      var drivyDedReduction = drivy + deductiblereduction;
      var newPrice = prixdelocation + roadsideAssitance*5;
      document.write("id : "+ rentals.id + " <br> Driver :  " + rentals.driver.firstName + "-"+ rentals.driver.lastName +" Must have to pay Rental price and deductible reduction : "
      + driverMoneyToPay + "<br> Owner receives Rental price minus the comission : " + prixdelocation*.7 +
    " <br> The insurance receives a part of the commision : "+ insurance +"<br> The assistance receives a part of the commision: " + roadsideAssitance + "<br> Drivy receives a part of the commission and the deductible reduction :"+ drivyDedReduction);
    }
    for(var i = 0; i < cars.length;i++)
    {
     PayTheActor(rentals[i],cars[i]);
     document.write("<br><br>");
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.write(" <br> Exercice 6  <br><br>");
