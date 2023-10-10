import { Card, CardContent, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

export const Persons = () => (
    <Card>
        <CardHeader title="Актеры" />
        <CardContent><Link to="/persons">Список всех актеров для просмотра и редактирования</Link></CardContent>
    </Card>
);