// material
import { Card, styled } from '@mui/material';
import { Box, Grid, Container, Typography, Stack, } from '@mui/material';
//
import { MotionInView, varFadeInDown, varFadeInRight,varFadeInUp } from '../../animate';
import { motion } from 'framer-motion';
import { useState } from 'react';

// ----------------------------------------------------------------------



const CoverImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    WebkitUserDrag: 'none',
    MozUserDrag: 'none',
    MsUserDrag: 'none',
    userDrag: 'none',
    cursor: 'pointer'

});

const Cards = [0, 1, 2, 3, 4]

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
    const [value, setValue] = useState(2);
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

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
                                O que as pessoas dizem
                                sobre nós.

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
                                <Box sx={{ width: '100%' }}>

                                    {/* Painéis das Abas */}
                                    {Cards.map((tab, index) => (
                                        <TabPanel key={index} value={value} index={index}>
                                            <Box sx={{ position: 'relative' }}>
                                                <Box sx={{ position: 'absolute', top: 0 }}>
                                                    <Box sx={{ position: 'relative', zIndex: 9 }}>
                                                        <MotionInView variants={varFadeInDown}>
                                                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>
                                                                <img alt="sidebar" src={`/static/mock-images/imageHome/coment1.png`} />
                                                            </motion.div>
                                                        </MotionInView>
                                                    </Box>
                                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                                        <MotionInView variants={varFadeInUp}>
                                                            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity }}>
                                                                <img alt="sidebar" src={`/static/mock-images/imageHome/coment0.png`} />
                                                            </motion.div>
                                                        </MotionInView>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </TabPanel>
                                    ))}
                                </Box>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>


                <Box sx={{ height: 100 }} />
                <Box sx={{ display: "flex", marginTop: 10 }}>
                    {Cards.map((tab, index) => (
                        <Card onClick={() => { setValue(index) }} sx={{ width: "100%", margin: 2, boxShadow: value != index && 'none' }}><CoverImgStyle sx={{ filter: value != index && 'grayscale(100%)' }} alt="sidebar" src={`/static/mock-images/imageHome/marca${index}.png`} /></Card>
                    ))}
                </Box>
            </Container>
        </RootStyle>
    );
}
