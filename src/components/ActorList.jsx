import {
  EditButton,
  Datagrid,
  TextField,
  TextInput,
  FilterButton,
  FilterForm,

  Create,
  Edit,

  SimpleForm,

  List,
  RadioButtonGroupInput,
  ShowButton,
  Show,
  SimpleShowLayout,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  DateInput,
  NumberInput,
} from "react-admin";
import { Stack } from '@mui/material';




const userFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const ListToolbar = () => (
  <Stack direction="row" justifyContent="space-between">
    <FilterForm filters={userFilters} />
    <div>
      <FilterButton filters={userFilters} disableSaveQuery />

    </div>
  </Stack>
)

export const ActorList = () => (
  <List exporter={false} >
    <ListToolbar />

    <Datagrid rowClick="show" sx={{
                backgroundColor: "gray",
                
            }}>

      <img src="https://lh3.googleusercontent.com/_X4oEpRu4O-nv0KuFwJQV2zX5SLuwRg9fIM1_-Q29L50zDgRd2eLdEr0ZmLVk_cPLA4" width={40} alt='' />
      {/* <...  source=... label="__name__" /> */}
      <TextField source="id" sx={{color: "white"}}/>
      <TextField source="name" sx={{color: "white"}}/>
      <TextField source="kindOfPerson" sx={{color: "white"}}/>
      <TextField source="birthday" sx={{color: "white"}}/>
      <TextField source="photo" sx={{color: "white"}}/>
      {/* <TextField source="height"/>    
      <TextField source="career"/>    
      <TextField source="birthPlace"/>    
      <TextField source="films"/>    
      <TextField source="nominations"/>  */}
      <ShowButton label="показать" sx={{backgroundColor: "green", color: "white"}}/>
      <EditButton label="правка" sx={{backgroundColor: "green", color: "white"}}/>
    </Datagrid>

  </List>
);

export const ActorShow = () => (
  <Show>
    <SimpleShowLayout >
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="kindOfPerson" />
      <TextField source="birthday" />
      <TextField source="photo" />
      <TextField source="height" />
      <TextField source="career" />
      <TextField source="birthPlace" />
      <TextField source="films" />
      <TextField source="nominations" />
    </SimpleShowLayout>
  </Show>
);


const choices = [
  { _id: 0, label: 'актер' },
  { _id: 1, label: 'режисер' },

];
export const ActorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" />

      <RadioButtonGroupInput
        source="kindOfPerson"
        choices={choices}
        optionText="label"
        optionValue="_id"
      />
      <DateInput source="birthday" />
      <TextInput source="photo" />
      <NumberInput source="height" />
      <TextInput source="career" />
      <TextInput source="birthPlace" />
      <ReferenceArrayInput source="films" reference="films">
        <AutocompleteArrayInput optionText="name" />
      </ReferenceArrayInput>
      {/* <TextInput source="nominations"/> */}
    </SimpleForm>
  </Create>
);

export const ActorEdit = () => (
  <Edit>
    <SimpleForm >
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <RadioButtonGroupInput
        source="kindOfPerson"
        choices={choices}
        optionText="label"
        optionValue="_id"
      />
      <DateInput source="birthday" />
      <TextInput source="photo" />
      <NumberInput source="height" />
      <TextInput source="career" />
      <TextInput source="birthPlace" />
      <ReferenceArrayInput source="films" reference="films">
        <AutocompleteArrayInput optionText="name" />
      </ReferenceArrayInput>
      {/* <TextInput source="nominations"/>  */}
    </SimpleForm>
  </Edit>
);