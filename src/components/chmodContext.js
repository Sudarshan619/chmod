import { createContext, useContext, useState } from 'react';

const ChmodContext = createContext();

export const ChmodProvider = ({ children }) => {
  const [chmodCommand, setChmodCommand] = useState('');
  const [message,setMessage] = useState('You have not selected and permission');

  const updateChmodCommand = (command) => {
    setChmodCommand(command);
    updateMessage(command);
  };
  const updateMessage = (command) => {
    const hasRead ={
         "001":"Given execution access to other",
         "002":"Given write access to other",
         "004":"Given read access to other",
         "003":"Given write and execute acess to other",
         "006":"Given read and execute acess to other",
         "007":"Given all permission for other",
         "010":"Given execution access to group",
         "020":"Given write access to group",
         "040":"Given read access to group",
         "030":"Given write and execute acess to group",
         "060":"Given read and execute acess to group",
         "070":"Given all permission for group",
         "100":"Given execution access to user",
         "200":"Given write access to user",
         "400":"Given read access to user",
         "300":"Given write and execute acess to user",
         "600":"Given read and execute acess to user",
         "044":"Given read permission for group and other",
         "041":"Given read permission for group but execute permission for other",
         "042":"Given read permission for group but write permission for other",
         "043":"Given read permission for group but write aand execute permission for other",
         "046":"Given read permission for group but write aand read permission for other",
         "047":"Given read permission for group but all permission for other",
         "700":"Given all permission for user",
         "777":"Given all permission for user,group and other",
         "710":"Given all permission for user but given only execute acess to group",
         "720":"Given all permission for user but given only write acess to group",
         "740":"Given all permission for user but given only read acess to group",
         "760":"Given all permission for user but given read and write acess to group",
         "730":"Given all permission for user but given write and execute acess to group",
         "770":"Given all permission for user and group",
         "711":"Given all permission for user but given only execute acess to group and other",
         "722":"Given all permission for user but given only write acess to group and other",
         "744":"Given all permission for user but given only read acess to group and other",
         "766":"Given all permission for user but given read and write acess to group and other",
         "733":"Given all permission for user but given write and execute acess to group and other",

    }
    console.log(hasRead[command])
    setMessage(hasRead[command])
  };
  return (
    <ChmodContext.Provider value={{ chmodCommand,message, updateChmodCommand}}>
      {children}
    </ChmodContext.Provider>
  );
};

export const useChmod = () => {
  return useContext(ChmodContext);
};
