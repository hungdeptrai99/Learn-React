import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserApi } from "../../api";
import {
  getUserFulfilled,
  getUserPending,
  getUserRejected,
} from "./profile.actions";
// import { getUser } from "./profile.asyncAction";
import { getUser } from "./profile.slice";

export default function Profile() {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    // Do ko giong 1 cai dispatch thong thuong nen su dung redux-thunk
    // getUser()(dispatch)
    dispatch(getUser())
      .then(unwrapResult)
      .then((payload) => {
        console.log("payload", payload);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [dispatch]);
  return (
    <div>
      <div>Name :{profile.name} </div>
      <div>Age :{profile.age} </div>
    </div>
  );
}
