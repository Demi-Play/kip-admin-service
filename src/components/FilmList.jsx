import {
    List,
    EditButton,
    Datagrid,
    TextField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    FilterForm,
    FilterButton,
    // TimeInput, 
    ReferenceArrayInput,
    AutocompleteArrayInput,
    Show,
    SimpleShowLayout,

    ShowButton,
    NumberInput,
    RadioButtonGroupInput,
    ReferenceArrayField,
    FileInput,
    // DateTimeInput,
} from "react-admin";
// import { RichTextInput } from 'ra-input-rich-text';
import { Stack } from '@mui/material';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Возрастной лимит" source="ageLimit" />,
    <TextInput label="Название" source="name" />,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} disableSaveQuery />

        </div>
    </Stack>
)

export const FilmShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="ageLimit" label="Возрастной лимит" />
            <TextField source="banner" label="Банер"/>
            <TextField source="name" label="Название"/>
            <TextField source="description" label="Описание"/>
            <TextField source="country" label="Страна"/>
            <TextField source="kindOfFilm" label="Тип фильма"/>
            <TextField source="releaseType" label="Тип релиза"/>
            <TextField source="duration" label="Длительность"/>
            <TextField source="release" label="Релиз"/>
            <TextField source="startScreening" label="Начало съемок"/>
            <TextField source="endScreening" label="Конец съемок"/>
            <TextField source="content" label="Контент"/>
            <TextField source="fees" />
            <TextField source="images" />
            <ReferenceArrayField source="stuff" reference="persons" label="Актеры"/>
            <TextField source="articles" />
            <TextField source="trailers" />
            <TextField source="tizers" />
            <TextField source="relatedFilms" />
            <TextField source="genres" />
            <TextField source="nominations" />
            <TextField source="seasons" />
        </SimpleShowLayout>
    </Show>
);

export const FilmList = () => (
    <List exporter={false} >
        <ListToolbar />
        <Datagrid rowClick="show">
            <TextField source="banner" label="Банер"/>
            <TextField source="name" label="Название"/>
            {/* <TextField source="id" /> */}
            <TextField source="ageLimit" label="Возрастной лимит"/>
            {/* <TextField source="description"/> */}
            <TextField source="country" label="Страна"/>
            <TextField source="kindOfFilm" label="Тип фильма"/>
            <TextField source="releaseType"  label="Тип релиза"/>
            <TextField source="duration" label="Длительность"/>
            {/* <TextField source="release" /> */}
            <TextField source="startScreening" label="Начало съемок"/>
            <TextField source="endScreening" label="Конец съемок"/>
            <TextField source="content" label="Контент"/>
            {/* <TextField source="fees" /> */}
            {/* <TextField source="images" />
            <TextField source="stuff" />
            <TextField source="articles" />
            <TextField source="trailers" />
            <TextField source="tizers" />
            <TextField source="relatedFilms" />
            <TextField source="genres" />
            <TextField source="nominations" />
            <TextField source="seasons" /> */}
            <ShowButton sx={{ backgroundColor: "green", color: "white" }} />
            <EditButton sx={{ backgroundColor: "green", color: "white" }} />

        </Datagrid>

    </List>
);

const choices = [
    { _id: 0, label: 'фильм' },
    { _id: 1, label: 'сериал' },

];
const choices2 = [
    { _id: 0, label: 'релиз' },
    { _id: 1, label: 'премьера' },

];


export const FilmCreate = () => (
    <Create>
        <SimpleForm>
            {/* <TextInput source="name" validate={[]} fullWidth />
            <TextInput source="teaser" multiline={true} label="Short description" /> */}

            <NumberInput source="ageLimit" label="Возрастной лимит"/>
            <FileInput source="banner" label="Банер"/>
            <TextInput source="name" label="Название"/>
            <TextInput source="description" label="Описание"/>
            <TextInput source="country" label="Страна"/>
            <RadioButtonGroupInput
                source="kindOfFilm"
                choices={choices}
                optionText="label"
                optionValue="_id"
                label="Тип фильма"
            />
            <RadioButtonGroupInput
                source="releaseType"
                choices={choices2}
                optionText="label"
                optionValue="_id"
                label="Тип релиза"
            />
            <NumberInput source="fees" defaultValue={0}/>
            <TextInput source="duration" placeholder="00:00:00" label="Длительность"/>
            <DateInput source="release" label="Релиз"/>
            <DateInput source="startScreening" label="Начало съемок"/>
            <DateInput source="endScreening" label="Конец съемок"/>
            <TextInput source="content" label="Контент"/>

            <ReferenceArrayInput source="stuff" reference="persons">
                <AutocompleteArrayInput optionText="name" label="Актеры"/>
            </ReferenceArrayInput>
            {/* <TextInput source="fees" />
            <TextInput source="images" />
            
            <TextInput source="articles" />
            <TextInput source="trailers" />
            <TextInput source="tizers" />
            <TextInput source="relatedFilms" />
            <TextInput source="genres" />
            <TextInput source="nominations" />
            <TextInput source="seasons" /> */}
        </SimpleForm>
    </Create>
);

const customRouteEdit = (id, data) => `/film/${data.filmId}/edit`;

export const FilmEdit = () => (
    <Edit>
        <SimpleForm redirect={customRouteEdit}>
            <NumberInput source="ageLimit" />
            <FileInput source="banner" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="country" />
            <RadioButtonGroupInput
                source="kindOfFilm"
                choices={choices}
                optionText="label"
                optionValue="_id"
            />
            <RadioButtonGroupInput
                source="releaseType"
                choices={choices2}
                optionText="label"
                optionValue="_id"
            />
            <TextInput source="duration" placeholder="00:00:00" />
            <DateInput source="release" />
            <DateInput source="startScreening" />
            <DateInput source="endScreening" />
            <TextInput source="content" />

            <ReferenceArrayInput source="stuff" reference="persons">
                <AutocompleteArrayInput optionText="name" />
            </ReferenceArrayInput>
            {/* <TextInput source="fees" />
            <TextInput source="images" />
            <TextInput source="stuff" />
            <TextInput source="articles" />
            <TextInput source="trailers" />
            <TextInput source="tizers" />
            <TextInput source="relatedFilms" />
            <TextInput source="genres" />
            <TextInput source="nominations" />
            <TextInput source="seasons" /> */}
            {/* <button>Удалить</button> */}
        </SimpleForm>
    </Edit>
);

