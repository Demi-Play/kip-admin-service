import {
    List,
    Datagrid,
    TextField,
    Edit,
    
    Create,
    SimpleForm,
    TextInput,
    FilterForm,
    FilterButton,
    EditButton,
    
    ReferenceArrayInput,
    AutocompleteArrayInput,
    // ArrayField,
    ReferenceArrayField,
    
} from "react-admin";

import { Stack } from '@mui/material';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Название" source="name"/>,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} disableSaveQuery />
            
        </div>
    </Stack>
)

export const AwardList = () => (
    <List exporter={false} >
        <ListToolbar />
        <Datagrid>
            {/* <TextField source="id" /> */}
            <TextField source="name" label="Название"/>
            <ReferenceArrayField source="films" reference="films" label="Фильмы"/>
            
            <EditButton label="правка" sx={{backgroundColor: "green", color: "white"}}/>
        </Datagrid>
        
    </List>
);


export const AwardCreate = () => (
    <Create>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="name" label="Название"/>
            <ReferenceArrayInput source="films" reference="films" >
                <AutocompleteArrayInput optionText="name" label="Фильмы"/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export const AwardEdit = () => (
    <Edit>
      <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="name" label="Название"/>
            <ReferenceArrayInput source="films" reference="films" >
                <AutocompleteArrayInput optionText="name" label="Фильмы"/>
            </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );

