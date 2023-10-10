import { Card, CardHeader} from '@mui/material';
import { Censores } from './Censors';
import { Films } from './Films';
import { Persons } from './Persons';
import { Selections } from './Awards';


export const Dashboard = () => (
    <><Card>
        <CardHeader title="Приветствуем вас в панели администрации КИП-сервиса" />
    </Card>
    <Card>
        <Films />
    </Card>
    <Card>
        <Persons/>
    </Card>
    <Card>
        <Censores />
    </Card>
    <Card>
        <Selections />
    </Card>
    </>
);