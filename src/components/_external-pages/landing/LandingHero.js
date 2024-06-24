
import Iconify from '../../Iconify';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material';
import { Button, Box, Link, Container, Typography, Stack, Tooltip } from '@mui/material';
// routes
import { PATH_DOCS } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import useSettings from '../../../hooks/useSettings';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
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

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '100vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const { themeColor } = useSettings();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/mock-images/imageHome/bghome.png" variants={varFadeIn} />
        <HeroOverlayStyle alt="overlay" src="https://64.media.tumblr.com/7c26e3ca4883de9e9858bb2ddd1aa847/tumblr_olv0zt7QxX1s1bwvio5_500.gif" variants={varFadeIn}sx={{  filter: 'invert(1)' ,   opacity: ' 0.08 !important',}} />

        <HeroImgStyle alt="hero" src={`/static/mock-images/imageHome/homeImg.png`} variants={varFadeInUp} />

        <Container maxWidth="lg"  >
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" >
                Travel,  <Typography component="b" variant="h1" sx={{ color: 'primary.main', fontWeight: 800 }}>
                  &nbsp;enjoy
                </Typography> <br />
                and live a new<br />
                and full life<br />

              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography >
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
              </Typography>
            </motion.div>


            <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DOCS}
              >
                Find out more
              </Button>
              
              <Button
                size="large"
                variant="text"
                component={RouterLink}
                to={PATH_DOCS}
                sx={{marginLeft:2, color:'black'}}
                startIcon={<Iconify icon={'carbon:play-filled'} width={50} height={50} />}
              >
                Play Demo
              </Button>
            </motion.div>

          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
