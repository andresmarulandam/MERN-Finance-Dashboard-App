import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import FlexBetween from '@/components/FlexBetween';
import { useState } from 'react';

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  return (
    <FlexBetween mb="0.25 rem" p="0.5rem 0 rem" color={palette.grey[300]}>
      {/*LEFT SIZE */}
      <FlexBetween gap="0.75rem">
        <AccountBalanceIcon sx={{ fontSize: '28px' }} />
        <Typography variant="h4" fontSize="16px">
          Finance Website
        </Typography>
      </FlexBetween>

      {/* RIGTH SIZE */}
      <FlexBetween gap="2rem">
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box>
          <Link
            to="/predictions"
            onClick={() => setSelected('predictions')}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
