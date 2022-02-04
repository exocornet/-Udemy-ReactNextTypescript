import {PProps} from "./P.props";
import {bem} from "../ClassBem/ClassBem";

export const P = ({size = 'm', children}: PProps): JSX.Element => {

  // Определение блока 'p' и его модификаторов 's', 'm', 'l'
  const p = bem('p')({
    [size]: true
  });

  return (
    <p className={p}>
      {children}
    </p>
  );
};
