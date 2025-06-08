import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import en from "../../locales/en";
import logoutIcon from "../../assets/icons/logout-icon.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../stores/auth/authActions";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ name, status, imageSrc, online = true }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/signin");
    });
  };
  return (
    <div
      className="d-flex align-items-center justify-content-between py-1"
      style={{
        gap: "14px",
      }}
    >
      <div className="d-flex flex-column align-items-end text-end">
        <span
          style={{
            color: "var(--label-secondary-color)",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          {name}
        </span>
        <span
          style={{
            color: "var(--default-placeholder-color)",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          {status}
        </span>
      </div>

      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        direction="down"
        container="body"
      >
        <DropdownToggle
          tag="div"
          data-toggle="dropdown"
          aria-expanded={false}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "var(--primary-color-purple)",
            }}
          >
            <img
              src={imageSrc}
              alt="Avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>

          {online && (
            <span
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#28a745",
                border: "2px solid white",
              }}
            />
          )}
        </DropdownToggle>

        <DropdownMenu
          end
          style={{
            marginTop: 50,
            transform: "translateX(-75%)",
          }}
        >
          <DropdownItem onClick={handleLogout}>
            <div
              className="d-flex justify-content-end align-items-center"
              style={{
                gap: "11px",
                width: "100%",
                color: "var(--label-secondary-color)",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              <span>{en.dashboard.logout}</span>

              <img
                src={logoutIcon}
                alt="icon"
                style={{ width: "14px", height: "14px", display: "block" }}
              />
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
