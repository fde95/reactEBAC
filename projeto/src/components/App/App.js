import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container,Title, SubTitulo, GridHabilidades, Item } from '../Styles/styles'





function App() {
  const [js] = React.useState(5);
  const [jquery] = React.useState(5);
  const [ts] = React.useState(4);
  const [node] = React.useState(3);
  const [bootstrap] = React.useState(5);
  const [react] = React.useState(4);

  return (
    <>
    
    <Container>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Felipe Espinoza" src="https://github.com/fde95.png" sx={{ width: 100, height: 100 }}/>
    </Stack>
    <Title>Felipe Espinoza
      <span>Dev Front-end</span>
      </Title>

    <SubTitulo>Habilidades</SubTitulo>
      <GridHabilidades>
      <Box sx={{ '& > legend': { mt: 5 },}}>
        <Typography component="legend">
          JavaScript
          </Typography>
        <Rating name="simple-controlled"
          value={js}/>
      </Box>

      <Box sx={{ '& > legend': { mt: 5 },}}>
        <Typography component="legend">
          jQuery
          </Typography>
        <Rating name="simple-controlled"
          value={jquery}/>
      </Box>

      <Box sx={{ '& > legend': { mt: 4 },}}>
        <Typography component="legend">
          TypeScript
          </Typography>
        <Rating name="simple-controlled"
          value={ts}/>
      </Box>

      <Box sx={{ '& > legend': { mt: 3 },}}>
        <Typography component="legend">
          Node
          </Typography>
        <Rating name="simple-controlled"
          value={node}/>
      </Box>

      <Box sx={{ '& > legend': { mt: 4 },}}>
        <Typography component="legend">
          Bootstrap
          </Typography>
        <Rating name="simple-controlled"
          value={bootstrap}/>
      </Box>

      <Box sx={{ '& > legend': { mt: 4 },}}>
        <Typography component="legend">
          React
          </Typography>
        <Rating name="simple-controlled"
          value={react}/>
      </Box>
      </GridHabilidades>
    
    <SubTitulo>Formação</SubTitulo>
    <Item>Marketing Gerencial</Item>
    <Item>Engenharia da Computação <span>(cursando)</span></Item>
    <Item>Engenharia Front-end <span>(cursando)</span></Item>
    <Item>Programação JavaScript <span>(cursando)</span></Item>
    </Container>
      
    </>
  );
}

export default App;
