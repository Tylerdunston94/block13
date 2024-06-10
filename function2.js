//

function createMessage(cel_temp,faren_temp)
{
    if(cel_temp > 30)
    {
        console.log("Hot")
    }
    else if(cel_temp >20 && cel_temp <30)

        console.log("warm")
    {
        //Do this
    }
    else if(cel_temp > 25)

        Console.log("cold")
    {
        //Do this
    }
    else if(cel_temp < 25)

        console.log("Freezing")
    {
        //Do this
    }
    else
    {
        //Do this
    }
}

function convertToCelsius (farenheit_temp)
{
	var celcius_temp = (farenheit_temp - 32) * 5 / 9;
	return celcius_temp;
}

var far_temp = 98;
var cel_temp = convertToCelsius(far_temp);
console.log(elcius temperature = ",cel_temp);
