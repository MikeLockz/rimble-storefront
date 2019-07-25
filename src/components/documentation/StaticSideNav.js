import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Text, Box, Flex, Link } from "rimble-ui";
import theme from "./../../theme";

const RimbleGatsbyLink = props => (
  <Text
    fontSize={1}
    fontWeight={'bold'}
    pb={2}
  >
    <Link
      as={GatsbyLink}
      activeClassName={"-is-active"}
      {...props}
    />
  </Text>
);

const Ul = props => <Text as={"ul"} pl={3} m={0} {...props} />;

const Li = props => <Text as={"li"} {...props} />;

const NavGroupHeading = props => <Li fontSize={1} my={2} color={'mid-gray'} caps {...props} />

const StyledNav = styled.nav`
  & {
    height: 100%;
    transition: 0.2s transform ease;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    position: fixed;

    & > a {
      transition: 0.2s right ease;
      right: calc(-100vw + 12em);
    }
  }
  ul {
    list-style: none;
  }
  a:not(:hover):not(.-is-active) {
    color: inherit;
  }
  a:visited {
    color: ${props => props.theme.colors.primary};
  }
  &.open {
    background: ${props => props.theme.colors.white};
    z-index: 99;
    transform: translateX(0);
    width: 100vw;

    & > a {
      right: ${props => props.theme.space[3]}px;
    }
  }
  &.closed {
    transform: translateX(-100vw);
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    position: initial;

    &.open,
    &.closed {
      transform: translateX(0);
    }
  }
`;

const StaticLinkList = () => (
  <Ul mb={4}>
    <Li>
        <RimbleGatsbyLink to={"/components"}>Components</RimbleGatsbyLink>
    </Li>
    <Ul>
      <Li>
        <RimbleGatsbyLink to={"/components/rimble-ui"}>
          Rimble UI
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <NavGroupHeading>
          Guides
        </NavGroupHeading>
        <Ul>
          {/* <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/theming"}>
              Theming
            </RimbleGatsbyLink>
          </Li> */}
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/get-started"}>
              Get Started
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/system-props"}>
              System Props
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink  to={"/components/rimble-ui/rimble-theme"}>
              Rimble Theme
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink  to={"/components/rimble-ui/Styleguide"}>
              Style guide
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Ethereum UI</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Blockie"}>
              Blockie
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/EthAddress"}>
              Eth Address
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/MetaMaskButton"}>
              MetaMask Button
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/PublicAddress"}>
              Public Address
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/QR"}>
              QR Code
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/UPortButton"}>
              UPort Button
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Layout</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Box"}>
              Box
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Flex"}>
              Flex
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Card"}>
              Card
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Forms</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Checkbox"}>
              Checkbox
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Field"}>
              Field
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Form"}>
              Form
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Input"}>
              Input
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Radio"}>
              Radio
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Select"}>
              Select
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Slider"}>
              Slider
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/TextArea"}>
              Textarea
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Feedback</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Loader"}>
              Loader
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Pill"}>
              Pill
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Progress"}>
              Progress
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Actions</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Button"}>
              Button
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Link"}>
              Link
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Alerts</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Flash"}>
              Flash
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Modal"}>
              Modal
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/ToastMessage"}>
              ToastMessage
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/components/rimble-ui/ToastMessageProvider"}
              style={{ wordBreak: "break-word" }}
            >
              ToastMessage Provider
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Information</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Tooltip"}>
              Tooltip
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Data</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Table"}>
              Table
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Typography</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Heading"}>
              Heading
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Text"}>
              Text
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <NavGroupHeading>Image</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Avatar"}>
              Avatar
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Icon"}>
              Icon
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/Image"}>
              Image
            </RimbleGatsbyLink>
          </Li>
        </Ul>
      </Ul>
      <Li>
        <RimbleGatsbyLink to={"/components/web3-components"}>
          Web3 Components
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <NavGroupHeading>Onboarding</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink
              to={"/components/web3-components/NetworkIndicator"}
            >
              Network Indicator
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/components/web3-components/ConnectionBanner"}
            >
              Connection Banner
            </RimbleGatsbyLink>
          </Li>
        </Ul>
      </Ul>
    </Ul>
    <Li>
      <RimbleGatsbyLink to={"/guides"}>Guides</RimbleGatsbyLink>
    </Li>
    <Ul>
      <Li>
        <RimbleGatsbyLink to={"/guides/ux"}>dapp patterns</RimbleGatsbyLink>
      </Li>
      <Ul>
        <NavGroupHeading>Connecting to a dapp</NavGroupHeading>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/connect-a-wallet-conditions"}>
            1. Can they connect?
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/connect-a-wallet-before"}>
            2. Before they connect
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/connect-a-wallet-metamask"}>
            3. Help with MetaMask
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/connect-a-wallet-success"}>
            4. Confim success
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/connect-a-wallet-low-funds"}>
            5. No ETH, no problem
          </RimbleGatsbyLink>
        </Li>
      </Ul>
      <Li>
        <RimbleGatsbyLink to={"guides/content"}>dapp Content</RimbleGatsbyLink>
      </Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink to={"/guides/content/writing-for-products"}>
            Writing for products
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/content/conversational-design"}>
            Conversational design
          </RimbleGatsbyLink>
        </Li>
      </Ul>
    </Ul>
  </Ul>
);

const StaticSideNav = ({ isNavOpen }) => {
  return (
    <StyledNav
      borderRight={1}
      borderColor={"light-gray"}
      className={isNavOpen ? "open" : "closed"}
    >
      <Flex flexDirection={"column"} height={"calc(100% - 57px)"}>
        <Box
          overflow={"scroll"}
          pt={2}
          pr={5}
          borderRight={1}
          borderColor={"light-gray"}
        >
          <StaticLinkList />
        </Box>
      </Flex>
    </StyledNav>
  );
};

export default StaticSideNav;
