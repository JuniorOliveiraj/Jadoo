// material
import { useTheme, styled } from '@mui/material';
import { Box, Grid, Container, Typography, Stack, } from '@mui/material';
//
import { MotionInView, varFadeInDown, varFadeInRight } from '../../animate';
import { motion } from 'framer-motion';
// ----------------------------------------------------------------------




const Cards = [{
    cover: '/static/mock-images/imageHome/Choose Destination1.png',
    title: 'Choose Destination',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
}, {
    cover: '/static/mock-images/imageHome/Make Payment.png',
    title: 'Make Payment',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
}, {
    cover: '/static/mock-images/imageHome/Reach Airport on Selected Date.png',
    title: 'Reach Airport on Selected Date',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
},]

const RootStyle = styled('div')(({ theme }) => ({
    width: "100%",
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),

    }
}));
const HeroOverlayStyle = styled(motion.img)({
    zIndex: 0,
    width: 75,
    height: '100%',
    objectFit: 'cover',


});

// ----------------------------------------------------------------------

export default function BooksForNextTrip() {
    return (
        <RootStyle>
            <Container maxWidth="lg" >
                <Grid
                    container
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                    <Grid item xs={10} md={5}>
                        <motion.div variants={varFadeInRight}>
                            <Typography variant="b">
                                Easy and Fast
                            </Typography>
                            <br />
                            <Typography variant="h2" >
                                Book your next trip
                                in 3 easy steps

                            </Typography>
                        </motion.div>
                        {Cards.map((card, index) => (
                            <Box sx={{ display: 'flex', marginTop: 3 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box  >
                                        <Box sx={{ display: 'flex' }}>
                                            <HeroOverlayStyle src={card.cover} />
                                            <Box sx={{ marginLeft: 2, alignItems: 'left' }}>
                                                <Typography component="div" variant="h6" sx={{ textAlign: 'left' }}>
                                                    {card.title}
                                                </Typography>
                                                <Typography variant="p" color="text.secondary" component="div" sx={{ textAlign: 'left' }}>
                                                    {card.text}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={10} md={6}>
                        <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                            <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box component="img" src='/static/mock-images/imageHome/Image (3).png' />
                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInDown}>
                                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>
                                                <img alt="sidebar" src={`/static/mock-images/imageHome/Image.png`} />
                                            </motion.div>
                                        </MotionInView>
                                    </Box>
                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInDown}>
                                            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity }}>
                                                <img alt="sidebar" src={`/static/mock-images/imageHome/Image (4).png`} />
                                            </motion.div>
                                        </MotionInView>
                                    </Box>
                                </Box>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </RootStyle>
    );
}
