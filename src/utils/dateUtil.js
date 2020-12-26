import moment from 'moment'

class DateUtil {
  getDateRangeByDay (day) {
    return [moment().subtract(day - 1, 'days'), moment()]
  }

  getDateList (startDate, endDate) {
    const dateList = []
    const tempStartDate = moment(startDate)
    const tempEndDate = moment(endDate)
    // eslint-disable-next-line no-unmodified-loop-condition
    while (tempStartDate < tempEndDate) {
      dateList.push(moment(tempStartDate))
      tempStartDate.add(1, 'days')
    }
    return dateList
  }

  formatDate (date, formatType = 'date') {
    if (formatType === 'date') {
      return date.format('YYYY-MM-DD')
    } else {
      return date.format('YYYY-MM-DD HH:mm:ss')
    }
  }

  // 给定日期获取该日期的12:00:00-第二天的11:59:59
  getTimeRangeByDateRange (startDate, endDate = null) {
    const startDateStr = this.formatDate(startDate)
    let endDateStr = startDateStr
    if (endDate) {
      endDateStr = endDate
    }
    endDateStr = this.formatDate(moment(endDateStr).add(1, 'days'))
    return [`${startDateStr} 12:00:00`, `${endDateStr} 11:59:59`]
  }
}

export default new DateUtil()
