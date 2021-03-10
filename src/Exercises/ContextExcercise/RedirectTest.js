import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

function RedirectTest() {
  const location = useLocation();
  const history = useHistory()
  let { test } = useParams();
  console.log(location);

  return (
    <>
      <p>{test}</p>
      <button type="button" onClick={() => history.goBack()} >Back</button>
    </>
  );
}

export default RedirectTest;