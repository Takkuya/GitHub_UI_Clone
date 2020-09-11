import React from 'react'

import { Container, Main, LeftSide, RightSide } from './styles'

import ProfileData from '../../components/ProfileData'

export default function Profile() {
    return (
        <div>
            <Container>
                <Main>
                    <LeftSide>
                        <ProfileData /*Adicionei os props*/
                            username={"Takkuya"}
                            name={"Gabriel Takuya"}
                            avatarUrl={"https://avatars3.githubusercontent.com/u/56007750?s=460&u=21436294beab53f1995651b60dc4f457346cf32e&v=4"}
                            followers={7}
                            following={17}
                            company={"Camargo-Programa-House"}
                            location={"São Paulo, Brazil"}
                            email={'takuyagabriel@gmail.com'}
                            blog={undefined}
                        />
                    </LeftSide>

                    <RightSide></RightSide>
                </Main>
            </Container>
        </div>
    )
}
