const validateRegex = {
  'requireLetter': {
    // 字母
    regex: /^[a-zA-Z0-9_]+$/g,
    errorHint: '格式不正确，请输入字母、数字、下划线'
  },
  'requireInt': {
    // 整数
    regex: /^-?\d+$/g,
    errorHint: '格式不正确，请输入整数'
  },
  'requirePositiveInt': {
    // 正整数
    required: true,
    pattern: /^[1-9][0-9]*$/g,
    message: '格式不正确，请输入正整数'
  },
  'requireNonNegative': {
    // 非负数
    required: true,
    regex: /^\d+$/g,
    message: '请输入非负整数'
  },
  'requireFloat': {
    regex: /^\d{1,5}(\.\d{1,2})?$/g,
    errorHint: '格式不正确，请输入\'3.14\'或\'5\'这样的数字'
  },
  'requireFloatThree': {
    regex: /^\d{1,5}(\.\d{1,3})?$/g,
    errorHint: '格式不正确，请输入\'3.147\'或\'5\'这样的数字'
  },
  'requireFloatNegative': {
    regex: /^-?\d{1,5}(\.\d{1,2})?$/g,
    errorHint: '格式不正确，请输入\'3.14\'或\'5\'或\'-3.14\'这样的数字'
  },
  'requireFloatBetween01': {
    regex: /^[0-1]$|^0\.\d{1,2}$/g,
    errorHint: '格式不正确，请输入0-1之间的数字，如\'0.5\'或\'0.05\'这样的数字'
  },
  'requireRatioBetween01': {
    required: true,
    pattern: /^[0-1]$|^0\.\d{1,5}$/g,
    message: '格式不正确，请输入0-1之间的数字(1~5位小数)，如\'0.5\'、\'0.00005\''
  },
  'requirePrice': {
    regex: /^\d+(\.\d{1,2})?$/g,
    errorHint: '价格不正确，请输入大于等于0且最小单位为分的价格'
  },
  'requireNonzeroPrice': {
    regex: /^(?=.*[1-9])\d*(?:\.\d{1,2})?$/g,
    errorHint: '价格不正确，请输入大于0且最小单位为分的价格'
  },
  'requireDate': {
    regex: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g,
    errorHint: '输入格式为2013-01-01的日期'
  },
  'requireTime': {
    regex: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/g,
    errorHint: '输入格式为小时:分钟的时间(英文冒号)'
  },
  'requirePercent': {
    regex: /^([1-9]|[1-9]\d|100|0)%?$/g,
    errorHint: '格式不正确，请输入1-100的整数'
  },
  'requirePercentDigit3': {
    regex: /^(\d|[1-9]\d|(\d|[1-9]\d)(\.\d{1})|100)%?$/g,
    errorHint: '格式不正确，请输入0到100之间，最多有一位小数的数值'
  },
  'requireTelPhone': {
    // eslint-disable-next-line no-useless-escape
    required: true,
    pattern: /(^0\d{2,3}-?\d{7,8}$)|(^1[3456789]\d{9}$)/g,
    message: '请输入正确的手机号码'
  },
  'requireMobilePhone': {
    required: true,
    pattern: /^0{0,1}(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9]|16[0-9]|19[0-9])[0-9]{8}$/g,
    message: '输入正确11位有效的手机号码'
  }
}

export {
  validateRegex
}
