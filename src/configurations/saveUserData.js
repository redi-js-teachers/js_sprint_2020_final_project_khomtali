export const saveUserData = async (user, data) => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'user', {
    'method': 'PATCH',
    'headers': {
      'authorization': `Bearer ${user.token}`,
      'content-type': 'application/json'
    },
    'body': JSON.stringify({
      id: user.auth0_id,
      fields: {
        age: data.userAge,
        resting_heart_rate: data.restRate
      }
    })
  });
  try {
    const { status } = await response.json();
    if (status === 'success') console.log('data successfully saved');
  } catch (err) {
    console.error(err);
  }
};