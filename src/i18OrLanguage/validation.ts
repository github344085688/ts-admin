import{Validator}from 'vee-validate'

const dictionary = {
  zh: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      phone: () => '请输入正确的手机号码',
      password: () => '只要值发生变化，就必须发出一个事件',
      name: () => '请输入正确的邮箱格式',
      required: (field:any) => field
    },
    attributes: {
      email: '邮箱',
      phone: '手机',
      password: '密码',
      name: '账号',
      mobile: '手机',
      length11: '长度'
    }
  },
  en:{
    messages: {
      email: () => 'Please enter the correct email format',
      phone: () => 'Please enter the correct mobile phone number',
      password: () => '只要值发生变化，就必',
      name: () => '请输入正确的邮箱格式',
      required: (field:any) =>  field
    },
    attributes: {
      email: 'Please enter email',
      phone: 'Please enter your mobile phone number',
      password: 'ss',
      name: 'ddd',
      mobile: 'fff',
      length11: 'ggg'
    }

  }
}

Validator.extend('phone', {
  validate: (value:any) => {
    return value.length === 11 && /^1[34578]\d{9}$/.test(value)
  }
})
export default dictionary;
