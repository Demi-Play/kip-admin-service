import { Card, CardContent, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

export const Films = () => (
    <Card>
        <CardHeader title="Фильмы" />
        <CardContent><Link to="/films">Список всех фильмов для просмотра и редактирования</Link></CardContent>
    </Card>
);
