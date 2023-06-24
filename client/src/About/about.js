import React from 'react'
import {Box,Typography,Stack,  List,
    ListItem,
    ListItemText,  Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Grid
   } from '@mui/material'
   import Contact from './contact'
   import Boy from '../assets/images/boy.jpg'
   import Home from './abouthome'
const about = () => {
    
  return (
    <>
    <Home/>
    <Box sx={{ mt: { lg: '90px', xs: '50px' }, ml: { sm: '50px' } }} position="relative"   >
     

    
 
      <Stack alignItems="center" mt="10px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Our Features
        </Typography>
      </Stack>
      <List>
        <ListItem>
          <ListItemText>
            <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px">
              <strong>Personalized Workout Plans</strong>
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              We offer customized workout plans tailored to your fitness level,
              goals, and preferences.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px">
              <strong>Nutrition Assistance</strong>
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              Keep your diet healthy and monitor your daily calorie intake along
              with monitoring your nutritional balance with our diet plans.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px">
              <strong>BMI Tracking</strong>
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              Stay motivated by tracking your BMI over time. Our app allows you
              to log your workouts, monitor your weight, and body measurements.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px">
              <strong>Community Support</strong>
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              Connect with like-minded individuals and share your achievements
              with our supportive community.
            </Typography>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Typography fontSize="26px" fontFamily="Alegreya" lineHeight="35px">
              <strong>Exercise Library</strong>
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              Access our extensive library of exercises with detailed
              instructions and demonstration videos to ensure you perform each
              exercise correctly.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      
      <Stack alignItems="center" mt="50px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          Meet our Developers
        </Typography>
      </Stack>
      <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4} lg={2.2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
         src={Boy}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={2.3}>
      <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={Boy}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={2.3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={Boy}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={2.3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={Boy}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={2.3}>
      <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src={Boy}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mt="32px"
      >
        <strong>
          We are constantly working to improve our application and add new
          features based on user feedback. Join us on this fitness journey and
          start achieving your fitness goals today!
        </strong>
      </Typography>
      <Box display="flex" flexDirection={['column', 'row']}>
      <Box
        width={['100%', '50%']}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        padding="1rem"
      >
        <Contact />
      </Box>
      <Box display="flex" flexDirection="row" sx={{ marginRight: ['0', '30px'] }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9232754497807!2d86.27123017498384!3d22.80530667932663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e30ff76d3319%3A0x4986ace5ea086802!2sRVS%20College%20Of%20Engineering%20And%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1687534678862!5m2!1sen!2sin"
          width="600"
          height="650"
          style={{ border: '0', flex: 1 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
          
        </iframe>
      </Box>
    </Box>
   </Box>
         
   </>

  )
}

export default about