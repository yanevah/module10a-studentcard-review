// StudentCard.jsx


import React from 'react';

// COMPONENT SUMMARY: This functional component renders a profile card for a student.
// It demonstrates how to receive external data via 'props' and manage internal 
// visibility states using 'useState'.

function StudentCard(props) {
  // PROPS DESTRUCTURING: Here we extract specific variables from the 'props' object.
  // This allows us to use 'name' instead of 'props.name' throughout the JSX.
  const { name, major, year, bio, imageUrl } = props;

  // STATE INITIALIZATION: React.useState(false) sets 'showBio' to false by default.
  // SETTER FUNCTION: 'setShowBio' is the only way to update the 'showBio' variable 
  // and trigger a re-render of the component.
  const [showBio, setShowBio] = React.useState(false);

  // EVENT HANDLER: This function is called when the button is clicked.
  const toggleBio = () => {
    // TOGGLE LOGIC: The '!' operator flips the boolean (true to false, or false to true).
    setShowBio(!showBio);
  };

  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* DYNAMIC SRC/ALT: We use the imageUrl prop to tell the browser what to display */}
      {/* Displays the student's profile image using a prop */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%',
        objectFit: 'cover', marginBottom: '12px' }}
      />
      
      {/* JSX INTERPOLATION: Curly braces allow us to inject JS variables into the HTML */}
      {/* Displays the student's name */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>

      {/* EVENT BINDING: We pass the toggleBio function reference to the onClick listener */}
      {/* Button toggles the bio on and off using state */}
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {/* TERNARY OPERATOR: Changes the text inside the button based on current state */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* CONDITIONAL RENDERING (Logical &&): The <p> only appears if showBio is true */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;