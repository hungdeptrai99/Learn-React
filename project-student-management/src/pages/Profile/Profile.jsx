import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { path } from '../../App'
import NoFound from '../NoFound'
import ProfileInfo from './ProfileInfo'
import ProfilePurchase from './ProfilePurchase'

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li>
                    <NavLink to={path.profile + '/info/12gd3'}> ProfileInfo </NavLink>
                </li>
                <li>
                    <NavLink to={path.profilePurchase}> profilePurchase </NavLink>
                </li>
            </ul>
            <Switch>
                <Route path={path.profileInfo}>
                    <ProfileInfo></ProfileInfo>
                </Route>
                <Route path={path.profilePurchase}>
                    <ProfilePurchase></ProfilePurchase>
                </Route>
                <Route path={path.profile} exact>

                </Route>
                <Route>
                    <NoFound></NoFound>
                </Route>
            </Switch>
        </div>
    )
}
