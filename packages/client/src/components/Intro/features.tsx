import React from 'react'
import TurnSharpLeftOutlinedIcon from '@mui/icons-material/TurnSharpLeftOutlined'
import ExpandOutlinedIcon from '@mui/icons-material/ExpandOutlined'
import OpenWithIcon from '@mui/icons-material/OpenWith'

const features = [
  {
    icon: <OpenWithIcon sx={{ fontSize: 100 }} color="primary" />,
    title: 'Управляй стрелками на клавиатуре',
  },
  {
    icon: <ExpandOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
    title: 'Ешь яблоки, чтобы вырасти',
  },
  {
    icon: <TurnSharpLeftOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
    title: 'Не врезайся в стенки и самого себя',
  },
]

export default features
