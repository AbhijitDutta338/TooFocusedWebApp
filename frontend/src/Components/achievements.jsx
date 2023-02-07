import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
     <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Points
    </Typography>
      <Typography component="p" variant="h4">
      <svg width="32px" height="32px" viewBox="-1 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <g id="prize" transform="translate(-988 -254)">
    <path id="Path_37" data-name="Path 37" d="M1003.6,276h-1.2c-4.087,0-7.4-3.727-7.4-8.325V255h16v12.675C1011,272.273,1007.686,276,1003.6,276Z" fill="#fff1b6" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line id="Line_50" data-name="Line 50" x2="17.651" transform="translate(994 259)" fill="#fff" stroke="#333" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_51" data-name="Line 51" y2="9" transform="translate(1003 276)" fill="#fff" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_38" data-name="Path 38" d="M1011.079,285H995.366L998,282h10Z" fill="#fff1b6" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_39" data-name="Path 39" d="M995,267a6,6,0,0,1,0-12" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_40" data-name="Path 40" d="M1011,267a6,6,0,0,0,0-12" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>   300
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Points History
        </Link>
      </div>
    </React.Fragment>
  );
}