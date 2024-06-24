// material
import { useTheme, styled, TextField, InputAdornment, Button } from '@mui/material';
import { Box, Grid, Container, Typography, Stack, } from '@mui/material';
//
import { MotionInView, varFadeInDown, varFadeIn } from '../../animate';
import { motion } from 'framer-motion';
import Iconify from '../../Iconify';
// ----------------------------------------------------------------------






const RootStyle = styled('div')(({ theme }) => ({

    width: "100%",
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15),

    }
}));
const HeroOverlayStyle = styled(motion.img)({
    zIndex: 0,
    width: '70%',
    height: 'auto',
    objectFit: 'cover',
    position: 'absolute',
    opacity: ' 1 !important',

});
// ----------------------------------------------------------------------

export default function Subscribe() {
    return (
        <RootStyle>
            <Container maxWidth="lg" >
                <HeroOverlayStyle alt="overlay" src="/static/mock-images/imageHome/BGSubscribe.png" variants={varFadeIn} />
                <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
                    <Container maxWidth="lg" sx={{
                        position: 'relative',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 15
                    }}>
                        <Box sx={{ width: "80%", }}>
                            <Typography variant="h3" >
                            Inscreva-se para receber informações, últimas notícias e outros
                            ofertas interessantes sobre Cobham
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                               marginTop:3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Box sx={{ width: "60%", display:'flex'}}>
                                    <TextField
                                        id="outlined-textarea"
                                        fullWidth
                                        sx={{
                                            backgroundColor: "#fff",
                                            marginRight: 1,
                                            '& .MuiInputBase-input': {
                                                border: 'none'
                                            }
                                        }}
                                        //label="Your email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Iconify icon={'majesticons:mail'} width="60" height="60" />
                                                </InputAdornment>
                                            ),
                                        }}
                                        placeholder="Your email"
                                        multiline />
                                    <Button variant="contained" marginLeft={10} sx={{padding:'0 10% 0 10%'}}>Subscribe</Button>
                                </Box>
                            </Box>

                        </Box>
                    </Container>
                </Stack>
            </Container>
        </RootStyle>
    );
}
