import style from './control.Panel.module.scss';

const classesData = (props: boolean) => {
  const classes = [
    {
      span: style['span-button'],
      ul: (props) && (style.body),
      li: style.content
    }
  ];
  return classes;
};

const icon = [
  {
    icon: 'sorting',
    classes: style['span-button__icon-sorting']
  },
  {
    icon: 'mark',
    classes: style['span-button__icon-mark']
  }
];

const linksData = [
  {
    classes: style.a,
    title: 'Показать на карте',
    url: '#map',
    icon: {
      icon: 'sign',
      classes: style['a-icon'],
    },
    position: 'left'
  }
]


export { classesData, icon, linksData };