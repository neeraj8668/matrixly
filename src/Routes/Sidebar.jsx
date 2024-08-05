import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as HomeSvg } from "../assets/grid.svg";
import { ReactComponent as ChatSvg } from "../assets/chat.svg";
import { ReactComponent as SingleFileSvg } from "../assets/file.svg";
import { ReactComponent as MultiFileSvg } from "../assets/files-alt.svg";
import { ReactComponent as ShareBotSvg } from "../assets/share-knowledge.svg";
import SmLogo from "../assets/Icon_logo.svg";
import BigLogo from "../assets/Full_logoInkscape.svg";
import Avatar from "../assets/Avatar.png";
import logout from "../assets/logout.png";
import Hamburger from "../assets/hamburger.png";
import { NavLink, useLocation } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import useUserAuth from "../hooks/useUserAuth";
import { Icon } from "@iconify/react";

function Sidebar() {
  const { user, signOut } = useUserAuth();

  const location = useLocation();
  const fullName = user?.fullName;
  const email = user?.emailAddresses && user?.emailAddresses[0].emailAddress;

  const onLogoutClick = () => {
    signOut();
  };

  const sidebarToggle =
    location.pathname.startsWith("/chat") ||
    location.pathname.startsWith("/multiple") ||
    location.pathname.startsWith("/single");

  const [sidebarShow, setSidebarShow] = useState(false);
  const [showUpgradePlane, setShowUpgradePlane] = useState(true);
  const handleSidebarClose = () => setSidebarShow(false);
  const handleSidebarShow = () => setSidebarShow(true);

  const sidebarLinks = [
    {
      icon: <HomeSvg />,
      title: "Home",
      to: "/dashboard",
    },
    {
      icon: <ChatSvg />,
      title: "AI Chat",
      to: "/chat",
    },
    {
      icon: <SingleFileSvg />,
      title: "Single Document",
      to: "/single",
    },
    {
      icon: <MultiFileSvg />,
      title: "Multi Document",
      to: "/multiple",
    },
    {
      icon: <ShareBotSvg />,
      title: "ShareBots",
      to: "/sharebot",
    },
  ];

  const checkFileDocIcon = (index) => {
    if (index === 2 || index === 3) {
      return true;
    }
  };

  return (
    <>
      <div className="d-none d-lg-block">
        <div className={`layout-sidebar ${sidebarToggle ? "sm-sidebar" : ""}`}>
          {sidebarToggle ? (
            <div className="sm-logo">
              <img src={SmLogo} />
            </div>
          ) : (
            <div className="big-logo">
              <img src={BigLogo} />
            </div>
          )}

          <ul className="links">
            {sidebarLinks.map((link, index) => {
              const { icon, title, to } = link;
              return (
                <li key={index}>
                  <NavLink
                    to={to}
                    className={`pointer ${
                      sidebarToggle ? "justify-content-center" : ""
                    }`}
                  >
                    <div
                      className={`icon ${
                        checkFileDocIcon(index) ? "file-icon" : ""
                      }`}
                    >
                      {icon}
                    </div>
                    {!sidebarToggle && <div className="text"> {title}</div>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="bottom_side_bar">
          {showUpgradePlane && (
            <div className="upgrade-box 12">
              <h3>Upgrade to Pro! </h3>
              <p>Unlock all the features on MatrixlyAI with Pro status</p>
              <div className="upgrade-box-inner">
                {/* <div className="upgrade-box-inner-left">
                  <button
                    onClick={() => {
                      setShowUpgradePlane(false);
                    }}
                  >
                    Dismiss
                  </button>
                </div> */}
                <div className="upgrade-box-inner-right">
                  <a className="btn btn-primary">Upgrade plan</a>
                </div>
              </div>
            </div>
          )}
          <div className="user-profile">
            <div className="user-subprofile">
              <div className="user-image">
                <UserButton afterSignOutUrl="/" />
              </div>
              {!sidebarToggle && (
                <>
                  <div className="d-flex flex-column">
                    {fullName && <div className="user-name">{fullName}</div>}
                    <div className="user-email">{email}</div>
                  </div>
                  <div className="ms-auto">
                    <a onClick={onLogoutClick} className="pointer logout-icon">
                      <img src={logout} alt="" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
          </div> 
        </div>
      </div>
      <div className="d-block d-lg-none">
        <div className="sm-side-nav">
          <div className="logo">
            <img src={BigLogo} alt="" />
          </div>
          <div
            className="toggle-sidebar-btn"
            onClick={() => handleSidebarShow()}
          >
            <img src={Hamburger} alt="" />
          </div>
        </div>
      </div>
      <Offcanvas
        show={sidebarShow}
        onHide={handleSidebarClose}
        className="mob-sidebar"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="logo">
              <img src={BigLogo} alt="" />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="position-relative">
          <div className="d-flex flex-column justify-content-between h-100 w-100">
            <ul className="links mt-2">
              {sidebarLinks.map((link, index) => {
                const { icon, title, to } = link;
                return (
                  <li key={index}>
                    <NavLink
                      to={to}
                      className={`pointer`}
                      onClick={handleSidebarClose}
                    >
                      <div
                        className={`icon ${
                          checkFileDocIcon(index) ? "file-icon" : ""
                        }`}
                      >
                        {icon}
                      </div>
                      <div className="text"> {title}</div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="user-profile position-static 13">
              <div className="user-image">
                <UserButton afterSignOutUrl="/" />
              </div>

              <div>
                <div className="d-flex flex-column">
                  <div className="user-name">{fullName}</div>
                  <div className="user-email">{email}</div>
                </div>
              </div>
              <div className="ms-auto">
                <a onClick={onLogoutClick} className="pointer logout-icon">
                  <img src={logout} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
