// material

import { styled } from '@mui/material';
import Page from '../components/Page';
import LandingHero from '../components/_external-pages/landing/LandingHero';
import LandingjuniorHelps from '../components/_external-pages/landing/LandingJunior';
import Destination from '../components/_external-pages/landing/destination';



// ----------------------------------------------------------------------
const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));
export default function LandingPage() {

  return (
    <Page>
      <LandingHero />
      <ContentStyle>
        <LandingjuniorHelps />
      </ContentStyle>
      <ContentStyle>
        <Destination />
      </ContentStyle>
    </Page>
  );
}
