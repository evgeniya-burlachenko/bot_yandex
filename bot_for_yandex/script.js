// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let keywords = ['Гобой','Как звучит флейта', 'Кларнет','флюгергорн'];
let keyword = keywords[getRandom(0,keywords.length)];
let btnYa = document.querySelectorAll(".button_theme_websearch")[0]; //кнопка поиска
let i =0; //создано для написания по буквам i++ - каждая напечатанная буква
let links = document.links;

if (btnYa != undefined){
    let timerId = setInterval(()=>{
    text.value += keyword[i]; //id="text" в поисковой строке(input)/по буквам пишет
        i++;
        if (i==keyword.length){
            clearInterval(timerId);//останавливает setinterval
            btnYa.click();
              }
    },1000);
 }else if(location.hostname == "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    setInterval(()=>{
        let index = getRandom(0,links.length);//сохранили номер ссылки на стрю от 0до кол-ва ссылок
        if (getRandom(0,101)>=80){
            location.href = 'https://yandex.ru/';
        }
        else if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1)
            links[index].click();
    },getRandom(3000,7000));
}else{
    let nextYandexPage = true;//переменная ,которая разрешает идти дальше,флаг
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !=-1){
            let link = links[i];
            nextYandexPage=false;//если нашли сайт на 1ой стр ,отключаем поиск
            link.removeAttribute("target"); //убираю атрибут, чтобы страница загружалась в текущей
            setTimeout(()=>{link.click();},getRandom(1000,4000));
            break;
        }
    }
    if (document.querySelector('.pager__item_current_yes').innerText=="10"){
        nextYandexPage = false;
        location.href = 'https://www.yandex.ru/'; //после 10 стра начать поиск заново\\\
    }
    if (nextYandexPage){
        setTimeout(()=>{document.querySelectorAll(".pager__item_kind_next")[0].click();},getRandom(1000,4000));
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
