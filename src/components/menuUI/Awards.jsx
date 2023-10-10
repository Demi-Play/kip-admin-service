import { Card, CardHeader, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const Selections = () => (
    <Card>
        <CardHeader title="Подборки фильмов" />
        <CardContent><Link to="selections">Список всех подборок фильмов для просмотра и редактирования</Link></CardContent>
    </Card>
);