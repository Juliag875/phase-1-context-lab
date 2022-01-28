/* Your Code Here */
let createEmployeeRecord = function(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents : [],
      timeOutEvents : []
    }
  }
  
  let createEmployeeRecords = function(arr) {
    return arr.map(record => createEmployeeRecord(record))
  }
  
  let createTimeInEvent = function(dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
  }
  
  let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
  }
  
  let hoursWorkedOnDate = function (hoursWorked) {
    let timeIn = this.timeInEvents.find(hours => hours.date === hoursWorked)
    let timeOut = this.timeOutEvents.find(hours => hours.date === hoursWorked)
    return (timeOut.hour - timeIn.hour)/100
  }
  
  let wagesEarnedOnDate = function(hoursWorked) {
    let wage = hoursWorkedOnDate.call(this, hoursWorked) * this.payPerHour;
    return parseInt(wage.toString());
  }
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, date) {
        return memo + wagesEarnedOnDate.call(this, date)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
//   function allWagesFor(record) {
//     let allWages = record.timeInEvents.map(wage => wage.date)
//     return allWages.reduce((total,dates) => total + wagesEarnedOnDate(record,dates),0)
//   }
  
	let findEmployeeByFirstName = function (records, firstName) {
		return records.find(record => record.firstName === firstName)
	}

  let calculatePayroll = function(records) {
    return records.reduce((memo, rec) => memo + allWagesFor.call(rec), 0)
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



