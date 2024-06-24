// material
import { useTheme, styled } from '@mui/material';
import { Box, Grid, Container, Typography, Stack, } from '@mui/material';
//
import { MotionInView, varFadeInDown, varFadeInRight, fadeInUp } from '../../animate';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// ----------------------------------------------------------------------




const Cards = [1, 2, 3]

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

export default function Coments() {
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
                                Testimonials
                            </Typography>
                            <br />
                            <Typography variant="h2" >
                                What people say
                                about Us.

                            </Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', marginTop: 3 }}>
                            {Cards.map((card, index) => (
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', width: 18, height: 18, backgroundColor: "black", borderRadius: 50, margin: 1 }} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={6}>
                        <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                            <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <Box sx={{ position: 'relative', zIndex: 9 }}>
                                            <MotionInView variants={varFadeInDown}>
                                                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>
                                                    <img alt="sidebar" src={`/static/mock-images/imageHome/coment1.png`} />
                                                </motion.div>
                                            </MotionInView>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{height: 100}}/>
                <img alt="sidebar" src={`/static/mock-images/imageHome/logosmark.png`} style={{marginTop:60}}/>
            </Container>
        </RootStyle>
    );
}
