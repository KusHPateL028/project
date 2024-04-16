import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
import Button from '../../Components/Button/Index'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { add } from '../../Redux/Slice/DoctorSlice'
 
export default function DoctorCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const { image_url, name, specialty } = props.data
    return (
        <Card sx={{
            maxWidth: "300px", background: 'rgb(9,51,121)',
            background: 'linear-gradient(330deg, rgba(64,155,216,1) 0%, rgba(101,19,143,0.1) 45%)'
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    src={image_url}
                    alt={name}
                    sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color={"#65138F"} fontWeight={"bold"}>
                        {name}
                    </Typography>
                    <Typography variant="body1" style={{opacity:0.5}}>
                        Specialty in {specialty}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    variant="contained"
                    text="Make Appointment"
                    sx={{
                        borderRadius: "50px",
                        marginTop: "35px",
                        backgroundColor: "#e12454",
                        '&:hover': {
                            backgroundColor: "transparant",
                            color: "#e12454",
                            border: "1px solid #e12454"
                        }
                    }}
                    onClick = {(
                        ()=>{
                            dispatch(add(props.data))
                            navigate(`/doctors/${name.split(' ').join('_')}`)
                        }
                    )}
                />
            </CardActions>
        </Card>
    );
}
