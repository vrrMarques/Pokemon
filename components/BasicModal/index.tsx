import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect,useState } from 'react';
import axios from 'axios';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({pokemon}:any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  

  const handleClose = () => setOpen(false);
  const [details,setDetails] = useState<any>([])
  

  const getOnePokemon = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then((res) => setDetails(res.data))
    .catch((err) => console.log(err));
  }

  useEffect(() =>{
    getOnePokemon()
  },[open])

  return (
    <div>
      <Button onClick={handleOpen} sx={{backgroundColor:"red", color:"white"}} size="large">
        <Typography variant='h6'>
        {pokemon.name}
        </Typography>
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2>{pokemon.name}</h2> 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {details.stats && details.stats.map((stats:any,key:any) => {
              return(
                <div key={key}>
                    <span>{stats.stat.name}: </span>
                    <span>{stats.base_stat}</span>
                </div>
              )
            })}
              <br/>
              {details.types && details.types.map((types:any,key:any) => {
              return(
                <div key={key}>
                    <div>
                      <span>tipo: </span>
                      <span>{types.type.name}</span>
                    </div>
                    
                </div>
              )
            })}
              <br/>

              {details.abilities && details.abilities.map((abilities:any,key:any) => {
              return(
                <div key={key}>
                    <span>{abilities.ability.name}</span>
                    <br/>
                </div>
              )
            })}
            <br/>

            <img src={details.sprites && details.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}