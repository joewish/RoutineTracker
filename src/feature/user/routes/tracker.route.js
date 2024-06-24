import express from 'express';
import { getActivity } from '../controller/trakcer.controller';
const route = express.Router();

route.route("/",getActivity)
