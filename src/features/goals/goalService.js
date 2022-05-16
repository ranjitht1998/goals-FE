import axios from "axios";

const API_URL = "/api/goals/";

//Create new goal
const createGoal = async (goalData, token) => {
  const conifg = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, conifg);

  return response.data;
};

//Get User Goal
const getGoals = async (token) => {
  const conifg = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, conifg);

  return response.data;
};

//Delete new goal
const deleteGoal = async (id, token) => {
  const conifg = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, conifg);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
