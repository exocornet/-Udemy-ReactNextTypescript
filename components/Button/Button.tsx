import {ButtonProps} from './Button.props';
// import cn from 'classnames';
import { bem } from '../ClassBem/ClassBem'
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, ...props}: ButtonProps): JSX.Element => {

  // Определение блока 'button'
  const block = bem('button');

  // Блок 'button' и его модификаторы
  const button = block({
    'primary': appearance == 'primary',
    'ghost': appearance == 'ghost'
  });

  // Элемент 'arrow' с модификаторами
  const buttonArrow = block('arrow', {
    'down': arrow == 'down'
  });


  // const button = cn('button', {
  //   'button_primary': appearance == 'primary',
  //   'button_ghost': appearance == 'ghost'
  // });

  return (
    <button
      className={button}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={buttonArrow}>
        <ArrowIcon/>
      </span>
        }
    </button>
  );

};
