import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Text, Box, Flex, Link } from "rimble-ui";
import theme from "./../../theme";
import SearchInput from "./SearchInput";

const RimbleGatsbyLink = props => (
  <Text fontSize={2} fontWeight={2} pb={2}>
    <Link as={GatsbyLink} activeClassName={"-is-active"} {...props} />
  </Text>
);

const Ul = props => <Text as={"ul"} pl={0} mb={3} {...props} />;

const Li = props => <Text as={"li"} color={"mid-gray"} {...props} />;

const NavGroupHeading = props => (
  <Li fontSize={1} my={1} fontWeight={3} color={"dark-gray"} caps {...props} />
);

const StyledNav = styled.nav`
  & {
    transition: 0.2s transform ease;
    overflow: visible;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    z-index: 9;

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
    position: absolute;

    & > a {
      right: ${props => props.theme.space[3]}px;
    }
  }
  &.closed {
    transform: translateX(-100vw);
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    position: fixed;
    height: calc(100vh - 56px);

    &.open,
    &.closed {
      transform: translateX(0);
    }
  }
`;

const StaticLinkList = () => (
  <Ul mb={4} mx={4}>
    <Li>
      <RimbleGatsbyLink to={"/components"}>Components</RimbleGatsbyLink>
    </Li>
    <Ul>
      <Li mb={3}>
        <RimbleGatsbyLink to={"/components/rimble-ui"}>
          Rimble UI
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <NavGroupHeading>Guides</NavGroupHeading>
        <Ul>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/getting-started"}>
              Getting Started
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/theming"}>
              Theming
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/system-props"}>
              System Props
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink to={"/components/rimble-ui/style-guide"}>
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
            <RimbleGatsbyLink to={"/components/rimble-ui/Textarea"}>
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
    <Li fontWeight={4} color={"primary"}>
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
      <Ul>
        <NavGroupHeading>Transaction states</NavGroupHeading>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/transaction-states"}>
            Overview
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/transactions-wallet-ux"}>
            1. Don't rely on wallet UX
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/transactions-prevent-errors"}>
            2. Prevention is priority
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink
            to={"/guides/ux/transactions-set-user-expectations"}
          >
            3. Set user expectation
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/transactions-just-enough-feedback"}>
            4. Just enough feedback
          </RimbleGatsbyLink>
        </Li>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux/transactions-design-next-steps"}>
            5. Design for next steps
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

const StaticSideNav = ({ isNavOpen, navbarHeight }) => {
  return (
    <StyledNav
      className={isNavOpen ? "open" : "closed"}
      role="navigation"
      aria-label="Main"
      id="mainNavigation"
    >
      <Flex height={"100%"} flexDirection={"column"} bg={"white"}>
        <Box
          p={3}
          borderBottom={1}
          borderRight={1}
          borderColor={"blacks.3"}
          position="sticky"
          top={[navbarHeight, 0]}
          bg={"white"}
        >
          <SearchInput />
        </Box>

        <Box
          px={2}
          py={3}
          borderRight={1}
          borderWidth={1}
          borderColor={"blacks.3"}
          overflow={"scroll"}
        >
          <StaticLinkList />
        </Box>
      </Flex>
    </StyledNav>
  );
};

export default StaticSideNav;
