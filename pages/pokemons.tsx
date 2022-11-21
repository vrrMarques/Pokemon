import { Grid,Box } from "@mui/material";
import axios from "axios"
import { useState,useEffect } from "react";
import Navbar from '../components/Navbar'
import BasicModal from '../components/BasicModal'; 

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  

      useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
      },[])



    return (
      <Box>
          <Navbar  />
          <Grid container spacing={4} sx={{display:"flex", marginTop:"1rem", marginLeft:"2rem"}}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs = {2} sm={1.6} key={key}>
              <BasicModal pokemon = {pokemon}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  }