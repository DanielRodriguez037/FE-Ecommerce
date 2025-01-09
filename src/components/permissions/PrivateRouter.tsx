import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { userLoadAction } from '../../redux/actions/authAction';
import Error404 from '../errors/Error404';

interface Props {
  element: any;
  user: any;
  access: Promise<boolean>;
  userLoadAction(): void;
}

const PrivateRoute: FC<Props> = (props) => {
  const { element, userLoadAction, user } = props;

  useEffect(() => {
    userLoadAction();
  }, [userLoadAction]);

  return user.length === 0 ? <Error404 /> : <>{element}</>;
};

const mapStateToProps = (state: any) => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, { userLoadAction })(PrivateRoute);
