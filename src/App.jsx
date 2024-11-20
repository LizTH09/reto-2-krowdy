/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from 'react';
import { Button } from '@mui/material';
import RadioOptionsMessageType from './components/RadioOptionsMessageType';

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messageType, setMessageType] = useState('');
  const [channels, setChannels] = useState({
    email: false,
    sms: false,
    whatsapp: false,
  });

  const updateMessageType = (type) => setMessageType(type);
  const updateChannels = (channel, value) => setChannels((prev) => ({ ...prev, [channel]: value }));

  return (
    <MessageContext.Provider value={{ messageType, updateMessageType, channels, updateChannels }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessageContext = () => useContext(MessageContext);

const App = () => {
  const [willSendMessage, setWillSendMessage] = useState(false);
  const _handleToogleWillSendMessage = () => {
    setWillSendMessage((prev) => !prev);
  };

  return (
    <MessageProvider>
      <Button variant="contained" onClick={_handleToogleWillSendMessage}>
        Send message
      </Button>
      {willSendMessage && <RadioOptionsMessageType />}
    </MessageProvider>
  );
};

export default App;
export { useMessageContext };
