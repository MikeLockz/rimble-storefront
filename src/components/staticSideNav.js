import React from "react";
import RimbleGatsbyLink from "./landing/RimbleGatsbyLink";
import Ul from "./landing/Ul";
import Li from "./landing/Li";

const StaticSideNav = () => (
  <nav>
    <Ul>
      <Li>Components</Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink to={"/rimble-ui"} activeClassName={"active"}>
            Rimble UI
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Getting Started</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/rimble-ui/installation"}
                activeClassName={"active"}
              >
                Installation
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Design</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/theme"}
                activeClassName={"active"}
              >
                Theme
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/colors"}
                activeClassName={"active"}
              >
                Colors
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/typography"}
                activeClassName={"active"}
              >
                Typograhy
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/spacing"}
                activeClassName={"active"}
              >
                Spacing
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Ethereum UI</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Blockie"}
                activeClassName={"active"}
              >
                Blockie
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/QR"}
                activeClassName={"active"}
              >
                QR Code
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/EthAddress"}
                activeClassName={"active"}
              >
                Eth Address
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/MetaMaskButton"}
                activeClassName={"active"}
              >
                MetaMask Button
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/UPortButton"}
                activeClassName={"active"}
              >
                UPortButton
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
        <Li>
          <RimbleGatsbyLink to={"/rimble-ui"} activeClassName={"active"}>
            Web3 Components
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Onboarding</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/rimble-ui/installation"}
                activeClassName={"active"}
              >
                Network Indicator
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/rimble-ui/theming"}
                activeClassName={"active"}
              >
                Connection Banner
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
        <Ul>
          <Li>Getting Started</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/rimble-ui/theming"}
                activeClassName={"active"}
              >
                Theming
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
      </Ul>
      <Li>
        <RimbleGatsbyLink to={"#"} activeClassName={"active"} />
      </Li>
      <Li>Guides</Li>
      <Ul>
        <Li>dApp UX</Li>
        <Ul>
          <Li>Transaction States</Li>
          <Li>Connect a wallet</Li>
        </Ul>
        <Li>dApp UX</Li>
        <Ul>
          <Li>
            <RimbleGatsbyLink
              to={"transaction-states"}
              activeClassName={"active"}
            >
              Transaction States
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"connect-a-wallet"}
              activeClassName={"active"}
            >
              Connect a wallet
            </RimbleGatsbyLink>
          </Li>
        </Ul>
      </Ul>
    </Ul>
  </nav>
);

export default StaticSideNav;
