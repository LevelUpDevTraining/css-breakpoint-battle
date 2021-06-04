import { Container, Grid, Box } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: 'white',
      width: theme.spacing(6),
      height: theme.spacing(6),
      [theme.breakpoints.only('sm')]: {
        width: theme.spacing(12),
        height: theme.spacing(12),
      },
      [theme.breakpoints.only('md')]: {
        width: theme.spacing(24),
        height: theme.spacing(24),
      },
      [theme.breakpoints.only('lg')]: {
        width: theme.spacing(48),
        height: theme.spacing(48),
      },
      [theme.breakpoints.only('xl')]: {
        width: theme.spacing(72),
        height: theme.spacing(72),
      },
      [theme.breakpoints.only('xxl')]: {
        width: theme.spacing(72),
        height: theme.spacing(72),
      },
    },
  })
);

export default function Page() {
  const classes = useStyles();
  return (
    <div>
      <Container disableGutters maxWidth="xl">
        <div className="bg-blue-300 h-screen">
          <Box p={{ xs: 2, sm: 5, md: 10, lg: 15, xl: 20, xxl: 20 }}>
            <Grid className="bg-green-200" container>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return (
                  <Grid key={i} item>
                    <Box
                      className={classes.box}
                      m={{ xs: 1, sm: 2, md: 5, lg: 5, xl: 5, xxl: 5 }}
                    >
                      {i}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}
