
export const test = (req, res) => {
  res.json({ message: 'Api is working fine !!' })
};

export const signout = async (req, res, next) => {
  try {
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'Production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    }).status(200).json('user have been signed out');

  } catch (error) {
    next(error);
  }
}