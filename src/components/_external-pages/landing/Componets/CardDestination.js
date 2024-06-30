import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import {  styled } from '@mui/material/styles';
import { Box, Card, Grid,  CardContent, Stack, } from '@mui/material';
// routes
// utils

//

import Iconify from '../../../Iconify';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

const TitleStyle = styled(RouterLink)(({ theme }) => ({
  ...theme.typography.subtitle2,
  height: 44,
  color: 'inherit',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

CardDestination.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
  href: PropTypes.object
};

export default function CardDestination({ post,  }) {
  const { cover, title, createdAt,value } = post;

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            pt: 'calc(100% * 4.5 / 3)',
          }}
        >
          <CoverImgStyle alt={title} src={cover} sx={{ transform: 'scale(1.2)' }} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            bottom: 0,
            width: '100%',
            position: 'absolute',
            backgroundColor: '#ffff'
          }}
        >

          <Box>
            <Stack direction="row"
            justifyContent="space-between"
            >
              <TitleStyle>
                {title}
              </TitleStyle>
              <TitleStyle>
                {value}
              </TitleStyle>

            </Stack>

          </Box>
          <TitleStyle>
            <Iconify icon={'bi:send-fill'} sx={{ width: 16, height: 16, mr: 0.5 }} /> {createdAt}
          </TitleStyle>


        </CardContent>
      </Card>
    </Grid>
  );
}
