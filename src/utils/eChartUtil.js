
const linesChartOption = {
  'title': {
    'text': ''
  },
  'tooltip': {
    'trigger': 'axis'
  },
  'legend': {
    'x': 'left',
    'data': []
  },
  'toolbox': {
    'show': true,
    'feature': {
      'dataView': { 'show': true, 'readOnly': true },
      'magicType': { 'show': true, 'type': ['line', 'bar'] },
      'restore': { 'show': true },
      'saveAsImage': { 'show': true }
    }
  },
  'calculable': true,
  'xAxis': [
    {
      'type': 'category',
      'boundaryGap': false,
      'data': []
    }
  ],
  'yAxis': [
    {
      'type': 'value'
    }
  ],
  'series': []
}
class EChartUtil {
  createLinesChart (info) {
    const option = { ...linesChartOption }
    option['title']['text'] = info['title']

    const lines = info['lines']

    // 确定x轴
    const firstLine = lines[0]
    const x = []
    firstLine['values'].forEach(value => {
      x.push(value[0])
    })
    option['xAxis'][0]['data'] = x

    // 填充数据
    const rSeries = []
    lines.forEach(line => {
      const y = []
      line['values'].forEach(value => {
        y.push(value[1])
      })
      const series = {
        'name': line['data_name'],
        'type': 'line',
        'tooltip': {
          'trigger': 'item',
          'formatter': '',
          'axisPointer': {
            'show': true
          }
        },
        'smooth': true,
        'data': y
      }
      rSeries.push(series)
      option['legend']['data'].push(line['data_name'])
    })
    option['series'] = rSeries
    return option
  }
}

export default new EChartUtil()
