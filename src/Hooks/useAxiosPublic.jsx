import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://mtask-1hjotnuji-sakebul-islam.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
