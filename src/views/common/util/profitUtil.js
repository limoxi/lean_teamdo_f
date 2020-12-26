// ORDER_STATUS_NOT_PAYED = 1
// ORDER_STATUS_PAYED = 2
// ORDER_STATUS_SETTLED = 3 #not used
// ORDER_STATUS_INNER_ORDER = 4
// STATUS2STR = {
//   ORDER_STATUS_NOT_PAYED: 'not_pay',
//   ORDER_STATUS_PAYED: 'payed',
//   ORDER_STATUS_SETTLED: 'settled', #not used
// ORDER_STATUS_INNER_ORDER: '__inner'
// }
//
//
// SETTLEMENT_STATUS_PROCESSING = 1
// SETTLEMENT_STATUS_FINISH = 2
// SETTLEMENT_STATUS_REJECT = 3
// SETTLEMENT2STR = {
//   SETTLEMENT_STATUS_PROCESSING: 'processing',
//   SETTLEMENT_STATUS_FINISH: 'finished',
//   SETTLEMENT_STATUS_REJECT: 'rejected'
// }
// SETTLEMENT_STATUS_CODE2STATUS = {
//   'processing': SETTLEMENT_STATUS_PROCESSING,
//   'finished': SETTLEMENT_STATUS_FINISH,
//   'rejected': SETTLEMENT_STATUS_REJECT
// }
//
//
// IMONEY_WITHDRAW_TYPE_CORP = 'corp'  // 商户提现
// IMONEY_WITHDRAW_TYPE_ARTIST = 'artist'  // 会员提现
// IMONEY_WITHDRAW_TYPE_PARTNER = 'partner'  // 合伙人提现
// IMONEY_WITHDRAW_TYPE_MEMBER = 'member'  // 用户提现

const PaymentType2text = {
  weixin: '微信',
  pandong: '盘东',
  swiftpass: '威富通',
  duolabao: '哆啦宝'
}

const ProductName2str = new Map([
  ['usurp_screen', '霸屏'],
  ['largess', '打赏'],
  ['love_express', '表白'],
  ['program_requesting', '点播'],
  ['lure', '勾搭'],
  ['vote', '投票'],
  ['quiz', '竞猜'],
  ['barrage', '弹幕'],
  ['lucky_money', '红包'],
  ['smash_egg', '砸蛋'],
  ['dance', '点舞'],
  ['member_vip', 'VIP'],
  ['estimate', '评价打赏'],
  ['auction', '拍卖'],
  ['carry', '带你飞'],
  ['advert', '系统霸屏'],
  ['voucher', '魔方-优惠券'],
  ['reservation', '魔方-预定'],
  ['party', '派对霸屏'],
  ['enjoy_prize', '畅享赢大礼'],
  ['lens', '抢镜'],
  ['seckill', '秒杀'],
  ['shake', '摇一摇'],
  ['count_money', '数钱'],
  ['car_race', '赛车'],
  ['horse_race', '赛马']
])
//
// SETTLEMENT_REMARK_DEFAULT = 'sys_auto'
//
//
// EXCEPT_DEMO_CORP_IDS = [131, 137, 487, 145, 16447, 16448, 16449, 16450]
//
//
// ORDER_CW_USERNAMES = ["zhangyu", "xiejunshuang", "wangjing", "sunyuqi"]

const transferType2text = {
  weixin: '微信',
  bank: '银行卡'
}

const orderTypeOptions = [{
  label: '商城订单', value: 'bacchus_mall'
}, {
  label: '星秀BOSS增值服务', value: 'coral_vaservice'
}, {
  label: '魔方订单', value: 'tapster'
}, {
  label: '素材', value: 'gvodka.background'
}, {
  label: '夜行-优惠券', value: 'night_map.coupon'
}, {
  label: '夜行-会员卡', value: 'night_map.card'
}]
export default {
  PaymentType2text: PaymentType2text,
  ProductName2str: ProductName2str,
  transferType2text: transferType2text,
  orderTypeOptions: orderTypeOptions
}
