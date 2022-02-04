import {TagProps} from "./Tag.props";
import {bem} from "../ClassBem/ClassBem";

export const Tag = ({size = 'm', children, color='ghost', href, ...props}: TagProps): JSX.Element => {

  // Определение блока 'tag'
  // модификаторы размера 's', 'm'
  // модификаторы цвета 'red', 'grey', 'green', 'primary'
  const tag = bem('tag')({
    [size]: true,
    [color]: true
  });

  return (
    <div
      className={tag}
      {...props}
    >
      {href
        ? <a href={href}>{children}</a>
        : <>{children}</>
      }
    </div>
  );
};
