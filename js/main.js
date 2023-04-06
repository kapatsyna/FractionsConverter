let improperFraction = document.querySelector('.improper-fraction');
let askNumerator1 = document.querySelector('.ask-numerator-1');
let askDenominator1 = document.querySelector('.ask-denominator-1');

let mixedNumber = document.querySelector('.mixed-number');
let integer = document.querySelector('.ask-integer');
let askNumerator2 = document.querySelector('.ask-numerator-2');
let askDenominator2 = document.querySelector('.ask-denominator-2');

let convert1 = document.querySelector('.convert-1');
let convert2 = document.querySelector('.convert-2');

let out1 = document.querySelector('.out-1');
let out2 = document.querySelector('.out-2');
convert1.addEventListener('click', function () {
    if (askNumerator1.value >= askDenominator1.value) {
        if (askNumerator1.value % askDenominator1.value == 0) {
            out1.innerHTML = `
                <div class="toMixedNumber">
                    <div class="toMixedNumber__whole-number">${askNumerator1.value / askDenominator1.value}</div>
                </div>
            `;
            console.log(123);
        } else if (askNumerator1.value == '' || askDenominator1.value == '') {
            alert('type the numbers!');

        } else if (askNumerator1.value % askDenominator1.value != 0) {
            let save = askNumerator1.value;
            console.log(save);
            while (save % askDenominator1.value != 0) {
                --save;
                let a = askNumerator1.value - save;
                console.log(a);
                out1.innerHTML = `
                <div class="toMixedNumber">
                    <div class="toMixedNumber__whole-number">${save / askDenominator1.value}</div>
                        <div class="toMixedNumber__fraction">
                            <div class="toMixedNumber__numerator">${a}</div>
                            <div class="toMixedNumber__denominator">${askDenominator1.value}</div>
                        </div>
                </div>
                `;
                console.log(123);
            }
        }
    } else {
        out1.innerHTML = `
                <div class="toMixedNumber">
                    <div class="toMixedNumber__fraction">
                        <div class="toMixedNumber__numerator">${askNumerator1.value}</div>
                        <div class="toMixedNumber__denominator">${askDenominator1.value}</div>
                    </div>
                </div>
                `;
    }
})
convert2.addEventListener('click', function () {
    out2.innerHTML = `
        <div class="toImproperFraction">
            <div class="toImproperFraction__numerator">${integer.value * askDenominator2.value + +askNumerator2.value}</div>
            <div class="toImproperFraction__denominator">${askDenominator2.value}</div>
        </div>
    `;
    if (integer.value == '' || askNumerator2.value == '' || askDenominator2 == ''){
        alert('type the numbers!');
    }
})