export const TYPE_SIGNUP = 'signUp';
export const TITLE_SIGNUP = '회원가입';

export const SIGNUP_DATA = [
  {
    name: 'name',
    text: '이름을 영어로 입력해주세요 *',
    type: 'text',
    placeholder: '이름을 입력해주세요.',
  },
  {
    name: 'email',
    text: '이메일 *',
    type: 'text',
    placeholder: 'ID@example.com',
  },
  {
    name: 'password',
    text: '비밀번호 *',
    type: 'password',
    placeholder: '영문, 숫자, 특수문자 2가지 조합 6~15글자',
  },
  {
    name: 'repeatPassword',
    text: '비밀번호 확인 *',
    type: 'password',
    placeholder: '비밀번호를 한번 더 입력해주세요.',
  },
];
