"use strict";

const p = document.querySelectorAll('p');
console.log(p);

// динамическое добавление скриптов на страницу
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // скрипты будут выполняться друг за другом
    document.body.append(script);
}

loadScript("test.js");
loadScript("some.js");