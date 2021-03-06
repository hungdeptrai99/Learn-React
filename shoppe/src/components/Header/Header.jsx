import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import * as S from './header.style'
import Popover from '../Popover/Popover'
import usePopover from 'src/hooks/usePopover'
import { useHistory } from 'react-router-dom'
import useQuery from 'src/hooks/useQuery'
import { path } from 'src/constants/path'
import { useSelector } from 'react-redux'
import { formatMoney } from 'src/utils/helper'
export default function Header() {
  const { activePopover, hidePopover, showPopover } = usePopover()
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const query = useQuery()
  const purchases = useSelector(state => state.cart.purchases)
  useEffect(() => {
    const { name = '' } = query
    setSearchValue(name)
  }, [query])
  const onChangeSearch = event => {
    setSearchValue(event.target.value)
  }
  const search = event => {
    event.preventDefault()
    history.push(path.home + `?name=${searchValue}`)
  }

  return (
    <S.StyledHeader>
      <div className="container">
        <Navbar />
        <S.SearchWrap>
          <S.Logo to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Capa_1"
              enableBackground="new 0 0 512 512"
              height={512}
              viewBox="0 0 512 512"
              width={512}
            >
              <g>
                <g>
                  <path
                    d="m316.998 166h-150c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15h150c8.291 0 15 6.709 15 15v60c0 8.291-6.709 15-15 15z"
                    fill="#ffd580"
                  />
                </g>
                <path
                  d="m417.603 20.395c-5.859-5.859-15.352-5.859-21.211 0l-19.395 19.395-19.395-19.395c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211l30 30c2.93 2.93 6.768 4.395 10.605 4.395s7.676-1.465 10.605-4.395l30-30c5.862-5.86 5.862-15.352.002-21.211z"
                  fill="#f24973"
                />
                <path
                  d="m387.603 71.605 30-30c5.859-5.859 5.859-15.352 0-21.211s-15.352-5.859-21.211 0l-19.395 19.395v36.211c3.839 0 7.677-1.465 10.606-4.395z"
                  fill="#d92c49"
                />
                <g>
                  <path
                    d="m436.998 166h-120c-8.291 0-15-6.709-15-15v-90c0-8.291 6.709-15 15-15h120c8.291 0 15 6.709 15 15v90c0 8.291-6.709 15-15 15z"
                    fill="#8ae68a"
                  />
                </g>
                <path d="m436.998 46h-60v120h60c8.291 0 15-6.709 15-15v-90c0-8.291-6.709-15-15-15z" fill="#60bf80" />
                <g>
                  <g>
                    <g>
                      <path
                        d="m90.059 135.996-24.516-89.996h-50.543c-8.291 0-15-6.709-15-15s6.709-15 15-15h61.998c6.768 0 12.686 4.526 14.473 11.06l32.695 120z"
                        fill="#80334d"
                      />
                    </g>
                  </g>
                </g>
                <path
                  d="m406.998 406h-240c-8.262 0-15-6.724-15-15 0-7.749 5.801-14.165 13.477-14.927 8.232-.82 14.268-8.174 13.418-16.421-.791-8.232-8.174-13.96-16.406-13.433-23.086 2.3-40.488 21.548-40.488 44.78 0 24.814 20.186 45 45 45h240c8.291 0 15-6.709 15-15s-6.71-14.999-15.001-14.999z"
                  fill="#80334d"
                />
                <path d="m406.998 406h-90v30h90c8.291 0 15-6.709 15-15s-6.709-15-15-15z" fill="#59243f" />
                <g>
                  <path
                    d="m166.998 375.707c-6.709 0-12.686-4.468-14.473-11.045l-62.484-228.662h406.957c4.395 0 8.584 1.934 11.455 5.303 2.842 3.369 4.072 7.808 3.34 12.158l-30 180c-1.113 6.694-6.562 11.792-13.33 12.466-343.553 33.991-297.863 29.78-301.465 29.78z"
                    fill="#f24973"
                  />
                </g>
                <path
                  d="m496.998 136h-180v224.938c39.391-3.913 88.911-8.822 151.465-15.011 6.768-.674 12.217-5.771 13.33-12.466l30-180c.732-4.351-.498-8.789-3.34-12.158-2.871-3.369-7.061-5.303-11.455-5.303z"
                  fill="#d92c49"
                />
                <g id="Trolley_2_">
                  <g>
                    <g>
                      <path
                        d="m406.998 496c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z"
                        fill="#59243f"
                      />
                      <circle cx="406.998" cy={451} fill="#d9e5ff" r={15} />
                    </g>
                    <g>
                      <path
                        d="m196.998 496c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z"
                        fill="#80334d"
                      />
                      <circle cx="196.998" cy={451} fill="#ecf2ff" r={15} />
                    </g>
                  </g>
                  <g>
                    <path
                      d="m406.998 286c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v60c0 8.291-6.709 15-15 15z"
                      fill="#d9e5ff"
                    />
                  </g>
                  <g>
                    <path
                      d="m226.998 286c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v60c0 8.291-6.709 15-15 15z"
                      fill="#ecf2ff"
                    />
                  </g>
                </g>
                <g>
                  <path
                    d="m316.998 286c-8.291 0-15-6.709-15-15v-60c0-8.291 6.709-15 15-15s15 6.709 15 15v60c0 8.291-6.709 15-15 15z"
                    fill="#ecf2ff"
                  />
                </g>
                <path d="m331.998 271v-60c0-8.291-6.709-15-15-15v90c8.291 0 15-6.709 15-15z" fill="#d9e5ff" />
              </g>
            </svg>
            <span>Shop Gia H??ng</span>
          </S.Logo>
          <S.StyledForm onSubmit={search}>
            <S.StyledInput placeholder="T??m ki???m s???n ph???m" value={searchValue} onChange={onChangeSearch} />
            <S.StyledButton type="submit">
              <svg height={19} viewBox="0 0 19 19" width={19} className="shopee-svg-icon ">
                <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                          <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </S.StyledButton>
          </S.StyledForm>
          <S.Cart onMouseEnter={showPopover} onMouseLeave={hidePopover}>
            <S.CartContainer>
              <S.CartIcon to="">
                <svg viewBox="0 0 26.6 25.6" className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2">
                  <polyline
                    fill="none"
                    points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth="2.5"
                  />
                  <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                  <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                </svg>
                {purchases.length > 0 && <S.CartNumberBadge>{purchases.length}</S.CartNumberBadge>}
              </S.CartIcon>
              <Popover active={activePopover}>
                <S.PopoverContent>
                  <S.PopoverTitle>S???n ph???m m???i th??m</S.PopoverTitle>
                  {purchases.slice(0, 5).map(purchase => (
                    <S.MiniProductCart key={purchase._id}>
                      <S.MiniProductCartImg src={purchase.product.image} />
                      <S.MiniProductCartTitle>{purchase.product.name}</S.MiniProductCartTitle>
                      <S.MiniProductCartPrice>??{formatMoney(purchase.product.price)} </S.MiniProductCartPrice>
                    </S.MiniProductCart>
                  ))}

                  <S.PopoverFooter>
                    <S.MoreProduct>
                      {purchases.lengt > 5 && <span>{purchases.length - 5} s???n ph???m v??o gi???</span>}
                    </S.MoreProduct>
                    <S.ButtonShowCart to={path.cart}>Xem gi??? h??ng</S.ButtonShowCart>
                  </S.PopoverFooter>
                </S.PopoverContent>
              </Popover>
            </S.CartContainer>
          </S.Cart>
        </S.SearchWrap>
      </div>
    </S.StyledHeader>
  )
}
