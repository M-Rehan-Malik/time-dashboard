const dataArr = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const optionDaily = document.querySelector('.option-daily');
const optionWeekly = document.querySelector('.option-weekly');
const optionMonthly = document.querySelector('.option-monthly');
const optionsArr = [optionDaily, optionWeekly, optionMonthly];

const hourSpanArr = document.querySelectorAll('.hour-span');
const lastHourSpanArr = document.querySelectorAll('.last-hours-span');
const lastOptionSpanArr = document.querySelectorAll('.last-option-span');

console.log(dataArr.length)
optionsArr.forEach(option=>{
    option.onclick = optionChange
})

function optionChange() {
    optionsArr.forEach(fade=>{
        if (fade.classList.length===1) fade.classList.add('fade-color')
    })
    this.classList.remove('fade-color')
    if (this===optionDaily) {
        for (let i=0;i<dataArr.length;i++) {
            hourSpanArr[i].textContent = dataArr[i].timeframes.daily.current
            lastOptionSpanArr[i].textContent = 'Day'
            lastHourSpanArr[i].textContent = dataArr[i].timeframes.daily.previous
        }   
    }
    else if (this===optionMonthly) {
        for (let i=0;i<dataArr.length;i++) {
            hourSpanArr[i].textContent = dataArr[i].timeframes.monthly.current
            lastOptionSpanArr[i].textContent = 'Month'
            lastHourSpanArr[i].textContent = dataArr[i].timeframes.monthly.previous
        }
    }
    else if (this===optionWeekly) {
        for (let i=0;i<dataArr.length;i++) {
            hourSpanArr[i].textContent = dataArr[i].timeframes.weekly.current
            lastOptionSpanArr[i].textContent = 'Week'
            lastHourSpanArr[i].textContent = dataArr[i].timeframes.weekly.previous
        }
    }
}


