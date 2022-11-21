import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Pokebotao() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        <Link href="pokemons">Todos Pokemons</Link>
        </Button>
    </Stack>
  );
}