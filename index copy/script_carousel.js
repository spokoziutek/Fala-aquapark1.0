var btn = document.querySelector('#button');

setTimeout(karuzela, 5000);

function karuzela(){
    setInterval(() => {
        btn.click();
        console.log("beng beng")
    }, 5000);
    };