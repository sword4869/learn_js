'use strict';

// a lot of if else nests
function compute(a) {
    if (a != null) {
        if (a < 18) {
            console.log('a < 18');
        }
        else if (a < 35) {
            console.log('18 <= a < 35');
        }
        else {
            console.log('a >= 35');
        }
    }
    else {
        console.log('a is null');
    }
}

// use the design of 'guard statement' to eliminate else part
function compute2(a) {
    if (a == null) {
        console.log('a is null');
        return;
    }

    // The following sections are all a!=null cases
    if (a < 18) {
        console.log('a < 18');
        return;
    }

    if (a < 35) {
        console.log('18 <= a < 35');
        return;
    }

    console.log('a >= 35');

}

// more beautiful: use a result variable to eliminate return statement- method 1
function compute2(a) {
    // default value is none.
    let result;
    if (a == null) result = 'a is null';
    if (a < 18) result = 'a < 18';
    if (a < 35) result = '18 <= a < 35';
    result = 'a >= 35';

    console.log(result);
}

// more beautiful: use a result variable to eliminate return statement- method 2
function compute2(a) {
    // default value is final case.
    let result = 'a >= 35';
    if (a == null) result = 'a is null';
    if (a < 18) result = 'a < 18';
    if (a < 35) result = '18 <= a < 35';

    console.log(result);
}