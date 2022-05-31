import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  saveUser,
  loginUser,
  getUser,
  getUserByID,
  deleteUser,
  getUsers,
  updateUser,
  getAllUsers,
  getOneUser,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const save = async (data) => {
  let { firstName, lastName, email, userName, password, role } = data;
  const userNameObj = { userName };
  try {
    const exUser = await getUser(userNameObj);
    if (exUser) {
      throw new AppError("User already exists.", 400);
    } else {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);
      password = hash;
    }
    await saveUser({ firstName, lastName, email, userName, password, role });
    return Promise.resolve("Successfully registered.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const login = async (data) => {
  const { userName, password } = data;
  try {
    const user = await loginUser(userName);
    if (!user) {
      throw new AppError("User does not exist.", 404);
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new AppError("Password is incorrect.", 400);
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        return Promise.resolve({ token });
      }
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const userByID = async (data) => {
  const { userName } = data;
  try {
    const User = await getUserByID(userName);
    if (!User) {
      throw new AppError("User does not exists.", 400);
    } else {
      return Promise.resolve({ User });
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteByID = async (data) => {
  const { userName } = data;
  try {
    const user = await getUserByID(userName);
    if (!user) {
      throw new AppError("User does not exist.", 404);
    } else {
      const del = await deleteUser(userName);
      if (!del) {
        throw new AppError("Delete Failed", 400);
      } else {
        return Promise.resolve(del.deletedCount);
      }
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getUsersByType = async (data) => {
  const { role } = data;
  try {
    const User = await getUsers(role);
    if (!User) {
      throw new AppError("Users does not exists.", 400);
    } else {
      return Promise.resolve({ User });
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateUserByID = async (data) => {
  const myquery = { userName: data.userName };
  const newvalues = {
    $set: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    },
  };
  try {
    const user = await updateUser(myquery, newvalues);
    if (!user) {
      throw new AppError("User Update Fail", 400);
    } else {
      return Promise.resolve({ user });
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getUsersService = async () => {
  try {
    const users = await getAllUsers();
    return Promise.resolve(users);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getOneUserService = async (id) => {
  try {
    const user = await getOneUser(id);
    return Promise.resolve(user);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
