import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

// https://material-ui.com/customization/breakpoints/#custom-breakpoints

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
