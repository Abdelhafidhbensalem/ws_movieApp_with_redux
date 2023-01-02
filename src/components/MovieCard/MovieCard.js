import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../redux/actions/action';

export default function MovieCard({el}) {
 const dispatch= useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={el.title}
        height="140"
        image={el.posterUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {el.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>dispatch(deleteMovie(el.id))}>Delete</Button>
        <Link to={`/editMovie/${el.id}`}>  <Button size="small">Edit</Button></Link>
       <Link to={`/details/${el.id}`}> <Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}
