
const Questions = [{
  question: '请问店铺是否有艺人演艺：',
  label: '店铺是否有艺人演艺:',
  name: 'artist',
  options: [{
    text: '有',
    value: 'have'
  }, {
    text: '没有',
    value: 'not'
  }]
}, {
  question: '请问店铺是否有正餐：',
  label: '店铺是否有正餐:',
  name: 'meal',
  options: [{
    text: '有',
    value: 'have'
  }, {
    text: '没有',
    value: 'not'
  }]
}, {
  question: '请问店铺现场是否支持艺人被点唱：',
  label: '店铺是否支持点播:',
  name: 'program_requesting',
  options: [{
    text: '支持',
    value: 'have'
  }, {
    text: '不支持',
    value: 'not'
  }]
}, {
  question: '请问店铺现场是否支持艺人被点跳：',
  label: '店铺是否支持点舞:',
  name: 'dance',
  options: [{
    text: '支持',
    value: 'have'
  }, {
    text: '不支持',
    value: 'not'
  }]
}, {
  question: '请问店铺屏幕数量有多少？',
  label: '店内屏幕总数量:',
  name: 'screen_count',
  options: [{
    text: '1', value: '1'
  }, {
    text: '2', value: '2'
  }, {
    text: '3', value: '3'
  }, {
    text: '4', value: '4'
  }, {
    text: '5', value: '5'
  }, {
    text: '6', value: '6'
  }, {
    text: '7', value: '7'
  }, {
    text: '8', value: '8'
  }, {
    text: '9', value: '9'
  }, {
    text: '10', value: '10'
  }, {
    text: '11~20', value: '11_to_20'
  }, {
    text: '20以上', value: 'more_than_20'
  }]
}, {
  question: '请问店铺面积有多少？',
  label: '店铺占地面积:',
  name: 'acreage',
  options: [{
    text: '100m²以下', value: 'less_than_100'
  }, {
    text: '100m²~300m²', value: '100_to_300'
  }, {
    text: '300m²~500m²', value: '300_to_500'
  }, {
    text: '500m²以上', value: 'more_than_500'
  }]
}]

const CorpSettlementApps = [
  'usurp_screen', 'largess', 'program_requesting', 'vote', 'estimate', 'quiz', 'dance', 'party', 'enjoy_prize', 'lens',
  'seckill', 'shake', 'barrage', 'smash_egg', 'count_money', 'car_race', 'horse_race', 'auction', 'member_vip', 'carry'
]

const App2name = {
  'usurp_screen': '霸屏',
  'largess': '打赏',
  'program_requesting': '点歌',
  'vote': '投票',
  'estimate': '评价系统',
  'quiz': '竞猜',
  'dance': '点舞',
  'party': '派对霸屏',
  'enjoy_prize': '畅享赢大礼',
  'lens': '抢镜',
  'seckill': '秒杀',
  'shake': '摇一摇',
  'barrage': '弹幕',
  'smash_egg': '砸蛋',
  'count_money': '数钱',
  'car_race': '赛车',
  'horse_race': '赛马',
  'auction': '拍卖',
  'member_vip': 'VIP特权',
  'carry': '带你飞'
}
const barTypeCode2type = {
  'chamber': '6'
}

const CorpSources = ['direct', 'channel', 'promotion', 'microapp']

export default {
  Questions: Questions,
  CorpSettlementApps: CorpSettlementApps,
  App2name: App2name,
  barTypeCode2type: barTypeCode2type,
  CorpSources: CorpSources
}
