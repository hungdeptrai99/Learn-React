// export const getUserApi = () => Promise.resolve({
//     name : 'Alan Walker',
//     age : '22'
// })

export const getUserApi = () =>
  Promise.reject({
    message: "loi server",
    data: {
      code: 400,
    },
  });
