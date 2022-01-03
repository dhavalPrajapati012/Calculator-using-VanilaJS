let operation;
let num1;
let num2;

function calfunction(event) {

    let num = event.target.getAttribute('data-value')
    let numStr = document.getElementById('random').innerText;
    if (num === 'del') {
        let wholeStr = numStr;
        wholeStr = wholeStr.replace(wholeStr[wholeStr.length - 1], "");
        document.getElementById('random').innerHTML = wholeStr;
    } else if (num === '+') {
        operation = "+";
        num1 = parseFloat(numStr);
        document.getElementById('data').innerHTML = num1 + "+";
        numStr = "";
        document.getElementById('random').innerHTML = numStr;
    } else if (num === '-') {
        operation = '-';
        num1 = parseFloat(numStr);
        document.getElementById('data').innerHTML = num1 + "-";
        numStr = "";
        document.getElementById('random').innerHTML = numStr;
    } else if (num === '*') {
        operation = '*';
        num1 = parseFloat(numStr);
        document.getElementById('data').innerHTML = num1 + "*";
        numStr = "";
        document.getElementById('random').innerHTML = numStr;
    } else if (num === '/') {
        operation = '/';
        num1 = parseFloat(numStr);
        document.getElementById('data').innerHTML = num1 + "/";
        numStr = "";
        document.getElementById('random').innerHTML = numStr;
    } else if (num === "=") {
        num2 = parseFloat(numStr);
        if (operation === "+") {
            document.getElementById('random').innerHTML = num1 + num2;
            document.getElementById('data').innerHTML = `${num1}+${num2}`;

        } else if (operation === "-") {
            document.getElementById('random').innerHTML = num1 - num2;
            document.getElementById('data').innerHTML = `${num1}-${num2}`
        } else if (operation === "*") {
            document.getElementById('random').innerHTML = num1 * num2;
            document.getElementById('data').innerHTML = `${num1}*${num2}`
        } else if (operation === "/") {
            document.getElementById('random').innerHTML = num1 / num2;
            document.getElementById('data').innerHTML = `${num1} / ${num2}`;
        }
    } else if (num === "reset") {
        numStr = "";
        document.getElementById('random').innerHTML = numStr;
        document.getElementById('data').innerHTML = "";
    }
    else {
        let wholeStr = numStr.concat(num);
        document.getElementById('random').innerHTML = wholeStr;
    }
}
function myFunction() {
    let x = document.getElementById("range1").value;
    if (x === '1') {
        document.body.style['background-color'] = "#3B4664";
        document.getElementsByClassName('reset')[0].style['background-color'] = "#647299";
        document.getElementsByClassName('bg-grey')[0].style['background-color'] = "#647299";
        document.getElementsByClassName('equal')[0].style['background-color'] = "#D13F30";
        document.getElementById('random').style.color = "#FEFFFA"
        document.getElementById('data').style.color = "#FEFFFA"
        document.getElementsByClassName('equal')[0].style.color = "white";
        document.getElementsByClassName('bg')[0].style['background-color'] = "#181F32";
        document.getElementsByClassName('digit')[0].style['background-color'] = "#232C44";
        for (let i = 0; i < document.getElementsByClassName('color').length; i++) {
            document.getElementsByClassName('color')[i].style.color = "#FBFEFF";
        }
        for (let i = 0; i < document.getElementsByClassName('num').length; i++) {
            if (document.getElementsByClassName('num')[i].classList.value !== 'num white bg-grey') {
                document.getElementsByClassName('num')[i].style['background-color'] = "#E9E3DC";
                document.getElementsByClassName('num')[i].style['color'] = "#464958";
            }
        }
    }
    if (x === '2') {
        document.body.style['background-color'] = "#E5E5E5";
        document.getElementsByClassName('reset')[0].style['background-color'] = "#368087";
        document.getElementsByClassName('bg-grey')[0].style['background-color'] = "#368087";
        document.getElementsByClassName('equal')[0].style['background-color'] = "#C75300";
        document.getElementById('random').style.color = "#13120B"
        document.getElementById('data').style.color = "#13120B"
        document.getElementsByClassName('equal')[0].style.color = "white";
        document.getElementsByClassName('bg')[0].style['background-color'] = "#EFEFEF";
        document.getElementsByClassName('digit')[0].style['background-color'] = "#D4CDCD";
        for (let i = 0; i < document.getElementsByClassName('color').length; i++) {
            document.getElementsByClassName('color')[i].style.color = "#13120B";
        }
        for (let i = 0; i < document.getElementsByClassName('num').length; i++) {
            if (document.getElementsByClassName('num')[i].classList.value !== 'num white bg-grey') {
                document.getElementsByClassName('num')[i].style['background-color'] = "#E6E4E0";
                document.getElementsByClassName('num')[i].style['color'] = "#13120B";
            }
        }
    }
    if (x === '3') {
        document.body.style['background-color'] = "#160729";
        document.getElementsByClassName('reset')[0].style['background-color'] = "#540979";
        document.getElementsByClassName('bg-grey')[0].style['background-color'] = "#540979";
        document.getElementsByClassName('equal')[0].style['background-color'] = "#01DECE";
        document.getElementsByClassName('equal')[0].style.color = "black";
        document.getElementById('random').style.color = "#F6DE57"
        document.getElementById('data').style.color = "#F6DE57"
        document.getElementsByClassName('bg')[0].style['background-color'] = "#1C0735";
        document.getElementsByClassName('digit')[0].style['background-color'] = "#1C0735";
        for (let i = 0; i < document.getElementsByClassName('color').length; i++) {
            document.getElementsByClassName('color')[i].style.color = "#F6DE57";
        }
        for (let i = 0; i < document.getElementsByClassName('num').length; i++) {
            if (document.getElementsByClassName('num')[i].classList.value !== 'num white bg-grey') {
                document.getElementsByClassName('num')[i].style['background-color'] = "#331A4E";
                document.getElementsByClassName('num')[i].style['color'] = "#F6DE57";

            }
        }
    }
}