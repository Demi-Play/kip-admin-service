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
    
    // Resource,
} from "react-admin";

import { Stack } from '@mui/material';



const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} disableSaveQuery />
            
        </div>
    </Stack>
)

export const CensorList = () => (
    <List exporter={false} >
        <ListToolbar />
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="films" />
            
            <EditButton label="правка" sx={{backgroundColor: "green", color: "white"}}/>
        </Datagrid>
        
    </List>
    
);


export const CensorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <ReferenceArrayInput source="films" reference="films">
                <AutocompleteArrayInput optionText="name" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
// let name = "da"
// dataProvider.Create('censor/' + name , { 
//     films: ["6416c7d23d4ca7f6571efb92"] 
// })
// const customRouteEdit = (id, data) => `/censor/${data.id}`;
// console.log(customRouteEdit)
export const CensorEdit = () => (
    <Edit>
      <SimpleForm >
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <ReferenceArrayInput source="films" reference="films">
                <AutocompleteArrayInput optionText="name" />
            </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );

