import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import NavigationListItem from './NavigationListItem';

const Wrapper = styled.SectionList.attrs(() => ({
  stickySectionHeadersEnabled: false,
  contentContainerStyle: { paddingBottom: 70 },
}))``;

const SectionItem = styled.View`
  padding-left: 16;
  margin-top: 18;
  margin-bottom: 11;
`;

const SectionTitle = styled.Text`
  font-size: 13;
  color: #fff;
`;

const NavigationIcon = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: 24;
`;

const NavigationIoniconsIcon = styled(Ionicons).attrs(() => ({
  size: 24,
  color: '#fff',
}))`
  text-align: center;
  width: 24;
`;

class ListSection extends Component {
  shouldComponentUpdate(np) {
    const { title } = this.props;
    if (title !== np.title) {
      return true;
    }
    return false;
  }
  render() {
    const { title } = this.props;
    return (
      <SectionItem>
        <SectionTitle>{title.toUpperCase()}</SectionTitle>
      </SectionItem>
    );
  }
}

ListSection.propTypes = {
  title: PropTypes.string.isRequired,
};

const NavigationView = ({ currentScreen, navigateTo, verified }) => {
  const navigation = [
    {
      title: 'Listen',
      data: [
        {
          screenId: 'democracy.VoteList',
          title: 'Bundestag'.toUpperCase(),
          icon: <NavigationIcon source={require('../../../assets/icons/worldClock.png')} />,
        },
      ],
    },
    {
      title: 'Auswertungen',
      data: [
        {
          screenId: 'democracy.WahlOMeter',
          title: `Wahl-O-Meter`.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-timer-outline" />,
        },
      ],
    },
    {
      title: 'Einstellungen',
      data: [
        {
          screenId: 'democracy.Profil',
          title: 'Profil'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-contact-outline" />,
        },
        {
          screenId: 'democracy.Notifications',
          title: 'Benachrichtigungen'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-notifications-outline" />,
        },
      ],
    },
    {
      title: 'Mehr',
      data: [
        {
          screenId: 'democracy.Faq',
          title: 'FAQ '.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-chatbubbles-outline" />,
        },
        {
          screenId: 'democracy.Instructions',
          title: 'Tutorial'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-school-outline" />,
        },
        {
          screenId: 'democracy.Support',
          title: 'Support'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-help-circle-outline" />,
        },
        {
          screenId: 'democracy.Imprint',
          title: 'Impressum & Datenschutz'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-lock-outline" />,
        },
        {
          screenId: 'democracy.TermsOfUse',
          title: 'Nutzungsbedingungen'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-paper-outline" />,
        },
        {
          screenId: 'democracy.About',
          title: 'Über DEMOCRACY'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-star-outline" />,
        },
        {
          screenId: 'democracy.Donate',
          title: 'Unterstütze DEMOCRACY'.toUpperCase(),
          icon: <NavigationIoniconsIcon name="ios-heart-outline" />,
        },
      ],
    },
  ];
  if (verified === true) {
    navigation[1].data.splice(0, 0, {
      screenId: 'democracy.Statistic',
      title: 'Statistik'.toUpperCase(),
      icon: <NavigationIoniconsIcon name="ios-stats-outline" />,
    });
  }
  if (verified === false) {
    navigation[1].data.splice(0, 0, {
      screenId: 'democracy.SmsVerification',
      title: 'Verifizieren'.toUpperCase(),
      icon: <NavigationIoniconsIcon name="ios-key-outline" />,
    });
  }
  return (
    <Wrapper
      sections={navigation}
      renderSectionHeader={({ section }) => <ListSection {...section} />}
      renderItem={({ item }) => (
        <NavigationListItem {...item} currentScreen={currentScreen} navigateTo={navigateTo} />
      )}
      keyExtractor={({ title }) => title}
    />
  );
};

NavigationView.propTypes = {
  currentScreen: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  verified: PropTypes.bool,
};

NavigationView.defaultProps = {
  verified: false,
};

export default NavigationView;
