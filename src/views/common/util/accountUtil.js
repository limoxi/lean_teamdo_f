
const Artist = {
  sex2str: {
    'male': '男',
    'female': '女',
    'unknown': ''
  }
}
const Partner = {
  type2str: {
    'agent': '代理商',
    'middleman': '中间人',
    'group': '集团'
  },
  typeOptions: new Map([
    ['-1', '全部合作伙伴'],
    ['agent', '代理商'],
    ['middleman', '中间人'],
    ['group', '集团']
  ]),
  contractStatus2str: {
    'not': '无合同',
    'ding': '钉钉审批',
    'paper': '纸质合同',
    'paper_stamp': '纸质合同-章',
    'paper_no_stamp': '纸质合同-无章'
  },
  withdrawType2str: {
    'bank': '银行卡',
    'weixin': '微信'
  },
  settlementPeriod2str: {
    'default': '自提',
    'week': '周',
    'month': '月',
    'month_one_fifteen': '每月1、15号',
    'week_mon_wed_fri': '每周一、三、五'
  },
  isAutoSettlement2str: {
    'close': '否',
    'open': '是'
  }
}

const Corp = {
  barType2str: {
    1: '酒吧',
    2: '音乐餐吧',
    3: '夜店',
    4: '剧场',
    5: 'KTV',
    6: '会场',
    7: '其他'
  },
  source2str: {
    '1': '直销用户',
    '2': '渠道用户',
    '3': '推广用户',
    '4': '小程序推广用户',
    '5': '泡泡推广用户'
  },
  sourceCode2str: {
    'direct': '直销用户',
    'channel': '渠道用户',
    'promotion': '推广用户',
    'microapp': '小程序推广用户',
    'paopao': '泡泡推广用户'
  },
  sourceCodeOptions: new Map([
    ['all', '所有用户'],
    ['direct', '直销用户'],
    ['channel', '渠道用户'],
    ['promotion', '推广用户'],
    ['microapp', '小程序推广用户'],
    ['new', '新增门店'],
    ['warn', '预警门店']
  ]),
  source2code: {
    'direct': 1,
    'channel': 2,
    'promotion': 3,
    'microapp': 4,
    'paopao': 5
  },
  status2str: {
    '1': '已上线',
    '2': '待跟踪',
    '3': '流失',
    '4': '无效注册',
    '5': '测试'
  },
  settlementType2str: {
    '1': '默认为月',
    '2': '其他'
  },
  contractStatus2str: {
    'not': '无合同',
    'ding': '钉钉审批',
    'paper': '纸质合同',
    'paper_stamp': '纸质合同-章',
    'paper_no_stamp': '纸质合同-无章'
  },
  transferType2str: {
    'bank': '银行卡',
    'weixin': '微信'
  },
  screenType2str: {
    '1': 'LED',
    '2': '投影',
    '3': '电视'
  },
  newScreenType2str: {
    'led': 'LED屏',
    'projection': '投影',
    'tv': '电视'
  },
  settlementPeriod2str: {
    'default': '自提',
    'week': '周(每周一)',
    'month': '月(每月1号)',
    'month_one_fifteen': '每月1、15号',
    'week_mon_wed_fri': '每周一、三、五'
  },
  settlementAudit2str: {
    'open': '开启',
    'close': '关闭'
  }
}

const CorpGroup = {
  'MeetingFree': '会场免费版',
  'MeetingBase': '会场基础版',
  'MeetingBargain': '会场超值版',
  'MeetingHonour': '会场尊享版',
  'MeetingLuxury': '会场豪华定制版',
  'Bar': '酒吧商户',
  'BarPending': '待审核酒吧商户',
  'Custom': '自定义',
  'Theater': '剧场商户'
}

export default {
  Artist: Artist,
  Partner: Partner,
  Corp: Corp,
  CorpGroup: CorpGroup
}
