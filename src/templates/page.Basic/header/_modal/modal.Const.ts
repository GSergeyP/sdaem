import style from './modal.module.scss';

const classesData = (props: boolean) => {
  const classes = [
    {
      span: style.button, 
      ul: (props) && (style.body),
      li: style.content,
    }
  ];
  return classes;
}
///////////////////////////

const icon = [
  {
    icon: 'sign',
    classes: style['button-icon']
  }
];

export { classesData, icon};