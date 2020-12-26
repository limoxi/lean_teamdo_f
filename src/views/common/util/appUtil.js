
const ProductName2Chinese = {
  'usurp_screen': '霸屏',
  'largess': '打赏',
  'consumption': '豪榜',
  'program_requesting': '点播',
  'game': '游戏',
  'love_express': '表白',
  'horse_race': '赛马',
  'lottery': '抽奖',
  'lucky_money': '红包',
  'count_money': '数钱',
  'lure': '勾搭',
  'shake': '摇一摇',
  'sign': '签到',
  'car_race': '赛车',
  'vote': '活动投票',
  'red_packet': '红包雨',
  'meeting_vote': '会场投票',
  'wish_tree': '许愿树',
  'matching': '对对碰',
  'estimate': '评价打赏',
  'quiz': '竞猜',
  'barrage': '弹幕',
  'smash_egg': '砸蛋',
  'lucky_lottery': '幸运抽奖',
  'dance': '点舞',
  'member_vip': 'VIP',
  'develop': '开发中',
  'bacchus_mall': '商城',
  'auction': '拍卖',
  'carry': '带你飞',
  'advert': '系统霸屏',
  'coral_vaservice': '星秀BOSS增值服务',
  'voucher': '魔方-优惠券',
  'reservation': '魔方-预定',
  'party': '派对霸屏',
  'enjoy_prize': '畅享赢大礼',
  'lens': '抢镜',
  'seckill': '秒杀'
}

const App2Text = {
  'gvodka_background': '素材',
  'night_map.coupon': '夜行-优惠券',
  'night_map.card': '夜行-会员卡'
}

const AppDefaultRate = new Map([
  ['usurp_screen', 0.6],
  ['largess', 0.6],
  ['program_requesting', 0.95],
  ['vote', 0.6],
  ['estimate', 0.95],
  ['quiz', 0.9],
  ['dance', 0.95],
  ['party', 0.9],
  ['enjoy_prize', 0.9],
  ['lens', 0],
  ['seckill', 0.9],
  ['shake', 0],
  ['barrage', 0.6],
  ['smash_egg', 0.9],
  ['count_money', 0],
  ['car_race', 0],
  ['horse_race', 0],

  ['auction', 0.9],
  ['member_vip', 0],
  ['carry', 0.9]
])

export default {
  ProductName2Chinese: ProductName2Chinese,
  App2Text: App2Text,
  AppDefaultRate: AppDefaultRate
}
