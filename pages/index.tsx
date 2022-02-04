import {P, Button, Htag} from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Привет мир!!!</Htag>
      <Button appearance='primary' arrow='arrow'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'> Параграф Большой</P>
      <P>Параграф Средний</P>
      <P size='s'>Параграф Маленький</P>
    </div>
  );
}
