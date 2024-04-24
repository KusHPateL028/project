import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
import Button from '../../Components/Button/Index'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { add } from '../../Redux/Slice/DoctorSlice'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
 
export default function DoctorCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const { image_url, name, specialty } = props.data
    return (
        <Card sx={{
            maxWidth: "300px"
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
                    text={<>
                        Make Appointment &nbsp; &nbsp; <ArrowRightAltIcon/>
                        </>}
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
                >
                </Button>
            </CardActions>
        </Card>
    );
}
