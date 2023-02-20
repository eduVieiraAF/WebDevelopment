const schedule = require('node-schedule')


const task1 = schedule.scheduleJob('*/5 * 18 * * 1', function() {
    console.log("task 1 triggered", new Date().getSeconds())
})

setTimeout(function() {
    task1.cancel()
    console.log("Task cancelled...")
}, 20000)

const rule = new schedule.RecurrenceRule()

rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 18
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
    console.log("Task 2 in progress...", new Date().getSeconds())
})