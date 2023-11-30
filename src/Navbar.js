
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import Group from './Group';
import "./App.css";
function Navbar(
  {setSelectedStatus,
  setSelectedGrouping,
  selectedGrouping,
  selectedStatus,
  groupingOptions,
  statusOptions,
  }
) {
   const [isDisplayOpen, setIsDisplayOpen] = useState(false);

  
  const displayButtonRef = useRef(null);
  const displayBoxRef = useRef(null);

  const handleClick = (event) => {
    if (displayBoxRef.current && !displayBoxRef.current.contains(event.target) && !displayButtonRef.current.contains(event.target)) {
      setIsDisplayOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isDisplayOpen]);

  return (
    <div className={`app_nav${isDisplayOpen ? ' display-open' : ''}`}>
      <button
        className="display-button"
        onClick={() => setIsDisplayOpen(!isDisplayOpen)}
        ref={displayButtonRef}
      >
        <FontAwesomeIcon icon={faSlidersH} />
        <span className="text-with-margin">Display</span>
        <FontAwesomeIcon icon={faChevronDown} size="sm" />
      </button>
      {isDisplayOpen && (
        <Group
          setSelectedStatus={setSelectedStatus}
          setSelectedGrouping={setSelectedGrouping}
          groupingOptions={groupingOptions}
          statusOptions={statusOptions}
          initialGrouping={selectedGrouping}
          initialStatus={selectedStatus}
          displayBoxRef={displayBoxRef}
        />
      )}
    </div>
  );
}

export default Navbar;
