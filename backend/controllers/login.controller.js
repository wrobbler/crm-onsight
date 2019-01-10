const loginController = (req, res) => {
  const { pw, userName } = req.body;
  if (userName === 'Admin' && pw === 'passw0rd') {
    res.send(`logged in: ${userName}`);
    console.log(`logged in: ${userName}`);
  } else if (userName === 'Member' && pw === 'passw0rd') {
    res.status(200).json(`logged in: ${userName}`);
    console.log(`logged in: ${userName}`);
  } else {
    res.status(401).json('invalid username/password');
    console.log('invalid username/password');
  }
};

module.exports = loginController;
