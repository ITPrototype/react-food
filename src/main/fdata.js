import React from 'react';
import "./cards.css";
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
const Data = ({title, calories, imagee, ingredients}) => {
    const clo = Math.floor(calories)
    const valrat = Math.floor(Math.random()*5)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    return(
        <div className="data">
            <div className='header-img'>
                <img className="w-100" src={imagee} alt={title}/>
            </div>
            <div className='header-text'>
                <h2>{title}</h2><hr/>
                <h4>Ingredients</h4>
            </div>                
            <div className='body-text'>
            <Button onClick={handleOpen}>Show Ingredients</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Full recipe
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <ul>
                    {ingredients.map(ingredients => (
                    <li key={ingredients.weight}>{ingredients.text}</li>))}
                </ul> 
                </Typography>
            </Box>
            </Modal>
            </div><hr/>  
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={valrat} readOnly />
            <div className='footer-text'>
                <p>Calories: {clo}</p>
            </div>         
        </div>
    )
}

export default Data;