import styled from "styled-components";
import { grayColors } from "styles/colors/gray";

export const StyledHeadline = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: ${grayColors[900]};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
`;

export const StylesSubHeadline = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${grayColors[500]};
`;
