import React from 'react';
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby';
import { Text, Link } from 'rimble-ui'

const RimbleGatsbyLink = (props) => (
  <Link
    as={GatsbyLink}
    display={'block'}
    p={1}
    activeClassName={'-is-active'}
    {...props}
  />
);

const Ul = (props) => (
  <Text as={'ul'} pl={3} {...props} />
);

const Li = (props) => (
  <Text as={'li'} {...props} />
);

const StyledNav = styled.nav`
  ul {
    list-style: none;
  }
  a:not(:hover):not(.-is-active) {
    color: inherit;
  }
`;

const StaticSideNav = () => (
  <StyledNav>
    <Ul>
      <Li>
        <RimbleGatsbyLink to={"/components"} >
          Components
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink
            to={"/components/rimble-ui"}

          >
            Rimble UI
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Getting Started</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/theme"}

              >
                Theming
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          {/* <Li>Design</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/theme"}

              >
                Theme
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/colors"}

              >
                Colors
              </RimbleGatsbyLink>
            </Li>
            <Li>
            //   <RimbleGatsbyLink
            //     to={"/components/rimble-ui/typography"}
            //
            //   >
            //     Typography
            //   </RimbleGatsbyLink>
            // </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/spacing"}

              >
                Spacing
              </RimbleGatsbyLink>
            </Li>
          </Ul> */}
          <Li>Ethereum UI</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Blockie"}

              >
                Blockie
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/QR"}

              >
                QR Code
              </RimbleGatsbyLink>
            </Li>
            {/*<Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/EthAddress"}

              >
                Eth Address
              </RimbleGatsbyLink>
            </Li>*/}
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/MetaMaskButton"}

              >
                MetaMask Button
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/UPortButton"}

              >
                UPortButton
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Containers</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Box"}

              >
                Box
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Flex"}

              >
                Flex
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Card"}

              >
                Card
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Forms</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Checkbox"}

              >
                Checkbox
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Field"}

              >
                Field
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Form"}

              >
                Form
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Input"}

              >
                Input
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Radio"}

              >
                Radio
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Select"}

              >
                Select
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Slider"}

              >
                Slider
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Textarea"}

              >
                Textarea
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Feedback</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Loader"}

              >
                Loader
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Pill"}

              >
                Pill
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Progress"}

              >
                Progress
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Actions</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Button"}

              >
                Button
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Link"}

              >
                Link
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Alerts</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Flash"}

              >
                Flash
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Modal"}

              >
                Modal
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/ToastMessage"}

              >
                ToastMessage
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/ToastMessage-provider"}

                style={{ wordBreak: "break-word" }}
              >
                ToastMessage.provider
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Information</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Tooltip"}

              >
                Tooltip
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Data</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Table"}

              >
                Table
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Copy</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Heading"}

              >
                Heading
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Text"}

              >
                Text
              </RimbleGatsbyLink>
            </Li>
          </Ul>
          <Li>Image</Li>
          <Ul>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Avatar"}

              >
                Avatar
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Icon"}

              >
                Icon
              </RimbleGatsbyLink>
            </Li>
            <Li>
              <RimbleGatsbyLink
                to={"/components/rimble-ui/Image"}

              >
                Image
              </RimbleGatsbyLink>
            </Li>
          </Ul>
        </Ul>
        <Li>
          <RimbleGatsbyLink
            to={"/components/web3-components"}

          >
            Web3 Components
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Onboarding</Li>
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
        <RimbleGatsbyLink to={"/guides"} >
          Guides
        </RimbleGatsbyLink>
      </Li>
      <Ul>
        <Li>
          <RimbleGatsbyLink to={"/guides/ux"} >
            dApp patterns
          </RimbleGatsbyLink>
        </Li>
        <Ul>
          <Li>Connecting to a dApp</Li>
          {/*<Li>
            <RimbleGatsbyLink
              to={"/guides/ux/transaction-states"}

            >
              Transaction States
            </RimbleGatsbyLink>
          </Li>*/}
          {/*<Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-intro"}

            >
              1. Introduction
            </RimbleGatsbyLink>
          </Li>*/}
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-conditions"}

            >
              1. Can they connect?
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-before"}

            >
              2. Before they connect
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-metamask"}

            >
              3. Help with MetaMask
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-success"}

            >
              4. Confim success
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/ux/connect-a-wallet-low-funds"}

            >
              5. No ETH, no problem
            </RimbleGatsbyLink>
          </Li>
        </Ul>
        <Li>
          <RimbleGatsbyLink to={"guides/content"} >
            dApp Content
          </RimbleGatsbyLink>
        </Li>
      </Ul>
      {/*<Ul>

          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/crafting-tone"}

            >
              Crafting a tone of voice
            </RimbleGatsbyLink>
          </Li>
          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/blockchain-vocab"}

            >
              Blockchain vocab
            </RimbleGatsbyLink>
          </Li>

          <Li>
            <RimbleGatsbyLink
              to={"/guides/content/writing-for-products"}

            >
              Writing for products
            </RimbleGatsbyLink>
          </Li>

        </Ul>*/}
    </Ul>
  </StyledNav>
);

export default StaticSideNav;
