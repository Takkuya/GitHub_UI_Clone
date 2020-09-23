import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

export default function Repo() {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"./Takkuya"}>
          Takkuya
        </Link>

        <span>/</span>

        {/*React router dom*/}
        <Link className={"reponame"} to={"/Takkuya/GitHub-UI-Clone"}>
          GitHub-UI-Clone
        </Link>
      </Breadcrumb>

      <p>Um clone da UI do GitHub</p>

      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>S
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/Takkuya/GitHub_UI_Clone"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}
