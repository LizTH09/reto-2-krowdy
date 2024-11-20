import {
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useMessageContext } from '../../App';

const SelectChanel = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const { channels, updateChannels } = useMessageContext();

  const _handleToogleIsEmpty = () => {
    setIsEmpty((prev) => !prev);
  };

  const _handleChangeChannel = (event) => {
    const { name, checked } = event.target;
    updateChannels(name, checked);
  };

  return (
    <Container>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={channels.email}
              onChange={_handleChangeChannel}
              name="email"
            />
          }
          label="Correo Electrónico"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={channels.sms}
              onChange={_handleChangeChannel}
              name="sms"
            />
          }
          label="Mensaje de texto"
        />
        <FormControlLabel
          disabled
          control={
            <Checkbox
              checked={channels.whatsapp}
              onChange={_handleChangeChannel}
              name="whatsapp"
            />
          }
          label="Whatsapp"
        />
      </FormGroup>
      <Button variant="contained" onClick={_handleToogleIsEmpty}>
        Send message
      </Button>
      {isEmpty && <></>}
    </Container>
  );
};

export default SelectChanel;
