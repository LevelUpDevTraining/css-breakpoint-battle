import { Container, Grid, Box } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

// Material UI Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      backgroundColor: 'white',
      [theme.breakpoints.only('xs')]: {
        width: 25,
        height: 25,
      },
      [theme.breakpoints.only('sm')]: {
        width: 50,
        height: 50,
      },
      [theme.breakpoints.only('md')]: {
        width: 75,
        height: 75,
      },
      [theme.breakpoints.only('lg')]: {
        width: 100,
        height: 100,
      },
      [theme.breakpoints.only('xl')]: {
        width: 150,
        height: 150,
      },
    },
  })
);

export default function Page() {
  const classes = useStyles();
  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-blue-300 h-screen">
          <div className="p-2 sm:p-5 md:p-10 lg:p-14 xl:p-20 2xl:p-20">
            <div className="bg-green-200 flex flex-wrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                return (
                  <div
                    key={i}
                    className="bg-white m-1 w-6 h-6 sm:w-12 sm:h-12 md:w-24 md:h-24 lg:w-48 lg:h-48 xl:w-72 xl:h-72 2xl:w-72 2xl:h-72 sm:m-2 md:m-5 lg:m-5 xl:m-5 2xl:m-5"
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
