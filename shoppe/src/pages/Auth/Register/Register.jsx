import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import { Button } from 'src/assets/styles/utils'
import * as S from './register.style'
import { path } from 'src/constants/path'
import InputText from 'src/components/InputText/InputText'
import InputPassword from 'src/components/InputPassword/InputPassword'
import { useForm, Controller } from 'react-hook-form'
import { rules } from 'src/constants/rules'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { useDispatch } from 'react-redux'
import { register } from '../auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })
  const dispatch = useDispatch()
  const history = useHistory()
  // console.log(history);
  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      history.push(path.login)
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  console.log(errors)

  return (
    <div>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FormWrapper>
            <S.FormTitle>Đăng Ký</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="email/Số điện thoại"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email"></ErrorMessage>
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      name="password"
                      placeholder="Nhập Mật Khẩu"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: v => v === getValues('password') || 'Không khớp nhập lại mật khẩu'
                    }
                  }}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Nhập lại mật khẩu"
                      name="confirmedPassword"
                      onChange={field.onChange}
                      value={getValues('confirmedPassword')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassword"></ErrorMessage>
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản ?</span>
              <Link to={path.login} className="link">
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  )
}
