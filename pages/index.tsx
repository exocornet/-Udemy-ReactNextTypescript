import {P, Button, Htag, Tag} from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Привет мир!!!</Htag>

      <Button appearance='primary' arrow='arrow'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>

      <P size='l'> Параграф Большой</P>
      <P>Параграф Средний</P>
      <P size='s'>Параграф Маленький</P>

      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Primary</Tag>
    </div>
  );
}
