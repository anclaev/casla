import styled from "styled-components"

const StyledLang = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;

  width: 30px;
  height: 30px;

  font-size: 18px;
  text-transform: lowercase;
  user-select: none;
  text-align: center;

  color: #fff;
  opacity: 0.5;
  transition: 0.3s;
  cursor: pointer;

  & > span[data-lang] {
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    opacity: 1;
  }

  & > span {
    position: absolute;
    transition: 0.4s;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  & > span:first-child {
    left: -40px;
  }

  & > span:last-child {
    left: 40px;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    content: "";
    width: 0;
    height: 0;
    opacity: 0;
    transition: 0.3s;
    border: 1px solid transparent;
    animation: rotate 1.5s infinite linear;
  }

  &:hover {
    opacity: 1;

    &:after {
      width: 40px;
      height: 40px;
      opacity: 1;
      border-color: var(--color-violet);
    }
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 1;
      width: 40px;
      height: 40px;
    }

    50% {
      transform: translate(-50%, -50%) rotate(135zdeg);
      opacity: 0.5;
      width: 35px;
      height: 35px;
    }

    100% {
      transform: translate(-50%, -50%) rotate(225deg);
      opacity: 1;
      width: 40px;
      height: 40px;
    }
  }
`

export default StyledLang
