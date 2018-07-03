# Тестовое задание

## Level I

```
Q1

Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
1) пользователя; 
2) менеджера проекта; 
3) дизайнера; 
4) верстальщика; 
5) клиентского программиста; 
6) серверного программиста.
```
1) С точки зрения пользователя хорошая верстка от плохой отличается привлекательным дизайном и интуитивно понятным интерфейсом(пользователь не ошибается, когда совершает те или иные действия), верстка выглядит хорошо на любых устройствах, текст читаем, а страница в целом не утомляет пользователя.
Хорошая верстка должна быть идентичной во всех браузерах(кроссбраузерность).
Важную роль играет оптимизация загрузки ресурсов сайта, страницы должны быстро и правильно(загружаться должны только те ресурсы, которые используются) загружаться, даже если у пользователя слабый сигнал сети. 

2) Для менеджера проекта хорошая верстка от плохой отличается её упорядоченностью. 
Названия файлов отвечают за их содержимое. 
Файлы упорядоченны по своим расширениям: файлы css в одной папке, файлы js в другой и т.д. 
Также хорошая верстка должна быть готова к изменениям модернизации в любое время.

3) Для дизайнера тоже важна "гибкость" затем, чтобы успешно вносить изменения в проект. Независимость модулей и блоков обеспечивает широкие возможности для изменения дизайна.
Важен также внешний облик сайта. 

4) Для верстальщика хорошая вёрстка должна быть универсальной, упорядоченной и семантически правильной. 
Названия классов, переменных и др. должны отвечать за содержимое. Код должен быть самодокументируемым.

5) Для клиентского программиста и серверного программиста критерий хорошей вертски - быстрая оптимизация, независимость блоков, грамотный css код(добавление новых элементов, контента, функционала не должно ломать верстку) 

6) Для клиентского программиста и серверного программиста критерий хорошей вертски - быстрая оптимизация, независимость блоков, грамотный css код(добавление новых элементов, контента, функционала не должно ломать верстку) 

##

```
Q2

Опишите основные особенности верстки крупных многостраничных сайтов,
дизайн которых может меняться в процессе реализации и поддержки.
Расскажите о своем опыте верстки подобных сайтов: какие методологии,
инструменты и технологии вы применяли на практике. 
```
Особенности верстки многостраничных сайтов заключаются в организованности, работе сообща, использовании проверенных методик. 
При верстке лучше создать ветвь для изменений, вносить туда что-то своё, а уж потом, при согласии руководства и других участников команды, соединить её в главный проект. Это поможет избежать путаницы. 

##

```
Q3

Опишите основные особенности верстки сайтов, которые должны одинаково
хорошо отображаться как на любом современном компьютере, так и на
смартфонах и планшетах под управлением iOS и Android. Расскажите о своем
опыте верстки подобных сайтов: какие инструменты и технологии вы применяли,
как проверяли результат на различных устройствах, какие именно устройства
требовалось поддерживать. 
```
Важно использовать общепринятые паттерны или популярные библиотеки, связанные с поддержанием кроссбраузерности(например bootstrap + jquery). В основном я использую структуру основанную на этих инструментах. Так же при разработке большого проекта нужно использовать методологию, обычно это БЭМ. Тестировать верстку удобно в PerfectPixel расширении для браузера, если мы говорим о соотвествии дизайну, а саму картинку в разных браузерах можно получить из множества online ресурсов (<http://crossbrowsertesting.com>).

##

```
Q4

Расскажите, какие инструменты помогают вам экономить время в процессе
написания, проверки и отладки кода. 
```
Многочисленные плагины установленные в текстовый редактор(sublime text). Dev tools в google chrome, валидаторы.

##

```
Q5

Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в
IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия?
Сталкивались ли вы с подобными проблемами на практике? 
```
Буду использовать dev tools и проверять всё в браузере. Если есть проблемы
такого характера они типичные и описаны сотни раз, выявить причину и решить проблему не составит большого труда.

##

```
Q6

Дизайнер отдал вам макет, в котором не показано, как должны выглядеть
интерактивные элементы при наведении мыши. Ваши действия?
```
Спрошу дизайнера об этом.
В ином случае буду следовать условиям, описанным в техническом задании.

##

```
Q7

Какие ресурсы вы используете для развития в профессиональной сфере? Приведите
несколько конкретных примеров (сайты, блоги и так далее).
Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка
или и то, и другое?
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе,
вам интересны? 
```
Сайты,которыми пользуюсь чаще всего: 
* <http://htmlbook.ru/> 
* <https://learn.javascript.ru/> 
* <https://habr.com/> 
* <https://www.youtube.com/?gl=RU&hl=ru> 

Мне одинаково интересны и JS-программирование, и HTML/CSS- верстка 
Дизайн мне также очень интересен. Будь то дизайн веб-сайтов, одежды, архитектуры и другое. 

##

```
Q8

Расскажите нам о себе и предоставьте несколько ссылок на последние работы,
выполненные вами. 
```
<https://amosovaanna.github.io/> 

Портфолио еще не так велико, как хотелось бы,
но я всегда готова к чему-либо новому и интересному.

##

## Level II

Подумав, поняла, что задача решаема двумя способами : css и js

В этом репозитории я разместила css

1. vacancies-css/
* index.html
* dist/main.js
* css/style.css 
* css/style-responsive.css

(использовался webpack)

##

<https://amosovaanna.github.io/FunBox-test1/>

##
