import "./estilos.css"

import { useState } from 'react';
import { useContext } from "react"
import { Contextos } from "../../../../../context";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function valuetext(value) {
  return `${value}:00`;
}

function HorasydiasPest () {   
    
    const {setCondicion} = useContext(Contextos)

    const [seleccionado, setSeleccionado] = useState("L")

    let dias = ["L","M","Mi","J","V","S","D"]

    const [value, setValue] = useState([20, 30]);

    const [defautlvalue, setDefaultvalue] = useState([{value, dia : "L"}])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const marks = [
        {
            value: 0,
            label: '17',
          },
          {
            value: 5,
            label: '18',
          },
          {
            value: 10,
            label: '19',
          },
          {
            value: 15,
            label: '20',
          },
        {
            value: 20,
            label: '21',
          },
          {
            value: 25,
            label: '22',
          },
          {
            value: 30,
            label: '23',
          },
      ];

      const horarios = marks.filter(hora => {
        return hora.value >= value[0] && hora.value <= value[1]
      })

      console.log(defautlvalue)

  return (
    <div className="pestaña">
        <div className='letras'>
            {dias.map((dia, index) => {
                return (
                    <>
                      <div>
                        <div className={seleccionado.at(-1) == dia ? `apretado` : `noapretado`} onClick={ () => {
                          setSeleccionado([...seleccionado, dias[index]])
                          setDefaultvalue(...defautlvalue, {value, dia : seleccionado.at(-1)})
                          }}>
                        {dia}
                        </div>
                      </div>  
                    </>
                )
            })}
        </div>
        <Box sx={{ width: 250 }}>
        <Slider
            value={value}
            onChange={handleChange}
            marks={marks}
            step={5}
            min={0}
            max={30}
        />
        </Box>
        <div className='resumen'>
            <p>{horarios[0].label}:00</p>
            <p className="hasta">-</p>
            <p>{horarios[horarios.length - 1].label}:00</p>
        </div>
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => setTimeout(() =>{setCondicion()}, 800)}>Guardar</Button>
        </Stack>
    </div>
  );
}

export default HorasydiasPest


