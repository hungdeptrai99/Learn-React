import React from "react";
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
      defaultValues: {
          email :'',
          name : '',
          nation: 'vietnam',
          hobby: null,
          sex : '',
          password :'',
          comfirmPassword :''
      }
  });
  const obSubmit = data => console.log(data);
  const handleClass = (name,baseClass='form-control') => `${baseClass} ${errors[name] ? 'is-invalid' :' '}`
  // cái này là nhận props là name 
  const ErrorMessage = ({name}) => {
     if(errors[name]) {
         return <div className="invalid-feedback">
             {errors[name].message}
                </div>
     }
     return null  // return null là ko có gì
  }

  console.log(errors);
  return (
    <div className="container">
      <form noValidate onSubmit={handleSubmit(obSubmit)} action="">
        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className={handleClass('email')}
            placeholder="name@gmail.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email nay bat buoc phai nhap: ",
              },
              validate: {
                email: (value) =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                    value
                  ) || "Email khong dung dinh dang",
              },
            })}
          />
          <label htmlFor="email"> Email Address</label>

          <ErrorMessage name='email'></ErrorMessage>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="name"
            name="name"
            className={handleClass('name')}
            placeholder="Nhap ten:"
            {...register("name",{
                required : {
                    value : true,
                    message : 'Ten bat buoc'
                },
                minLength : {
                    value: 2, 
                    message : 'Ten tu 2-160 ky tu'
                },
                maxLength : {
                    value : 160,
                    message: ' ten tu 2-160 ky tu'
                }
            }) }
          />

          <label htmlFor="name"> Name</label>
          <ErrorMessage name='name'></ErrorMessage>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="radio"
              className={handleClass('nation','form-check-input')}
              name="nation"
              id="vietnam"
              value="vietnam"
              {...register('nation',{
                  required: {
                      value: true,
                      message : 'Truong nay la bat buoc'
                  }
              })}
            />
            <label htmlFor="vietnam" className="form-check-label">
              vietnam
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className={handleClass('nation','form-check-input')}
              name="nation"
              id="aboard"
              value='aboard'
              {...register('nation',{
                required: {
                    value: true,
                    message : 'Truong nay la bat buoc'
                }
              })}
            />
            <label htmlFor="aboard" className="form-check-label">
              Aboard
            </label>   
            <ErrorMessage name='nation'></ErrorMessage>
          </div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby','form-check-input')}
              name="hobby"
              value="gym"
              id="gym"
              {...register('hobby',{
                required: {
                    value: true,
                    message : 'Truong nay la bat buoc'
                }
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby','form-check-input')}
              name="hobby"
              value="other"
              id="other"
              {...register('hobby',{
                required: {
                    value: true,
                    message : 'Truong nay la bat buoc'
                }
            })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
            <ErrorMessage name='hobby'></ErrorMessage>
          </div>
        
        </div>
        <div className="mb-3">
          <select name="sex" id=""  className={handleClass('sex','form-select')}
           {...register('sex',{
            required: {
                value: true,
                message : 'Truong nay la bat buoc'
            }
        })}
        >
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          <ErrorMessage name='sex'></ErrorMessage>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="password"
            name="password"
            className={handleClass('password')}
            placeholder="***"
            {...register('password',{
                required: {
                    value: true,
                    message : 'Mat khau nay la bat buoc'
                },
                minLength : {
                    value: 6, 
                    message : 'Mat khau tu 2-160 ky tu'
                },
                maxLength : {
                    value : 160,
                    message: ' Mat khau tu 2-160 ky tu'
                }
            })}
          />
          <label htmlFor="password"> Password</label>
          <ErrorMessage name='password'></ErrorMessage>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={handleClass('confirmPassword')}
            placeholder="***"
            {...register('confirmPassword',{
                required: {
                    value: true,
                    message : 'Mat khau nay la bat buoc'
                },
                minLength : {
                    value: 6, 
                    message : 'Mat khau tu 6-160 ky tu'
                },
                maxLength : {
                    value : 160,
                    message: ' Mat khau tu 6-160 ky tu'
                },
                validate : {
                    samePassword : v => v === getValues('password') || 'Khong khop nhap lai mat khau'
                }
            })}
          />
          <label htmlFor="confirmPassword"> Confirm Password</label>
          <ErrorMessage name='confirmPassword'></ErrorMessage>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
