import { Card, CardContent, CardHeader } from '@mui/material';
import { Link } from 'react-router-dom';

export const Censores = () => (
    <Card>
        <CardHeader title="Цензоры" />
        <CardContent><Link to="/censors">Список всех цензоров фильмов для просмотра и редактирования</Link></CardContent>
    </Card>
);