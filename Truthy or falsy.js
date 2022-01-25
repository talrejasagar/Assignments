function check(x) {                      //   Create a Function
  if (boolean(x) === true) {                // check whether the value is truty or falsy
    return true;                            // if truthy print true
  } else {                                  // otherwise print false
    return false;
  }
}

check(); // Check Truthy or falsy

var y = 0;
function checkNo(x)                 //
{
    y = x-0;
    if(y==x)
    {
        return y;
    }
    else
    return 0;
} 

checkNo(x); //Convert to no.