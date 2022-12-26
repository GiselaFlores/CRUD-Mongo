import User from "../models/User.js";

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "Email and password are required",
    });

    return;
  }

  try {
    const newUser = await User.create({
      email,
      password,
    });

    newUser.save();

    res.status(201).json({
      message: "User created successfully",
    });

    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);

    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};

export const getUserByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json(user);
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};

export const updateUser = async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;

  try {
    const userUpdated = await User.findOneAndUpdate(
      { email },
      {
        password,
      },
      {
        new: true,
      }
    );

    if (!userUpdated) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json(userUpdated);

    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};

export const deleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    const userDeleted = await User.findOneAndDelete({ email });

    if (!userDeleted) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: {
        email: userDeleted.email,
      },
    });

    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};
