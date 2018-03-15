import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Dimensions, Platform, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #fff;
  padding-top: ${Platform.OS === "ios" ? 21 : 5};
  padding-horizontal: 18;
`;

const ContainerHead = styled.View`
  height: 85;
  justify-content: center;
`;

const ContainerText = styled.View`
  align-items: center;
`;

const TextHead = styled.Text`
  color: #000;
  font-size: 22;
  letter-spacing: -0.1;
  padding-top: 5;
  font-family: ${Platform.OS === "ios"
    ? "HelveticaNeue-Thin"
    : "sans-serif-light"};
  font-weight: bold;
`;

const TextSub = styled.Text`
  color: #9b9b9b;
  font-size: 15;
  letter-spacing: -0.4;
  padding-top: 1;
  font-family: ${Platform.OS === "ios"
    ? "HelveticaNeue-Thin"
    : "sans-serif-light"};
  font-weight: bold;
  text-align: center;
  height: 40;
`;

const ContainerImages = styled.View`
  flex: 1;
  width: 100%;
  max-width: 600;
  justify-content: center;
  align-items: center;
`;

const ContainerCenterImage = styled.View`
  position: absolute;
`;

const ImageTranspContainer = styled.View`
  position: absolute;
  background-color: #fff;
  border-radius: 40;
`;

const ImageLeft = styled.Image`
  opacity: 0.4;
  margin-top: 50;
`;

const ImageRight = styled.Image`
  opacity: 0.4;
  margin-top: 50;
`;

const ImageCenter = styled.Image``;

const ImageCircle = styled.Image`
  position: absolute;
  right: -20;
  top: 165;
`;

const Slide = ({
  ImgHead,
  ImgRight,
  ImgLeft,
  ImgCenter,
  ImgCircle,
  TxtHead,
  TxtSub
}) => (
  <Container>
    <ContainerHead>
      <Image source={ImgHead} />
    </ContainerHead>
    <ContainerText>
      <TextHead>{TxtHead}</TextHead>
      <TextSub>{TxtSub}</TextSub>
    </ContainerText>
    <ContainerImages>
      <ImageTranspContainer style={{ alignSelf: "flex-start" }}>
        <ImageLeft source={ImgLeft} />
      </ImageTranspContainer>
      <ImageTranspContainer style={{ alignSelf: "flex-end" }}>
        <ImageRight source={ImgRight} />
      </ImageTranspContainer>
      <ContainerCenterImage>
        <ImageCenter source={ImgCenter} />
        <ImageCircle source={ImgCircle} />
      </ContainerCenterImage>
    </ContainerImages>
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]}
      locations={[0, 0.5]}
      style={{
        height: 35,
        width: Dimensions.get("window").width,
        position: "absolute",
        bottom: 0
      }}
    />
  </Container>
);

Slide.propTypes = {
  ImgHead: PropTypes.number.isRequired,
  ImgLeft: PropTypes.number,
  ImgRight: PropTypes.number,
  ImgCenter: PropTypes.number.isRequired,
  ImgCircle: PropTypes.number,
  TxtHead: PropTypes.string.isRequired,
  TxtSub: PropTypes.string.isRequired
};

Slide.defaultProps = {
  ImgLeft: null,
  ImgRight: null,
  ImgCircle: require("../../../assets/tutorial/icon.touch.png")
};

export default Slide;
