import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WaterAreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Create>
  );
};
