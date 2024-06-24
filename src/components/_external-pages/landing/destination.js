// material
import { alpha, useTheme, styled } from '@mui/material';
import { Box, Grid, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFadeInUp, MotionInView, varFadeInDown, varFadeIn } from '../../animate';
import CardDestination from './Componets/CardDestination';
import { motion } from 'framer-motion';
// ----------------------------------------------------------------------




const post = [{
    cover: '/static/mock-images/imageHome/roma.png',
    title: 'Rome, Italty',
    value: '$5.24k ',
    createdAt: '10 Days Trip'
}, {
    cover: '/static/mock-images/imageHome/uk.jpg',
    title: 'London, UK',
    value: '$4.2k ',
    createdAt: '12 Days Trip'
}, {
    cover: '/static/mock-images/imageHome/vaticano.png',
    title: 'Full Europe',
    value: '$15k',
    createdAt: '28 Days Trip'
}]
const index = 1


const RootStyle = styled('div')(({ theme }) => ({
    width: "100%",
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),

    }
}));
const HeroOverlayStyle = styled(motion.img)({
    zIndex: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    opacity: ' 1 !important',
  
  });

// ----------------------------------------------------------------------

export default function Destination() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
            <Box sx={{


                position: 'relative',
                [theme.breakpoints.up('md')]: {
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center'
                }
            }}>
                 <HeroOverlayStyle alt="overlay" src="/static/mock-images/imageHome/bgCard.png" variants={varFadeIn} />
                <Container maxWidth="lg" >
                    <Box sx={{ mb: { xs: 10, md: 25 } }}>
                        <MotionInView variants={varFadeInUp}>
                            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
                            MAIS VENDIDO
                            </Typography>
                        </MotionInView>
                        <MotionInView variants={varFadeInDown}>
                            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                            Principais destinos
                            </Typography>
                        </MotionInView>
                    </Box>

                    <Grid container spacing={isDesktop ? 10 : 5}  >
                        {post.map((post, index) => (
                            <CardDestination post={post} index={index} />
                        ))}

                    </Grid>
                </Container>
            </Box>
        </RootStyle>
    );
}
