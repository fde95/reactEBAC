import React, {useState} from 'react';
import './App.css';
// import Btn from '../Button';
import Counter from '../Counter';
import CounterState from '../CounterState';
import { Title, Btn, BtnNew } from '../Styles/styles';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function App() {
  
  const label = { inputProps: { 'aria-label': 'Apagar as luzes' } };
  const [value, setValue] = React.useState(2);

  return (
    <div className=''>
      <Title>Styled Componets 
        <span>com react</span>
      </Title>
      <Switch label="Interruptor" />
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Counter />
      <hr />
      <CounterState />
      <hr />
      <Btn name="React Componente" font="20" />
      <BtnNew name="React Componente" font="20" />

    </div>
  );
}

export default App;
