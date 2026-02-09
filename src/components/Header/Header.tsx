import './Header.css';
import {
  GridRow,
  GridColumn,
  Icon,
  List,
  ListItem,
  SemanticICONS,
  ListContent,
  Header as Title,
  HeaderSubheader
} from 'semantic-ui-react';

interface IInfoItem {
  icon: SemanticICONS;
  content: string;
}

const infoItems: Array<IInfoItem> = [
  { icon: 'envelope outline', content: 'dreamer52773@gmail.com' },
  { icon: 'whatsapp', content: '+34 697 940 647' },
  { icon: 'linkedin', content: 'linkedin.com/in/pavelpivkin' },
  { icon: 'map marker alternate', content: 'Vilanova i la Geltru, Barcelona, Spain' },
];

const fullName = 'Pavel Pivkin';
const vocation = 'Frontend developer'
const profile = `Senior frontend developer with 5+ years of experience, including Yandex.
Proactive and responsible, may concurrently manage and resolve tasks`

export function Header() {
  return (
    <GridRow className="cv-header">
      <GridColumn width={3} className="my-photo__wrapper">
        <div className="my-photo"></div>
      </GridColumn>
      <GridColumn width={8}>
        <Title size='large'>
          {fullName}
          <HeaderSubheader>{vocation}</HeaderSubheader>
        </Title>
        <div>{profile}</div>
      </GridColumn>
      <GridColumn width={5}>
        <List>
          {
            infoItems.map((item) => (
              <ListItem>
                <Icon name={item.icon} />
                <ListContent>
                  {item.content}
                </ListContent>
              </ListItem>
            ))
          }
        </List>
      </GridColumn>
    </GridRow>
  );
}
