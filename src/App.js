// import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';

const style = {
  table: {
    borderColapse: "colapse"
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px"
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px"
    },
    inputs: {
      marginBottom: "5px"
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px"
    }
  }
};

const initialUserData = [
  {
    id: 0,
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  }
];

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const lastNameA = a.userLastname.toUpperCase();
  const lastNameB = b.userLastname.toUpperCase();

  let comparison = 0;
  if (lastNameA > lastNameB) {
    comparison = 1;
  } else if (lastNameA < lastNameB) {
    comparison = -1;
  }
  return comparison;
}

const renderBody = userData => {
  return (
    userData &&
    userData.map(({ id, userFirstname, userLastname, userPhone }) => {
      return (
        <tr key={id}>
          <td style={style.tableCell}>{userFirstname}</td>
          <td style={style.tableCell}>{userLastname}</td>
          <td style={style.tableCell}>{userPhone}</td>
        </tr>
      );
    })
  );
};

function PhoneBookForm({ userData, setUserData }) {
  const [user, setUser] = useState({
    id: -1,
    userFirstname: '',
    userLastname: '',
    userPhone: '',
  })

  const handleInputChange = event => {
    setUser({
      ...user,
      id: userData.length,
      [event.target.name]: event.target.value
    });
  };

  const addItemToTable = () => {
    userData.push(user);

    userData.sort(compare);
    setUserData([...userData]);
    console.log(userData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={e => handleInputChange(e)}
      />
      <br />

      <label>Last name</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={e => handleInputChange(e)}
      />
      <br />
      <label>Phone</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={e => handleInputChange(e)}
      />

      <br />
      <input
        style={style.form.submitBtn}
        className="submitPhone"
        type="submit"
        value="Add user"
        onClick={addItemToTable}
      />
    </form>
  );
}

function InformationTable({userData}) {
  return (
    <table style={style.table} className="InformationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First Name</th>
          <th style={style.tableCell}>Last Name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{renderBody(userData)}</tbody>
    </table>
  );
}

function Application() {
  const [userData, setUserData] = useState(initialUserData);
  return (
    <section>
      <PhoneBookForm userData={userData} setUserData={setUserData} />
      <InformationTable userData={userData} />
    </section>
  );
}


function App() {
  return <Application />;
}

export default App;

