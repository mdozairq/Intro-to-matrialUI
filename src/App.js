import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>
                        Nida Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm' style={{ marginTop: '100px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Nida Album</Typography>
                        <Typography variant="h6" align="center" color="textSecondary">
                            I am Nida, I am here to learn material-ui by the help of Java Script Mastery
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant="contained" color="primary">See my photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Download my Photos</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title">
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                                Card Header
                                        </Typography>
                                        <Typography>
                                            This my picture hope you like it, all Random Images you will get here.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>view</Button>
                                        <Button size='small' color='primary'>Download</Button>
                                    </CardActions>
                                </CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default App
