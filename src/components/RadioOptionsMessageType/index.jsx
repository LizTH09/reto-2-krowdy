import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from '@mui/material';
  import { useState } from 'react';
  import { useMessageContext } from '../../App';
  import SelectChanel from '../SelectChanel';
  
  const RadioOptionsMessageType = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const { messageType, updateMessageType } = useMessageContext();
  
    const _handleToogleIsEmpty = () => {
      setIsEmpty((prev) => !prev);
    };
  
    const _handleChangeTypeValue = ({ target: { value } }) => {
      updateMessageType(value);
      if (value) setDisabled(false);
    };
  
    return (
      <Container>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Selección de tipo de mensaje
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-type-message"
            value={messageType}
            onChange={_handleChangeTypeValue}
          >
            <FormControlLabel value="invitacion" control={<Radio />} label="Invitación" />
            <FormControlLabel value="recordatorio" control={<Radio />} label="Recordatorio de proceso" />
            <FormControlLabel value="personalizado" control={<Radio />} label="Personalizado" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" onClick={_handleToogleIsEmpty} disabled={disabled}>
          Send message
        </Button>
        {!isEmpty && <SelectChanel />}
      </Container>
    );
  };
  
  export default RadioOptionsMessageType;

  //https://github.com/Louiso/bootcamp_2024_1
  