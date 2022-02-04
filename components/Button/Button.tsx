import {ButtonProps} from './Button.props';
import { bem } from '../ClassBem/ClassBem'
import ArrowIcon from './arrow.svg';

export const Button = ({appearance, arrow = 'none', children, ...props}: ButtonProps): JSX.Element => {

  // Определение блока 'button'
  const block = bem('button');

  // Блок 'button' и его модификаторы
  const button = block({
    [appearance]: true
    // 'primary': appearance == 'primary',
    // 'ghost': appearance == 'ghost'
  });

  // Элемент 'arrow' с модификаторами
  const buttonArrow = block('arrow', {
    [arrow]: arrow == 'down'
  });

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
