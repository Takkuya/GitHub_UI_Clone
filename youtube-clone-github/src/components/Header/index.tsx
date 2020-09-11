import React from 'react'

import { Container, GitHubLogo, SearchForm } from './styles'

export default function index() {
    return (
        <div>
            <Container>
                <GitHubLogo />
                <SearchForm>
                    <input placeholder="Enter Username or Repo ..." />
                </SearchForm>
            </Container>
        </div>
    )
}

