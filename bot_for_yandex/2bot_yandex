// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*

// @grant        none
// ==/UserScript==

let sites = { // переменная для хранения сайтов. обьект
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
    "crushdrummers.ru":['Барабанное шоу','Заказать барабанное шоу','Шоу барабанщиков в Москве']
};

let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)]; //Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let btnYa = document.querySelectorAll(".button_theme_websearch")[0]; //кнопка поиска
let i =0; //создано для написания по буквам i++ - каждая напечатанная буква
let links = document.links;

if (btnYa != undefined){
    document.cookie = "site="+site;
}else if (location.hostname == "yandex.ru"){
    site = getCookie("site");
}else{
    site = location.hostname;
}

if (btnYa != undefined){
    document.cookie = "site="+site;
    let timerId = setInterval(()=>{
    text.value += keyword[i]; //id="text" в поисковой строке(input)/по буквам пишет
        i++;
        if (i==keyword.length){
            clearInterval(timerId);//останавливает setinterval
            btnYa.click();
              }
    },1000);
 }else if(location.hostname == site){
    setInterval(()=>{ //setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
        let index = getRandom(0,links.length);//сохранили номер ссылки на стрю от 0до кол-ва ссылок
        if (getRandom(0,101)>=80){
            location.href = 'https://www.google.com/';
        }
        else if (links[index].href.indexOf(site) != -1)
            links[index].click();
    },getRandom(3000,7000));
}else{
    let nextYandexPage = true;//переменная ,которая разрешает идти дальше,флаг
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf(site) !=-1){
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
        setTimeout(()=>{document.querySelectorAll(".pager__item_kind_next")[0].click();},getRandom(1000,4000)); //setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
