
import React, { useState } from 'react';
import "../App.css"
import { useChmod } from './chmodContext';

const ChmodCalculator = () => {
  const { updateChmodCommand } = useChmod();
  const [userPermissions, setUserPermissions] = useState(["0"]);
  const [groupPermissions, setGroupPermissions] = useState(["0"]);
  const [otherPermissions, setOtherPermissions] = useState(["0"]);

  const [userLinux, setUserLinux] = useState(["-","-","-","-","-","-","-","-","-"]);
//   const [groupLinux, setGroupLinux] = useState(["-","-","-"]);
//   const [otherLinux, setOtherLinux] = useState(["-","-","-"]);

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;

    switch (category) {
      case 'user':
        setUserPermissions((prevPermissions) =>
          checked ? [...prevPermissions, value] : prevPermissions.filter((p) => p !== value)
          
        );
        if(value === '4'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(0, 0, "r")] : prevLinux.filter((p) => p !== 'r')));
        }
        if(value === '2'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(1, 0, "w")] : prevLinux.filter((p) => p !== 'w')));
        }
        if(value === '1'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(2, 0, "x")] : prevLinux.filter((p) => p !== 'x')));
        }
        
        break;
      case 'group':
        setGroupPermissions((prevPermissions) =>
          checked ? [...prevPermissions, value] : prevPermissions.filter((p) => p !== value)
        );
        if(value === '4'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(3, 0, "r")] : prevLinux.filter((p) => p !== 'r')));
        }
        if(value === '2'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(4, 0, "w")] : prevLinux.filter((p) => p !== 'w')));
        }
        if(value === '1'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(5, 0, "x")] : prevLinux.filter((p) => p !== 'x')));
        }
        break;
      case 'other':
        setOtherPermissions((prevPermissions) =>
          checked ? [...prevPermissions, value] : prevPermissions.filter((p) => p !== value)
        );
        if(value === '4'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(6, 0, "r")] : prevLinux.filter((p) => p !== 'r')));
        }
        if(value === '2'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(7, 0, "w")] : prevLinux.filter((p) => p !== 'w')));
        }
        if(value === '1'){
            setUserLinux((prevLinux) => (checked ? [...prevLinux, userLinux.splice(8, 0, "x")] : prevLinux.filter((p) => p !== 'x')));
        }
        break;
        default:
        break;
    }
  };

  

  const calculateChmod = () => {
    var sum = 0;
    var sum1 = 0;
    var sum2 = 0;
    userPermissions.forEach((a) => {
      sum += Number(a);
    });
    
    groupPermissions.forEach((a) => {
      sum1 += Number(a);
    });
    otherPermissions.forEach((a) => {
      sum2 += Number(a);
    });
    const octalPermissions = `${sum}${sum1}${sum2}`;
    updateChmodCommand(`${sum}${sum1}${sum2}`); 
    return `chmod ${octalPermissions.toString(8)}`;
  };

  const calculateLinux = () =>{
    
    return `chmod ${userLinux.join('')}`
  }
  
  return (
    <div className='container1'>
      <h2 className='chmod'>Chmod Calculator</h2>
      <div className='permission-box'>
      <div >
        <label className='permissions'>
          <h5>User Permissions:</h5>
          <div>
          <input
            type="checkbox"
            name="user"
            value="4"
            checked={userPermissions.includes('4')}
            onChange={(e) => handleCheckboxChange(e, 'user')}
            class="checkbox-round"
          />
          Read
          </div>
          <div>
          <input
            type="checkbox"
            name="user"
            value="2"
            checked={userPermissions.includes('2')}
            onChange={(e) => handleCheckboxChange(e, 'user')}
            class="checkbox-round"
          />
          Write
          </div>
          <div>
          <input
            type="checkbox"
            name="user"
            value="1"
            checked={userPermissions.includes('1')}
            onChange={(e) => handleCheckboxChange(e, 'user')}
            class="checkbox-round"
          />
          Execute
          </div>
        </label>
      </div>
      <div >
        <label className='permissions'>
          <h5>Group Permissions:</h5>
          <div>
          <input
            type="checkbox"
            name="group"
            value="4"
            checked={groupPermissions.includes('4')}
            onChange={(e) => handleCheckboxChange(e, 'group')}
            class="checkbox-round"
          />
          Read
          </div>
          <div>
          <input
            type="checkbox"
            name="group"
            value="2"
            checked={groupPermissions.includes('2')}
            onChange={(e) => handleCheckboxChange(e, 'group')}
            class="checkbox-round"
          />
          Write
          </div>
          <div>
          <input
            type="checkbox"
            name="group"
            value="1"
            checked={groupPermissions.includes('1')}
            onChange={(e) => handleCheckboxChange(e, 'group')}
            class="checkbox-round"
          />
          Execute
          </div>
        </label>
      </div>
      <div >
        <label className='permissions'>
          <h5>Other Permissions:</h5>
          <div>
          <input
            type="checkbox"
            name="other"
            value="4"
            checked={otherPermissions.includes('4')}
            onChange={(e) => handleCheckboxChange(e, 'other')}
            class="checkbox-round"
          />
          Read
          </div>
          <div>
          <input
            type="checkbox"
            name="other"
            value="2"
            checked={otherPermissions.includes('2')}
            onChange={(e) => handleCheckboxChange(e, 'other')}
            class="checkbox-round"
          />
          Write
         </div>
         <div>
          <input
            type="checkbox"
            name="other"
            value="1"
            checked={otherPermissions.includes('1')}
            onChange={(e) => handleCheckboxChange(e, 'other')}
            class="checkbox-round"
          />
          Execute
          </div>
        </label>
      </div>
      </div>
      <div>
        <p className='command'>Chmod Command: {calculateChmod()}</p>
        <p className='command'>Linux Representation: {calculateLinux()}</p>
      </div>
    </div>
  );
};

export default ChmodCalculator;

