import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { getUserName, getIsLoadingUser } from './hello-button-selectors';
import { fetchUserRequest } from './hello-button-actions';

const Button = styled.button`
  color: #fff;
  width: 10em;
  height: 5em;
  font-size: 2em;
  border-radius: 0.25em;
  background-color: ${p => p.theme.colors.primary};

  &:disabled {
    opacity: 0.4;
  }
`;

const HelloButton: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);

  const isLoadingUser = useSelector(getIsLoadingUser);

  const handleClick = useCallback(() => {
    dispatch(fetchUserRequest(42));
  }, [dispatch]);

  return (
    <Button disabled={isLoadingUser} onClick={handleClick}>
      Hello, {userName}
    </Button>
  );
};

export default HelloButton;
