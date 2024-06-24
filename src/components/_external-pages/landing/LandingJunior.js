// material
import { alpha, useTheme, styled } from '@mui/material';
import { Box, Grid, Card, Container, Typography, useMediaQuery } from '@mui/material';
//
import { motion } from 'framer-motion';
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/illustrations/CalculatedWeather.svg',
    title: 'Tempo calculado ',
    description:
      'O Wicket construído já admira a própria vaidade de Barton.'
  },

  {
    icon: '/static/illustrations/BestFlights.svg',
    title: 'A melhor vaidade',
    description: 'Engrossed listening. Park gate sell they west hard for the.'
  },
  {
    icon: '/static/illustrations/LocalEvents.svg',
    title: 'Eventos locais',
    description: 'A própria vaidade de Barton faz isso. Prefere aos homens que escutam absortamente.'
  },
  {
    icon: '/static/illustrations/Customization.svg',
    title: 'Customization',
    description: 'Fornecemos serviços terceirizados de aviação para clientes militares'
  },
];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15)
  }
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[888], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    maxWidth: 380,
    minHeight: 380,
    boxShadow: `-40px 40px 80px 0 ${shadowCard(0.48)}`,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: 0 },
      boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -2,


        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 30px)',
          height: 'calc(100% - 30px)',
          borderRadius: theme.shape.borderRadiusMd,

          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    }
  };
});

const CardIconStyle = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  margin: 'auto',
  marginBottom: theme.spacing(3),
  filter: shadowIcon(theme.palette.primary.main)
}));

// ----------------------------------------------------------------------

export default function LandingjuniorHelps() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 10, md: 25 } }}>
          <MotionInView variants={varFadeInUp}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              Categoria
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Oferecemos os melhores serviços
            </Typography>
          </MotionInView>
        </Box>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={3}>
              <MotionInView variants={varFadeInUp}>
                <motion.div

                  animate={{ y:index === 1 && [-25, 5, -25] }}
                  transition={{
                    duration: index === 1 &&5,
                    repeat: index === 1 &&Infinity
                  }}
                >
                  <CardStyle className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter')}


                  >
                    <CardIconStyle
                      src={card.icon}
                      alt={card.title}
                      sx={{
                        ...(index === 0 && {
                          filter: (theme) => shadowIcon(theme.palette.info.main)
                        }),
                        ...(index === 1 && {
                          filter: (theme) => shadowIcon(theme.palette.error.main)
                        })
                      }}
                    />
                    <Typography variant="h5" paragraph>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                      {card.description}
                    </Typography>
                  </CardStyle>
                </motion.div>

              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
