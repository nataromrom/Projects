// библиотека 1 moment
const moment = require('moment');
require('moment/locale/ru');
var now = moment();
let fildDate = document.querySelector('.date');
fildDate.innerHTML = now.format('dddd Do MMMM');

// библиотека 2 chart.js
const Chart = require('chart.js');
let ctx = document.getElementById('myChart');
let jsondata = `{
    "labels": ["домашние дела", "работа", "учеба", "отдых"],
    "colors": ["#ffc0cb", "#A0FDBB", "#36A2EB", "#FFCE56"],
    "data": [5, 8, 5, 6]
}`
let chartdata = JSON.parse(jsondata); 

let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: chartdata.labels,
        datasets: [{
            backgroundColor: chartdata.colors, 
            hoverBackgroundColor: chartdata.colors,
            data: chartdata.data,
        }]
    },
    options: {}
});

// библиотека 3  interactjs
const interact = require('interactjs')

// Панель с перетаскиванием задач  
let od = document.querySelector("#outer-dropzone");
let strTasks = `["Вынести мусор", "Выучить JS", "Почитать", "Купить продукты"]`;
tasks = JSON.parse(strTasks);


for (let i = 0; i < tasks.length; i++) {
    let div = document.createElement('div');
    div.className = "drag-drop";
    div.id = "yes-drop";
    div.innerHTML = tasks[i];
    od.before(div);
}

interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        listeners: {
            move: dragMoveListener,
            end(event) {
                var textEl = event.target.querySelector('p')

                textEl && (textEl.textContent =
                    'moved a distance of ' +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                    .toFixed(2) + 'px')
            }
        }
    })

function dragMoveListener(event) {
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

interact('.dropzone').dropzone({
    accept: '#yes-drop',
    overlap: 0.75,

    ondropactivate: function (event) {
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
    },
    ondragleave: function (event) {
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
    },

    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    }
})

interact('.drag-drop')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        listeners: {
            move: dragMoveListener
        }
    })

// слайдер "Прогресс выполнения задач" из той же библиотеки 
const slider = interact('.slider')
slider
    .draggable({
        origin: 'self',
        inertia: true,
        modifiers: [
            interact.modifiers.restrict({
                restriction: 'self'
            })
        ],
        listeners: {
            move(event) {
                const sliderWidth = interact.getElementRect(event.target).width
                const value = event.pageX / sliderWidth
                let val = (value * 100).toFixed(2) + '%'

                event.target.style.paddingLeft = (value * 100) + '%'
                event.target.setAttribute('data-value', val)
            }
        }
    })

const position = {
    x: 0,
    y: 0
}
interact('.draggable').draggable({
    listeners: {
        start(event) {
            console.log(event.type, event.target)
        },
        move(event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform =
                `translate(${position.x}px, ${position.y}px)`
        },
    }
})

