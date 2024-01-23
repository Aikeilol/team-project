import { AuthInput } from '../Auth/types'

const FirstNameInput: AuthInput = {
  id: 'first_name',
  label: 'Имя',
  name: 'first_name',
  type: 'text',
  rules: {
    pattern: {
      value: /^[A-ZА-Я]{1}[a-zа-я-]*$/,
      message:
        'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
    },
    required: 'Поле не может быть пустым',
  },
}

const SecondNameInput: AuthInput = {
  id: 'second_name',
  label: 'Фамилия',
  name: 'second_name',
  type: 'text',
  rules: {
    pattern: {
      value: /^[A-ZА-Я]{1}[a-zа-я-]*$/,
      message:
        'Первая буква должна быть заглавной, без пробелов и без цифр, допустим дефис',
    },
    required: 'Поле не может быть пустым',
  },
}

const LoginInput: AuthInput = {
  id: 'login',
  label: 'Логин',
  type: 'text',
  name: 'login',
  rules: {
    pattern: {
      value: /(?!^\d+$)^[\w-]{3,20}$/,
      message:
        'От 3 до 20 символов, латиница, может содержать цифры, без пробелов, допустимы дефис и нижнее подчёркивание',
    },
    required: 'Поле не может быть пустым',
  },
}

const EmailInput: AuthInput = {
  id: 'email',
  label: 'Почта',
  type: 'email',
  name: 'email',
  rules: {
    pattern: {
      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message:
        'Поле может содержать латиницу, может включать цифры и спецсимволы вроде дефиса и подчёркивания',
    },
    required: 'Поле не может быть пустым',
  },
}

const PhoneInput: AuthInput = {
  id: 'phone',
  label: 'Телефон',
  name: 'phone',
  type: 'tel',
  rules: {
    pattern: {
      value: /^((\+)*([0-9]){10,15})$/,
      message:
        'Поле может содержать от 10 до 15 символов, состоит из цифр, может начинается с плюса',
    },
    required: 'Поле не может быть пустым',
  },
}

const PasswordInput: AuthInput = {
  id: 'password',
  label: 'Пароль',
  name: 'password',
  type: 'password',
  rules: {
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/,
      message:
        'Поле может содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
    },
    required: 'Поле не может быть пустым',
  },
}

export {
  FirstNameInput,
  SecondNameInput,
  LoginInput,
  EmailInput,
  PhoneInput,
  PasswordInput,
}
