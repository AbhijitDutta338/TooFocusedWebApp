import  React, { useState, useEffect }  from 'react';
// import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import axios from 'axios';
// import Title from '../Components/Title';

// Generate Order Data
function createData(name, priority) {
  return { name, priority };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
    const [rows, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tasks/users/638aeb5578330d37fc8846ec');
        setData(response.data.tasks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Tasks
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
         
            <TableCell>Name</TableCell>
            <TableCell>Priority</TableCell>
            
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell>{row.date}</TableCell> */}
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.priority}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Tasks
      </Link> */}
    </React.Fragment>
  );
}