import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

export default function Profile() {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );

  return (
    <div>
      <Container>
        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset" />
            <TabContent />
          </div>

          <span className="line" />
        </Tab>

        <Main>
          <LeftSide>
            <ProfileData /*Adicionei os props*/
              username={"Takkuya"}
              name={"Gabriel Takuya Yamamoto"}
              avatarUrl={
                "https://avatars3.githubusercontent.com/u/56007750?s=460&u=21436294beab53f1995651b60dc4f457346cf32e&v=4"
              }
              followers={7}
              following={17}
              company={"Camargo-Programa-House"}
              location={"São Paulo, Brazil"}
              email={"takuyagabriel@gmail.com"}
              blog={undefined}
            />
          </LeftSide>

          <RightSide>
            <Tab className="mobile">
              <TabContent />
              <span className="line" />
            </Tab>

            <Repos>
              <h2>Random repos</h2>

              <div>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <RepoCard
                    key={n}
                    username={"Gabriel Takuya"}
                    reponame={"GitHub UI clone"}
                    description={"Clone da UI do GitHub"}
                    language={n % 3 === 0 ? "JavaScript" : "Typescript"} //Se for divisivel por 3 vai ser JavaScript, se não vai ser TypeScript
                    stars={8}
                    forks={4}
                  />
                ))}
              </div>
            </Repos>

            <CalendarHeading>
              Random calendar (do not represent actual data)
            </CalendarHeading>

            <RandomCalendar />
          </RightSide>
        </Main>
      </Container>
    </div>
  );
}
