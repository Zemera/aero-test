import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import LockIcon from '@material-ui/icons/Lock';
import LoginForm from './components/LoginForm';
import styles from './Login.module.scss';
import { Page } from 'components';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';

// function Login() {
//   return (
//     <Page title="S'inscrire">
//       <div className={styles.container}>Login Page</div>
//     </Page>
//   );
// }

// export default Login;

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  },
  backButton: {
    marginLeft: theme.spacing(2)
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  logo: {
    height: 42
  }
}));

function LoginView() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    history.push('/app');
  };

  return (
    <Page title="S'inscrire">
      <Container
        classes={{ root: clsx(classes.root, styles.root) }}
        maxWidth="md">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Avatar className={classes.icon}>
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography variant="h2" color="textPrimary">
              Sign in
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Sign in on the internal platform
            </Typography>

            <Box mt={3}>
              <LoginForm onSubmitSuccess={handleSubmitSuccess} />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary">
              Create new account
            </Link>
          </CardContent>
          <CardMedia
            className={classes.media}
            image="https://react-material-kit.devias.io/static/images/auth.png"
            title="Cover">
            <Typography color="inherit" variant="subtitle1">
              Hella narvwhal Cosby sweater McSweeney&apos;s, salvia kitsch
              before they sold out High Life.
            </Typography>
            <Box alignItems="center" display="flex" mt={3}>
              <Avatar alt="Person" src="/static/images/avatars/avatar_2.png" />
              <Box ml={3}>
                <Typography color="inherit" variant="body1">
                  Ekaterina Tankova
                </Typography>
                <Typography color="inherit" variant="body2">
                  Manager at inVision
                </Typography>
              </Box>
            </Box>
          </CardMedia>
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;